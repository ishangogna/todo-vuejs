<template>
  <div>
    <app-header></app-header>
    
    <add-task></add-task>
    <hr>
    <show-task></show-task>
    
  </div>  
</template>

<script>
import appHeader from './components/header';
import appFooter from './components/footer';
import addTask from './components/addTask';
import showTask from './components/showTask';


export default {
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
    'add-task': addTask,
    'show-task': showTask,
  },

  data () {
    return {
      
    }
  },
  
}
</script>

<style>

</style>
