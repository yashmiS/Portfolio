import React from 'react'
import skills from '../../Data/skills.json'

export const Experience = () => {
  return <section id='experience'>
    <h2>Experience</h2>
    <div>
        <div>{
            skills.map((skill, id) =>{
                return <div key={id}>

                </div>
            })
            }
        <ul></ul>
        </div>
    </div>
  </section>
}
