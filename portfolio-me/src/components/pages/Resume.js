import React from "react";


const pdfURL = "http://localhost:3000/Resume.pdf"
function Resume() {

    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop()
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
            <button onClick={() =>{downloadFileAtURL(pdfURL)}}></button>
        </div>
    )
}

export default Resume