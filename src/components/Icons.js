/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  FaGithubSquare,
  FaAngellist,
  FaLinkedinIn,
  FaMedium,
} from 'react-icons/fa';

const Icons = () => (
  <div>
    <a href="https://github.com/Emmanuelaaron" className="mx-3"><FaGithubSquare /></a>
    <a href="https://angel.co/u/emmanuel-isabirye"><FaAngellist /></a>
    <a href="https://www.linkedin.com/in/fullstackwebdev-emma/" className="mx-3"><FaLinkedinIn /></a>
    <a href="https://medium.com/@emmanuelisabirye9"><FaMedium /></a>
  </div>
);

export default Icons;
