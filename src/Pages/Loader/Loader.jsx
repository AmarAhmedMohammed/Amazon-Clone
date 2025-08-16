import React from 'react'
import {FadeLoader} from 'react-spinners'

function Loader() {
  return (
    <div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "50vh", color: "red"}}>
            <FadeLoader color='purple'/><br />
        </div>
    </div>
  )
}

export default Loader