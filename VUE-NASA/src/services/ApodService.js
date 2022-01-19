import Axios from 'axios'

const apiKey = 'cz18VhedCEfiZKibPcUm3Qa69o6WMKFvJ2Dg72M2'

const nasaApi = Axios.create({
    baseURL: 'https://api.nasa.gov/planetary'
})

class APODService {
    async searchAPOD(searchDate) {
        const res = await nasaApi(`apod?date=${searchDate}&api_key=${apiKey}`)
        console.log('testing', res)
    }

}
export const apodService = new APODService()

