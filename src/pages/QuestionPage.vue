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
      <div class="col">
        <Answers v-for="(answer, index) in state.answers"
                 :key="index"
                 :answer-prop="answer"
                 data-toggle="modal"
                 data-target="#modelId"
                 @click="chooseAnswer"
        />

        <!-- Modal -->
        <div class="modal fade"
             id="modelId"
             tabindex="-1"
             role="dialog"
             aria-labelledby="modelTitleId"
             aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  {{ state.question.correct_answer }}
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Body
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Try Again?
                </button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="incrementQuestion">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { questionService } from '../services/QuestionService'
import { logger } from '../utils/Logger'
export default {
  name: 'Questionare',

  setup() {
    const route = useRoute()
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
      route,
      incrementQuestion() {
        const index = AppState.index
        try {
          questionService.cycleQuestions(index)
        } catch (error) {
          logger.error(error)
        }
      },
      async chooseAnswer() {
        try {
          logger.log('logging prop before going to the service ', route)
          questionService.checkAnswer(route.params.string)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>
