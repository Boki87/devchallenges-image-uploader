import {useState} from 'react'

import './DragAndDrop.css'
import ExampleImg from '../assets/image.svg'

const DragAndDrop = ({handleDrop}) => {

    

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()         
    }

    const handleDragEnter = (e) => {
        e.preventDefault()
        e.stopPropagation()      
       
    }
    const handleDragLeave = (e) => {
        e.preventDefault()
        e.stopPropagation()        

    }



    const dropHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        if(e.dataTransfer.files.length > 0) {
            handleDrop(e.dataTransfer.files[0])
        }        
     
    }



    return (
        <div
            className='dragAndDrop'
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={dropHandler}
        >
                
                    <div className='onDragOver'></div>
                

                <div className='drag_container_inner'>
                    <img src={ExampleImg} alt=""/>
                    <span className='text2'>Drag and drop your image here</span>
                </div>

        </div>
    )
}

export default DragAndDrop
