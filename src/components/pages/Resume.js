import React from "react";


const pdfURL = "https://drive.google.com/file/d/12eSLSTXyXdJWDbGVVrVa0cjb_JoqwYSC/view?usp=sharing"
function Resume() {

    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop()
        console.log(fileName)
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove()
    }
    
    return (
        <div>
            <h1> Resume </h1>
            <p>Click below to download my Resume</p>
            <button onClick={() =>{downloadFileAtURL(pdfURL)}}> Download PDF </button>
        </div>
    )
}

export default Resume