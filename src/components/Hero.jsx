import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt  }  from "react-icons/fa"

function Hero(){
    return (
     <>
       <h1> Ayat Adams </h1>
       <h3> Computer Science Student | Software Engineer</h3>
       <p> I build full-stack web applications using React, Python, FastApi and
          modern web technologies. I'm passionate about creating software and solving real problems.
        </p>



        <div className="social-icons">
        <a href="https://github.com/ayata30" target="_blank" rel="nonreferrer">
            <FaGithub /> Github </a>

        <a href="https://www.linkedin.com/in/ayat-adams/" target="_blank" rel="nonreferrer">
            <FaLinkedin />Linkedin </a>

        <a href="mailto:ayataadams@gmail.com">
            <FaEnvelope /> Email </a>

        <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <FaFileAlt /> Resume </a>
</div>


   
       </>

    )
}

export default Hero