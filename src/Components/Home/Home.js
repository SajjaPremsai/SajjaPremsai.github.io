import React from 'react'
import "./Home.css"
import { useTypewriter } from 'react-simple-typewriter'
import img from "../../assets/Skills/myimg.png"
import BackToTopButton from '../BacktoTopButton/BacktoTopButton'


export default function Home() {
    const [text] = useTypewriter({
        words: [" Full Stack Developer", " AI Enthusiast", " Prem Sai"  ],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <section className='home' id='#'>
            <BackToTopButton />
            <div className='Description'>
                <header className='Header'>
                    Hi, I'm
                    <span style={{ color: '#EC4D37' }}>
                        {text}
                    </span>
                </header>
                <p className='Des'>
                    I’m currently working as an Apprentice at American Express. I enjoy building applications, exploring AI technologies, and working on ideas that solve real-world problems. I love collaborating with people to develop meaningful projects and sharing knowledge through teaching. I’m someone who likes learning by building — whether it’s full-stack development, AI systems, or experimenting with new technologies. I’m always curious about how things work behind the scenes and enjoy turning ideas into practical and user-friendly solutions.
                </p>
            </div>
            <div className='Image'>
                <img src={img} width={370} alt='' about='S.PREM SAI'/>
            </div>
        </section>
    )
}
