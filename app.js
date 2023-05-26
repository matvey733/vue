const app = Vue.createApp({
  data() {
    return {
      title: "the subtle art of not giving a fuck".toUpperCase(),
      author: "Mark Manson",
      rating: 10,
      showBooks: true
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
});

app.mount("#app");