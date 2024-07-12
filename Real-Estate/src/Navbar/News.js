import React from 'react'
import img4 from '../images/img_news.jpg'

const News = () => {
  return (
    <div >
      <h1>Dylan Davies News</h1>
     <div className="newsimg">  <img className="img" src={img4} alt="news" ></img> </div>
     <div className="imgh2"><h2 > Creating Healthy Homes</h2> </div>
     <div className="imgp"><p > In our quest for healthier living, we often overlook the significance of our homes. From the quality of air we breathe to the amount of natural light that fills our spaces, every aspect influences our health and vitality. We delve into the importance of natural daylight and air circulation in creating healthier homes.</p> </div>
    </div>
  )
}

export default News