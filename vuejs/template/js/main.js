(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      message: 'HelloWorld!',
    },
    methods: {
      sayHi() {
        this.message = 'Hello VueJS'
        return 'Hi'
      }
    }
  });
})();