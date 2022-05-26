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
        getAllApplication()
            .then(res => {
                setApplication(res.data.application)
                console.log('user in index react', user)
                console.log('this is app in index react', res.data.application)
            })
                .catch(console.log('no index'))
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
                        <Link to={`/application/${application.id}`}>View {application.name}</Link>
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