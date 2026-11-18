function ProjectCard(props){
    return (
        <>

        
           <div className="project-card">
                <h3>{props.title}</h3>
                <p>{props.description}</p>

                <p className="project-tech">{props.tech}</p>

                <div className="project-links">
               <a href={props.github}  target="_blank" rel="nonopener noreferrer">
               Github ↗️</a>
          
               
               
                <a href={props.demo} target="_blank" rel="nonopener noreferrer">
                    Live Demo ↗️</a> 
            </div>
            
     </div>
        </>
        


    )
}
export default ProjectCard