import "./about.css";
import mypic from "../../img/mypic.jpg";
import react from "../../img/tech/react.png";
import javascript from "../../img/tech/javascript.png";
import java from "../../img/tech/java.png";
import css3 from "../../img/tech/css3.png";
import html from "../../img/tech/html.png";
import mongodb from "../../img/tech/mongodb.png";
import nodejs from "../../img/tech/nodejs.png";
import git from "../../img/tech/git.png";
import redux from "../../img/tech/redux.png";
import bootstrap from "../../img/tech/bootstrap.png";
import linux from "../../img/tech/linux.png";
import mui from "../../img/tech/mui.png";
import firebase from "../../img/tech/firebase.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={mypic}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          {/* It is a long established fact that a reader will be distracted by the
          readable content. */}
        </p>
        <p className="a-desc">
          I'm currently a <b>Btech CSE</b> student at Gurugram university. My expertise live in the field of <b>software engineering</b> and I have got a firm base on <b>Data Strurctures and Algorithms</b> along with good software engineering practices.
        </p>
        <p className="a-desc">I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me.</p>
        <div className="a-award">
          <div className="a-texts">
            <h3 className="a-title">Tech Stack</h3>
            <div className="a-grid">
              <img className="a-tech" src={react} alt="" />
              <img className="a-tech" src={javascript} alt="" />
              <img className="a-tech" src={java} alt="" />
              <img className="a-tech" src={css3} alt="" />
              <img className="a-tech" src={html} alt="" />
              <img className="a-tech" src={mongodb} alt="" />
              <img className="a-tech" src={nodejs} alt="" />
              <img className="a-tech" src={git} alt="" />
              <img className="a-tech" src={redux} alt="" />
              <img className="a-tech" src={linux} alt="" />
              <img className="a-tech" src={bootstrap} alt="" />
              <img className="a-tech" src={mui} alt="" />
              <img className="a-tech" src={firebase} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
