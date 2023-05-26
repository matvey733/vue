const app = Vue.createApp({
  data() {
    return {
      title: "the subtle art of not giving a fuck".toUpperCase(),
      author: "Mark Manson",
      rating: 10
    }
  },
  methods: {
    changeTitle() {
      const min = 10;
      const max = 20;
      this.title = Math.round(Math.random() * (max - min) + min);
    }
  }
});

app.mount("#app");