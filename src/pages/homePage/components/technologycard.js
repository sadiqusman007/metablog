import React from 'react'
import Technology from '../../../components/technology'
import TechImg01 from "../../../images/home/tech01.svg"
import TechImg02 from "../../../images/home/tech02.svg"
import TechImg03 from "../../../images/home/tech03.svg"
import TechImg04 from "../../../images/home/tech04.svg"
import TechImg05 from "../../../images/home/tech05.svg"
import TechImg06 from "../../../images/home/tech06.svg"
import TechImg07 from "../../../images/home/tech07.svg"
import TechImg08 from "../../../images/home/tech08.svg"
import TechImg09 from "../../../images/home/tech09.svg"
import PicImg01 from "../../../images/home/pic01.svg"
import PicImg02 from "../../../images/home/pic02.svg"
import PicImg03 from "../../../images/home/pic03.svg"
import PicImg04 from "../../../images/home/pic04.svg"
import PicImg05 from "../../../images/home/pic05.svg"
import PicImg06 from "../../../images/home/pic06.svg"
import PicImg07 from "../../../images/home/pic07.svg"
import PicImg08 from "../../../images/home/pic08.svg"
import PicImg09 from "../../../images/home/pic09.svg"

const TechnologyCard = () => {
  return (
    <div>
      <div className="page_width">
        <div className="technology">
        <div className="top_part">
            <div className="title">
            <h2>Latest Post</h2>
            </div>
        </div>
        <div className="client_card">
            <Technology avatar={TechImg01} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg01} fname='Tracey Wilson' created='August 20, 2022' />
            <Technology avatar={TechImg02} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg02} fname='Tracey Wilson' created='August 20, 2022' />
            <Technology avatar={TechImg03} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg03} fname='Tracey Wilson' created='August 20, 2022' />
            <Technology avatar={TechImg04} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg04} fname='Tracey Wilson' created='August 20, 2022' />
            <Technology avatar={TechImg05} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg05} fname='Tracey Wilson' created='August 20, 2022' />
            <Technology avatar={TechImg06} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg06} fname='Tracey Wilson' created='August 20, 2022' />
            <Technology avatar={TechImg07} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg07} fname='Tracey Wilson' created='August 20, 2022' />
            <Technology avatar={TechImg08} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg08} fname='Tracey Wilson' created='August 20, 2022' />
            <Technology avatar={TechImg09} heading='Technology' impact='The Impact of Technology on the Workplace: How Technology is Changing'
            pic={PicImg09} fname='Tracey Wilson' created='August 20, 2022' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyCard
