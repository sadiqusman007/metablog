import React from 'react'
import Layout from "../../layout"
import TechnologyCard from './components/technologycard'
import bannerImg from "../../images/home/banner.svg"
import bannerPicImg from "../../images/home/bannerpic.svg"
import './style.css'

const HomePage = () => {
  return (
  <Layout>
    <section>
      <div className="page_width">
        <div className="banner_section">
          <div className="banner_img"><img src={bannerImg} alt="" /></div>
        </div>
        <div className="banner_post">
          <button>Technology</button>
          <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
          <div className="post_detail">
            <div className="banner_post_img"><img src={bannerPicImg} alt="" /></div>
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
    </section>
    <section className="advertisement">
      <div className="advertisement_banner">
      <h4>Advertisement</h4>
      <h2>You can place ads</h2>
      <h3>750x100</h3>
      </div>
    </section>
    <TechnologyCard />
    <section className="advertisement">
      <div className="advertisement_banner">
      <h4>Advertisement</h4>
      <h2>You can place ads</h2>
      <h3>750x100</h3>
      </div>
    </section>
  </Layout>
  )
}

export default HomePage
