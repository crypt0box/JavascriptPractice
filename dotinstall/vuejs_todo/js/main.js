(function() {
  'use strict';

  //two way data binding (to UI)

  var vm = new Vue({
    el: '#app',
    data: {
      name: 'taguchi',
      newItem: '',
      todos: []
    },
    watch: {
      // todos() {
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   alert('Data saved!');
      // }
      todos: {
        handler() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          // alert('Data saved!');
        },
        deep: true
      }
    },
    mounted() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem() {
        var item = {
          title: this.newItem,
          isDone: false
        }
        this.todos.push(item)
        this.newItem = ''
      },
      deleteItem(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1)
        }
      },
      purge() {
        if (!confirm('delete finished?')) {
          return;
        }
        // this.todos = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // })
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining() {
        // var items = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        // return items.length;
        return this.todos.filter(function (todo) {
          return !todo.isDone
        })
      }
    }
  });
})();
