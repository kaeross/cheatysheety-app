<template>
    <div class="row">
        <div class="col-sm-4 sidebar pt-5">
            <div class="section" id="mj-components">
                <h3>Components</h3>
                <ul>
                    <li v-for="(value, key, index) in csData" v-bind:key="key" v-on:click="showAttributes(value)">{{index}} {{ key }}</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-8 pt-5">
            <title-text></title-text>
            <mjml-value :propObj="mjmlObj"></mjml-value>
        </div>
    </div>
</template>

<script>
  import TitleText from "./LandingPage/TitleText";
  import MjmlValue from "./LandingPage/MjmlValues";
  import json from "../assets/cheatsheet.json";
  export default {
    name: 'LandingPage',
    data() {
      return {
        csData: json,
        mjmlObj: {}
      };
    },
    components: {
      TitleText,
      MjmlValue
    },
    methods: {
      showAttributes: function (attributes) {
        this.mjmlObj = attributes;
      }
    }
  };
</script>

<style>
  li {
    list-style: none;
    text-align: right;
    padding-right: 1em;
  }
</style>
