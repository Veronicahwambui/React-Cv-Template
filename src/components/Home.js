import React  from "react";

import Educations from "./Educations";
import Experiences from "./Experiences";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Portfolios from "./Portfolios";
import Skills from "./Skills";
import About from "./About";


function Home(){

 return(
    <section>


        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col s12 m4 l3">
                 <Profile/>
                </div>
                <div className="col s12 m9 l9">
                    <About/>
                    <Skills/>
                    <Experiences/>
                    <Educations/>
                    <Portfolios/>

                </div>

            </div>

        </div>

        </section>
 )

    }
export default Home;