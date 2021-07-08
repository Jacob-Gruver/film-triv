<template>
  <div class="Answers m-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <button type="button" class="btn btn-primary" @click="chooseAnswer">
      <h4>
        {{ answerProp }}
      </h4>
    </button>
  </div>
</template>

<script>
import { questionService } from '../services/QuestionService'
import { logger } from '../utils/Logger'

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
      async chooseAnswer() {
        try {
          questionService.checkAnswer(this.props.answerProp)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  },
  components: {}
}
</script>
