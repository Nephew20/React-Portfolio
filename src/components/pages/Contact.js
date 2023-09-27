import React from "react";
import '../../styles/contact.css'

const pdfURL = "https://drive.google.com/file/d/12eSLSTXyXdJWDbGVVrVa0cjb_JoqwYSC/view?usp=sharing"
function Contact() {

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
        <div className="contact-section">
            <div className="contact">
                <h2> Contact Me </h2>
                <p>Send me a message!</p>

                <form className="contact">
                    <label for="name">Name:</label> <br />
                    <input type="text" id="name" required />
                    <br />
                    <label for="email">Email Address:</label> <br />
                    <input type="email" id="email" required />
                    <br />
                    <label for="message">Message:</label> <br />
                    <textarea id="message" required />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                </form>

            </div>
            <div className="resume">
                <h2> Resume </h2>
                <p>Click below to download my Resume</p>
                <button className="resume-button" onClick={() => { downloadFileAtURL(pdfURL) }}> Download PDF </button>
            </div>

        </div>
    )
}

export default Contact;