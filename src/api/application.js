import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllApplications = () => {
    return axios({
        url: `${apiUrl}/applications`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

// show function
export const getOneApplication = (applicationId) => {
    return axios({
        url: `${apiUrl}/applications/${applicationId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
