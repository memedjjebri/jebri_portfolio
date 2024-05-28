import {
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { educations } from "../data/data";

import CssLogo from "../assets/images/css.png";
import ReactLogo from "../assets/images/react.png";
import HtmlLogo from "../assets/images/html.png";
import JsLogo from "../assets/images/js.png";
import GitLogo from "../assets/images/git.png";
import GithubLogo from "../assets/images/github.png";
import SassLogo from "../assets/images/sass.png";
import TailwindLogo from "../assets/images/tailwind.png";
import MysqlLogo from "../assets/images/mysql.png";
import FigmaLogo from "../assets/images/figma.png";

import NodeLogo from "../assets/images/node.png";
const AsideComp = () => {
  return (
    <>
      <aside>
        <div className="section contacts">
          <div className="contact-item">
            <EnvironmentOutlined />
            <span>Marseille , FRANCE</span>
          </div>
          <div className="contact-item">
            <MailOutlined />
            <span>
              <a href="https://mail.google.com/mail/">memedjjebri@gmail.com</a>
            </span>
          </div>
          <div className="contact-item">
            <GithubOutlined />
            <span>
              <a href="https://github.com/memedjjebri">
                memedjjebri@github.com
              </a>
            </span>
          </div>
          <div className="contact-item">
            <LinkedinOutlined />
            <span>
              <a href="https://www.linkedin.com/in/mohamed-jebri-3a11047b">
                https://www.linkedin.com/in/mohamed-jebri
              </a>
            </span>
          </div>
          <div className="contact-item"></div>
        </div>
        <div className="section">
          <h2>Compétences</h2>
          <p>
            Une maîtrise des langages de programmation web tels que HTML, CSS et
            JavaScript, ainsi que des frameworks et bibliothèques associés comme
            React ou Vue.js. Une compréhension approfondie des concepts de
            développement web.Une capacité à résoudre des problèmes, à
            travailler en équipe et à m'adapter rapidement aux nouvelles
            technologies sont également mes compétences essentielles pour
            réussir dans ce domaine.
          </p>

          <div className="skills">
            <div className="skill">
              <div className="full"></div>
            </div>
            <div className="skill">
              <span>Javascript - React js</span>
              <div className="full">
                <div className="percent second"></div>
              </div>
            </div>
            <div className="skill">
              <span>HTML, CSS, SCSS,Tailwind</span>
              <div className="full">
                <div className="percent third"></div>
              </div>
            </div>
            <div className="skill">
              <div className="full"></div>
            </div>
            <div className="logos">
              <img src={HtmlLogo} alt="" />
              <img src={CssLogo} alt="" />
              <img src={NodeLogo} alt="" />
              <img src={JsLogo} alt="" />
              <img src={ReactLogo} alt="" />
              <img src={SassLogo} alt="" />
              <img src={TailwindLogo} alt="" />
              <img src={GitLogo} alt="" />
              <img src={GithubLogo} alt="" />
              <img src={MysqlLogo} alt="" />
              <img src={FigmaLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Centre d'interet</h2>
          <p>Sport</p>
          <p>Cinéma</p>
          <p>Voyages</p>
          <p>Musique</p>
        </div>
        <div className="section">
          <h2>Éducation</h2>
          {educations.map((item, index) => {
            return (
              <div className="education-item" key={index}>
                <h3>{item.title}</h3>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div className="section">
          <h2>Langues</h2>
          <div className="language-item">
            <h3>Francais</h3>
            <span>Locuteur natif</span>
            <div className="full">
              <div className="percent first"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>Arabe</h3>
            <span>Locuteur natif</span>
            <div className="full">
              <div className="percent first"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>Anglais</h3>
            <span>Competances professionnelles</span>
            <div className="full">
              <div className="percent second"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideComp;
