<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <h4 class="text-dark text-center p-4">
      <span>
        Developed by a Codemonkey
      </span>
    </h4>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
