/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
  //   <footer classNameName=" py-6 bg-gray-700 text-white">
  //     <div style={{ width: "90%", margin: "auto" }} id="container">
  //       <div id="mainFooter" classNameName="flex justify-between items-center py-3 ">
  //         <div id="leftFooter" classNameName="flex flex-col">
  //           <div><h3><button>footer of left side</button></h3></div>
  //           <button>Link 1</button>
  //           <button>Link 2</button>
  //           <button>Link 3</button>
  //           <button>Link 4</button>
  //           <button>Link 5</button>
  //         </div>
  //         <div id="midFooter" classNameName="flex flex-col">
  //         <div><h3><button>footer of Mid Point</button></h3></div>
  //           <button>Link 1</button>
  //           <button>Link 2</button>
  //           <button>Link 3</button>
  //           <button>Link 4</button>
  //           <button>Link 5</button>
  //         </div>
  //         <div id="rightFooter" classNameName="flex flex-col">
  //         <div><h3><button>footer of Right side</button></h3></div>
  //           <button>Link 1</button>
  //           <button>Link 2</button>
  //           <button>Link 3</button>
  //           <button>Link 4</button>
  //           <button>Link 5</button>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>

  <footer className="bg-gray-800 py-10 text-white">
    <div className="max-w-screen-lg mx-auto px-4">


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <ul>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Feedback</a></li>
            <li><a href="#" className="hover:underline">Live Chat</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4">Payment</h3>
          <ul>
            <li><a href="#" className="hover:underline">Pricing Plans</a></li>
            <li><a href="#" className="hover:underline">Payment Methods</a></li>
            <li><a href="#" className="hover:underline">Gift Cards</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4">Services & Terms</h3>
          <ul>
            <li><a href="#" className="hover:underline">Subscription</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

      </div>

      
      <div className="text-center mt-8">
        <p>&copy; 2024 RaselShikder. All rights reserved.</p>
      </div>

    </div>
  </footer>
  );
}
