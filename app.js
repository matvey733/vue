import books from "./books.js";


const app = Vue.createApp({
  data() {
    return {
      url: "https://www.thenetninja.co.uk",
      showBooks: true,
      books
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  }
});

app.mount("#app");