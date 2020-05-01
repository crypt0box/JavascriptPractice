<template>
  <div>
    <p v-border:solid.round="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welcom to Tokyo",
      subTitle: "Tokyo is a great city"
    };
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
      el.style.borderRadius = "0.5rem"
      }
    }
  }
}
</script>
