(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      message: 'HelloWorld!',
      html: "<h1>h1です</h1>"
    },
    methods: {
      sayHi() {
        this.message = 'Hello VueJS'
        return 'Hi'
      }
    }
  });
})();