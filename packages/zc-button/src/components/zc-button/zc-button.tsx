import { Component, Prop, h, Element, } from '@stencil/core';

@Component({
  tag: 'zc-button',
  styleUrl: 'zc-button.css',
  shadow: true
})

export class ZCButton {
  @Element() buttonElement: HTMLElement;

  @Prop() buttonText: string;
  @Prop() buttonBackground: string;
  @Prop() buttonTextStyle: string;

  private style: HTMLElement;

  componentDidLoad() {
    this.style = this.buttonElement.shadowRoot.querySelector('.button');

    if (this.buttonBackground === '') {
      this.style.style.backgroundColor = 'white';
    } else {
      this.style.style.backgroundColor = this.buttonBackground;
    }

    if (this.buttonTextStyle === '') {
      this.style.style.color = '#5851ff';
    } else {
      this.style.style.color = this.buttonTextStyle;
    }
  }

  render() {
    return <button class='button'>{this.buttonText}</button>;
  }
}
