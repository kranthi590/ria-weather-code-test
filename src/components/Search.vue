<script>
export default {
  name: "Search",
  props: {
    onEnter: Function,
    refresh: Function
  },
}
</script>

<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid container-xxl">
      <div class="input-group mb-2">
        <input class="form-control me-2" type="search" placeholder="Search (Note: only USA cities)" aria-label="Search"
               v-on:keyup.enter="onEnter">
        <button type="button" class="btn btn-light" @click="refresh">Refresh</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>