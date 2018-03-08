<template>
    <div class="row mw-100">
        <div class="col-sm-4 sidebar pt-5">
            <div class="section" id="mj-components">
                <h3>Components</h3>
                <ul>
                    <li
                    v-for="(value, key, index) in csData"
                    :key="key"
                    :class="{ 'active' : activeIndex === index}" 
                    @click="showAttributes(value, index)"
                    >
                      {{ key }}</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-8 pt-5">
            <title-text v-if="!showAttributeTitle"></title-text>
            <mjml-value :showAttributeTitle="showAttributeTitle" :propObj="mjmlObj"></mjml-value>
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
        mjmlObj: {},
        showAttributeTitle: false,
        activeIndex: null
      };
    },
    components: {
      TitleText,
      MjmlValue
    },
    methods: {
      showAttributes: function (attributes, itemIndex) {
        this.mjmlObj = attributes;
        this.showAttributeTitle = true;
        this.activeIndex = itemIndex;
      }
    }
  };
</script>

<style>
  li {
    list-style: none;
  }
  li.active {
    font-weight: 700
  }
  li:hover {
    cursor:-webkit-grabbing;
    cursor: pointer;
  }
  #mj-components li {
    text-align: right;
    padding-right: 1em;
  }
</style>
