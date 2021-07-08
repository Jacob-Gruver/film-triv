<template>
  <div class="Answers m-3">
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
    return {}
  },
  components: {}
}
</script>
