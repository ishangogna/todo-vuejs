<template>
  <div>
    <ul>
      <li v-bind:key='task' v-for="task in tasks">{{task}}</li>
    </ul>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      
    }
  },
  computed: {
    tasks: function(){
      return this.$store.state.tasks;
    }
  }
}
</script>

<style>

</style>
