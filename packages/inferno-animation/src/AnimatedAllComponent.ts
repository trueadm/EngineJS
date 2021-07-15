import { Component, InfernoNode } from 'inferno';
import { componentDidAppear, componentWillDisappear, componentWillMove, AnimationClass } from './animations';

type AnimationProp = {
  animation?: string | AnimationClass;
  children?: InfernoNode;
};

export class AnimatedAllComponent<P = {}, S = {}> extends Component<AnimationProp & P, S> {
  public componentDidAppear(dom: HTMLElement) {
    componentDidAppear(dom, this.props);
  }

  public componentWillDisappear(dom: HTMLElement, callback: Function) {
    componentWillDisappear(dom, this.props, callback);
  }

  public componentWillMove(parentVNode, parent: HTMLElement, dom: HTMLElement, next: HTMLElement, props: any) {
    componentWillMove(parentVNode, parent, dom, next, props);
  }
}
