
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import ExperienceCard from "./components/ExperienceCard"
import Navbar from "./components/Navbar"
import './App.css'


function App() {
  return (
    <>
      <Navbar/>
      <main>
       <Hero />
    
        <section id="projects" className="projects">
          <h1>Featured Projects</h1>

      <div className="project-grid">
         <ProjectCard
          title="F1 Trackside Dashboard"
          description="A Formula 1 dashboard for race results, driver standings, and more."
          tech="React, Vite, JavaScript, OpenF1 API "
          github="https://github.com/ayata30/f1-trackside"
          demo="https://f1-trackside-zeta.vercel.app/"
        />
     
       

        <ProjectCard
          title="QuranDetect"
          description="A Shazam inspired application that identifies Quranic verses from audio."
          tech=" React, Python, FastAPI,  Google Cloud, Docker, FastAPI"             
          github="https://github.com/ayata30/quran2"
          demo="https://qurandetect.vercel.app/"
           />
        </div>
      </section>
        

        
       <section id="experience" className="experience">
          <h1>Experience</h1>

    
        <ExperienceCard 
            title="Intuit Product Expert"
            date="Feb 2026 – April 2026  "
            description={[
            "Troubleshot technical, authentication, and account-related issues for 15+ TurboTax users daily,",
            "Achievied a 70% customer satisfaction score.",
            "Supported 100+ users weekly through TurboTax workflows and tax filing processes."
              ]}
            />  
            </section>

      <section className="experience">
        <ExperienceCard 
            title="City of El Paso Public Library — IT Intern"
            date="July 2025 – September 2025  "
            description={[
              "Supported students and staff with computer, software, and technical issues",
              "Assisted with computer lab operations and troubleshooting",
              "Provided technical support and helped maintain a productive lab environment."
            ]}
            />  
            </section>

           

           
      </main>     
       </>
   
  );
}

export default App;

