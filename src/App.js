import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Services from "./Services/Services";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div>
      {/* Routing Set Up*/}
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/services/:serviceID">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
