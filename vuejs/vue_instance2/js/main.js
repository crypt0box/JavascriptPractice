var data = {
  message: 'こんにちは',
  name: 'よしぴー',
}

var vm = new Vue({
  el: '#app',
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  }
});

new Vue({
  data: {
    name: 'よしぴー',
  },
  template: '<h1>こんにちは、{{ name }}</h1>'
}).$mount('#app2')

new Vue({
  data: {
    name: 'よしぴー',
  },
  render: function(createElement) {
    return createElement('h1', 'こんにちは、' + this.name);
  },
}).$mount('#app3')