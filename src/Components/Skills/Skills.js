import React from 'react'
import "./Skills.css"
import java from "../../assets/Skills/java.svg"
import python from "../../assets/Skills/python.svg"
import Card from './Card.js/Card'
import git from "../../assets/Skills/git.svg"
import Node from "../../assets/Skills/nodejs.svg"
import Html from "../../assets/Skills/html.svg"
import Docker from "../../assets/Skills/docker.svg"
import Kuber from "../../assets/Skills/kubernets.svg"
import react from "../../assets/Skills/react.svg"
import css from "../../assets/Skills/css.svg"
import tensorflow from "../../assets/Skills/tensorflow.svg"
import numpy from "../../assets/Skills/numpy.svg"
import pandas from "../../assets/Skills/pandas.svg"
import matplotlib from "../../assets/Skills/matplotlib.svg"
import express from "../../assets/Skills/expressjs.svg"

export default function Skills() {
    const data = [
        {
            "id": 1,
            "title": "Core Java",
            "path": java
        },
        {
            "id": 2,
            "title": "Python",
            "path": python
        },
        {
            "id": 3,
            "title": "Git",
            "path": git
        },
        {
            "id": 4,
            "title": "Node",
            "path": Node
        },
        {
            "id": 5,
            "title": "Html",
            "path": Html
        },
        {
            "id": 6,
            "title": "CSS",
            "path": css
        },
        {
            "id": 7,
            "title": "React",
            "path": react
        },
        {
            "id": 8,
            "title": "Docker",
            "path": Docker
        },
        {
            "id": 9,
            "title": "Kubernetes",
            "path": Kuber
        },
        {
            "id": 10,
            "title": "Express",
            "path": express
        },
        {
            "id": 11,
            "title": "TensorFlow",
            "path": tensorflow
        },
        {
            "id": 12,
            "title": "NumPy",
            "path": numpy
        },
        {
            "id": 13,
            "title": "Pandas",
            "path": pandas
        },
        {
            "id": 14,
            "title": "Matplotlib",
            "path": matplotlib
        }
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