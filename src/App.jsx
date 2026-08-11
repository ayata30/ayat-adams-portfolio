
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import ExperienceCard from "./components/ExperienceCard"
import './App.css'


function App() {


  return (
    <>
       <Hero/>
    
        <section className="projects">
          <ProjectCard
        title="F1 Trackside Dashboard"
        description="Live Formula 1 dashboard using the OpenF1 API."
        tech="React, Vite, JavaScript, OpenF1 (REST) API "
        github="..."
      
        />

        <ProjectCard
        title="QuranDetect"
        description="Quran audio recognition application."
        tech=" React, Python, FastAPI,  Google Cloud, Docker, FastApi"             
        github="..."
        demo="https://qurandetect.vercel.app/"

        />
        </section>


       <section className="experience">
        <ExperienceCard 
            title="Intuit Product Expert"
            date="Feb 2026 – April 2026  "
            description="Troubleshot technical, authentication, and account-related issues for 15+ TurboTax users daily
            •Achievied a 70% customer satisfaction score.
•Supported 100+ users weekly through TurboTax workflows and tax filing processes
"
            />  
            </section>

      <section className="experience">
        <ExperienceCard 
            title="IT Intern"
            date="July 2025 – September 2025  "
            description="Supported students and staff with computer, software, and technical issues
• Assisted with computer lab operations and troubleshooting
• Provided technical support and helped maintain a productive lab environment"
            />  
            </section>

             <section className="experience">
        <ExperienceCard 
            title="Ixlayer Extern"
            date=" November 2024 - December 2024 "
            description="Supported students and staff with computer, software, and technical issues
• Assisted with computer lab operations and troubleshooting
• Provided technical support and helped maintain a productive lab environment"
            />  
            </section>



            
       </>
   
  )
}

export default App

