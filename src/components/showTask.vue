<template>
  <div>
    <h2>Your tasks:</h2>
    <ul>
      <li v-on:click= 'removeTask(task)' v-bind:key='task' v-for="task in tasks">{{task}}</li>
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
    
  },
  methods: {
    removeTask: function(task){
      this.$store.dispatch('removeTask',task)
      
    }
  }
 
  
}
</script>

<style scoped>

li {
  list-style-type: none;
  background: #eee;
  max-width: 500px;
  margin-top: 10px;
  padding: 5px;
  position : relative;
  left: 350px;
  
}
li:hover{
  animation-name: bounce;
  animation-duration: .1s;
  animation-fill-mode: forwards;
  font-weight: bold;
  cursor: pointer;
}


h2 {
  text-align: center;
}

@keyframes bounce{
  0%{
    opacity: 0;
    left:340px;
  }
  50%{
    opacity: .5;
    left: 360px;
  }
  100%{
    opacity: 1;
    left: 350px;

  }
}

</style>
