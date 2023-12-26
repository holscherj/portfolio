import './App.css';
import portrait from './assets/portrait.jpeg';
import city_ico from './assets/house.svg';
import email_ico from './assets/email.svg';
import github_ico from './assets/github.svg';
import linkedin_ico from './assets/linkedin.svg';


/**
 * This function contains the code for the entire portfolio. 
 * Since the webpage can suffice as a single page application, there 
 * is no need for routing or other pages. The entire portfolio, 
 * a representation of my resume, will be displayed through here
 * 
 * @returns The JSX constructing the portfolio webpage
 */
function App() {
  return (
    <div className="main-site-container">
      
      {/* 
        The header of the portfolio.
        Contains my name and a small description/introduction
      */}
      <header id="header-container">
        <h1 className="header-text" id="header-name"> Hi, I'm Jack Holscher </h1>
        <div>
          <h2 className="header-text" id="header-desc">
            As a senior computer science student at Michigan State University, I am
            passionate about development, engineering, and working with software
            systems of all kind. I am constantly exploring new technologies and 
            seeking innovative solutions to complex problems. Graduating in May 
            of 2024, I aim to find an intership or full-time position in the field
            of software engineering. I present this digital portfolio as a way to
            highlight my past work and experiences as I learned and evolved through
            my experience as a student.
          </h2>
        </div>
      </header>

      {/* 
        The first subsection of the portfolio, the about portion
      */}
      <section className="subsection-container">
        <h3 className="subheading"> About </h3>
        <p id="about-text"> 
          From the very start of my academic journey in computer science, I've embarked on a path
          of continual growth and diverse skill acquisition. Throughout my tenure as a student, my
          experiences have shaped me into a proficient and versatile technologist, adept in languages
          like Python, C++, Java, and the intricacies of web design. My interests span the broad
          spectrum of computer science, where each new concept presents an intriguing challenge and
          an opportunity for innovation. Among these, I have developed a profound passion for artificial
          intelligence and frontend design. These fields, in particular, captivate me with their blend
          of creativity and technical complexity 
        </p>

        <div id="portrait-education-container">
          <div id="portrait-container">
            <img src={portrait} alt="My Self Portrait" loading="lazy" />
          </div>
          
          <div id="education-container">
            <h4 id="school"> Michigan State University </h4>
            <hr />
            <p id="degree"> Bachelor of Science, Computer Science </p>
            <span id="graduation-container"> <p id="graduation"> Grad. May 2024 </p> </span>
            <p id="cognate"> Cognate in Social Science, Psychology </p>
            <span id="graduation-container"> <p id="graduation"> Grad. May 2024 </p> </span>

            <div className="info-container">
              <span id="city-container">
                <img src={city_ico} alt="Home Icon" loading="lazy" className="icon" />
                <p id="city"> Gaylord, Michigan </p>
              </span>
              <span id="email-container">
                <img src={email_ico} alt="Email Icon" loading="lazy" className="icon" />
                <a className="info-link" href="mailto:holsche2@msu.edu"> holsche2@msu.edu </a>
              </span>
            </div>

            <div className="info-container">
              <span id="linkedin-container">
                <img src={linkedin_ico} alt="LinkedIn Icon" loading="lazy" className="icon" />
                <a
                  className="info-link"
                  href="https://www.linkedin.com/in/jackson-holscher/"
                  target="_blank"
                  rel="noreferrer"
                >
                  holsche2@msu.edu
                </a>
              </span>
              <span id="github-container">
                <img src={github_ico} alt="GitHub Icon" loading="lazy" className="icon" />
                <a
                  className="info-link"
                  href="https://github.com/holscherj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  holscherj
                </a>
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 
        The second subsection of the portfolio, the skills portion
      */}
      <section id="skills-container" className="subsection-container">
        <h3 className="subheading"> Skills </h3>
        <p id="skills-text"> 
          Welcome to the showcase of my technical proficiencies, a curated collection
          of skills that I have honed throughout my academic and personal endeavors in 
          the realm of computer science. This section is more than just a testament to
          my expertise; it's a reflection of my journey in mastering various programming 
          languages and technologies.
        </p>
        <div id="skill-bar-container">
          <ProgressBar skill="Python" level="Advanced" percentage={100} />
          <ProgressBar skill="C++" level="Advanced" percentage={100} />
          <ProgressBar skill="HTML/CSS/JavaScript" level="Advanced" percentage={100} />
          <ProgressBar skill="React.JS" level="Intermediate" percentage={80} />
          <ProgressBar skill="Java/Android" level="Intermediate" percentage={75} />
          <ProgressBar skill="Algorithms" level="Intermediate" percentage={75} />
          <ProgressBar skill="Data Structures" level="Intermediate" percentage={65} />
          <ProgressBar skill="Flask" level="Intermediate" percentage={60} />
          <ProgressBar skill="C" level="Beginner" percentage={30} />
          <ProgressBar skill="C#" level="Beginner" percentage={20} />
        
        </div>
      </section>

      {/* 
        The third subsection of the portfolio, the experiences portion
      */}
      <section className="subsection-container">
        <h3 className="subheading"> Experience </h3>
      </section>

      {/* 
        The last subsection of the portfolio, the projects portion
      */}
      <section id="projects-container" className="subsection-container">
        <h3 className="subheading"> Projects </h3>
      </section>

    </div>
  );
}

/**
 * Function for a reusable statis progress bar to represent
 * my knowledge of various skills. 
 * @param {String} skill The name of the skill
 * @param {String} level The knowledge level of the skill
 * @param {Integer} percentage The integer percentage of my knowledge for the bar
 * @returns 
 */
const ProgressBar = ({ skill, level, percentage }) => {
  return (
    <div className="progress-container">
      <div className="skill-name">
        <p className="skill"> {skill} </p> 
        <p className="level"> {level} </p>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default App;
