(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      message: 'HelloWorld!',
      html: "<h1>h1です</h1>",
      url: "https://google.com",
      attribute: "href",
      twitterObject: {
        href: 'https://twitter.com',
        id: 31
      }
    },
    methods: {
      sayHi() {
        this.message = 'Hello VueJS'
        return 'Hi'
      }
    }
  });
})();