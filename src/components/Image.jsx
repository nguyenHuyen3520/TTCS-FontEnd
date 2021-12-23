import React from 'react'

const Image = (props) => {
    const {height, width, src} = props
    return (
        <div style={{width: `${width}px`, height: `${height}`}}>
            <img src={src} alt=""  style={{ width: "100%", height: "100%", objectFit: "cover"}}/>
        </div>
    )
}

export default Image
