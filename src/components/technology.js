import React from 'react'

const Technology = ({avatar,heading,impact,pic,fname,created}) => {
  return (
    <div>
      <div className="technology">
        <div className="technology_topview">
          <div className="technology_topview_img"><img src={avatar} alt="" />
          <h5>{heading}</h5>
          <p>{impact}</p>
          </div>
        </div>
        <div className="technology_bottomview">
          <div className="tchnology_bottomview_img"><img src={pic} alt="" /></div>
          <div className="technology_bottomview_textpart">
            <h4>{fname}</h4>
            <p>{created}</p>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Technology
