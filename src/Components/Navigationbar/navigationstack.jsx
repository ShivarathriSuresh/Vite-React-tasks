
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../Screens NavBar/home-screen";
import CategoriesScreen from "../../Screens NavBar/Categories-Screen";
import AboutScreen from "../../Screens NavBar/About-Screen";
import NotFoundPage from "../../Screens NavBar/not-found-page";
import FrontPageComponent from "../../Screens NavBar/frontpage";
import { LoginPage } from "../../Screens NavBar/Login-Regist pages/loginPage";
import { RegistrationComponent } from "../../Screens NavBar/Login-Regist pages/registration-page";


export const NavigationStack=()=>{

      
           return (
             <>

              
       <Routes>
        
        <Route  path="/"  element={<FrontPageComponent/>} />
        <Route path="/register"  element={<RegistrationComponent/>} />
        <Route path="/login"  element={<LoginPage/>} />
        <Route  path="/Home"  element={<HomeScreen/>} />
        <Route  path="/Categories"  element={<CategoriesScreen/>} />
        <Route  path="/About"  element={<AboutScreen/>} />
        <Route  path="/*"  element={<NotFoundPage/>} />

       </Routes>
     

        </>
    )
}