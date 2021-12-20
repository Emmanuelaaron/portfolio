import { Row, Card, Col } from 'react-bootstrap';
import image from '../../images/language.png';
import image2 from '../../images/framework.png';
import image3 from '../../images/skills.png';

const Skills = () => {
  const mySkills = [
    {
      id: '1',
      name: 'Languages',
      image,
      technologies: [
        'Python',
        'Ruby',
        'HTML',
        'Javascript',
        'SQL',
      ],
    }, {
      id: '2',
      name: 'Frameworks',
      image: image2,
      technologies: [
        'Flask',
        'Ruby on Rails',
        'React',
        'Rspec',
        'Sellenium',
        'Bootstrap',
        'Capybara',
      ],
    }, {
      id: '3',
      name: 'Skills',
      image: image3,
      technologies: [
        'Github',
        'Netlify',
        'Heroku',
        'Git',
        'Terminal',
        'CodeClimate',
        'TravisCI',
      ],
    },
  ];

  return (
    <div className="row justify-content-center" id="skills">
      <Row xs={1} md={3} className="g-4 col-10 text-center">
        {mySkills.map((skill) => (
          <Col className="" key={skill.id}>
            <Card className="d-flex align-items-center pt-4 skillsCard">
              <img src={skill.image} alt="" className="iconImage" />
              <Card.Body>
                <h4>{skill.name}</h4>
                <section className="text-center">
                  {skill.technologies.map((technology) => (
                    <button key={technology} type="button" className="btn projectButton2 mx-1 mt-2">{technology}</button>
                  ))}
                </section>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Skills;
