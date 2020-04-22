(function() {
  'use strict';

  
  var vm = new Vue({
    el: '#app',
    data: {
      number: 0,
      x: 0,
      y: 0,
    },
    methods: {
      countUp: function() {
        this.number += 1
      },
      changeMousePosition: function(event, divideNumber) {
        this.x = event.clientX / divideNumber;
        this.y = event.clientY / divideNumber;
      },
      myAlert() {
        alert("アラート！")
      }
    }
  });
})();