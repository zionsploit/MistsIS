import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default () => {

    return useQuery({
        queryKey: ['get-announcement'],
        queryFn: async () => {
            try {
                const response = await axios.get('/api/get-announcement')

                return response.data
            } catch (error) {
                throw new Error('Error: ' + error)
            }
        }
    })
}