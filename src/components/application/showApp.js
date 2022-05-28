import React, {useState, useEffect} from 'react'
import { getOneApplication } from '../../api/application'
import { useParams } from 'react-router-dom'
import { Spinner, Container, Card } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

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
                            <small>
                            company: {application.company}
                            </small>
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