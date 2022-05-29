import React, { useState } from 'react'
import { createApplication } from '../../api/application'
import { useNavigate } from 'react-router-dom'
import ApplicationForm from '../shared/AppForm'

// create application renders a form and calls createApplication function
// maybe redirect(navigate) to the new application show page
// props we'll need are user, msgAlert
const CreateApplication = (props) => {
    const {user} = props
    console.log('user in create', user)
    const navigate = useNavigate()
    // we'll need two states
    const [application, setApplication] = useState(
        {
        jobTitle: '',
        dateApplied: '', 
        company: '', 
        companyPage: '',
        receivedResponse: false,
        rejected: false,
        followedUp: false,
        salaryOffer: ''
    })
    console.log('application in create', application)
    //  an empty application object
    // and a createdId (used to navigate)
    // we'll need handleChange and handleSubmit funcs
    const handleChange = (e) => {
        // e === event
        e.persist()

        setApplication(prevApplication => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)
                if(name === "receivedResponse" && e.target.checked){
                    value = true
                } else if (name === "receivedResponse" && !e.target.checked){
                    value = false
                }
                if(name === "rejected" && e.target.checked){
                    value = true
                } else if (name === "rejected" && !e.target.checked){
                    value = false
                }
                if(name === "followedUp" && e.target.checked){
                    value = true
                } else if (name === "followedUp" && !e.target.checked){
                    value = false
                }

                if (e.target.type === 'number') {
                    value = parseInt(e.target.value)
                }

            const updatedValue = { [name]: value }

            console.log('prevApplication', prevApplication)
            console.log('updatedValue', updatedValue)

            return {...prevApplication, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createApplication(user, application)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`/application/${res.data.application._id}`)})
            // then we send a success message
            .then(() =>
            console.log('application created'))
            // if there is an error, we'll send an error message
            .catch(() =>
            console.log('no app')    )
        // console.log('this is the application', application)
    }

    return (
        <ApplicationForm 
            application={application}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Create new application!"
        />
    )
}

export default CreateApplication