function ExperienceCard(props){
    return(
        <>
            <article  className="experience-card">
                <h3>{props.title}</h3>
                   <p className="experience-date">{props.date}</p>

                   <ul>
                    {props.description.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </article>

     
        </>
    )
}
export default ExperienceCard;

   