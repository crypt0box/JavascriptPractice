<template>
  <div>
    <h3>登録</h3>
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email" />
    <br /><br />
    <label for="password">パスワード</label>
    <textarea id="password" v-model="password"></textarea>
    <br /><br />
    <button @click="register">送信</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {}
  }
};
</script>
