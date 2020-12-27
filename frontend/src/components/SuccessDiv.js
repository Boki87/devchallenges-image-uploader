import './SuccessDiv.css'

const SuccessDiv = ({imgUrl}) => {

    const copyText = () => {

        navigator.clipboard.writeText(imgUrl).then(function() {
            window.alert('Copying to clipboard was successful!');
          }, function(err) {
            window.alert('Could not copy text: ', err);
          });

    }


    return (
        <div className='success_div'>
            <div className="check">
                <span className="material-icons">
                    check
                </span>
            </div>
            <span className="text1">Uploaded Successfully!</span>

            <div className='img_container'>
                <img src={imgUrl} alt=""/>
            </div>

            <div className='input_container'>
                <input type="text" defaultValue={imgUrl}/>
                <button onClick={copyText}>Copy link</button>
            </div>
        </div>
    )
}

export default SuccessDiv
