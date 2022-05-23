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

// POST -> create function
export const createApplication = (user, newApplication) => {
    console.log('user', user)
    console.log('this is newApplication', newApplication)
    return axios({
        url: `${apiUrl}/applications`,
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
        url: `${apiUrl}/applications/${updatedApplication.id}`,
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
        url: `${apiUrl}/applications/${applicationId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}