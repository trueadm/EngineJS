import { isFunction, isNull, isNullOrUndef, isString, isStringOrNumber, throwError, unescape } from 'inferno-shared';
import { ChildFlags, VNodeFlags } from 'inferno-vnode-flags';
import { createVoidVNode, directClone } from '../core/implementation';
import { VNode } from '../core/types';
import { documentCreateElement, EMPTY_OBJ, findDOMfromVNode, insertOrAppend } from './utils/common';
import { mountProps } from './props';
import { createClassComponentInstance, handleComponentInput } from './utils/componentutil';
import { validateKeys } from '../core/validate';
import { mountRef } from '../core/refs';
import { createNode, getDecoratedMarkup } from '../wasaby/control'

export function mount(vNode: VNode, parentDOM: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: Function[], isRootStart?: boolean, environment?: any, parentControlNode?: any, parentVNode?: any): void {
  const flags = (vNode.flags |= VNodeFlags.InUse);

  if (flags & VNodeFlags.Element) {
    mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle, isRootStart, environment, parentControlNode, parentVNode);
  } else if (flags & VNodeFlags.ComponentClass) {
    mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
  } else if (flags & VNodeFlags.ComponentFunction) {
    mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
  } else if (flags & VNodeFlags.Void || flags & VNodeFlags.Text) {
    mountText(vNode, parentDOM, nextNode);
  } else if (flags & VNodeFlags.Fragment) {
    mountFragment(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
  } else if (flags & VNodeFlags.Portal) {
    mountPortal(vNode, context, parentDOM, nextNode, lifecycle);
    // @ts-ignore
  } else if (vNode instanceof RawMarkupNode) {
    return mountHTML(vNode, parentDOM);
  } else if (flags & VNodeFlags.WasabyControl || flags === 147456) {
    mountWasabyControl(vNode, parentDOM, isSVG, nextNode, lifecycle, isRootStart, environment, parentVNode);
  } else if (flags & VNodeFlags.TemplateWasabyNode) {
    mountWasabyTemplateNode(vNode, parentDOM, isSVG, nextNode, lifecycle, isRootStart, environment, parentControlNode);
  } else if (process.env.NODE_ENV !== 'production') {
    // Development validation, in production we don't need to throw because it crashes anyway
    if (typeof vNode === 'object') {
      throwError(
        `mount() received an object that's not a valid VNode, you should stringify it first, fix createVNode flags or call normalizeChildren. Object: "${JSON.stringify(
          vNode
        )}".`
      );
    } else {
      throwError(`mount() expects a valid VNode, instead it received an object with the type "${typeof vNode}".`);
    }
  }
}

export function mountHTML(vNode: VNode, parentDom: Element | null): any {
  // @ts-ignore
  const dom = (vNode.dom = $(vNode.markup)[0]);
  if (!isNull(parentDom)) {
    insertOrAppend(parentDom, dom, null);
  }
  return dom;

}

function mountPortal(vNode, context, parentDOM: Element | null, nextNode: Element | null, lifecycle: Function[]) {
  mount(vNode.children as VNode, vNode.ref, context, false, null, lifecycle);

  const placeHolderVNode = createVoidVNode();

  mountText(placeHolderVNode, parentDOM, nextNode);

  vNode.dom = placeHolderVNode.dom;
}

function mountFragment(vNode, parentDOM, context, isSVG, nextNode, lifecycle: Function[]): void {
  const children = vNode.children;

  if (vNode.childFlags === ChildFlags.HasVNodeChildren) {
    mount(children as VNode, parentDOM, nextNode, isSVG, nextNode, lifecycle);
  } else {
    mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle);
  }
}

export function mountText(vNode: VNode, parentDOM: Element | null, nextNode: Element | null): void {
  const dom = (vNode.dom = document.createTextNode(unescape(vNode.children as string)) as any);

  if (!isNull(parentDOM)) {
    insertOrAppend(parentDOM, dom, nextNode);
  }
}

export function mountTextContent(dom: Element, children: string): void {
  dom.textContent = children as string;
}

export function mountElement(vNode: VNode, parentDOM: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: Function[], isRootStart?: boolean, environment?: any, parentControlNode?: any, parentVNode?: any): void {
  const flags = vNode.flags;
  const props = vNode.props;
  const className = vNode.className;
  let ref = vNode.ref;
  let children = vNode.children;
  const childFlags = vNode.childFlags;
  isSVG = isSVG || (flags & VNodeFlags.SvgElement) > 0;
  let dom = isRootStart ? parentDOM : documentCreateElement(vNode.type, isSVG);

  vNode.dom = dom;

  if (!isNullOrUndef(className) && className !== '') {
    if (dom) {
      if (isSVG) {
        dom.setAttribute('class', className);
      } else {
        dom.className = className;
      }
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    validateKeys(vNode);
  }

  if (!isRootStart && !isNull(parentDOM)) {
    if (parentDOM !== nextNode) {
          insertOrAppend(parentDOM, dom, nextNode);
      } else {
          vNode.dom = nextNode;
          dom = nextNode;
      }
    insertOrAppend(parentDOM, dom, nextNode);
  }

  if (vNode.hprops && vNode.hprops.events && Object.keys(vNode.hprops.events).length > 0) {
    // @ts-ignore
    const setEventFunction = Hooks.setEventHooks(environment);
    const templateNodeEventRef = setEventFunction(vNode.type, vNode.hprops, vNode.children, vNode.key, parentControlNode, vNode.ref)
    vNode.ref = templateNodeEventRef[4];
    ref = vNode.ref;
  }

  if (childFlags === ChildFlags.HasTextChildren) {
    if (dom) {
      mountTextContent(dom, children as string);
    }
  } else if (childFlags !== ChildFlags.HasInvalidChildren) {
    const childrenIsSVG = isSVG && vNode.type !== 'foreignObject';

    if (childFlags === ChildFlags.HasVNodeChildren) {
      if ((children as VNode).flags & VNodeFlags.InUse) {
        vNode.children = children = directClone(children as VNode);
      }
      mount(children as VNode, dom, context, childrenIsSVG, null, lifecycle, parentControlNode, vNode);
    } else if (childFlags === ChildFlags.HasKeyedChildren || childFlags === ChildFlags.HasNonKeyedChildren) {
      if (dom) {
        mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle, environment, parentControlNode, vNode);
      }
    }
  }

  if (!isNull(props)) {
    if (vNode.type === 'link') {
      if (dom) {
        // @ts-ignore
        if (props.href !== (dom.attributes.href && dom.attributes.href.value)) {
          mountProps(vNode, flags, props, dom, isSVG);
        }
      }
    } else {
      mountProps(vNode, flags, props, dom, isSVG);
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (isString(ref)) {
      throwError('string "refs" are not supported in Inferno 1.0. Use callback ref or Inferno.createRef() API instead.');
    }
  }
  mountRef(ref, dom, lifecycle);
}

export function mountArrayChildren(children, dom: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: Function[], environment?: any, parentControlNode?: any, parentVNode?: any): void {
  for (let i = 0, len = children.length; i < len; ++i) {
    let child = children[i];

    if (child.flags & VNodeFlags.InUse) {
      children[i] = child = directClone(child);
    }
    mount(child, dom, context, isSVG, nextNode, lifecycle, environment, parentControlNode, parentVNode);
  }
}

export function mountClassComponent(vNode: VNode, parentDOM: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle: Function[]) {
  const instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);
  mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
  mountClassComponentCallbacks(vNode.ref, instance, lifecycle);
  instance.$UPD = false;
}

function afterMountProcess(controlNode) {
  try {
      const afterMountValue = controlNode.control._afterMount && controlNode.control._afterMount(controlNode.options, controlNode.context);
      controlNode.control._mounted = true;
      if (controlNode.control._$needForceUpdate) {
          delete controlNode.control._$needForceUpdate;
          controlNode.control._forceUpdate();
      }
  } catch (error) {
      // Logger.catchLifeCircleErrors('_afterMount', error, controlNode.control._moduleName);
  }
}

export function mountWasabyCallback(controlNode) {
  return function () {

      // _reactiveStart means starting of monitor change in properties
      controlNode.control._reactiveStart = true;
      if (!controlNode.control._mounted && !controlNode.control._unmounted) {
          if (controlNode.hasCompound) {
              // @ts-ignore
              runDelayed.default(function () {
                  afterMountProcess(controlNode);
              });
          } else {
              afterMountProcess(controlNode);
          }
      } else {
          /**
           * TODO: удалить после синхронизации с контролами
           */
          try {
              if (!controlNode.control._destroyed) {
                const afterUpdateResult = controlNode.control._afterUpdate && controlNode.control._afterUpdate(controlNode.oldOptions || controlNode.options, controlNode.oldContext);
              }
          } catch (error) {
              // Logger.catchLifeCircleErrors('_afterUpdate', error, controlNode.control._moduleName);
          } finally {
              // We need controlNode.oldOptions only in _afterUpdate method. Can delete them from node after using.
              delete controlNode.oldOptions;
          }
      }
  }
}


function findTopConfig(configId) {
  return (configId + '').replace('cfg-', '').split(',')[0];
}
function fillCtx(control, vnode, resolvedCtx) {
  control._saveContextObject(resolvedCtx);
  // @ts-ignore
  control.saveFullContext(ContextResolver.wrapContext(control, vnode.context || {}));
}

function getStateReadyOrCall(stateVar, control, vnode, serializer) {
  let data;
  // @ts-ignore
  const srec = Request.getCurrent().stateReceiver;
  if (srec && srec.register) {
      srec.register(stateVar, {
          getState() {
            return {};
          },
          setState(rState) {
              data = rState;
          }
      });
  }
  /* Compat layer. For page without Controls.Application */
  if (!data && window["inline" + stateVar]) {
      data = JSON.parse(window["inline" + stateVar], serializer.deserialize);
      if (window["inline" + stateVar]) {
          window["inline" + stateVar] = undefined;
      }
  }
  // @ts-ignore
  const ctx = ContextResolver.resolveContext(control.constructor, vnode.context || {}, control);
  let res;
  try {
      res = data ? control._beforeMountLimited(vnode.controlProperties, ctx, data) : control._beforeMountLimited(vnode.controlProperties, ctx);
  }
  catch (error) {
      // Logger.catchLifeCircleErrors('_beforeMount', error, control._moduleName);
  }
  if (res && res.then) {
      res.then(function (resultDef) {
          fillCtx(control, vnode, ctx);
          return resultDef;
      });
  }
  else {
      fillCtx(control, vnode, ctx);
  }
  if (!vnode.inheritOptions) {
      vnode.inheritOptions = {};
  }
  // @ts-ignore
  OptionsResolver.resolveInheritOptions(vnode.controlClass, vnode, vnode.controlProperties);
  control.saveInheritOptions(vnode.inheritOptions);
  if (srec && srec.unregister) {
      srec.unregister(stateVar);
  }
  return res;
}

// var Slr = new Serializer();

export function mountWasabyControl(vNode: any, parentDOM: Element | null, isSVG: boolean, nextNode: Element | null, lifecycle: Function[], isRootStart?: boolean, environment?: any, parentVNode?: any) {
  const controlNode = createNode(
    vNode.controlClass,
    {
      attributes: vNode.controlAttributes,
      events: vNode.controlEvents,
      internal: vNode.controlInternalProperties,
      user: vNode.controlProperties
    },
    vNode.key,
    vNode.environment,
    vNode.parentNode,
    vNode.serialized,
    vNode
  );
  let setHookFunction;
  let setEventFunction;
  let controlNodeEventRef;
  let controlNodeRef;
  let carrier;

  if (!controlNode.compound) {
    if (!controlNode.control._mounted && !controlNode.control._unmounted) {
      const control = controlNode.control;
      const rstate = controlNode.key ? findTopConfig(controlNode.key) : '';
      if (control._beforeMountLimited) {
        carrier = getStateReadyOrCall(rstate, control, vNode, {});
      }
      if (carrier) {
        controlNode.receivedState = carrier;
      }
      if (controlNode.control.saveOptions) {
        controlNode.control.saveOptions(controlNode.options, controlNode);
      }
      else {
      /**
        * Поддержка для совместимости версий контролов
       */
        controlNode.control._options = controlNode.options;
        controlNode.control._container = controlNode.element;
        controlNode.control._setInternalOptions(vNode.controlInternalProperties || {});
      }
    }
  }
  // @ts-ignore
  controlNode.markup = getDecoratedMarkup(controlNode, isRootStart);
  if (controlNode.markup && controlNode.markup.type && controlNode.markup.type === 'invisible-node') {
      // @ts-ignore
      setHookFunction = Hooks.setControlNodeHook(controlNode);
      controlNodeRef = setHookFunction(controlNode.markup.type, controlNode.markup.props, controlNode.markup.children, controlNode.key, controlNode, parentVNode.ref || controlNode.markup.ref);
      parentVNode.ref = controlNodeRef[4];
      // @ts-ignore
      setEventFunction = Hooks.setEventHooks(environment);
      controlNodeEventRef = setEventFunction(controlNode.markup.type, {
          attributes: vNode.controlAttributes,
          events: (controlNode.markup.hprops && controlNode.markup.hprops.events) || vNode.controlEvents
      }, controlNode.markup.children, controlNode.key, controlNode, parentVNode.ref)
      parentVNode.ref = controlNodeEventRef[4];
      controlNode.fullMarkup = controlNode.markup;
      vNode.instance = controlNode;
      vNode.instance.parentDOM = parentDOM;
      vNode.ref = parentVNode.ref;
      mountRef(parentVNode.ref, parentVNode.dom, lifecycle);
  } else {
      // @ts-ignore
      setHookFunction = Hooks.setControlNodeHook(controlNode);
      controlNodeRef = setHookFunction(controlNode.markup.type, controlNode.markup.props, controlNode.markup.children, controlNode.key, controlNode, vNode.ref || controlNode.markup.ref);
      controlNode.markup.ref = controlNodeRef[4];
      // @ts-ignore
      setEventFunction = Hooks.setEventHooks(environment);
      controlNodeEventRef = setEventFunction(controlNode.markup.type, {
          attributes: vNode.controlAttributes,
          events: (controlNode.markup.hprops && controlNode.markup.hprops.events) || vNode.controlEvents
      }, controlNode.markup.children, controlNode.key, controlNode, controlNode.markup.ref)
      vNode.instance = controlNode;
      vNode.instance.markup.fullMarkup = controlNode.markup;
      vNode.instance.markup = controlNode.markup;
      vNode.instance.parentDOM = parentDOM;
      vNode.instance.markup.ref = controlNodeEventRef[4];
  }
  lifecycle.push(mountWasabyCallback(vNode.instance));
  if (vNode.instance.control && vNode.instance.control._forceUpdate) {
      vNode.instance.control._forceUpdate = function () {
          // @ts-ignore
          queueWasabyControlChanges(vNode.instance);
      }
  }
  if (vNode.compound || (vNode.instance.markup && vNode.instance.markup.type !== 'invisible-node')) {
    mount(vNode.instance.markup, parentDOM, {}, isSVG, nextNode, lifecycle, isRootStart, environment, vNode.instance);
  }
}

export function getMarkupForTemplatedNode(vNode) {
  return vNode.parentControl
  ? vNode.template.call(vNode.parentControl, vNode.controlProperties, vNode.attributes, vNode.context, true)
  : vNode.template(vNode.controlProperties, vNode.attributes, vNode.context, true);
}


function mountWasabyTemplateNode(vNode, parentDOM, isSVG, nextNode, lifecycle, isRootStart, environment, parentControlNode) {
  vNode.markup = getMarkupForTemplatedNode(vNode);
  vNode.markup.forEach(function (node) {
      if (node.hprops) {
          // @ts-ignore
          const setEventFunction = Hooks.setEventHooks(environment);
          const templateNodeEventRef = setEventFunction(node.type, node.hprops, node.children, node.key, parentControlNode, node.ref)
          node.ref = templateNodeEventRef[4];
           }
  });
  mountArrayChildren(vNode.markup, parentDOM, {}, isSVG, nextNode, lifecycle, environment, parentControlNode);
}

export function mountFunctionalComponent(vNode: VNode, parentDOM: Element | null, context: Object, isSVG: boolean, nextNode: Element | null, lifecycle): void {
  const type = vNode.type;
  const props = vNode.props || EMPTY_OBJ;
  const ref = vNode.ref;

  const input = handleComponentInput(vNode.flags & VNodeFlags.ForwardRef ? type(props, ref, context) : type(props, context));
  vNode.children = input;
  mount(input, parentDOM, context, isSVG, nextNode, lifecycle);
  mountFunctionalComponentCallbacks(props, ref, vNode, lifecycle);
}

function createClassMountCallback(instance) {
  return () => {
    instance.$UPD = true;
    instance.componentDidMount();
    instance.$UPD = false;
  };
}

export function mountClassComponentCallbacks(ref, instance, lifecycle: Function[]) {
  mountRef(ref, instance, lifecycle);

  if (process.env.NODE_ENV !== 'production') {
    if (isStringOrNumber(ref)) {
      throwError('string "refs" are not supported in Inferno 1.0. Use callback ref or Inferno.createRef() API instead.');
    } else if (!isNullOrUndef(ref) && typeof ref === 'object' && ref.current === void 0) {
      throwError('functional component lifecycle events are not supported on ES2015 class components.');
    }
  }

  if (isFunction(instance.componentDidMount)) {
    lifecycle.push(createClassMountCallback(instance));
  }
}

function createOnMountCallback(ref, vNode, props) {
  return () => {
    ref.onComponentDidMount(findDOMfromVNode(vNode, true), props);
  };
}

export function mountFunctionalComponentCallbacks(props, ref, vNode: VNode, lifecycle: Function[]) {
  if (!isNullOrUndef(ref)) {
    if (isFunction(ref.onComponentWillMount)) {
      ref.onComponentWillMount(props);
    }
    if (isFunction(ref.onComponentDidMount)) {
      lifecycle.push(createOnMountCallback(ref, vNode, props));
    }
  }
}
