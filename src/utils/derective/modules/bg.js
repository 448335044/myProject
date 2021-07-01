export default {
    bind: function(el, binding, vnode) {
        el.style.backgroundColor = "#" + Math.random().toString(16).slice(2,8);
    }
}
  

