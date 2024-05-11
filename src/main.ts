import './app/app.element';
import { changeCssVar } from '@type-dom/utils';

changeCssVar('button-color', '#fff');
const root = document.documentElement;
root.style.setProperty('--icon-bg-color', '#f0f0f0');
