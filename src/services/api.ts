import axios from 'axios'
import { getCookie } from '@/utils/cookies'

const { value: token } = getCookie('user.token')

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  withCredentials: true,
  headers: { Authorization: `Bearer ${token}` }
})
