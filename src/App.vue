<template>
  <div id="app">
    <!-- <Details/> -->
    <Room/>
  </div>
</template>

<script>
// import Domains from './components/Domains'
// import Room from './components/Room/Room'
// import Details from './components/Room/Details'
import Room from './components/Room/Room'
// import {GET_ALL_PYMES} from './graphql/queries/mipymes'
// import {GET_ALL_USERS} from './graphql/queries/users'

export default {
  name: 'app',
  components: {
    // Details,
    Room
    // Domains,
    // Users
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    // mipymes3: GET_ALL_PYMES,
    // users2: GET_ALL_USERS
  },
  data () {
    return {
      mipymes3: [],
      users2: [],
      mipymeSelected: ''
    }
  },
  computed: {
  }
}
</script>

<style>
.vue-daterange-picker {
  width: 100%;
}

.calendars {
  width: 103%;
}

.ranges {
  display: none;
}
.wizard-title {
  display: none!important;
}

.category {
  display: none!important;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  padding: 0 10%;
} */
</style>
