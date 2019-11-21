<script>
import Hello from './Hello.vue'
import Bye from './Bye.vue'

export default {
  components: { Hello, Bye }  
}
</script>

<template>
  <main>
    <Hello name="Rahul" />
    <Bye name="Rahul" />
  </main>
</template>
