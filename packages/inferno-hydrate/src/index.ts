import {
  isFunction,
  isInvalid,
  isNull,
  isNullOrUndef,
  throwError,
  warning,
} from 'inferno-shared';
import { ChildFlags, VNodeFlags } from 'inferno-vnode-flags';
import {
  _CI,
  _HI,
  _M,
  _MCCC,
  _ME,
  _MFCC,
  _MP,
  _MR,
  _RFC as renderFunctionalComponent,
  AnimationQueues,
  type ContextObject,
  EMPTY_OBJ,
  render,
  type VNode,
} from 'inferno';

function isSameInnerHTML(dom: Element, innerHTML: string): boolean {
  const tempdom = document.createElement('i');

  tempdom.innerHTML = innerHTML;
  return tempdom.innerHTML === dom.innerHTML;
}

function findLastDOMFromVNode(vNode: VNode): Element | null {
  let flags;
  let children;

  while (vNode) {
    flags = vNode.flags;

    if (flags & VNodeFlags.DOMRef) {
      return vNode.dom;
    }

    children = vNode.children;

    if (flags & VNodeFlags.Fragment) {
      vNode =
        vNode.childFlags === ChildFlags.HasVNodeChildren
          ? (children as VNode)
          : (children as VNode[])[children.length - 1];
    } else if (flags & VNodeFlags.ComponentClass) {
      vNode = children.$LI;
    } else {
      vNode = children;
    }
  }

  return null;
}

function isSamePropsInnerHTML(dom: Element, props): boolean {
  return Boolean(
    props?.dangerouslySetInnerHTML?.__html &&
      isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html),
  );
}

function hydrateComponent(
  vNode: VNode,
  parentDOM: Element,
  dom: Element,
  context,
  isSVG: boolean,
  isClass: boolean,
  lifecycle: Array<() => void>,
  animations: AnimationQueues,
): Element | null {
  const type = vNode.type;
  const ref = vNode.ref;
  const props = vNode.props || EMPTY_OBJ;
  let currentNode: Element | null;

  if (isClass) {
    const instance = _CI(vNode, type, props, context, isSVG, lifecycle);
    const input = instance.$LI;

    currentNode = hydrateVNode(
      input,
      parentDOM,
      dom,
      instance.$CX,
      isSVG,
      lifecycle,
      animations,
    );
    _MCCC(ref, instance, lifecycle, animations);
  } else {
    const input = _HI(renderFunctionalComponent(vNode, context));
    currentNode = hydrateVNode(
      input,
      parentDOM,
      dom,
      context,
      isSVG,
      lifecycle,
      animations,
    );
    vNode.children = input;
    _MFCC(vNode, lifecycle, animations);
  }

  return currentNode;
}

function hydrateChildren(
  parentVNode: VNode,
  parentNode,
  currentNode,
  context,
  isSVG,
  lifecycle: Array<() => void>,
  animations: AnimationQueues,
): void {
  const childFlags = parentVNode.childFlags;
  const children = parentVNode.children;
  const props = parentVNode.props;
  const flags = parentVNode.flags;

  if (childFlags !== ChildFlags.HasInvalidChildren) {
    if (childFlags === ChildFlags.HasVNodeChildren) {
      if (isNull(currentNode)) {
        _M(
          children as VNode,
          parentNode,
          context,
          isSVG,
          null,
          lifecycle,
          animations,
        );
      } else {
        currentNode = hydrateVNode(
          children as VNode,
          parentNode,
          currentNode as Element,
          context,
          isSVG,
          lifecycle,
          animations,
        );
        currentNode = currentNode ? currentNode.nextSibling : null;
      }
    } else if (childFlags === ChildFlags.HasTextChildren) {
      if (isNull(currentNode)) {
        parentNode.appendChild(document.createTextNode(children as string));
      } else if (
        parentNode.childNodes.length !== 1 ||
        currentNode.nodeType !== 3
      ) {
        parentNode.textContent = children as string;
      } else {
        if (currentNode.nodeValue !== children) {
          currentNode.nodeValue = children as string;
        }
      }
      currentNode = null;
    } else if (childFlags & ChildFlags.MultipleChildren) {
      let prevVNodeIsTextNode = false;

      for (let i = 0, len = (children as VNode[]).length; i < len; ++i) {
        const child = (children as VNode[])[i];

        if (
          isNull(currentNode) ||
          (prevVNodeIsTextNode && (child.flags & VNodeFlags.Text) > 0)
        ) {
          _M(
            child,
            parentNode,
            context,
            isSVG,
            currentNode,
            lifecycle,
            animations,
          );
        } else {
          currentNode = hydrateVNode(
            child,
            parentNode,
            currentNode as Element,
            context,
            isSVG,
            lifecycle,
            animations,
          );
          currentNode = currentNode ? currentNode.nextSibling : null;
        }

        prevVNodeIsTextNode = (child.flags & VNodeFlags.Text) > 0;
      }
    }

    // clear any other DOM nodes, there should be only a single entry for the root
    if ((flags & VNodeFlags.Fragment) === 0) {
      let nextSibling: Node | null = null;

      while (currentNode) {
        nextSibling = currentNode.nextSibling;
        parentNode.removeChild(currentNode);
        currentNode = nextSibling;
      }
    }
  } else if (
    !isNull(parentNode.firstChild) &&
    !isSamePropsInnerHTML(parentNode, props)
  ) {
    parentNode.textContent = ''; // dom has content, but VNode has no children remove everything from DOM
    if (flags & VNodeFlags.FormElement) {
      // If element is form element, we need to clear defaultValue also
      parentNode.defaultValue = '';
    }
  }
}

function hydrateElement(
  vNode: VNode,
  parentDOM: Element,
  dom: Element,
  context: ContextObject,
  isSVG: boolean,
  lifecycle: Array<() => void>,
  animations: AnimationQueues,
): Element | null {
  const props = vNode.props;
  const className = vNode.className;
  const flags = vNode.flags;
  const ref = vNode.ref;

  isSVG = isSVG || (flags & VNodeFlags.SvgElement) > 0;
  if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
    if (process.env.NODE_ENV !== 'production') {
      warning(
        "Inferno hydration: Server-side markup doesn't match client-side markup",
      );
    }
    _ME(vNode, null, context, isSVG, null, lifecycle, animations);
    parentDOM.replaceChild(vNode.dom as Element, dom);
  } else {
    vNode.dom = dom;

    hydrateChildren(
      vNode,
      dom,
      dom.firstChild,
      context,
      isSVG,
      lifecycle,
      animations,
    );

    if (!isNull(props)) {
      _MP(vNode, flags, props, dom, isSVG, animations);
    }
    if (isNullOrUndef(className)) {
      if (dom.className !== '') {
        dom.removeAttribute('class');
      }
    } else if (isSVG) {
      dom.setAttribute('class', className);
    } else {
      dom.className = className;
    }
    _MR(ref, dom, lifecycle);
  }

  return vNode.dom;
}

function hydrateText(
  vNode: VNode,
  parentDOM: Element,
  dom: Element,
): Element | null {
  if (dom.nodeType !== 3) {
    parentDOM.replaceChild(
      (vNode.dom = document.createTextNode(vNode.children as string) as any),
      dom,
    );
  } else {
    const text = vNode.children;

    if (dom.nodeValue !== text) {
      dom.nodeValue = text as string;
    }
    vNode.dom = dom;
  }

  return vNode.dom;
}

function hydrateFragment(
  vNode: VNode,
  parentDOM: Element,
  dom: Element,
  context,
  isSVG: boolean,
  lifecycle: Array<() => void>,
  animations: AnimationQueues,
): Element {
  const children = vNode.children;

  if (vNode.childFlags === ChildFlags.HasVNodeChildren) {
    hydrateText(children as VNode, parentDOM, dom);

    return (children as VNode).dom as Element;
  }

  hydrateChildren(vNode, parentDOM, dom, context, isSVG, lifecycle, animations);

  return findLastDOMFromVNode(
    (children as VNode[])[(children as VNode[]).length - 1],
  ) as Element;
}

function hydrateVNode(
  vNode: VNode,
  parentDOM: Element,
  currentDom: Element,
  context: ContextObject,
  isSVG: boolean,
  lifecycle: Array<() => void>,
  animations: AnimationQueues,
): Element | null {
  const flags = (vNode.flags |= VNodeFlags.InUse);

  if (flags & VNodeFlags.Component) {
    return hydrateComponent(
      vNode,
      parentDOM,
      currentDom,
      context,
      isSVG,
      (flags & VNodeFlags.ComponentClass) > 0,
      lifecycle,
      animations,
    );
  }
  if (flags & VNodeFlags.Element) {
    return hydrateElement(
      vNode,
      parentDOM,
      currentDom,
      context,
      isSVG,
      lifecycle,
      animations,
    );
  }
  if (flags & VNodeFlags.Text) {
    return hydrateText(vNode, parentDOM, currentDom);
  }
  if (flags & VNodeFlags.Fragment) {
    return hydrateFragment(
      vNode,
      parentDOM,
      currentDom,
      context,
      isSVG,
      lifecycle,
      animations,
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    throwError(
      `hydrate() expects a valid VNode, instead it received an object with the type "${typeof vNode}".`,
    );
  }
  throwError();

  return null;
}

export function hydrate(
  input,
  parentDOM: Element,
  callback?: () => void,
): void {
  let dom: Element | null = parentDOM.firstChild as Element;

  if (isNull(dom)) {
    if (process.env.NODE_ENV !== 'production') {
      warning(
        "Inferno hydration: Server-side markup doesn't match client-side markup",
      );
    }
    render(input, parentDOM, callback);
  } else {
    const lifecycle: Array<() => void> = [];
    const animations: AnimationQueues = new AnimationQueues();

    if (!isInvalid(input)) {
      dom = hydrateVNode(
        input,
        parentDOM,
        dom,
        {},
        false,
        lifecycle,
        animations,
      ) as Element;
    }
    // clear any other DOM nodes, there should be only a single entry for the root

    while (dom && (dom = dom.nextSibling as Element | null)) {
      parentDOM.removeChild(dom);
    }

    if (lifecycle.length > 0) {
      let listener;
      while ((listener = lifecycle.shift()) !== undefined) {
        listener();
      }
    }
  }

  (parentDOM as any).$V = input;

  if (isFunction(callback)) {
    callback();
  }
}
