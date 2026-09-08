import { useQuery } from '@tanstack/react-query'
import { getWaitlistCount } from '../lib/tally'

export const useWaitlistCount = () => {
  return useQuery({
    queryKey: ['waitlist-count'],
    queryFn: getWaitlistCount,
  })
}
