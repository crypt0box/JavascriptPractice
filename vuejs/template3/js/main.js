(function() {
  'use strict';

  
  var vm = new Vue({
    el: '#app',
    data: {
      number: 0,
      counter: 0,
      event: 'click',
    },
    methods: {
      countUp: function() {
        this.number += 1
      },
    },
    computed: {
      lessThanThree: function() {
        return this.counter > 3 ? '3より上' : '3以下'
      },
    },
  });
})();