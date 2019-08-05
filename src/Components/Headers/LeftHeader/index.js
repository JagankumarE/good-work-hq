import React from 'react';
import './index.css' ;

class LeftHeader extends React.Component{
  render(){
    return(

    < div class ="container">
       <div class = "row">
               <div class ="col-md-6">
               <img  class ="logo" src="Assets/images/Header1.png" ></img>
               <span>Delliver to:</span>

               <button id="drop1" type="button" class="drop_btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <span>Akshay Tech Park, Whitefield, Bangalore </span>
                 <img src="Assets/images/Header4.png"  class="img2" alt=""></img>
               </button>
               <ul class="dropdown-menu" aria-labelledby="drop1">
                 <li><a href="#">Akshay Tech Park, Whitefield, Bangalore 1</a></li>
                 <li><a href="#">Akshay Tech Park, Whitefield, Bangalore 2</a></li>
               </ul>
                </div>




        </div>
      </div>



    /*  <div>
         <div class="col-sm-2">
           <div class="logo">
             <a href="#">
               <img src="Assets/images/Header1.png" alt="" class="img-responsive"></img>
             </a>
           </div>
         </div>

         <div class="col-sm-7">
           <div class="addressCont">
             <p class="deliver">Deliver to: </p>
             <div class="dropdown address">
               <button id="adds" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <span>Akshay Tech Park, Whitefield, Bangalore </span>
                 <img src="Assets/images/Header4.png"  class="img2" alt=""></img>
               </button>
               <ul class="dropdown-menu" aria-labelledby="adds">
                 <li><a href="#">Akshay Tech Park, Whitefield, Bangalore 1</a></li>
                 <li><a href="#">Akshay Tech Park, Whitefield, Bangalore 2</a></li>
               </ul>
             </div>
          </div>
          </div>
          </div>

*/

    );
  }
}
export default LeftHeader;
