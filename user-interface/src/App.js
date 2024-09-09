import './App.css';
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import portrait from './assets/portrait.jpeg';
import city_ico from './assets/house.svg';
import email_ico from './assets/email.svg';
import github_ico from './assets/github.svg';
import linkedin_ico from './assets/linkedin.svg';
import capstone_image from "./assets/reforestationmap.jpg";
import sparty_gnome from "./assets/spartygnomeimage.png";
import connectfour_image from "./assets/connectfourimage.png";
import animation_image from "./assets/animationimage.png";
import toolkit_image from "./assets/crypttoolkitimage.png";
import pantry_image from "./assets/smartpantryimage.png";
import movie_image from "./assets/movietoolimage.png";

/**
 * This function contains the code for the entire portfolio. 
 * Since the webpage can suffice as a single page application, there 
 * is no need for routing or other pages. The entire portfolio, 
 * a representation of my resume, will be displayed through here
 * 
 * @returns The JSX constructing the portfolio webpage
 */
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({ title: '', desc: '' });

  const openModalWithProject = (project) => {
    setCurrentProject(project);
    open();
  };

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="main-site-container">
      
      {/* 
        The header of the portfolio.
        Contains my name and a small description/introduction
      */}
      <header id="header-container">
        
        <Fade triggerOnce="true">
          <h1 id="header-name"> Hi, I'm Jack Holscher </h1>
        </Fade>
        <div>
            <TypeAnimation 
              sequence={[
                "I am a Developer",
                2250,
                "I am an Engineer",
                2250,
                "I am a Computer Scientist",
                2250,
                "I am a Problem Solver",
                2250
              ]}
              wrapper='h2'
              className="header-desc"
              speed={25}
              repeat={Infinity}
            />
          </div>
      </header>

      {/* 
        The first subsection of the portfolio, the about portion
      */}
      <section className="subsection-container">
        <Fade triggerOnce>
          <h3 className="subheading"> About </h3>
          <p id="about-text">
            As a senior computer science student at Michigan State University, I am passionate
            about development, engineering, and working with software  systems of all kind.
            I am constantly exploring new technologies and seeking innovative solutions to
            complex problems. Graduated in August of 2024, I aim to find a full-time
            position in the field of software engineering. I present this digital portfolio as
            a way to highlight my past work and experiences as I learned and evolved through my
            years as a student.
          </p>
        </Fade>

          <Fade triggerOnce direction='left'>
            <div id="portrait-education-container">
              <div id="portrait-container">
                <img src={portrait} alt="My Self Portrait" loading="lazy" />
              </div>
            
              <div id="education-container">
                <div id="school-grad-container">
                  <h4 id="school"> Michigan State University </h4>
                  <p id="graduation-container"> August 2024 </p>
                </div>
                
                <hr />
                <p id="degree"> Bachelor of Science, Computer Science </p>
                
                <p id="cognate"> Cognate in Social Science, Psychology </p>
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
                      jackson-holscher
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
          </Fade>
      </section>

      {/* 
        The second subsection of the portfolio, the skills portion
      */}
      <section id="skills-container" className="subsection-container">
          <Fade triggerOnce>
            <h3 className="subheading"> Skills </h3>
            <p id="skills-text">
              Welcome to the showcase of my technical proficiencies, a curated collection
              of skills that I have honed throughout my academic and personal endeavors in
              the realm of computer science. This section is more than just a testament to
              my expertise; it is a reflection of my journey in mastering various programming
              languages and technologies.
            </p>
          </Fade>
          <div id="skill-bar-container">
            <Fade triggerOnce cascade damping={0.05} direction='right'>
              <ProgressBar skill="Python" level="Advanced" percentage={100} />
              <ProgressBar skill="HTML/CSS/JavaScript" level="Advanced" percentage={100} />
              <ProgressBar skill="C++" level="Advanced" percentage={85} />
              <ProgressBar skill="React.JS" level="Intermediate" percentage={80} />
              <ProgressBar skill="Java/Android" level="Intermediate" percentage={75} />
              <ProgressBar skill="Algorithms" level="Intermediate" percentage={75} />
              <ProgressBar skill="Data Structures" level="Intermediate" percentage={65} />
              <ProgressBar skill="Flask" level="Intermediate" percentage={60} />
              <ProgressBar skill="C#" level="Beginner" percentage={30} />
              <ProgressBar skill="C" level="Beginner" percentage={20} />
            </Fade>
          
          </div>
      </section>

      {/* 
        The third subsection of the portfolio, the experiences portion
      */}
      <section className="subsection-container">
        <h3 className="subheading"> Experience </h3>
        
        <Fade triggerOnce cascade damping={0.05}>
          <Experience
            title="Michigan State University CSE Capstone"
            subtitle="Auto-Owners Design Day Exposition Award Winner"
            org="Anthropocene Institute"
            loc="Palo Alto, CA"
            start_date="August 2023"
            end_date="December 2023"
          >
            <li className="experience-bullet">
              Worked in a team, alongside the Anthropocene Institute, to develop a web
              application that utilized machine learning for the optimization of carbon
              dioxide removal from the atmosphere
            </li>
            <li className="experience-bullet">
              Helped develop the responsive/interactive user-interface using React.JS
              and Mapbox GL JS
            </li>
            <li className="experience-bullet">
              Wrote various scripts to collect data from the web as well as to format
              the data that was collected into a GeoJson format
            </li>
          </Experience>
          <Experience
            title="Undergraduate Teaching Assistant"
            subtitle="CSE 477: Web Application Development"
            org="Michigan State University"
            loc="East Lansing, MI"
            start_date="January 2023"
            end_date="May 2023"
          >
            <li className="experience-bullet">
              Advised a class of 180+ students on various web application development techniques
            </li>
            <li className="experience-bullet">
              Assisted students on full-stack applications using HTML/CSS/JavaScript with a
              Python Flask backend and a MySQL database
            </li>
            <li className="experience-bullet">
              Held weekly helprooms and monitored/answered questions on the course's
              question and answer form
            </li>
          </Experience>
          <Experience
            title="Golf Course Management Assistant"
            subtitle="Indoor Operations (Seasonal Employee)"
            org="The Loon Golf Resort"
            loc="Gaylord, MI"
            start_date="May 2022"
            end_date="Current"
          >
            <li className="experience-bullet">
              Oversee day-to-day operations of the golf course to ensure steady
              and smooth pace of play
            </li>
            <li className="experience-bullet">
              Provide customers and resort guests with
              assitance when needed, as well as to book tee times and reservations
            </li>
            <li className="experience-bullet">
              Sell various pro-shop merchandise and equipment to interested golfers
            </li>
          </Experience>
        </Fade>
      </section>

      {/* 
        The last subsection of the portfolio, the projects portion
      */}
      <section id="projects-container" className="subsection-container">
        <h3 className="subheading"> Projects </h3>
        <p id="projects-intro"> 
          The following links contain information on various projects that I have worked on in past courses and my personal time.
          Through these assignments, I have been able to apply my learning in real-world development challenges. 
          Click on the images to view a popup window with additional details on what the project entailed.
        </p>

        <Fade triggerOnce>
          <div className='project-links'>
            <ProjectButton
              title="Carbon Mapp - CSE Capstone"
              onClick={() => openModalWithProject({
                title: "Carbon Mapp - CSE Capstone",
                desc: "In my final year of college, I had the opportunity to work with the Anthropocene Insitute \
                to develop a web application for their company that focused on the optimization of carbon dioxide removal \
                from the atmosphere. Using machine learning, my team and I were able to analyze large datasets \
                containing geographical and financial data in order to determine the best locations in the country \
                to implement three different carbon removal technologies: direct air capture, reforestation, and \
                kelp farms. The output from the model is displayed on an interactive heatmap of the United States."
              })}
              image={capstone_image}
              desc="A link to the popup info window about my CSE Capstone project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Sparty Gnome Platformer - CSE 335 Project 1"
              onClick={() => openModalWithProject({
                title: "Sparty Gnome Platformer Game",
                desc: "For the first project in my software design course, I worked with a group to develop \
                a three-level platformer game, similar to Super Mario. Using OOP principles/design, my team \
                and I implemented all functionality from scratch, including the movement, levels, enemies, and powerups."
              })}
              image={sparty_gnome}
              desc="A link to the popup info window about my Sparty Gnome platformer game project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Connect Four Mobile Game - CSE 476 Project 1"
              onClick={() => openModalWithProject({
                title: "Connect Four Online Mobile Game",
                desc: "For the project in my mobile application design course, I worked with a group of peers \
                to develop a fully responsive online connect four game. After creating an account, the users are \
                prompted to sign in, which then routes them into a game room together. After playing and \
                confirming their move, the game board is updated on the opposing device. The layout and user \
                interface responds to fit devices of all sizes."
              })}
              image={connectfour_image}
              desc="A link to the popup info window abouut my Connect Four mobile game project"
            />
            <hr className='project-break' />
            <ProjectButton
              title="Animation System - CSE 335 Project 2"
              onClick={() => openModalWithProject({
                title: "Harold's Evil Laboratory - Animation System",
                desc: "For the second project in my software design class, I worked individually to \
                extend an animation system that I developed earlier in the semester. \
                The system comes with a set of pre-loaded scenes and actors, but allows for the addition \
                of custom elements as well. Users can move/rotate the actors around the scenes, capturing \
                keyframes as they go. Once finished, the animation/keyframe file can be saved, loaded, and \
                played from the system."
              })}
              image={animation_image}
              desc="A link to the popup info window about my animation system project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Cryptography Toolkit"
              onClick={() => openModalWithProject({
                title: "Encryption, Decryption, Hashing",
                desc: "In order to put security principles into practice, I created a simple cryptography tookit \
                using C++ and the OpenSSL library. The toolkit offers full functionality to the user for three different \
                security techniques: RSA encryption/decryption, AES encryption/decryption, and SHA-256 hashing."
              })}
              image={toolkit_image}
              desc="A link to the popup info window about my cryptography toolkit C++ project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="AI Smart Pantry"
              onClick={() => openModalWithProject({
                title: "Digital Pantry with AI Assistant",
                desc: "For this project, I implemented a fully functional digital pantry. The pantry stores \
                and tracks user groceries through the use of a barcode scanner. This inventory can then \
                be viewed and modified, and used ingredients/items are added to a running grocery list. \
                If the user needs inspriation for a recipe, they can utilize the GPT-3.5 AI assitant that will generate \
                a step by step recipe for them based on what they have in their pantry. Updated imageg coming soon."
              })}
              image={pantry_image }
              desc="A link to the popup info window about my smart pantry python project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="AI Movie Recommender"
              onClick={() => openModalWithProject({
                title: "AI Based Movie Recommendations",
                desc: "This is a simple Python project to work on machine learning principles. Trained \
                on data from almost 5,000 movies, the user simply has to enter a movie title that they enjoy, and the model \
                will find 50 similar films from the database based on genre, cast, director, summary keywords, and \
                original language. Updated image coming soon."
              })}
              image={movie_image}
              desc="A link to the popup info window about my AI movie reccomendation project"
            />

            <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
              {
                modalOpen
                &&
                <Modal
                  modalOpen={modalOpen}
                  handleClose={close}
                  text={currentProject.desc}
                  title={currentProject.title}
                />
              }
            </AnimatePresence>
          </div>
        </Fade>
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

/**
 * A component for one section of the experience portion of my portfolio
 * @param {*} props The data parameters that are passed thru the component tag
 * @returns A section of the experience portion, highlighting what I did, where and when
 */
const Experience = (props) => {
  return (
    <div className='experience-container'>
      <h4 className="experience-title"> {props.title} </h4>
      <h5 className="experience-subtitle"> {props.subtitle} </h5>
      <h5 className="experience-org"> <em> <b> {props.org} </b> ({props.loc}) </em>  </h5>
      <h5 className="experience-date"> {props.start_date} - {props.end_date} </h5>

      <ul className="experience-list">
        {props.children}
      </ul>
    </div>
  );
};

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div 
      className='backdrop' 
      onClick={onClick} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
};

const Modal = ({ handleClose, text, title }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="project-modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className='modal-title'> {title} </h2>
        <p className='modal-text'> {text} </p>
        <button onClick={handleClose}> Close </button>
      </motion.div>
    </Backdrop>
  );
};

const ProjectButton = ({ title, image, desc, onClick }) => {
  return (
    <div className='project-button-container' onClick={onClick}>
      <h2 className='project-button-title'> {title} </h2>
      <img
        className='project-image'
        src={image}
        loading='lazy'
        alt={desc}
      />
    </div>
  );
};

export default App;
