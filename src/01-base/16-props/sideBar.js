import React from 'react'
import PropTypes from "prop-types";
export default function SideBar(props) {
const {bgColor,width,textColor,position} = props
    const obj1 = {
        backgroundColor: bgColor,
        color: textColor,
        padding: '10px',
        margin: '10px',
        border: '1px solid black',
        position:'fixed',
        width
    }

    const left = {
        left: '0px'
    }
    const right = {
        right: '0px'
    }

    const styleObj = position=='right'?  {...obj1,...right}: {...obj1,...left}
  return (
    <ul style={styleObj}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
  )
}
SideBar.prototype = {
    position: PropTypes.string,
    width: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}
SideBar.defaultProps = {
    position: 'left',
    width: '200px',
    bgColor: 'white',
    textColor: 'black'
}