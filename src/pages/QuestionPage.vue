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
                  The correct answer is: {{ state.question.correct_answer }}
                </h5>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Try Again?
                </button>
                <button type="button" class="btn btn-primary" @click="incrementQuestion" data-dismiss="modal">
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
      try {
        questionService.getQuestion(AppState.index)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      incrementQuestion() {
        try {
          questionService.cycleQuestions(AppState.index)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }

}
</script>
