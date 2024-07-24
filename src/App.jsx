import React from 'react';

import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home';
import Directory from './pages/Directory';
import RoleSelectionForm from './pages/role-selection-form';
import SignIn from './pages/public/sign-in';
import ProtectedRoutes from './routes/private-routes';
import OpenRoute from './routes/open-routes';
const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
<>
        {/* <Route path={"/sign-in"} element={<OpenRoute />}> */}
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/roles" element={<RoleSelectionForm/>} />
        {/* </Route> */}
       
        
          <Route path="directory" element={<Directory/>} />  
       
        </>
    ),
  );

  return (
   <RouterProvider router={router} />
    // <div className="font-sans">
    //   <Header />
    //   <Navbar />
    //   <Main />
    // </div>
      
  );
};

export default App;
