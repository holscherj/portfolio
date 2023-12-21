import './App.css';


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
        <h1 className="header-text" id="header-name"> Jack Holscher </h1>
        <h2 className="header-text" id="header-desc"> 
          I am a senior computer science student at Michigan State University.
          Passionate about development, engineering, and working with software
          systems of all kind, I am constantly exploring new technologies and 
          seeking innovative solutions to complex problems. Graduating in May 
          of 2024, I aim to find an intership or full-time position in the field
          of software engineering. I present this digital portfolio as a way to
          highlight my past work and experiences as I learned and evolved through
          my experience as a student.
        </h2>
      </header>

      {/* 
        The first subsection of the portfolio, the about portion
      */}
      <article className="subsection-container">
        <h3 className="subheading"> About </h3>
        {/* Picture
        Education
        Hometown
        Email
        LinkedIn
        GitHub */}
      </article>

      {/* 
        The second subsection of the portfolio, the skills portion
      */}
      <article id="skills-container" className="subsection-container">
        <h3 className="subheading"> Skills </h3>
      </article>

      {/* 
        The third subsection of the portfolio, the experiences portion
      */}
      <article className="subsection-container">
        <h3 className="subheading"> Experience </h3>
      </article>

      {/* 
        The last subsection of the portfolio, the projects portion
      */}
      <article id="projects-container" className="subsection-container">
        <h3 className="subheading"> Projects </h3>
      </article>

    </div>
  );
}

export default App;
