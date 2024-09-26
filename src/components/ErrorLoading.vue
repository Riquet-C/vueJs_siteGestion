<template>
<div v-if="error">
 <p> {{error}} </p>
</div>
  <div v-if="loading">
<p>Requête en cours...</p>
  </div>
</template>

<script>
export default {
  name: "ErrorLoading",
  props: {
    error: String,
    loading: Boolean,
  }
}
</script>

<style scoped>

</style>