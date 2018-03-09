<template>
  <div>
      <h2 v-if="showComponentTitle">Components</h2>
      <ul class="mt-4">
        <li v-for="(value, key, index) in matchedComponentObj" :key="index" class="mb-2" :class="{ 'active' : hoverIndex === index}" @mouseover="showAttributes(index)">
          {{ key }}
          <ul v-if="hoverIndex === index" class="values">
            <li v-for="(value, key, index) in value" :key="index" >{{ key }}</li>
          </ul>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverIndex: ''
    }
  },
  props: {
    showComponentTitle: { type: Boolean, required: true },
    matchedComponentObj: { type: Object, required: false }
  },
  methods: {
    showAttributes: function (index) {
      return this.hoverIndex = index;
    }
  }
};
</script>

<style scoped>
  li {
    text-align: left;
  }
  .values {
    color: teal;
    position: absolute;
    left: 15em;
    top: 9em;
  }
</style>