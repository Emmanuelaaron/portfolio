import { Card } from 'react-bootstrap';
import Icons from '../Icons';

const Intro = () => (
  <section className="text-center sectionIntro d-flex  justify-content-center">
    <Card.Body className="text-center d-flex flex-column align-items-center">
      <Card.Title>
        Hey there. I’m Emmanuel.
      </Card.Title>
      <h1 className="soft">
        I’m a software developer
      </h1>
      <section className="w-50 sectionparagraph mb-3">
        I can help you build a product , feature or
        website Look through some of my work and
        experience! If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
      </section>
      <Icons />
    </Card.Body>
  </section>
);

export default Intro;
