<template>
  <div>
      <h3 v-if="showAttributeTitle">Attributes</h3>
      <ul>
          <li v-for="(value, key) in propObj" v-if="value === true">{{ key }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    showAttributeTitle: { type: Boolean, required: true },
    propObj: { type: Object, required: false },
  }
}
</script>
