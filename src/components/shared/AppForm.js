import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ApplicationForm = ({ application, handleSubmit, handleChange}) => (
    
    <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Job title</Form.Label>
                <Form.Control 
                    placeholder="what's the job title?"
                    value={application.jobTitle}
                    name='jobTitle'
                    onChange={handleChange}
                />
                <Form.Label>Date applied</Form.Label>
                <Form.Control 
                    placeholder="when did you apply?"
                    value={application.dateApplied}
                    name='dateApplied'
                    onChange={handleChange}
                />
                <Form.Label>Company name</Form.Label>
                <Form.Control 
                    placeholder="What was the company you applied to?"
                    value={application.company}
                    name='company'
                    onChange={handleChange}
                />
                <Form.Label>Company page</Form.Label>
                <Form.Control 
                    placeholder="You can add a link to the company's page here if you want"
                    value={application.companyPage}
                    name='companyPage'
                    onChange={handleChange}
                />
                <Form.Check 
                    label='have you received a response?'
                    name='receivedResponse'
                    defaultChecked={application.receivedResponse}
                    onChange={handleChange}
                />
                <Form.Check 
                    label='Was your application rejected?'
                    name='rejected'
                    defaultChecked={application.rejected}
                    onChange={handleChange}
                />
                <Form.Check 
                    label='Did you follow up on the application?'
                    name='followedUp'
                    defaultChecked={application.followedUp}
                    onChange={handleChange}
                />
                <Form.Label>Salary</Form.Label>
                <Form.Control 
                    placeholder="what salary did they offer?"
                    value={application.salaryOffer}
                    type="number"
                    name='salaryOffer'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
  
)
  export default ApplicationForm