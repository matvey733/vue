<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Modal />
  <h1>main title</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from "./components/Modal.vue";

export default defineComponent({
  name: 'App',
  components: {
    Modal
  }
});
</script>

<style>

</style>
