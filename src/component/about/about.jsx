import React from 'react';
import {Link} from 'react-router-dom';
import './about.css'

function Home() {
  return (
  <div>
      <section className="about-us">
          <div className="about">
            <img src="image/logo.jpg" className="pic" alt='logo' />
            <div className="txt">
              <h2>YOY</h2>
              <h5>
                {/* <span>
                  <u>JPAY..!</u>
                </span> */}
              </h5>
              {/* <h1>India's Most-loved</h1>
              <h1>Payments App</h1> */}
              <p>YOY is a global hospitality company founded in 2013 by Ritesh Agarwal. It operates an online hotel booking platform, connecting users with budget to mid-range hotels. With a focus on standardization and cleanliness, YOY has expanded its presence globally, offering accommodations in various countries. The company has diversified with segments like YOY Townhouse for a premium stay experience and YOY Workspaces for co-working solutions. YOY has faced occasional challenges with quality consistency but continues to evolve its business model to meet changing industry needs.</p>
              
            <div className="data">
                
                <p>
                  <b>
                    Book you room by own
                  </b>
                  
                </p>
                <br />
                <button className="hire"><Link className="Signup" to={'/Signup'}>Click here to start </Link>
                
                </button>
                
              </div>
            </div>
          </div>
        </section>

        {/* //footer */}
     
</div>
  );
}

export default Home;