
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import PrivateRoute from './pages/Login/PrivetRouter'
import Booking from './pages/Home/Booking/Booking';
import MyTour from './pages/MyTour/MyTour/MyTour';
import AddPlan from './pages/AddPlans/AddPlans';
import Admin from './pages/MyTour/Admin/Admin';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/book/:bookingId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/my_tour">
              <MyTour></MyTour>
            </PrivateRoute>
            <PrivateRoute path="/add_plan">
              <AddPlan></AddPlan>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </BrowserRouter>
      </AuthProvider>
    </div>

  );
}

export default App;
