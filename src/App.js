import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Home/Shop/Shop';
import Login from './Pages/Login/Login';
import ContextProvider from './ContextProvider/ContextProvider';
import Register from './Pages/Register/Register';
import PurchaseBike from './Pages/PurchaseBike/PurchaseBike';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AdminRoute from './PrivateRoute/AdminRoute';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder/ManageAllOrder';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import ReviewsAdd from './Pages/Dashboard/ReviewsAdd/ReviewsAdd';
import Payment from './Pages/Dashboard/Payment/Payment';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';


function App() {
  
 
  return (
    <ContextProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/home' element={<Home />} />

          <Route path='/shop' element={<Shop />} />

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} >
          {/* <Route   path={`/dashboard`} element={<AdminRoute><ManageAllOrder/></AdminRoute>}/> */}
       <Route exact  path={`/dashboard`} element={<MyOrders/>}/>
      
    

     
  
        <Route  path={`/dashboard/reviews`} element={<ReviewsAdd/>}/>
       
        <Route  path={`/dashboard/payment`} element={<Payment/>}/>
      
        <Route  path={`/dashboard/manageOrders`} element={<AdminRoute><ManageAllOrder/></AdminRoute>}/>
       
        <Route path={`/dashboard/addProduct`}  element={<AdminRoute><AddProduct/></AdminRoute>}/>
          
        <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
          
        <Route path={`/dashboard/manageProducts`}element={<AdminRoute><ManageProducts/></AdminRoute>}/>
          
            </Route>

          <Route path='/bikes/:id' element={<PrivateRoute><PurchaseBike /></PrivateRoute>}/>


         
       
        </Routes>
      </BrowserRouter>

    </ContextProvider>
  );
}

export default App;
