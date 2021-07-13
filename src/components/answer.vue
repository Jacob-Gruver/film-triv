<template>
  <div class="Answers m-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <!-- <router-link :to="{ name: 'QuestionPage', params: { string: answerProp } }"> -->
    <button type="button" class="btn btn-primary">
      <h4>
        {{ answerProp }}
      </h4>
    </button>
    <!-- </router-link> -->
  </div>
</template>

<script>
// import { questionService } from '../services/QuestionService'
// import { logger } from '../utils/Logger'

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
      // async chooseAnswer() {
      //   try {
      //     logger.log('logging prop before going to the service ', this.props.answerProp)
      //     questionService.checkAnswer(this.name)
      //   } catch (error) {
      //     logger.error(error)
      //   }
      // }
    }
  },
  components: {}
}
</script>
