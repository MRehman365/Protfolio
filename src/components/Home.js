import React from 'react';
import Image from './rehman22.png';
import './style.css';
import HTML from './html5-logo-png-transparent-5.png';
import CSS from './css-3-logo.png';
import Javascript from './png-javascript-badge-picture-8.png';
import Boostrap from './bootstrap-png-bootstrap-512.png';
import ReactJS from './react_logo_2.png';
import client1 from './Fotolia_53201519_Subscription_XXL.jpg';
import client2 from './e53c6bfa45da3f684fda60c4b21b1307.jpg';
import client3 from './hassan_asghar600x600.png'
import car from './supercar.png'

const Home = () => {
  return (
    <>
    <div className='body'>
      <div className='profile  mt-5'>
        <div className='profile-text  d-flex flex-column justify-content-center align-items-center text-center '>
          <h1>Hi I'm Rehman</h1>
          <p>I am a Fronted Developer working in Maxify Company Pvt Ltd. I am interested in coding, finding errors, developing and customizing Websites, and learn more about coding.</p>
        </div>
        <div className='profile-img'>
          <div className="img-back"><img className='image' src={Image} alt="my Picture" /></div>
          
        </div>
      </div>
      <div className='skills  mt-3'>
        <h1 className='text-center my-skill heading container-fluid'>My Skills</h1>
        <section className="layout  ">
          <div className='layout-box'><img className='png' src={HTML} alt="html" />⭐⭐⭐⭐⭐</div>
          <div className='layout-box'><img className='png' src={CSS} alt="css" />⭐⭐⭐⭐⭐</div>
          <div className='layout-box'><img className='png' src={Javascript} alt="" />⭐⭐⭐</div>
          <div className='layout-box'><img className='png' src={Boostrap} alt="" />⭐⭐⭐⭐</div>
          <div className='layout-box'><img className='png' src={ReactJS} alt="" />⭐⭐⭐⭐</div>
        </section>
      </div>
      <div className="row row-cols-1 text-center row-cols-md-3 container-xxxl review">
    <h1 className='text-center my-skill heading container-fluid mt-2'>Clients Reviews</h1>
    <div className="col mt-2">
        <div className="card h-100">
            <div className='client'><img className='clint-img' src={client1} class="card-img-top" alt="..."/></div>
            <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">Working with M Rehman was a fantastic experience! Their expertise in frontend technologies shines through in every project they undertake. From responsive layouts to seamless interactions, they have a knack for bringing designs to life. What I appreciated most was their dedication to understanding our vision and translating it into a visually stunning website. M Rehman is definitely someone you want on your team</p>
            </div>
            <div className="card-footer">
                <small className="text">Review 5.0 ⭐⭐⭐⭐⭐ Date: 02/02/2024</small>
            </div>
        </div>
    </div>
    <div className="col mt-2">
        <div className="card h-100">
            <div className='client'><img className='clint-img' src={client3} class="card-img-top" alt="..."/></div>
            <div className="card-body">
                <h5 className="card-title">Hassan</h5>
                <p className="card-text">I had the pleasure of collaborating with M Rehman on a frontend project recently, and I must say, I was thoroughly impressed! Their attention to detail and creativity in designing user interfaces is unmatched. Not only did they deliver exceptional results, but they also went above and beyond to ensure the project met all requirements. I highly recommend Rehman for any frontend development needs.</p>
            </div>
            <div className="card-footer">
                <small className="text">Review 4.0 ⭐⭐⭐⭐ Date: 10/04/2024</small>
            </div>
        </div>
    </div>
    <div className="col mt-2">
        <div className="card h-100">
            <div className='client'><img className='clint-img' src={client2} class="card-img-top" alt="..."/></div>
            <div className="card-body">
                <h5 className="card-title">Michael Anderson</h5>
                <p className="card-text">I've worked with many frontend developers in the past, but none have impressed me as much as Muhammad Rehman. Their passion for frontend development is evident in the quality of their work. They have a knack for solving complex problems with elegant solutions, and their attention to detail is second to none. If you're looking for a talented frontend developer who can bring your ideas to life, look no further than Muhammad Rehman</p>
            </div>
            <div className="card-footer">
                <small className="text">Review 5.0 ⭐⭐⭐⭐⭐ Date: 24/04/2024</small>
            </div>
        </div>
    </div>
</div>
</div>
<div className='car'><img src={car} alt="" /></div>
    </>
  )
}

export default Home;
