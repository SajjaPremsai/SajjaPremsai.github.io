import React from 'react'
import "./Home.css"
import { useTypewriter } from 'react-simple-typewriter'
import img from "../../assets/Skills/myimg.png"
import BackToTopButton from '../BacktoTopButton/BacktoTopButton'


export default function Home() {
    const [text] = useTypewriter({
        words: [" Full Stack Developer", " Software Developer", " Prem Sai"  ],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <section className='home' id='#'>
            <BackToTopButton />
            <div className='Description'>
                <header className='Header'>
                    Hii I'm
                    <span style={{ color: '#EC4D37' }}>
                        {text}
                    </span>
                </header>
                <p className='Des'>
                  a soon-to-be B.Tech graduate with a passion for development. I
                  specialize in Java, Python, data structures, problem solving,
                  and web development. Explore my portfolio as I showcase my
                  skills and projects, ready to make an impact in the tech
                  industry. Let's connect and create something extraordinary
                  together.
                </p>
            </div>
            <div className='Image'>
                <img src={img} width={370} alt='' about='S.PREM SAI'/>
            </div>
        </section>
    )
}
