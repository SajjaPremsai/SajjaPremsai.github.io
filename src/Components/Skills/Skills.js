import React from 'react'
import "./Skills.css"
import java from "../../assets/Skills/java.svg"
import python from "../../assets/Skills/python.svg"
// import ai from "../../assets/Skills/ai.svg"
import github from "../../assets/Skills/github.svg"
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
// import scikitlearn from "../../assets/Skills/scikit-learn.svg"
import javascript from "../../assets/Skills/JavaScript.svg"
import maven from "../../assets/Skills/Apache Maven.svg"
import mysql from "../../assets/Skills/MySQL.svg"
// import mongodb from "../../assets/Skills/mongodb.svg"
import php from "../../assets/Skills/PHP.svg"
// import flask from "../../assets/Skills/flask.svg"
import fastapi from "../../assets/Skills/FastAPI.svg"
import mcp from "../../assets/Skills/mcp.svg"
import mcpinspector from "../../assets/Skills/mcpinspector.svg"
import typescript from "../../assets/Skills/typescript.png"
import langchain from "../../assets/Skills/langchain-color.svg"
import langgraph from "../../assets/Skills/langgraph-color.svg"


export default function Skills() {
  const data = [
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
    {
      id: 3,
      title: "GitHub",
      path: github,
    },
    {
      id: 4,
      title: "HTML",
      path: Html,
    },
    {
      id: 5,
      title: "CSS",
      path: css,
    },
    {
      id: 6,
      title: "JavaScript",
      path: javascript,
    },
    {
      id: 7,
      title: "TypeScript",
      path: typescript,
    },
    {
      id: 8,
      title: "React",
      path: react,
    },
    {
      id: 9,
      title: "Node",
      path: Node,
    },
    {
      id: 10,
      title: "Express",
      path: express,
    },
    {
      id: 11,
      title: "FastAPI",
      path: fastapi,
    },
    {
      id: 12,
      title: "PHP",
      path: php,
    },
    {
      id: 13,
      title: "MySQL",
      path: mysql,
    },
    {
      id: 15,
      title: "Spring",
      path: spring,
    },
    {
      id: 16,
      title: "Hibernate",
      path: hibernate,
    },
    {
      id: 17,
      title: "JUnit5",
      path: junit5,
    },
    {
      id: 18,
      title: "Maven",
      path: maven,
    },
    {
      id: 19,
      title: "Git",
      path: git,
    },
    {
      id: 20,
      title: "Docker",
      path: Docker,
    },
    {
      id: 21,
      title: "MCP",
      path: mcp,
    },
    {
      id: 22,
      title: "MCP Inspector",
      path: mcpinspector,
    },
    {
      id: 23,
      title: "LangChain",
      path: langchain,
    },
    {
      id: 24,
      title: "LangGraph",
      path: langgraph,
    },
    {
      id: 26,
      title: "TensorFlow",
      path: tensorflow,
    },
    {
      id: 28,
      title: "NumPy",
      path: numpy,
    },
    {
      id: 29,
      title: "Pandas",
      path: pandas,
    },
    {
      id: 30,
      title: "Matplotlib",
      path: matplotlib,
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