import './app.element.scss';
import { AppRoot } from './app-root';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'ui-doc';
    const appRoot = new AppRoot();
    appRoot.setAttrName(title);
    // 使用路由
    // appRoot.useRouter();
    // const shadowRoot = this.attachShadow({ mode: 'open' }); // mode "closed" | "open"
    // 挂载
    // appRoot.mount(shadowRoot);
    appRoot.mount(this);
    // 渲染
    appRoot.render();
    console.log('appRoot is ', appRoot);
    console.log('appRoot.findNode(\'Layout\') is ', appRoot.findNode('Layout'));
    const buff: string[] = [];
    appRoot.dump(buff);
    // console.log('appRoot.dump() buff.join("") is ', buff.join(''));
  }
}
customElements.define('app-root', AppElement);
