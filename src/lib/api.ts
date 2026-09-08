import axios from 'axios'

// Using Tally API directly as requested
const TALLY_BASE_URL = 'https://api.tally.so'

export const api = axios.create({
  baseURL: TALLY_BASE_URL,
})
