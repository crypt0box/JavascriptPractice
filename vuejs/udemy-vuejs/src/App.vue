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
      <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle>
      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
    <div class="main">
      <button @click="myAnimation = 'slide'">Slide</button>
      <button @click="myAnimation = 'fade'">Fade</button>
      <p>{{ myAnimation }}</p>
      <button @click="show = !show">切り替え</button>
      <br><br>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
      >
        <div
          class="circle"
          v-if="show"
        ></div>
      </transition>
      <br>
      <button @click="myComponent = 'ComponentA'">ComponentA</button>
      <button @click="myComponent = 'ComponentB'">ComponentB</button>
      <transition name="fade" mode="out-in">
        <component :is="myComponent"></component>
      </transition>
      <transition
        enter-active-class="animated bounce"
        leave-active-class="animated shake"
      >
        <p v-if="show">hello</p>
      </transition>
      <transition
        :name="myAnimation"
      >
        <p v-if="show">bye</p>
      </transition>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";
import About from "./components/About";
import Home from "./components/Home";
import EventTitle from "./components/EventTitle";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"],
      show: true,
      myAnimation: "slide",
      myComponent: "ComponentA",
      eventData: {
        title: "タイトル",
        location: "東京",
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle,
    ComponentA,
    ComponentB,
  },
  methods: {
    beforeEnter(el) {
      // 現れる前
    },
    enter(el, done) {
      // 現れるとき
    },
    afterEnter(el) {
      // 現れた後
    },
    enterCancelled(el) {
      // 現れるアニメーションがキャンセルされたとき
    },
    beforeLeave(el) {
      // 消える前
    },
    leave(el, done) {
      // 消えるとき
    },
    afterleave(el) {
      // 消えた後
    },
    leaveCancelled(el) {
      // 消えるアニメーションがキャンセルされたとき
    },
  }
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}

.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity .5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: opacity .5s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
