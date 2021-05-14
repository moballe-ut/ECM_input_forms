import React from 'react'
import styles from './Modal.module.css'
import Button from '../Button/Button'


const Modal = (props) => {
   
    return (
        <>
        <Button
        clicked={props.clicked}
        type="button"
        color='btn-primary'
        action="Find Projects"
        />
        <div>
            <div className={styles.modal}  style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0', backgroundColor: props.color}}>
                {props.children}
                <div className={styles.button}>
                <button className='btn btn-outline-danger' onClick={props.closed}>Close</button>
                </div>
             </div> 
        </div>
        </>
    )
}

export default Modal

