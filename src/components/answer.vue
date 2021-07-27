<template>
  <div class="Answers m-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <router-link :to="{ name: 'Questionare', params: { answerChoice } }">
      <button type="button" class="btn btn-primary" @click="chooseAnswer">
        <h4>
          {{ answerProp }}
        </h4>
      </button>
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Answers',
  props: {
    answerProp: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const answerChoice = computed(() => props.answerProp)

    return {
      answerChoice
    }
  }
}
</script>
