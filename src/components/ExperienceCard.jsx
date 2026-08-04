function ExperienceCard(props){
    return(
        <>

            <div  className="experience-card">
                   <p>{props.title}</p>
                    <p>{props.date}</p>
                   <p>{props.description}</p> 

            </div>

     
        </>
    )
}
export default ExperienceCard

   