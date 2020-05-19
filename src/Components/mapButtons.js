import React from 'react'
import Button from './Button'

const Map = ({colors}) => (
    <>
    {
        colors.map((color, key) => (
        <div id='buttons' key={key}>
            <Button props={color} />
        </div>
        ))
    }
    </>
)

export default Map