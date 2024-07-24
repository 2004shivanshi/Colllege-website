import React from 'react'
import '../assets/mainPage.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <>
<Header/>
<Navbar/>



<section id="home" className="hero">
<div className="hero-content">
    <h1>Welcome to IPS Academy Alumni Portal</h1>
    <button className="cta-button">Create Your Profile</button>
</div>
</section>
{/* <!-- image section ended --> */}

<section id="about">
<div className="container slider flex justify-between">
    <div className="slide">
        <h2 className='text-xl font-bold'>About Us</h2>
        <p className=''>IPS Academy is dedicated to providing quality education and fostering a vibrant alumni network.</p>
        <div className="btnIn"><button>Read More</button></div>
    </div>
    <div className="slide">
        <h2 className='text-xl font-bold'>Mission</h2>
        <p>Our mission is to nurture talent and create an impact on society through our alumni.</p>
        <div className="btnIn"><button>Read More</button></div>
    </div>
    <div className="slide">
        <h2 className='text-xl font-bold'>Vision</h2>
        <p>Our vision is to be a leading  institute recognized globally for excellence in education and research.</p>
        <div className="btnIn"><button>Read More</button></div>
    </div>
</div>
</section>

<section id="events">
<div className="container slider flex justify-between">
    <div className="slide">
        <h2 className='text-xl font-bold'>Upcoming Events</h2>
        <h3>Annual Alumni Meet</h3>
        <p>Date: June 30, 2024</p>
        <p>Join us for a grand reunion </p>
        <div className="btnIn"><button>View Details</button></div>
    </div>
    <div className="slide">
        <h2 className='text-xl font-bold'>Webinars</h2>
        <p>Date: July 15, 2024</p>
        <p>Learn about the latest trends in technology from industry experts.</p>
        <div className="btnIn"><button>View Details</button></div>
    </div>
    <div className="slide">
        <h2 className='text-xl font-bold'>TED X IPSA Indore</h2>
        <p>Date: 31 March, 2024</p>
        <p>Learn about the latest trends in technology from industry experts.</p>
        <div className="btnIn"><button>View Details</button></div>
    </div>
</div>
</section>
{/* <!--  --> */}

<section id="alumni">
<div className="container slider flex justify-between">
    <div className="slide alumni">
        <h2 className='text-xl font-bold'>Notable Alumni</h2>
        <div className="alumni-profile flex">
            <img src="src/assets/alumini.jpg" alt="Alumni 1"/>
            <div className=''>
            <h3 className='font-semibold'>Anupama</h3>
            <p>Anupama is a renowned software engineer at XYZ Corp.</p>
            </div>
        </div>
    </div>
    <div className="slide alumni">
        <h2 className='text-xl font-bold'>Notable Alumni</h2>
        <div className="alumni-profile flex">
            <img src="src/assets/alumini.jpg" alt="Alumni 2"/>
            <div>
            <h3 className='font-semibold'>Sharan</h3>
            <p>Sharan is a successful entrepreneur and founder of ABC Ltd.</p>
            </div>
        </div>
    </div>
    <div className="slide alumni">
        <h2 className='text-xl font-bold'>Notable Alumni</h2>
        <div className="alumni-profile flex">
            <img src="src/assets/alumini.jpg" alt="Alumni 2"/>
            <div>
            <h3 className='font-semibold'>Sharan</h3>
            <p>Sharan is a successful entrepreneur and founder of ABC Ltd.</p>
            </div>
        </div>
    </div>
    <div className="slide alumni">
        <h2 className='text-xl font-bold'>Testimonials</h2>
        <blockquote>"The institute provided me with the skills and network to succeed in my career." - Alumni 1</blockquote>
        <blockquote>"I cherish the memories and connections I made here." - Alumni 2</blockquote>
    </div>
</div>
</section>

<section id="contact">
<div className="container">
    <h2 >Contact Us</h2>
    <form id="contact-form">
        <label for="name">Name</label>
        <input className='border-2 border-black rounded-[5px]' type="text" id="name" name="name" required />
        <label for="email">Email</label>
        <input className='border-2 border-black rounded-[5px]' type="email" id="email" name="email" required />
        <label for="message">Message</label>
        <textarea className='border-2 border-black rounded-[5px]' id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
    </form>
    
</div>
</section>

<footer>
<div className="footer">
    <div className="contact-info">
        <p>Address: Rajendra nagar, Indore, M.P , India</p>
        <p>Phone: 1800 000 000</p>
        <p>Email: contact@ipsacademy.org</p>
    </div>
    <div className="group">
        <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
        </div>
        <p>&copy; 2024 IPS Academy. All rights reserved.</p>
    </div>
    
</div>
</footer>

    
    
    </>
  )
}

export default Home