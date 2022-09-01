import React from 'react'
import './map.css';

const Map = () => {
  return (
    <div class="embed-container">
      <iframe 
        width="500" 
        height="400" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        title="The Global Portal Test" 
        src="//www.arcgis.com/apps/Embed/index.html?webmap=af6dde01e4654a79a246bec495220888&
        extent=-87.863,32.9353,-63.6052,45.0273&zoom=true&previewImage=false&scale=true&search
        =true&searchextent=false&details=true&disable_scroll=true&theme=light">

      </iframe>
    </div>
    
    
  )
}

export default Map