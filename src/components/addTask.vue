<template>
  <div>
    <h1>Add a task.</h1>
    <div class = 'add-task'>
        <input class = 'text' type="text" placeholder="Enter a task." v-model = 'registerTask'>
        <button class = 'add-button' v-on:click="addTask">Add Task</button>
    </div>
    

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

<style scoped>

h1{
    text-align: center;
}

.text{
    display:inline-block;
    position: relative;
    width: 300px;
    left: 35%;
}
.add-button{
    display:inline-block;
    width: 100px;
    position: relative;
    left : 35%;
}

.add-button:hover{
    animation-name: fade;
    animation-duration: .5s;
    animation-fill-mode: forwards;
}

@keyframes fade{
    0%{
        opacity: 0;
        background-color: lightblue;
    }
    50%{
        opacity: .5;
        background-color:blue;
    }
    100%{
        opacity: 1;
        background-color:darkblue;
    }   
}

</style>
