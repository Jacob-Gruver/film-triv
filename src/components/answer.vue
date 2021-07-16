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
// import { logger } from '../utils/Logger'
import { reactive, computed } from 'vue'
// import { questionService } from '../services/QuestionService'

export default {
  name: 'Answers',
  props: {
    answerProp: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const answerChoice = reactive({
      prop: computed(() => props.answerProp)
    })
    return {
      answerChoice
      // async chooseAnswer() {
      //   try {
      //     questionService.checkAnswer(answerChoice.prop)
      //   } catch (error) {
      //     logger.error(error)
      //   }
      // }
    }
  }
}
</script>
