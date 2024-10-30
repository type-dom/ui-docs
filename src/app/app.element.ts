import './app.element.scss';
import { AppRoot } from './app-root';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'ui-doc';
    const appRoot = new AppRoot({
      // to: this, // 挂载到当前元素, 渲染后才会挂载的。
      name: title,
    });
    // 使用路由
    // appRoot.useRouter();
    // const shadowRoot = this.attachShadow({ mode: 'open' }); // mode "closed" | "open"
    // 挂载
    // appRoot.mount(shadowRoot);
    appRoot.mount(this); // 会直接自主触发渲染的
    console.log('appRoot is ', appRoot);
    // const buff: string[] = [];
    // appRoot.dump(buff);
    // console.log('appRoot.dump() buff.join("") is ', buff.join(''));
  }
}

customElements.define('app-root', AppElement);
