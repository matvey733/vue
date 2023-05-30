<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>main title</h1>
  <button @click.shift="toggleModal">Toggle modal (hold shift)</button>
  <br />
  <button @click="appendToModalContent">Append an exclamation mark to hhyhyuijurt5fgt</button>
  <Modal :content="modalContent" :isActive="isModalActive" @close="toggleModal">
  </Modal>
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
      isModalActive: false,
      modalContent: "Hello today is may 30th"
    }
  },
  methods: {
    toggleModal() {
      this.isModalActive = !this.isModalActive;
    },
    appendToModalContent() {
      this.modalContent += "!";
    }
  },
});
</script>


<style>

</style>
