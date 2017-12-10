import Vue from 'vue'
import Vuex from 'vuex'
import { STATUSES, REWARDS } from './common/const'
import {getQuestions} from './common/api';

Vue.use(Vuex)

const initialState = {
  currentRound: 0,
  cash: 0,
  questions: [],
  status: STATUSES.NOT_STARTED
}

const getters = {
  cash: state => state.cash,
  currentRound: state => state.currentRound,
  maxRounds: state => state.questions.length,
  status: state => state.status,
  currentQuestion: state => getters.questions(state)[state.currentRound],
  questions: state => state.questions.map((q, i) => ({
    ...q,
    reward: REWARDS[i],
    isAnswered: i < state.currentRound
  }))
}

const actions = {
  initGame: ({commit}) => {
    getQuestions(10).then(questions => commit('initGame', questions))
  }
}

const mutations = {
  initGame: (state, questions) => {
    state.cash = 0
    state.currentRound = 0
    state.questions = questions
    state.status = STATUSES.PLAYING
  },
  submitAnswer: (state, answerIndex) => {
    const currentQuestion = getters.currentQuestion(state)
    const maxRounds = getters.maxRounds(state)
    if (currentQuestion.correctAnswer === answerIndex) {
      state.cash += currentQuestion.reward
      state.currentRound += 1
      if (state.currentRound === maxRounds) {
        state.status = STATUSES.WON
      }
    } else {
      state.status = STATUSES.LOST
    }
  }
}

export default new Vuex.Store({
  state: initialState,
  getters,
  mutations,
  actions
})
