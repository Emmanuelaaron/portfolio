import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';

import covidImage from '../../images/covid3.png';
import spaceshipsImage from '../../images/spaceships.png';
import moviesImage from '../../images/movies.png';
import privateEventsImage from '../../images/private.png';
import carBookingImage from '../../images/carBooking.png';
import bookStoreImage from '../../images/bookstore.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Covid 19 Updates',
      image: covidImage,
      technogies: [
        'React',
        'CSS3',
        'Bootstrap',
        'HTML5',
      ],
    }, {
      id: 2,
      name: 'Spaceships',
      image: spaceshipsImage,
      technogies: [
        'React',
        'Redux',
        'CSS3',
        'Bootstrap',
        'HTML5',
        'Javascript',
      ],
    }, {
      id: 3,
      name: 'Movies & Series',
      image: moviesImage,
      technogies: [
        'React',
        'Redux',
        'CSS3',
        'Bootstrap',
        'HTML5',
        'Javascript',
      ],
    }, {
      id: 4,
      name: 'Private Events',
      image: privateEventsImage,
      technogies: [
        'Ruby On Rails',
        'Ruby',
        'CSS3',
        'Bootstrap',
        'HTML5',
      ],
    }, {
      id: 5,
      name: 'Car Booking',
      image: carBookingImage,
      technogies: [
        'Ruby On Rails',
        'React',
        'Cloudinary',
        'Ruby',
        'CSS3',
        'Bootstrap',
        'HTML5',
      ],
    }, {
      id: 6,
      name: 'Book Store',
      image: bookStoreImage,
      technogies: [
        'React',
        'Javascript',
        'CSS3',
        'Bootstrap',
        'HTML5',
      ],
    },
  ];

  return (
    <div className="row justify-content-center">
      <h1 className="text-center mt-5 mb-4 recentWorks col-12">My Most Recent Projects</h1>

      <Row xs={1} md={3} className="g-4 col-10 text-center">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="rounded-top">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title className="text-center">{project.name}</Card.Title>
                <section className="bg-ino text-center">
                  {project.technogies.map((technology) => (
                    <button key="1" type="button" className="btn projectButton mx-1 mt-2">{technology}</button>
                  ))}
                </section>
                <section className="mt-2 text-center">
                  <button type="button" className="btn projectButton1 mx-2">See Project</button>
                </section>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
