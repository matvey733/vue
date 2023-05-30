<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>main title</h1>
  <button @click="toggleModal">Toggle modal</button>
  <Modal :content="'this is the content'" :isActive="isModalActive" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from "./components/Modal.vue";

export default defineComponent({
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      isModalActive: false
    }
  },
  methods: {
    toggleModal() {
      this.isModalActive = !this.isModalActive;
    }
  },
});
</script>

<style>

</style>
