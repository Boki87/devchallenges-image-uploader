import {useState} from 'react'
import UploadForm from './components/UploadForm'
import SuccessDiv from './components/SuccessDiv'

import './App.css';

function App() {

  const [isLoading, setLoading] = useState(false)
  const [fileUploaded, setFileUploaded] = useState(false)

  const [imgUrl, setImgUrl] = useState('')


  const handleLoading = (isLoading) => {    
    setLoading(isLoading)
  }


  const handleFileUploaded = (isUploaded) => {
    setFileUploaded(isUploaded)
  }

  return (
    <div className="app">
      
      {
        !isLoading && !fileUploaded && 
        <UploadForm 
          setLoading={handleLoading} 
          setFileUploaded={handleFileUploaded}
          setImgUrl={setImgUrl}
        />
      }

      {
        isLoading && 
        <div className='progress_container'>
          <span className='text1'>Uploading...</span>
          <div className='progress'></div>
        </div>
      }

      {
        fileUploaded && 
        <SuccessDiv imgUrl={imgUrl}/>
      }


    </div>
  );
}

export default App;
