const app = Vue.createApp({
  data() {
    return {
      title: "the subtle art of not giving a fuck".toUpperCase(),
      author: "Mark Manson",
      rating: 10,
      showBooks: true,
      x: 0,
      y: 0
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, val) {
      console.log(e);
      if (val) console.log(val);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});

app.mount("#app");