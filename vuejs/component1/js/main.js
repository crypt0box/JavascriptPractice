var component = {
  data: function() {
    return {
      number: 12,
    }
},
  template: '<p>いいね({{number}})<button @click="increment">+1</button></p>',
  methods: {
    increment: function() {
      this.number += 1;
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'my-component': component,
  }
});

new Vue({
  el: '#app2',
});
