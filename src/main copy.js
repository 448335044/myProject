// import _ from 'lodash';
import './asset/index.css'

// import Icon from './asset/test.png'

import printMe from './print.js';

let text = 'this is a project of the webpack'
console.log(text)

function component() {
    const element = document.createElement('div');

    //内容 lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = 'Hello world';
    
    // 样式
    element.classList.add('myBg');

    //图片 将图像添加到我们已经存在的 div 中。
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    // 按钮
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());