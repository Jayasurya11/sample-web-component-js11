import type React from "react";
import { createRoot, type Root } from "react-dom/client";

export function registerReactComponentAsWebComponent(
  tagName: string,
  Component: React.ComponentType<any>,
  propsMap?: Record<string, string>
) {
  class WebComponent extends HTMLElement {
    private mountPoint: HTMLElement | null = null;
    private root: Root | null = null;
    static get observedAttributes() {
      return propsMap ? Object.keys(propsMap) : [];
    }
    connectedCallback() {
      if (!this.mountPoint) {
        this.mountPoint = document.createElement("div");
        this.appendChild(this.mountPoint);
      }
      this.renderReact();
    }
    attributeChangedCallback() {
      this.renderReact();
    }
    getProps() {
      const props: Record<string, any> = {};
      for (const attr of this.getAttributeNames()) {
        const value = this.getAttribute(attr);
        const propsName = propsMap?.[attr] || attr;
        try {
          props[propsName] = JSON.parse(value as string);
        } catch {
          props[propsName] = value;
        }
      }
      return props;
    }
    renderReact() {
      if (!this.mountPoint) return;
      this.root = this.root || createRoot(this.mountPoint);
      this.root.render(<Component {...this.getProps()}></Component>);
    }
    disconnectedCallback() {
      this.root?.unmount();
      if (this.mountPoint && this.contains(this.mountPoint)) {
        this.removeChild(this.mountPoint);
      }
    }
  }
  if (!customElements.get(tagName)) {
    customElements.define(tagName, WebComponent);
  }
}
