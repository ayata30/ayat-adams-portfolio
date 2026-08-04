function ProjectCard(props){
    return (
        <>

        
           <div className="project-card">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.tech}</p>
                <p> {props.github} </p>
                <p> {props.demo}</p>
            </div>
     
        </>


    )
}
export default ProjectCard