// Skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const QuestionSkeleton = () => {
    return (
        <div>
            <Card style={{ width: '18rem', overflow: 'hidden' }} border="black">
                <p className="current__question" style={{backgroundColor: 'white'}}>/20</p>
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