import React from 'react';
import photoPort from "../../assets/photo-port-screenshot.png";
import pizzaHunt from "../../assets/pizza-hunt-screenshot.png";
import techBlog from "../../assets/tech-blog-screenshot.png";
import fictionalGuacamole from "../../assets/fictional-guacamole-screenshot.png";
import zookeepr from "../../assets/zookeepr-screenshot.png";
import noteTaker from "../../assets/note-taker-screenshot.png";

function Project() {
    const projects = [
        {
            name: "Photography Portfolio",
            imgsrc: photoPort,
            link: "http://oliviamckee.github.io/photo-port/"
        },
        {
            name: "Pizza Hunt",
            imgsrc: pizzaHunt,
            link: "http://calm-dusk-73146.herokuapp.com/"
        },
        {
            name: "Tech Blog",
            imgsrc: techBlog,
            link: "http://limitless-meadow-47462.herokuapp.com/"
        },
        {
            name: "Fictional Guacamole",
            imgsrc: fictionalGuacamole,
            link: "http://fictional-guacamole.herokuapp.com/"
        },
        {
            name: "Zookeepr",
            imgsrc: zookeepr,
            link: "http://marvelous-haleakala-66668.herokuapp.com/"
        },
        {
            name: "Note Taker",
            imgsrc: noteTaker,
            link: "http://radiant-stream-53083.herokuapp.com/"
        }
    ];

    return (
        <div id="gallery">
            {projects.map((project) => (
                <a key={project.name} href={project.link}>
                    <div style={{ backgroundImage: `url(${project.imgsrc})` }}>
                        <div>
                            <h3>{project.name}</h3>
                            <img src={project.imgsrc} alt="screenshot of app"></img>
                        </div>
                    </div>
                </a>
            ))
            }

        </div >
    );
}

export default Project;