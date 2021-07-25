import axios from '../index'

export function getUser() {
  return axios.get('/api');
}