import React from 'react'
import home from './image/home1.jpg'
import './Home.css'
import image from './image/image.jpg';
;



var sectionStyle = {
    backgroundImage: `url(${home})`,
    height: "90vh",

};

var opacity = {
    background: "rgba(0, 0, 0, 0.8)",
    height: "90vh"
}
const Home = () => {

    return (
        <div style={sectionStyle}>
            <div style={opacity}  >
                <div className='container'>
                    <div className='container1'>

                        <p className="first">For The Best And Worst</p>
                        <br />
                        <br />
                        <h1 className="heading">
                            “Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.”
                        </h1>
                        <br /><br />
                        <p className='line'>____________________</p>
                        <br /><br />
                        <p className="main">
                            Even though you could go on and on about how awesome your best friends are, sometimes all you need is something short and sweet. These concise and charming quotes are perfect for friendship bracelets, crafts and cards alike.
                        </p>
                        <br /><br /><br /><br /><br />
                        <button className='btn'>View More</button>

                    </div>
                    <div className="container2">
                        <img src={image}  alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
