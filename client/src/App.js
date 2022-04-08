import React from "react";
import { Container,  Grow, Grid } from "@material-ui/core";
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Auth from './components/Auth/Auth'
// import useStyles from './styles'

const App = () => {
const user = JSON.parse(localStorage.getItem('profile'))
  return (   
     <Container maxWidth="xl">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" element={<Home />} />
              <Route
                path="/auth"
                element={<Auth/>}
              />
          <Route path="auth" element={!user ?<Auth/> : <Navigate to= "/posts"/>}
          />
          </Routes>
      </Router>
     </Container>
 )
};

export default App;
