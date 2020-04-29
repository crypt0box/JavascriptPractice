<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" test-props="test"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model="eventData.title">
      <p>{{ eventData.title }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";
import About from "./components/About";
import Home from "./components/Home";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      eventData: {
        title: "タイトル"
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
  }
};
</script>
