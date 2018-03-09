<template>
  <div>
      <h2 v-if="showComponentTitle">Components</h2>
      <ul>
        <li v-for="(value, key, index) in matchedComponentObj" :key="index" class="" >{{ key }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    showComponentTitle: { type: Boolean, required: true },
    matchedComponentObj: { type: Object, required: false }
  }
};
</script>