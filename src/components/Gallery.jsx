import React from 'react'
import  "../styles/Gallery.css";

const Gallery = () => {
  return (
<>

<div className="gallery ">
    <h1>PICTURE SPEAKS</h1>
    <div className="gallery-container p-one">
<div  className="pictures first1"></div>
<div  className="pictures first2"></div>
<div  className="pictures first3"></div>
    </div>
    <div className="gallery-container p-two">
    <div  className="pictures second1"></div>
<div  className="pictures second2">
    
</div>
<div  className="pictures second3"></div>
    </div>
    <div className="gallery-container p-three">
    <div  className="pictures third1"></div>
<div  className="pictures third2"></div>
<div  className="pictures third3"></div>
    </div>
</div>
</>
  )
}

export default Gallery