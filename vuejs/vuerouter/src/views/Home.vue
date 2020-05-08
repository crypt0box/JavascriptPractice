<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["doubleCount", "tripleCount"]),
  // computed: {
  //   doubleCount() {
  //     // return this.$store.state.count;
  //     return this.$store.getters.doubleCount;
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount;
  //   },
  // },
  methods: {
    toUsers() {
      this.$router.push('users/1');
    }
  }
};
</script>
