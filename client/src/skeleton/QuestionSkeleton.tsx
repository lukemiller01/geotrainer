import React from 'react'

// Skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const QuestionSkeleton = () => {
    return (
        <div style={{ marginTop: '-22px', lineHeight: '1' }}>
            <p className="current__question">
                <Skeleton width={20} height={15}></Skeleton>
            </p>
            <Card style={{ width: '18rem' }} border="black">
                <Skeleton width={286} height={190}></Skeleton>
                <Card.Body className='card__content'>
                    <Card.Title>Which country is this flag from?</Card.Title>
                    <ListGroup as="ul" className='multiple__choice'>
                        <Skeleton width={254} height={40} />
                        <Skeleton width={254} height={40} />
                        <Skeleton width={254} height={40} />
                        <Skeleton width={254} height={40} />
                    </ListGroup>
                    <Button variant="primary" disabled>Next</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default QuestionSkeleton