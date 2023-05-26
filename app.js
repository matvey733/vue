const app = Vue.createApp({
  data() {
    return {
      title: "the subtle art of not giving a fuck".toUpperCase(),
      author: "Mark Manson",
      rating: 10
    }
  }
});

app.mount("#app");