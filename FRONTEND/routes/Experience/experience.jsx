// TODO first section will be professional journey (work history)
// TODO create tiles ( 2 per row)
// TODO TILES [ company name, job title, and dates, ]
// TODO second section will be EDUCATION
// TODO 2 tiles per row
// TODO TILES [ school name, degree or certificate, years attended]

import React from 'react';
import Nav from '../../components/Nav/nav';
import Footer from "../../components/footer/footer"

export default function Experience() {
    return(

<div className="experience-body"> 
    <Nav/>
    <div className="Prof-body">
        <h1 className="Prof-title"> Professional Journey</h1>
        {/* beginning of professional journey tiles, using grid style for rows  */}
        <div className="prof-tile-group-grid">
{/* first tile */}
<div className="journey-tile" > 
<h1 className="j-emoji"> 🏢 </h1>
<h1 className="tile-title"> Welcome church Internship</h1>
<h2 className="tile-job"> web developer/ lead tech </h2>
<h3 className="tile-date"> 2024 </h3>
</div>
{/* second tile */}
<div className="journey-tile" > 
<h1 className="j-emoji"> 🏢 </h1>
<h1 className="tile-title"> Net Pay Advance</h1>
<h2 className="tile-job"> Collections advocate</h2>
<h3 className="tile-date">2018-2022 </h3>
</div>
{/* third tile */}
<div className="journey-tile" > 
<h1 className="j-emoji" > 🏢 </h1>
<h1 className="tile-title"> Sprint Corporate  </h1>
<h2 className="tile-job"> Sales Professional </h2>
<h3 className="tile-date">2016-2018 </h3>
</div>
{/* fourth tile */}
<div className="journey-tile" > 
<h1 className="j-emoji"> 🏢 </h1>
<h1 className="tile-title"> Beliza nails and spa</h1>
<h2 className="tile-job"> Receptionist </h2>
<h3 className="tile-date">2015-2016 </h3>
</div>
</div>
{/* end of first grid for professional journey */}
 

 <div className="education"> 
        <h1 className="education-title"> Education </h1>
 </div>
 <div className="education-grid-body"> 
{/* first tile */}
<div className="edu-tile-2"> 
<h1 className="edu-emoji"> 🎓</h1>
<h1 className="t-111"> Butler College</h1>
<h2 className="t-222"> Software Engineering Certificate</h2>
</div>
{/* second tile */}
<div className="edu-tile-2"> 
<h1 className="edu-emoji"> 🎓</h1>
<h1 className="t-111"> Butler College</h1>
<h2 className="t-222"> Associates in Science and liberal Arts</h2>
</div>
{/* third tile */}
<div className="edu-tile-2"> 
<h1 className="edu-emoji"> 🎓</h1>
<h1 className="t-111"> Butler College</h1>
<h2 className="t-222"> Nursing Assistant License</h2>

</div>
{/* fourth tile */}
<div className="edu-tile-2"> 
<h1 className="edu-emoji"> 🎓</h1> 
<h1 className="t-111"> Wichita South High</h1>
<h2 className="t-222"> High School diploma</h2>
</div>
 </div>
 {/* end of education grid */}
</div>
    <Footer/>
</div>

    );
}
