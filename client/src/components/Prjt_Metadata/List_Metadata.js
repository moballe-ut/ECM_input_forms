import React, { useState } from 'react'
import Modal from "../Modal/Modal"

const List_Metadata = () => {
    const [show, setShow] = useState(false)
    
    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
    }
    return (
        <div>
        <Modal show={show} closed={closeModal} clicked={openModal}/>
        </div>
    )
}

export default List_Metadata
