export default {
    inserted: function(el, binding, vnode) {
        console.log('el', el);
        el.innerHTML = `￥ ${el.innerHTML}.00 元`
    }
}
  

