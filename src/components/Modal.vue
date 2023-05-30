<template>
  <div :class="`backdrop ${isActive ? 'active' : ''}`">
    <div class="modal">
      <p>Vue isn't that bad actually</p>
      <h1>{{ content }}</h1>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ["content", "isActive"]
})
</script>

<style scoped>
:root {
  --transition-time: 300ms;
}


.modal {
  min-width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 20px));
  border: 2px solid black;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 15px 30px;
  transition: var(--transition-time);
  opacity: 0;
}

.backdrop.active .modal {
  opacity: 1;
  transform: translate(-50%, calc(-50%));
}

.backdrop {
  transition: var(--transition-time);
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  opacity: 0;
}

.backdrop.active {
  opacity: 1;
}
</style>