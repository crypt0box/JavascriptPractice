<template>
  <nav>
    <h2>HeaderHome</h2>
    <router-link to="/" active-class="link--active" exact class="link">Home</router-link>
    <router-link to="/users" active-class="link--active" exact class="link">Users</router-link>
    <button @click="increment(2)">+1</button>
    <button @click="decrement(2)">-1</button>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
    // increment() {
    //   this.$store.commit('increment', 2);
    // },
    // decrement() {
    //   this.$store.commit('decrement', 2);
    // },
    // increment() {
    //   this.$store.state.count++;
    // },
    // decrement() {
    //   this.$store.state.count--;
    // },
  }
}
</script>
