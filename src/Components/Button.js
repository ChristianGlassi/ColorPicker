import React from 'react'

const Button = ({props}) => {
    
    const color = props
    const background = document.getElementById('color2').style
    
    return (
        <button  id="colorButton" style={{backgroundColor: color}} 
        onClick={() => (background.backgroundColor = color)}></button>
    )
}
 
export default Button