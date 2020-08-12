import React from 'react'
import { render } from 'react-dom'

const WithClass = props =>{
   return( <div className={props.classes}>
        {props.children}
    </div>)
}

export default WithClass