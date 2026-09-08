import { api } from './api'

export interface TallySubmissionsResponse {
  totalNumberOfSubmissionsPerFilter: {
    all: number
    completed: number
    partial: number
  }
}

export const getWaitlistCount = async (): Promise<number> => {
  const apiKey = import.meta.env.VITE_TALLY_API_KEY
  const formId = import.meta.env.VITE_TALLY_FORM_ID

  if (!apiKey || !formId) {
    console.error('Tally configuration missing')
    return 0
  }

  try {
    const response = await api.get<TallySubmissionsResponse>(
      `/forms/${formId}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        params: {
          limit: 1,
          filter: 'all',
        },
      },
    )
    return response.data.totalNumberOfSubmissionsPerFilter.all
  } catch (error) {
    console.error('Failed to fetch waitlist count:', error)
    return 0
  }
}
