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
      <br>
      <button @click="add">追加</button>
      <ul style="width: 200px; margin: auto;">
        <transition-group name="fade">
        <li
          style="cursor: pointer;"
          v-for="(number, index) in numbers"
          :key="number"
          @click="remove(index)"
          >{{ number }}</li>
        </transition-group>
      </ul>
      <button @click="show = !show">切り替え</button>
      <br><br>
      <transition
        :css="false"
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
      numbers: [0, 1, 2],
      nextNumber: 3,
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
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    },
    add () {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index,1);
    },
    beforeEnter(el) {
      // 現れる前
      el.style.transform = 'scale(0)'
    },
    enter(el, done) {
      // 現れるとき
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if ( scale > 1 ) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      // 現れた後
    },
    enterCancelled() {
      // 現れるアニメーションがキャンセルされたとき
    },
    beforeLeave() {
      // 消える前
    },
    leave(el, done) {
      // 消えるとき
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if ( scale < 0 ) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterleave() {
      // 消えた後
    },
    leaveCancelled() {
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

.fade-move {
  transition: transform 1s;
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
