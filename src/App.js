import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Footer/Footer';
import SignUp from './Pages/signup/Signup';
import ServiceDitails from './Pages/ServiceDitails/ServiceDitails';
import AddService from './Pages/AddService/AddService';
import AdminPanel from './Pages/AdminPanele/AdminPanel';
// import AdminPanel from './Pages/AdminPanele/AdminPanel';





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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/Admin">
              <AdminPanel></AdminPanel>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/Ditail/:serviceId">
              <ServiceDitails></ServiceDitails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
