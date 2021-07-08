import Axios from 'axios'

export const baseURL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}
