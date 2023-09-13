import React from "react";

function Contact() {
    return (
        <div className="contact-section">
            <h2> Contact </h2>


            <form>
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
    )
}

export default Contact;