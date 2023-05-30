<template>
  <div class="backdrop" :class="{ active: isActive }" @click.self="closeModal">
    <div class="modal">
      <slot />
      <div class="buttons">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ["content", "isActive"],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
})
</script>

<style scoped>
:root {
  --transition-time: 300ms;
}

.buttons {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}


.modal {
  min-width: 300px;
  max-width: 600px;
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
  pointer-events: all;
}
</style>