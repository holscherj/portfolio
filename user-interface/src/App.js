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
import house_plant from "./assets/houseplant.jpg";
import shell_image from "./assets/shellimage.png";
import cocktaild_image from './assets/cocktaild.JPG'

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
  const [currentProject, setCurrentProject] = useState({ title: '', desc: '', link: null });

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
                "I am a Software Engineer",
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
            I'm a software engineer with a year of professional experience, working primarily
            on full-stack web applications. I graduated from Michigan State University in August
            2024 with a degree in Computer Science and have been building production software
            since. I'm always looking for new technologies to dig into and enjoy working on
            problems that go beyond the surface level. This portfolio highlights the projects
            and experiences that got me to where I am.
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
                    <p id="city"> Metro Detroit </p>
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
              Here's a look at the languages and technologies I've worked with, both
              professionally and in my own time. The bars reflect my honest self-assessment
              of where I stand with each.
            </p>
          </Fade>
          <div id="skill-bar-container">
            <Fade triggerOnce cascade damping={0.05} direction='right'>
              <ProgressBar skill="Python" level="Advanced" percentage={100} />
              <ProgressBar skill="HTML / CSS / JavaScript" level="Advanced" percentage={100} />
              <ProgressBar skill="React.JS" level="Advanced" percentage={95} />
              <ProgressBar skill="TypeScript" level="Advanced" percentage={90} />
              <ProgressBar skill="Node.js / Express" level="Advanced" percentage={85} />
              <ProgressBar skill="C++" level="Advanced" percentage={85} />
              <ProgressBar skill="SQL / Databases" level="Intermediate" percentage={75} />
              <ProgressBar skill="Java / Spring Boot" level="Intermediate" percentage={70} />
              <ProgressBar skill="AWS" level="Intermediate" percentage={70} />
              <ProgressBar skill="GitLab CI/CD / Terraform" level="Intermediate" percentage={70} />
              <ProgressBar skill="Next.js" level="Intermediate" percentage={65} />
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
            title="Full-Stack Software Engineer"
            org="Ally Financial"
            loc="Metro Detroit, MI"
            start_date="March 2025"
            end_date="Present"
          >
            <li className="experience-bullet">
              Build and maintain a React/TypeScript web application with a Node.js/Express
              backend, serving as the primary user-facing layer in a platform of loosely
              coupled, independently deployable microservices
            </li>
            <li className="experience-bullet">
              Design and develop REST APIs consumed across multiple services in the platform
            </li>
            <li className="experience-bullet">
              Work extensively with AWS across deployments, load balancing/scaling, S3,
              VPC, IAM, and Secrets Manager
            </li>
            <li className="experience-bullet">
              Contribute to Java/Spring Boot services and support ETL pipelines built
              with Pentaho Data Integration
            </li>
            <li className="experience-bullet">
              Manage infrastructure and CI/CD pipelines through GitLab and Terraform
            </li>
          </Experience>
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
        </Fade>
      </section>

      {/* 
        The last subsection of the portfolio, the projects portion
      */}
      <section id="projects-container" className="subsection-container">
        <h3 className="subheading"> Projects </h3>
        <p id="projects-intro">
          A collection of projects built throughout my time in school and on my own.
          Click on any image to see more details.
        </p>

        <Fade triggerOnce>
          <div className='project-links'>
            <ProjectButton
              title="Cocktaild"
              onClick={() => openModalWithProject({
                title: "A Daily Cocktail Guessing Game",
                desc: "Cocktaild is a daily cocktail guessing game inspired by Wordle. Players get 6 \
                attempts to identify a mystery cocktail, with each wrong guess revealing a new clue: glassware, \
                category, appearance, ingredients, base spirit, and a photo. Built with Next.js 14 (App Router) \
                and TypeScript, styled with Tailwind CSS and shadcn/ui. Game state persists via localStorage with \
                cross-device sync for authenticated users through Supabase. Auth supports email/password and Google OAuth. \
                Player stats, guess distributions, streaks, and a cocktail favorites collection are all stored in Supabase \
                with row-level security. Deployed to Vercel with zero-config CI/CD on push.",
                link: "https://playcocktaild.com"
              })}
              image={cocktaild_image}
              desc="A link to the popup info window about my daily cocktail guessing game project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Carbon Mapp - CSE Capstone"
              onClick={() => openModalWithProject({
                title: "Carbon Mapp - CSE Capstone",
                desc: "In my final year of college, I worked with the Anthropocene Institute to build a web \
                application focused on optimizing carbon dioxide removal from the atmosphere. Using machine learning, \
                my team analyzed large datasets of geographical and financial data to determine the best locations \
                in the country for three carbon removal technologies: direct air capture, reforestation, and kelp farms. \
                Results are displayed on an interactive heatmap of the United States, highlighting data at the state and county levels."
              })}
              image={capstone_image}
              desc="A link to the popup info window about my CSE Capstone project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="AI Smart Pantry"
              onClick={() => openModalWithProject({
                title: "Digital Pantry with AI Assistant",
                desc: "A fully functional digital pantry that tracks groceries using a barcode scanner. \
                The inventory can be viewed and modified, and used items are automatically added to a running \
                grocery list. A GPT-3.5 powered assistant can generate step-by-step recipes based on whatever \
                is currently in your pantry."
              })}
              image={pantry_image}
              desc="A link to the popup info window about my smart pantry python project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="AI Movie Recommender"
              onClick={() => openModalWithProject({
                title: "AI Based Movie Recommendations",
                desc: "A Python project built to explore content-based filtering and machine learning. \
                Trained on data from nearly 5,000 movies, users enter a title they enjoy and the model returns \
                50 similar films based on genre, cast, director, keywords, and original language."
              })}
              image={movie_image}
              desc="A link to the popup info window about my AI movie recommendation project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Connect Four Mobile Game"
              onClick={() => openModalWithProject({
                title: "Connect Four Online Mobile Game",
                desc: "Built with a group for my mobile application design course, this is a fully responsive \
                online Connect Four game. After signing in, players are routed into a shared game room where \
                each move syncs to the opponent's device in real time. The layout adapts to fit screens of all sizes."
              })}
              image={connectfour_image}
              desc="A link to the popup info window about my Connect Four mobile game project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Indoor Gardening Tool"
              onClick={() => openModalWithProject({
                title: "House Plant",
                desc: "A mobile app built with Flutter to help plant enthusiasts keep track of their \
                house plants. Features a browsable database of plants with care info like watering schedules, \
                sunlight needs, and growth cycles. Users can tap into any plant for more detail, favorite ones \
                they want to grow, and manage their personal garden from a dedicated tab."
              })}
              image={house_plant}
              desc="A link to the popup info window about my home gardening tool project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Cryptography Toolkit"
              onClick={() => openModalWithProject({
                title: "Encryption, Decryption, Hashing",
                desc: "A cryptography toolkit written in C++ using the OpenSSL library. It provides full \
                implementations of three security techniques: RSA encryption/decryption, AES encryption/decryption, \
                and SHA-256 hashing."
              })}
              image={toolkit_image}
              desc="A link to the popup info window about my cryptography toolkit C++ project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Basic UNIX Shell"
              onClick={() => openModalWithProject({
                title: "Simple UNIX Shell Written in C",
                desc: "A simple UNIX shell written in C. Implements core shell functionality: reading \
                input, parsing commands, and executing them using fork() and execvp(). Supports standard \
                commands like ls, echo, and pwd with error handling for invalid inputs."
              })}
              image={shell_image}
              desc="A link to the popup info window about my UNIX shell project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Sparty Gnome Platformer"
              onClick={() => openModalWithProject({
                title: "Sparty Gnome Platformer Game",
                desc: "Built with a group in my software design course, this is a three-level platformer game \
                written in C++ using OOP design principles. My team implemented everything from scratch: \
                movement, levels, enemies, and powerups."
              })}
              image={sparty_gnome}
              desc="A link to the popup info window about my Sparty Gnome platformer game project"
            />
            <hr className='project-break'/>
            <ProjectButton
              title="Animation System"
              onClick={() => openModalWithProject({
                title: "Harold's Evil Laboratory - Animation System",
                desc: "An animation system built individually as part of my software design course. It comes \
                with pre-loaded scenes and actors, but supports custom elements as well. Users can move and \
                rotate actors across scenes, capturing keyframes as they go. Finished animations can be saved, \
                loaded, and played back from within the system."
              })}
              image={animation_image}
              desc="A link to the popup info window about my animation system project"
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
                  link={currentProject.link}
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
      {props.subtitle && <h5 className="experience-subtitle"> {props.subtitle} </h5>}
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

const Modal = ({ handleClose, text, title, link }) => {
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
        <button onClick={handleClose} className='modal-button'> Close </button>
        {link && <button onClick={() => window.open(link, '_blank', 'noreferrer')} className='modal-button'> Try it Out </button>}
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
