import React from 'react';
import Stack from "../../assets/Stack.png";
import surgeon from "../../assets/surgeon.png";
import video from "../../assets/video.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";

import "./Body.css";

const Body = () => {
  return (
    <>
        <div className='first'>
            <div className='content-1'>
                <h2 className='why-work'> Why Work with us</h2>
                <p className='why-content'>
                    Cras at pellentesque eros. Nullam vitae sapien et felis eleifend luctus. Nam ac dui cursus, 
                    efficitur ante sed, tempor sapien. Praesent nec mattis enim. Mauris a laoreet purus. 
                </p>
                <div className='list-stack'>
                    <div className='list-1'>
                        <img src={Stack} alt="stack"/>
                        <div className='list-content'>
                        <p className='list-head'>User Experience Design Team.</p>
                        <p className='list-para'>Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. </p>
                        </div>
                    </div>
                    <div className='list-1'>
                        <img src={Stack} alt="stack"/>
                        <div className='list-content'>
                        <p className='list-head'>Simple & Clean Line of Code</p>
                        <p className='list-para'>Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. </p>
                        </div>
                    </div>
                    <div className='list-1'>
                        <img src={Stack} alt="stack"/>
                        <div className='list-content'>
                        <p className='list-head'>Simple & Clean Line of Code</p>
                        <p className='list-para'>Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='work-img'>
                <img src={surgeon} alt="working-man"/>
            </div>
        </div>

        <div className='second'>
            <div className='head'>
                <p className='head-1'>The easiest way to operate </p>
                <p className='head-2'>Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.</p>
            </div>
            <img src={video} alt='workers' className='image'/>
        </div>

        <div className='third'>
            <div className='header'>
                <p className='header-topic'>Say hello to our team members</p>
                <p className='header-para'>Praesent sagittis eros in convallis rutrum. Donec auctor nibh justo. Vestibu tincidunt, libero sit amet vestibulum euismod, ex nisl imperdiet leo.</p>
            </div>
            <div className='image-list'>
                <div className='img-box'>
                    <img src={person1} alt=''/>
                    <p className='name'>Devon Lane</p>
                    <p className='post'>CEO & Founder of Gilio</p>
                </div>
                <div className='img-box'>
                    <img src={person2} alt=''/>
                    <p className='name'>Kristin Watson</p>
                    <p className='post'>UI Designer</p>
                </div>
                <div className='img-box'>
                    <img src={person3} alt=''/>
                    <p className='name'>Jacob Jones</p>
                    <p className='post'>Product Designer</p>
                </div>
                <div className='img-box'>
                    <img src={person4} alt=''/>
                    <p className='name'>Esther Howard</p>
                    <p className='post'>Front-end Developer</p>
                </div>
                <div className='img-box'>
                    <img src={person5} alt=''/>
                    <p className='name'>Devon Lane</p>
                    <p className='post'>CEO & Founder of Gilio</p>
                </div>
            </div>        
        </div>

        <div className='fourth'>
            <p>Our Client</p>
            <p>Testimonial</p>
            <div>
                <p>
                    When applied to building block a website or similar work product, 
                    a Visual Guide can be an intermediate step toward the end goal of a complete website. 
                    By creating a visual guide along the way, the designer or developer can get 
                    input from the other people involved in the website 
                    such as the customer, their manager, and other members of the team.
                    </p>
            </div>
        </div>
    </>
  )
}

export default Body