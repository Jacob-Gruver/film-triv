<template>
  <div class="Answers m-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <button type="button" class="btn btn-primary">
      <h4>
        {{ answerProp }}
      </h4>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Answers',
  props: {
    answerProp: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>
