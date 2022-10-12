import {useQuery, useMutation} from 'react-query'
import {axiosInstance} from '../helpers/axios'

const useGetEvents = (keys?: any, config?: any) => {
  return useQuery([keys], async () => await axiosInstance.get('events'), config)
}
const usePostEvents = (
  setEvents: any,
  events: any,
  setCheck: any,
  setEvent: any,
) => {
  return useMutation(
    async ({...params}: any) => {
      return await axiosInstance.post('events', params)
    },
    {
      onSuccess: (response) => {
        setEvents([response.data, ...events])
        setCheck(false)
        setEvent({
          date: new Date(),
          backgroundColor: {
            hex: '#c3dbf7',
          },
          category: 'event',
        })
      },
      onError: (error) => {
        console.log(error)
      },
    },
  )
}
export {useGetEvents, usePostEvents}
