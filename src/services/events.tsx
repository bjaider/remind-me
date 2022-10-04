import {useQuery, useMutation} from 'react-query'
import {axiosIntance} from '../helpers/axios'

const useGetEvents = (keys?: any, config?: any) => {
  return useQuery([keys], async () => await axiosIntance.get('events'), config)
}
const usePostEvents = (
  setEvents: any,
  events: any,
  setCheck: any,
  setEvent: any,
) => {
  return useMutation(
    async ({...params}: any) => {
      return await axiosIntance.post('events', params)
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
