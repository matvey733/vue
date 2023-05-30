<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>main title</h1>
  <button @click.shift="toggleModal1">Toggle modal (hold shift)</button>
  <br />
  <button @click.alt="toggleModal2">Open modal 2 (hold <kbd>alt</kbd> on windows or <kbd>option</kbd> on mac)</button>
  <br />
  <button @click="appendToModalContent">Append an exclamation mark to hhyhyuijurt5fgt</button>

  <Modal :isActive="isModal1Active" @close="toggleModal1">
    <template v-slot:buttons>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <button>Go to this website and uhh</button>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <button>free debate (no fees)</button>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <button>free debate (no fees)</button>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <button>Go to this website and uhh</button>
      </a>
    </template>
    <p>this is the model content</p>
    <p>passed as the default slot i guess</p>
  </Modal>

  <Modal :isActive="isModal2Active" @close="toggleModal2">
    <template v-slot:buttons>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <button>please do not Go to this website and uhh</button>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <button>free debate (no fees)</button>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <button>free debate (no fees)</button>
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <button>Go to this website and uhhhh um</button>
      </a>
    </template>
    <p>this is the content for the second model</p>
    <p>this model is activated using separate state (i dont know what you should call this in vue)</p>
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
      isModal1Active: false,
      isModal2Active: false,
      modalContent: "Hello today is may 30th"
    }
  },
  methods: {
    toggleModal1() { this.isModal1Active = !this.isModal1Active; },
    toggleModal2() { this.isModal2Active = !this.isModal2Active; },
    appendToModalContent() {
      this.modalContent += "!";
    }
  },
});
</script>


<style>

</style>
