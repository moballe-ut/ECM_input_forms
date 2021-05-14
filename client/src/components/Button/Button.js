import React from 'react'
import styles from "./Button.module.css"

const Button = (props) => {
    return (
        <div>
            <button 
                type={props.type} 
                className={`btn ${props.color}  
                mb-3 
                ${styles.mobile}`}
                onClick={props.clicked}

            >
                    {props.action}
            </button>
        </div>
    )
}

export default Button
