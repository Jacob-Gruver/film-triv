<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Film-Trivia</span>
    </h1>
    <router-link :to="{ name: 'Questionare' }" class="nav-link">
      <h3>
        Begin
      </h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
