import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './Demos/Switch/demo.vue';
import ButtonDemo from './Demos/Button/demo.vue';
import DialogDemo from './Demos/Dialog/demo.vue';
import TabsDemo from './Demos/Tab/demo.vue';
import MenuDemo from './Demos/Menu/demo.vue';
import Markdown from '../site/components/Markdown.vue';
import {h} from 'vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/getStarted.md';
import install from './markdown/install.md';
// 内存型路由、hash 路由、history 路由
const history = createWebHashHistory();

// 动态该为静态
const md = (string) => h(Markdown, {content: string, key: string})

export const router = createRouter({
  history,
  routes: [
    {path: '/', redirect: "/home"},
    {path: '/home', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'getStarted', component: md(getStarted)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'menu', component: MenuDemo}
      ]}
  ]
});

