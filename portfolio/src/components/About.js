import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <div className='mainAbout'>
            <div className='headAbout'>
                About Me
            </div>

            <div className='bodyAbout'>
                Hello there! I'm currently a second-year student pursuing a Bachelor's degree in Computer Science at Vellore Institute of Technology (VIT). My journey into the world of technology began with a deep fascination for how computers work and the endless possibilities they offer in shaping our future.
                At VIT, I've been fortunate to immerse myself in a dynamic learning environment that encourages both theoretical knowledge and practical application. From algorithm design to software development, every course has been a stepping stone in honing my skills and broadening my understanding of the field.
                Outside of academics, I'm actively involved in various extracurricular activities, including coding competitions, hackathons, and tech workshops. These experiences not only enhance my technical proficiency but also foster creativity and teamwork, essential qualities in today's rapidly evolving tech landscape.
                As I progress through my education, I'm eager to explore specialized areas within computer science, such as artificial intelligence, cybersecurity, and data science. I believe in the power of technology to drive positive change and am committed to leveraging my skills to tackle real-world challenges and contribute meaningfully to society.
            </div>

            <div className='headAbout'>
                Skills
            </div>

            <div className='skillMain'>

                <div className='skillDiv'>
                    <p>HTML</p>
                </div>
                <div className='skillDiv'>
                    <p>CSS</p>
                </div>
                <div className='skillDiv'>
                    <p>Javascript</p>
                </div>
                <div className='skillDiv'>
                    <p>Node JS</p>
                </div>
                <div className='skillDiv'>
                    <p>React JS</p>
                </div>
                <div className='skillDiv'>
                    <p>C++</p>
                </div>
                <div className='skillDiv'>
                    <p>JAVA</p>
                </div>
                <div className='skillDiv'>
                    <p>Python</p>
                </div>
                <div className='skillDiv'>
                    <p>CyberSecurity</p>
                </div>
            </div>

        </div>
    );
}

export default About;