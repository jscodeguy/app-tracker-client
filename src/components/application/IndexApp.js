import React, { useState, useEffect } from 'react'
import { getAllApplication } from '../../api/application'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexApplication = (props) => {
    const [application, setApplication] = useState(null)
    const {user} = props
    useEffect(() => {
        getAllApplication(user)
            .then(res => {
                setApplication(res.data.application)
                console.log('user in index react', user)
                console.log('this is app in index react', res.data.application)
            })
                .catch()
    }, [])

    if (!application) {
        return <p>loading...</p>
    } else if (application.length === 0) {
        return <p>no application yet, go add some</p>
    }

    let applicationCards

    if (application.length > 0) {
        applicationCards = application.map(application => (
            <Card key={application.id} style={{ width: '30%' }} className="m-2">
                <Card.Header>{application.jobTitle}</Card.Header>
                <Card.Body>
                    <Card.Text>
                Applied {application.dateApplied} <br></br>
                        <Link to={`/application/${application._id}`}>View application for {application.company}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <h3>All the application</h3>
            <div style={cardContainerLayout}>
                {applicationCards}
            </div>
        </>
    )
}

export default IndexApplication