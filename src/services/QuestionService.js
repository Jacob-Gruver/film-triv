import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { AppState } from '../AppState'

class QuestionService {
  async getQuestion(index) {
    try {
      const res = await api.get()
      AppState.questions = res.data.results
      const getAtInd = AppState.questions[index]
      this.scrubChar(getAtInd.question)
      AppState.question = getAtInd
      AppState.index++
      this.scrambleAnswers(AppState.question.incorrect_answers, AppState.question.correct_answer)
    } catch (error) {
      logger.error(error)
    }
  }

  async scrambleAnswers(wrongA, rightA) {
    const newArr = wrongA
    newArr.push(rightA)
    const scrambled = newArr.sort(() => Math.random() - 0.5)
    scrambled.forEach(answer => {
      this.scrubAns(answer)
    })
    AppState.answers = scrambled
    logger.log('Logging scrambled', scrambled)
  }

  async cycleQuestions(index) {
    if (AppState.index < 10) {
      AppState.index++
    } else {
      AppState.index = 0
      this.getQuestion(AppState.index)
    }
    const getAtInd = AppState.questions[index]
    AppState.question = getAtInd
    this.scrubChar(getAtInd.question)
    this.scrambleAnswers(AppState.question.incorrect_answers, AppState.question.correct_answer)
  }

  async checkAnswer(answer) {
    logger.log('logging the selected choice: ', answer)
    if (answer !== AppState.question.correct_answer) {
      AppState.choice = false
      logger.log('Incorrect')
      logger.log('The correct answer is => ', AppState.question.correct_answer)
    } else {
      AppState.choice = true
      logger.log('Correct')
    }
  }

  async scrubChar(string) {
    const scrubbing = await string.replace(/;|&|quot|#039/gi, '')
    // decodeURI(scrubbing)
    logger.log(scrubbing)
    AppState.scrubbedQuest = scrubbing
  }

  async scrubAns(string) {
    const scrubbing = await string.replace(/;|&|quot|#039/gi, '')
    // decodeURI(scrubbing)
    logger.log(scrubbing)
  }
}

// This code is the instance of the class above. It sets the Constant questionService as the instance, then exports it.
export const questionService = new QuestionService()
