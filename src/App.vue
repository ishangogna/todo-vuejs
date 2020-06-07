<template>
  <div>
    <app-header></app-header>
    
  </div>  
</template>

<script>
import appHeader from './components/header';
import appFooter from './components/footer'
export default {
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
  },

  data () {
    return {
      
    }
  },
  
}
</script>

<style>

</style>
