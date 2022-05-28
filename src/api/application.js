import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllApplication = () => {
    return axios(`${apiUrl}/application`)
}

// show function
export const getOneApplication = (user, applicationId) => {
    return axios({
        url: `${apiUrl}/application/${applicationId}`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

// POST -> create function
export const createApplication = (user, newApplication) => {
    console.log('user', user)
    console.log('this is newApplication', newApplication)
    return axios({
        url: `${apiUrl}/application`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { application: newApplication }
    })
}

// PATCH -> update function
export const updateApplication = (user, updatedApplication) => {
    console.log('user', user)
    console.log('this is newApplication', updatedApplication)
    return axios({
        url: `${apiUrl}/applications/${updatedApplication._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { application: updatedApplication }
    })
}

// DELETE -> remove function
export const removeApplication = (user, applicationId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/application/${applicationId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}