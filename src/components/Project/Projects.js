import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import { FaMars, FaGithubSquare } from 'react-icons/fa';
import { useState } from 'react';
import covidImage from '../../images/covid3.png';
import spaceshipsImage from '../../images/spaceships.png';
import calculatorImage from '../../images/calculatore.png';
import privateEventsImage from '../../images/private.png';
import carBookingImage from '../../images/carBooking.png';
import bookStoreImage from '../../images/bookstore.png';
import '../../styles/project.css';

const Projects = () => {
  const [popUpContent, setPopUpContent] = useState({
    image: '',
    name: '',
    description: '',
    live: '',
    sourceCode: '',
    technogies: [],
    display: 'd-none',
  });

  const dePopulate = () => {
    setPopUpContent({
      ...popUpContent,
      mage: '',
      name: '',
      description: '',
      live: '',
      sourceCode: '',
      technogies: [],
      display: 'd-none',
    });
  };

  const populatePopUp = (
    image,
    name, desc,
    live,
    sourceCode,
    technogies,
  ) => {
    setPopUpContent({
      ...popUpContent,
      image,
      name,
      description: desc,
      live,
      sourceCode,
      technogies,
      display: 'd-block',
    });
  };

  const projects = [
    {
      id: 1,
      name: 'Covid 19 Updates',
      image: covidImage,
      description: 'This is a mobile web application that showcases live data about covid 19 worldwide for different countries.',
      live: 'https://covid19-data-updates.netlify.app/',
      sourceCode: 'https://github.com/Emmanuelaaron/covid-19-updates',
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
      description: 'This is a web application that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      live: 'https://spaceships-emma-enio-mario.netlify.app/',
      sourceCode: 'https://github.com/Emmanuelaaron/spaceships',
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
      name: 'Calculator',
      image: calculatorImage,
      description: 'This is a React project which demonstrates the logic of a simple calculator',
      live: 'https://emmanuelaaron.github.io/math-magicians/',
      sourceCode: 'https://github.com/Emmanuelaaron/math-magicians',
      technogies: [
        'React',
        'CSS3',
        'Bootstrap',
        'HTML5',
        'Javascript',
      ],
    }, {
      id: 4,
      name: 'Private Events',
      image: privateEventsImage,
      description: 'This is a site Similar eventbrite with a demonstration of associations in Rails. Users are able to create events and add people to these events',
      live: 'https://private-events-1.herokuapp.com/',
      sourceCode: 'https://github.com/Emmanuelaaron/private-events',
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
      description: 'This is a web app that enables users to book an appointment to try their dream cars',
      live: '#f',
      sourceCode: 'https://github.com/Emmanuelaaron/carBooking',
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
      description: 'This is a React-Redux project which allows users to add and remove books from a store',
      live: 'https://bookstorre.netlify.app/',
      sourceCode: 'https://github.com/Emmanuelaaron/book-store',
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
    <div className="row justify-content-center" id="portfolio">
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
                    <button key={technology} type="button" className="btn projectButton mx-1 mt-2">{technology}</button>
                  ))}
                </section>
                <section className="mt-2 text-center">
                  <button
                    type="button"
                    className="btn projectButton1 mx-2"
                    onClick={() => populatePopUp(
                      project.image,
                      project.name,
                      project.description,
                      project.live,
                      project.sourceCode,
                      project.technogies,
                    )}
                  >
                    See Project
                  </button>
                </section>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Card className={`col-12 popup d-flex align-items-center ${popUpContent.display}`}>
        <Card.Body className=" popup-card-display">
          <span className="close-icon" onClick={() => dePopulate()} onKeyPress={() => dePopulate()} role="button" tabIndex={0}>x</span>
          <Card.Img variant="top" src={popUpContent.image} className="h-50 w-100" />
          <div className="mt-3 d-flex justify-content-between align-items-center flex-wrap popup-buttons">
            <Card.Title className="popupName">{popUpContent.name}</Card.Title>
            <div className="d-flex popup-buttons" id="popup-buttons">
              <a href={popUpContent.live} target="_blank" rel="noreferrer" className="btn d-flex align-items-center mx-2 popUpBtn">
                <span className="mx-1">See live</span>
                <FaMars />
              </a>
              <a href={popUpContent.sourceCode} target="_blank" rel="noreferrer" className="btn d-flex align-items-center popUpBtn">
                <span className="mx-2">See Source</span>
                <FaGithubSquare />
              </a>
            </div>
          </div>
          <section className="col-md-6">
            {popUpContent.technogies.map((technology) => (
              <button key={technology} type="button" className="btn projectButtonn mx-1 mt-2">{technology}</button>
            ))}
          </section>
          <Card.Text className="col-lg-12 mt-md-5 popup-description">{popUpContent.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
