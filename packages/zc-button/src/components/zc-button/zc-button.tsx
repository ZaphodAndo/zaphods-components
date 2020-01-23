import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'zc-button',
  styleUrl: 'zc-button.css',
  shadow: true
})

export class ZCButton {
  render() {
    return <button>Hello, World! I'm</button>;
  }
}
