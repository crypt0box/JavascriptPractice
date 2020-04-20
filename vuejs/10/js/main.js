(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      message: 'HelloWorld!',
      number: 3,
      ok: true,
    },
    methods: {
      sayHi: function() {
        return this.message;
      }
    }
  });
})();