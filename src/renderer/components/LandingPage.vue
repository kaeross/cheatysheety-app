<template>
    <div class="row mw-100">
        <div class="col-sm-4 sidebar pt-5">
            <div class="section" id="mj-components">
                <h3>Components</h3>
                <ul>
                    <li
                    v-for="(value, key, index) in csData"
                    :key="key"
                    :class="{ 'active' : activeComponentIndex === index}" 
                    @click="showAttributes(value, index)"
                    >
                      {{ key }}</li>
                </ul>
            </div>
            <div class="section" id="mj-attributes">
                <h3>Attributes</h3>
                <ul>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 0}" 
                    @click="showComponents('',0)">CSS Class</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 1}" 
                    @click="showComponents('',1)">Background</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 2}" 
                    @click="showComponents('',2)">Dimensions</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 3}" 
                    @click="showComponents('',3)">Border</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 4}" 
                    @click="showComponents('',4)">Spacing</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 5}" 
                    @click="showComponents('',5)">Links</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 6}" 
                    @click="showComponents('',6)">Text</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-8 pt-5">
            <title-text v-if="!showAttributeTitle"></title-text>
            <mjml-value :showAttributeTitle="showAttributeTitle" :propObj="mjmlAttrObj"></mjml-value>
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
        mjmlAttrObj: {},
        mjmlComponentObj: {},
        showAttributeTitle: false,
        showComponentTitle: false,
        activeComponentIndex: null,
        activeAttributeIndex: null
      };
    },
    components: {
      TitleText,
      MjmlValue
    },
    methods: {
      showAttributes: function (attributes, itemIndex) {
        this.mjmlAttrObj = attributes;
        this.showAttributeTitle = true;   
        // set active item and remove active class from attribute list
        this.activeComponentIndex = itemIndex;
        this.activeAttributeIndex = null;
      },
      showComponents: function (indexRange, itemIndex) {
        this.showComponentTitle = true;
        // set active item and remove active class from component list
        this.activeComponentIndex = null;
        this.activeAttributeIndex = itemIndex;
        // Loop through each object in this.csData and check if value is true in index range
          // if true display key
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
  #mj-components li,
  #mj-attributes li {
    text-align: right;
    padding-right: 1em;
  }
</style>
