<template>
  <div class="questionare flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <div class="col m-3">
        <span>
          <h3>
            {{ state.question.question }}
          </h3>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col m-3 text-primary">
        <h4>
          {{ state.answers }}
        </h4>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" @click="incrementQuestion" class="btn btn-primary">
          New Question
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { questionService } from '../services/QuestionService'
import { logger } from '../utils/Logger'
export default {
  name: 'Questionare',

  setup() {
    const state = reactive({
      questions: computed(() => AppState.questions),
      question: computed(() => AppState.question),
      answers: computed(() => AppState.answers)
    })
    onMounted(async() => {
      const index = AppState.index
      try {
        questionService.getQuestion(index)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      incrementQuestion() {
        const index = AppState.index
        try {
          questionService.cycleQuestions(index)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>
