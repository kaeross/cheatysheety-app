<template>
  <div>
      <h3>Attributes</h3>
      <ul>
          <li v-for="(value, key) in propObj" >{{ key }} {{value}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    propObj: { type: Object, required: false },
  }
}
</script>
