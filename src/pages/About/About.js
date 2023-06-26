import "./About.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='about'>
      <h2>
        Sobre o <span>Twillo</span>
      </h2>
      <p>
        Este projeto consiste em uma rede social desenvolvida com React no front-end e Firebase
        no back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Novo post
      </Link>
    </div>
  );
};

export default About;
