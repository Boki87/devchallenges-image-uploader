import {useState, useEffect} from 'react'

import DragAndDrop from './DragAndDrop'

import './UploadForm.css'

const UploadForm = ({setLoading, setFileUploaded, setImgUrl}) => {

    const [file, setFile] = useState(false)

    useEffect(() => {
        if(file) {
            uploadFile()
        }
    }, [file])

    const handleChosenFile = (e) => {        
        if(e.target.files.length > 0) {
            
            setFile(e.target.files[0])
            
        }
    }

    const handleDroppedFile = (file) => {        
        setFile(file)        
    }

    const uploadFile = async () => {
        
        if(file) {
            
            setLoading(true)
            try {
                
                
                let formData = new FormData()
                formData.append('file', file)

                const req = await fetch(`http://localhost:8080/upload`, {
                    method: 'POST',
                    body: formData
                })
                const res = await req.json()
                setLoading(false)
                
                setFileUploaded(true)
                setImgUrl(res.fileDestination)
            }catch(err) {
                console.log(err);
                setLoading(false)
                setFileUploaded(false)
            }

        }
    }

    return (
        <div className='upload_form'>
            <span className="text1">Upload your image</span>
            <span className="text2">File should be Jpeg or Png</span>

            <DragAndDrop handleDrop={handleDroppedFile}/>

            <span className='text2'>Or</span>

            <label htmlFor='chooseFileInput' className='choose_file_btn'>Choose a file</label>
            <input onInput={handleChosenFile} id='chooseFileInput' type="file" style={{display:'none'}}/>
        </div>
    )
}

export default UploadForm
