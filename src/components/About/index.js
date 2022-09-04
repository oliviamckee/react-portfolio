import React from 'react';
import selfie from "../../assets/selfie.JPG";

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <div id="about">
                <img id="selfie" src={selfie} alt="Olivia with red hair,black eyeliner, and a black shirt" />
                <p id="bio">My name is Olivia, I am 25 years old, and I am a new web developer from Minneapolis. I grew up in Dallas, and moved here to Minneapolis for college. I have a B.S. in animal science with a pre-vet emphasis, and have been working as a vet tech for a few years. I am now enrolled in coding boot camp through the U of M and will soon be a full stack web developer.</p>
            </div>
        </section>
    );
}

export default About;