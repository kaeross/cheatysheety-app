<template>
  <div>
      <h2 v-if="showAttributeTitle">Attributes</h2>
      <div class="container ml-4">
        <div class="row">
          <div class="col-sm-4 mj-attr-list">
            <h4>Css class</h4>
            <ul>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index == 0">{{ key }}</li>
            </ul>
          </div>
          <div class="col-sm-8 mj-attr-list">
            <h4>Background</h4>
            <ul>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index > 3 && index <= 8">{{ key }}</li>
            </ul>
          </div>
          <div class="col-sm-4 mj-attr-list">
            <h4>Dimensions</h4>
            <ul>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index > 0 && index <= 3">{{ key }}</li>
            </ul>
          </div>
          
          <div class="col-sm-4 mj-attr-list">
            <h4>Border</h4>
            <ul>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index > 8 && index <= 13">{{ key }}</li>
            </ul>
          </div>
          <div class="col-sm-4 mj-attr-list">
            <h4>Spacing</h4>
            <ul>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index > 13 && index <= 16">{{ key }}</li>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index > 31 && index <= 34">{{ key }}</li>
            </ul>
          </div>
          <div class="col-sm-4 mj-attr-list">
            <h4>Links</h4>
            <ul>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index > 26 && index <= 34">{{ key }}</li>
            </ul>
          </div>
        <div class="col-sm-5 mj-attr-list">
            <h4>Text</h4>
            <ul>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index > 16 && index <= 26">{{ key }}</li>
                <li v-for="(value, key, index) in propObj" :key="key" class="green" v-if="value && index > 34">{{ key }}</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    showAttributeTitle: { type: Boolean, required: true },
    propObj: { type: Object, required: false }
  }
};
</script>

<style scoped>
li {
  text-align: left;
}
.green {
  color: rgb(28, 173, 149);
}
.red {
  color: red;
}
.scroll-flow {
  max-height: 90%;
  overflow: scroll;
}
h2 {
  margin-bottom: 1em;
}
h4 {
  text-align: left;
}
ul {
  -webkit-margin-before: 0;
  -webkit-padding-start: 0;
}
.mj-attr-list {
  min-height: 20vh;
}
</style>