<template>
    <div :class="main-app" class="row">
        <div class="col-sm-3 sidebar pt-5">
            <div class="section">
                <h3>Components</h3>
                <ul>
                    <li v-for="(value, key) in csData">{{key}}</li>
                </ul>
            </div>
            <mj-component-list />
        </div>
        <div class="col-sm-9 pt-5">
            <h1>The Cheaty Sheety app </h1>
            <p>All the answers to your mjml questions…</p>
        </div>
    </div>
</template>

<script>
import json from "../assets/cheatsheet.json";
export default {
  data() {
    return {
      csData: json
    };
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
