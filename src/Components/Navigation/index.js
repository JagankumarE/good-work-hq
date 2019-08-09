import React from 'react';
import './index.css' ;
import Home from '../Home';
import Feedback from '../Feedback';
import Bookings from '../Bookings';
import Facilities from '../Facilities';
import Services from '../Services';
import Welcome from '../Welcome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const dudUrl = 'javascript:;';
class Navigation extends React.Component{
  render(){

    return(
      <Router>
           <div>
              <div class  ="nav_pan">
              <ul>


                    <li>  <Link to="/Home">Home</Link>  </li>
                    <li>  <Link to="/Bookings">My Bookings</Link>  </li>
                    <li>  <Link to="/Services">Services</Link>  </li>
                    <li>  <Link to="/Facilities">Facilities</Link>  </li>
                   <li>  <Link to="/Feedback">Feedback</Link>  </li>
            </ul>
          </div>
           </div>


             <Route exact path="/" component={Welcome} />
             <Route exact path="/Home" component={Home} />
             <Route exact path="/Bookings" component={Bookings} />
             <Route exact path="/Feedback" component={Feedback} />
             <Route exact path= "/Facilities" component={Facilities}/>
             <Route exact path ="/Services" component ={Services}/>
       </Router>
);
  }
}
export default Navigation;
//
// *
