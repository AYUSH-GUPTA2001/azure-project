import {BrowserRouter , Routes , Route} from "react-router-dom"

import Home from "../components/home/Home"

import DashboardClient from "../components/investor/Dashboard"
import DashboardAdvisor from "../components/advisor/Dashboard"
import Advisor from "../components/advisor/Advisor"
import Investor from "../components/investor/Investor"
import LandingPage from "../components/LandingPage/LandingPage"


function MyRouter(){
    return (
        <div>
           <BrowserRouter>
           <Routes>
              <Route element={<LandingPage />} path="/" />
              
              <Route element={<Advisor/>} path="/advisor"/>
              <Route element={<Investor/>} path="/investor"/>
              <Route element={<DashboardAdvisor/>} path="advisor/dashboard/:advisorId"/>
              
              <Route element={<DashboardClient/>} path="/investor/dashboard/:clientId"/>
              
              
           </Routes>
           </BrowserRouter>
        </div>
    )
}

export default MyRouter