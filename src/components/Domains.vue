<template>
  <div id="domains">
    <label >Dominios</label>
    <v-select
      v-model="mipymeSelected"
      :options="pymes"
      label="subdomain"
    >
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'Domains',
  props: ['pymes'],
  data () {
    return {
      mipymeSelected: ''
    }
  },
}
</script>

<style>
</style>
