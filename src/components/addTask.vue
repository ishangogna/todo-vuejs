<template>
  <div>
    <h1>Add a task.</h1>
    <input type="text" placeholder="Enter a task." v-model = 'registerTask'>
    <button v-on:click="addTask">Add Task</button>

  </div>
</template>

<script>
export default {
 
  data () {
    return {
        registerTask: '',
      
    }
  },
  methods: {
      addTask: function(){
        //   this.$store.state.tasks.push(this.registerTask);
        this.$store.dispatch('addTask',this.registerTask);
      }
      
  }
}
</script>

<style>

</style>
