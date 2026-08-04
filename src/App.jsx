
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
        tech="React • OpenF1 API"
        github="..."
        demo="..."
        />

        <ProjectCard
        title="Al Kashif"
        description="Quran audio recognition application."
        tech="React • FastAPI • MongoDB"
        github="..."
        demo="..."
        />
        </section>


       <section className="experience">
        <ExperienceCard 
            title="Intuit Product Expert"
            date="Feb 2026 – Present  "
            description="• Helped customers... • Resolved technical issues... teammates"
            />  
            </section>
       </>
   
  )
}

export default App
