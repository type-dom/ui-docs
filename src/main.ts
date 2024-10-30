import './app/app.element';
import { changeCssVar } from '@type-dom/utils';
import { reactive } from '../../../libs/framework/src/computed/reactive';
import { computed } from '../../../libs/framework/src/computed/computed';

changeCssVar('button-color', '#fff');
const root = document.documentElement;
root.style.setProperty('--icon-bg-color', '#f0f0f0');


const state = reactive({ count: 0 });

const doubleCount = computed(() => state.count * 2);

console.log(doubleCount.value); // 0
state.count = 5;
console.log(doubleCount.value); // 10
