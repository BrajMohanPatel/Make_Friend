import React from 'react'
import './About.css'
import image from './image/image.jpg'

var stylew = {
    height: "200px",
    width: "200px",
    padding: "10px"
}
var text = {
    textAlign: "center",
    color: "black",
    padding:"10px",
    fontSize:"2.3rem"
}
const About = () => {
    return (
        <div>
            <div className='main-container'>

                <h1 style={text}>Our Team</h1>
                <div className="row">


                    <div className="column">
                        <div className="card">
                            <img src={image} alt="Mike" style={stylew} />
                            <div className="container3">
                                <h2 className="person-name">Mike Ross</h2><br />
                                <p className='text'>Art Director</p><br />
                                <p className='text'> Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae rerum esse consectetur. Tempora distinctio libero, aliquid voluptate, reiciendis iste inventore, eius assumenda iusto necessitatibus a ex modi temporibus. Veritatis dolorum cum, id maiores consequuntur facere iste dicta magni neque. Ullam laborum ab dolore rerum nulla cupiditate inventore est voluptatibus.that describes me lorem ipsum ipsum lorem.</p><br />
                                <p className='email'>mike@example.com</p><br />
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={image} alt="John" style={stylew} />
                            <div className="container3">
                                <h2 className="person-name">John Doe</h2><br />
                                <p className='text' >Designer</p><br />
                                <p className='text'>Some text that describes me lorem ipsum ipsum lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores obcaecati libero delectus earum, consectetur a perspiciatis veritatis minus cupiditate magni. Aut praesentium quidem, ullam natus rerum nemo, aliquam consectetur eligendi tempore dolorum quos porro re Lorem ipsum dolor sit amet. praesentium soluta quos amet?.</p><br />
                                <p className='email'>john@example.com</p><br />
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
