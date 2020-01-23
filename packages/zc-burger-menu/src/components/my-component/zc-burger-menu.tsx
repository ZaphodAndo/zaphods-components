import { Component, h } from '@stencil/core';

@Component({
  tag: 'zc-burger-menu',
  styleUrl: 'zc-burger-menu.css',
  shadow: true
})

export class ZCBurgerMenu {
  render() {
    return (
      <div class='burger-menu' role='button' aria-label='menu'>
        <hr/>
        <hr/>
        <hr/>
      </div>
    );
  }
}
