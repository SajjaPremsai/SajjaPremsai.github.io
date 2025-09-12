import React from 'react'
import "./Skills.css"
import java from "../../assets/Skills/java.svg"
import python from "../../assets/Skills/python.svg"
import Card from './Card.js/Card'
import git from "../../assets/Skills/git.svg"
import Node from "../../assets/Skills/nodejs.svg"
import Html from "../../assets/Skills/html.svg"
import Docker from "../../assets/Skills/docker.svg"
import react from "../../assets/Skills/react.svg"
import css from "../../assets/Skills/css.svg"
import tensorflow from "../../assets/Skills/tensorflow.svg"
import numpy from "../../assets/Skills/numpy.svg"
import pandas from "../../assets/Skills/pandas.svg"
import matplotlib from "../../assets/Skills/matplotlib.svg"
import express from "../../assets/Skills/expressjs.svg"
import hibernate from "../../assets/Skills/Hibernate.svg"
import spring from "../../assets/Skills/Spring.svg"
import junit5 from "../../assets/Skills/JUnit.svg"
import scikitlearn from "../../assets/Skills/scikit-learn.svg"
import javascript from "../../assets/Skills/JavaScript.svg"
import maven from "../../assets/Skills/Apache Maven.svg"


export default function Skills() {
    const data = [
  // Programming Languages
  {
    id: 1,
    title: "Core Java",
    path: java,
  },
  {
    id: 2,
    title: "Python",
    path: python,
  },

  // Web Development
  {
    id: 3,
    title: "HTML",
    path: Html,
  },
  {
    id: 4,
    title: "CSS",
    path: css,
  },
  {
    id: 5,
    title: "JavaScript",
    path: javascript, // ✅ Fixed
  },
  {
    id: 6,
    title: "React",
    path: react,
  },
  {
    id: 19,
    title:"Node",
    path:Node
  },
  {
    id: 7,
    title: "Express",
    path: express,
  },

  // Frameworks (Java)
  {
    id: 8,
    title: "Spring",
    path: spring,
  },
  {
    id: 9,
    title: "Hibernate",
    path: hibernate,
  },
  {
    id: 10,
    title: "JUnit5",
    path: junit5,
  },
  {
    id: 11,
    title: "Maven", // ✅ Added Maven
    path: maven,
  },

  // Tools
  {
    id: 12,
    title: "Git",
    path: git,
  },
  {
    id: 13,
    title: "Docker",
    path: Docker,
  },

  // Data Science & ML
  {
    id: 14,
    title: "NumPy",
    path: numpy,
  },
  {
    id: 15,
    title: "Pandas",
    path: pandas,
  },
  {
    id: 16,
    title: "Matplotlib",
    path: matplotlib,
  },
  {
    id: 17,
    title: "Scikit-learn",
    path: scikitlearn,
  },
  {
    id: 18,
    title: "TensorFlow",
    path: tensorflow,
  },
];



    return (
        <section className='Skills reveal' id='Skills'>
            <div className='S-Header'>
                <header>Skills</header>
            </div>
            <div className='S-Card'>
                {data.map((item) => {
                    return (
                        <Card item={item} key={item.id} className="CardItem" />
                    )
                })}
            </div>
        </section>
    )
}