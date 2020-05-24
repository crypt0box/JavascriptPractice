(function() {
  'use strict';

  // Component

  var likeComponent = Vue.extend({
    // props: ['message'],
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data() {
      return {
        count: 0
      }
    },
    template: '<p @click="countUp">{{ message }} {{ count }}</p>',
    methods: {
      countUp() {
        this.count++;
        this.$emit('increment');
      }
    }
  })

  var vm = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal() {
        this.total++;
      }
    }
  });
})();
