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
                    @click="showComponents('css-class',0)">CSS Class</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 1}" 
                    @click="showComponents('background',1)">Background</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 2}" 
                    @click="showComponents('dimensions',2)">Dimensions</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 3}" 
                    @click="showComponents('border',3)">Border</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 4}" 
                    @click="showComponents('spacing',4)">Spacing</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 5}" 
                    @click="showComponents('links',5)">Links</li>
                    <li 
                    :class="{ 'active' : activeAttributeIndex === 6}" 
                    @click="showComponents('text',6)">Text</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-8 pt-5">
            <title-text v-if="!showAttributeTitle && !showComponentTitle"></title-text>
            <mjml-value v-if="showAttributeTitle" :showAttributeTitle="showAttributeTitle" :propObj="mjmlAttrObj"></mjml-value>
            <mjml-matched-components v-if="showComponentTitle" :showComponentTitle="showComponentTitle" :matchedComponentObj="mjmlComponentObj"></mjml-matched-components>
        </div>
    </div>
</template>

<script>
import TitleText from "./LandingPage/TitleText";
import MjmlValue from "./LandingPage/MjmlValues";
import MjmlMatchedComponents from "./LandingPage/MjmlMatchedComponents";
import json from "../assets/cheatsheet.json";
export default {
  name: "LandingPage",
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
    MjmlValue,
    MjmlMatchedComponents
  },
  methods: {
    showAttributes: function(attributes, itemIndex) {
      this.mjmlAttrObj = attributes;
      this.showAttributeTitle = true;
      this.showComponentTitle = false;
      // set active item and remove active class from attribute list
      this.activeComponentIndex = itemIndex;
      this.activeAttributeIndex = null;
    },
    showComponents: function(attribute, itemIndex) {
      this.showComponentTitle = true;
      this.showAttributeTitle = false;
      // set active item and remove active class from component list
      this.activeComponentIndex = null;
      this.activeAttributeIndex = itemIndex;
      // Loop through each object in this.csData and check if value is true in index range
      var matchingComponents = {};
      for (let key in this.csData) {
      let obj = this.csData[key];
      let matched = false;
        // Check for matching attributes
        function checkAttributes(start, end) {
          var matchingValues = {}; 
          for (let i = start; i <= end; i++) {
            var idx = i;
            var prop = Object.keys(obj)[idx];
            var value = obj[prop];
            if (value) {
              matched = true;
              matchingValues[prop] = value;
            }
          }
          if (Object.keys(matchingValues).length != 0) {
            matchingComponents[key] = matchingValues;
          }
        }
        if (attribute === 'css-class') {
          checkAttributes(0, 0)
        } else if (attribute === 'dimensions') {
          checkAttributes(1, 3)
        } else if (attribute === 'background') {
          checkAttributes(4,8)
        } else if (attribute === 'border') {
          checkAttributes(9,13)
        } else if (attribute === 'spacing') {
          checkAttributes(14,16);
          checkAttributes(32,34)
        } else if (attribute === 'links') {
          checkAttributes(28, 34)
        } else if (attribute === 'text') {
          checkAttributes(17, 26)
        }
      }
      this.mjmlComponentObj = matchingComponents;
      console.log(matchingComponents);
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
li.active {
  font-weight: 700;
}
li:hover {
  cursor: -webkit-grabbing;
  cursor: pointer;
}
#mj-components li,
#mj-attributes li {
  text-align: right;
  padding-right: 1em;
}
</style>
