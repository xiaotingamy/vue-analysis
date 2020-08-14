// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

// 渲染组件的例子
// import HelloWorld from './components/HelloWorld'
// let app = new Vue({
//   el: '#app',
//   render: (createElement) => createElement(HelloWorld)
// })


// 有子组件，并且子组件是函数式组件时，children规范化会执行simpleNormalizeChildren
// import App from './App'
// /* eslint-disable no-new */
// let app = new Vue({
//   el: '#app',
//   components: { App },
//   template: '<app></app>'
// })

//  手写render函数示例， children规范化会执行normalizeChildren
/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello vue!'
    }
  },
  // render(createELement) {
  //   return createELement('div', {
  //     attrs: {
  //       id: 'app2'
  //     }
  //   }, [
  //     '先写一些文字',
  //     createElement('h1', '一则头条'),
  //     this.message
  //   ])
  // }
})