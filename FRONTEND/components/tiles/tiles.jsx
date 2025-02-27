import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Tile() {
   
  const projectImages = {
    southMeadowsLibrary: [
      '/southMeadowsLibrary/1.jpeg',
      '/southMeadowsLibrary/2.jpeg',
      '/southMeadowsLibrary/3.jpeg',
      '/southMeadowsLibrary/4.jpeg',
      '/southMeadowsLibrary/5.jpeg',
      '/southMeadowsLibrary/6.jpeg',
      '/southMeadowsLibrary/7.jpeg',
      '/southMeadowsLibrary/8.jpeg',
      '/southMeadowsLibrary/9.jpeg',
      '/southMeadowsLibrary/10.jpeg',
      '/southMeadowsLibrary/11.jpeg'
    ],

    churchSite: [

    ],
    byteBackChat: [

    ],
    serverBlog: [

    ],
    guessTheNumber: [

    ]
  }
  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Infinite scroll
    speed: 500,  // Slide speed
    slidesToShow: 1,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll at once
  };
 
  
  return (
    <main>
      {/* first tile */}
    <div className="tiles-full-body"> 
    <div className="tiles-image-cover-carousel">
    {/* <Slider {...settings}> 
    {projectImages.southMeadowsLibrary.map((image, index) => (
      <div key={index}>
      <img className="carousel-image" 
      src={image} 
      alt={`Image ${index + 1}`} 
      />
    </div>
    ))}
    </Slider> */}
   </div>
    <div className="tiles-main-description"> 
    <h1 className="projectTitle">South Meadows Library</h1>
    <p className="tiles--project-summary"> 
    South Meadows Library is an online library lending app that allows users to borrow and lend books, games, and miscellaneous items. It features a main library, personal library, and various management tools like item tracking, editing, and deletion. Users can access a settings page to update their information or delete their account, as well as an inbox for borrow request notifications. Built with React, SCSS, JavaScript, MongoDB, and JSON.
    </p>
   </div>
   <div className="tiles-links"> 
    <a> git hub </a>
   </div>
   </div>
   {/* end of div section for first section */}
   </main>
  )
}



// TODO LEFT OFF AT TILES. NEED TO REDUCE PIC AND ADD CLASSNAMES FOR STYLING

    {/* second tile */}
    {/* <div className="tiles-big-body"> 
    <div className="tiles-body">
    <img src="/tiles_icon/2.png" alt="portfolio-img"/> 
    <h1 className="projectTitle"> 
    Welcome church </h1>
    </div>
    </div>
    {/* third tile */}
    {/* <div className="tiles-big-body"> 
    <div className="tiles-body">
    <img src="/tiles_icon/2.png" alt="portfolio-img"/> 
    <h1 className="projectTitle"> 
  Byte Back Chat</h1>
    </div>
    </div> */}
    {/* 4th tile */}
    {/* <div className="tiles-big-body"> 
    <div className="tiles-body">
    <img src="/tiles_icon/2.png" alt="portfolio-img"/> 
    <h1 className="projectTitle"> 
    Guess the number </h1>
    </div>
    </div> */}
    {/* 5th tile */}
    {/* <div className="tiles-big-body"> 
    <div className="tiles-body">
    <img src="/tiles_icon/2.png" alt="portfolio-img"/> 
    <h1 className="projectTitle"> 
  Server Blog</h1>
    </div>
    </div>  */}
