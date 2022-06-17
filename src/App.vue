<template>
  <div>
    <ul>
      <li v-for="p in persons" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "App",
  data() {
    return {
      persons: [
        { id: nanoid(), name: "张三" },
        { id: nanoid(), name: "李四" },
        { id: nanoid(), name: "王五" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
