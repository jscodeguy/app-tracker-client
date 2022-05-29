import React, {useState, useEffect} from 'react'
import { getOneApplication } from '../../api/application'
import { useParams } from 'react-router-dom'
import { Spinner, Container, Card } from 'react-bootstrap'

const ShowApplication = (props) => {
    const [application, setApplication] = useState(null)
    const {user} = props
    const { id } = useParams()
    console.log('id in showApplication', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneApplication(user, id)
            .then(res => {
                console.log('this is the res', res)
                setApplication(res.data.application)})
            .catch(() => {
                console.log('show failed')
            })
    }, [])

    


    if (!application) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }
    

    if (application) {
        return (
            <Container className="fluid">
                <Card>
                    <Card.Header>{application.fullTitle}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>jobTitle: {application.jobTitle}</small><br/>
                            <small>dateApplied: {application.dateApplied}</small><br/>
                            <small>company: {application.company}</small><br/>
                            <small>companyPage: {application.companyPage}</small><br/>
                            <small>receivedResponse: {application.receivedResponse ? 'yes' : 'no'}</small><br/>
                            <small>rejected: {application.rejected ? 'yes' : 'no'}</small><br/>
                            <small>followedUp: {application.followedUp ? 'yes' : 'no'}</small><br/>
                            <small>salaryOffer: {application.salaryOffer}</small><br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
    return (
        <>
            {application}
        </>
    )
}

export default ShowApplication