import React from 'react'
import Layout from "../../layout"
import TechnologyCard from '../homePage/components/technologycard'
import './style.css'
import jonathanImg from "../../images/pages/JonathanDoe.svg"

const PagesPage = () => {
  return (
    <Layout>
      <section>
        <div className="page_width">
          <div className="jonathan">
            <div className="jonathan_top"><img src={jonathanImg} alt="" />
            <div>
            <h2>Jonathan Doe</h2>
            <h6>Collaborator & Editor</h6>
            </div>
            </div>
            <p>Meet Jonathan Doe, a passionate writer and blogger with a love for<br/> technology and travel. Jonathan holds a degree in Computer Science and<br /> has spent years working in the tech industry, gaining a deep understanding<br /> of the impact technology has on our lives.</p>
          </div>
        </div>
      </section>
      <TechnologyCard />
    </Layout>
  )
}

export default PagesPage
