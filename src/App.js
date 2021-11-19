import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Shop from './Pages/Home/Shop/Shop';
import Login from './Pages/Login/Login';
import ContextProvider from './ContextProvider/ContextProvider';
import Register from './Pages/Register/Register';
import PurchaseBike from './Pages/PurchaseBike/PurchaseBike';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <ContextProvider >
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
         <Home></Home>
        </Route>
        <Route path='/home'>
         <Home></Home>
        </Route>
        <Route path='/shop'>
          <Shop></Shop>
        </Route>
        <Route path='/login'>
          <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
             <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/bikes/:id'>
             <PurchaseBike></PurchaseBike>
          </PrivateRoute>
      </Switch>
      </BrowserRouter>
     
    </ContextProvider>
  );
}

export default App;
