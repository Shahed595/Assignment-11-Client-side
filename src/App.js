import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Login from "./Login/Login/Login";
import ConfirmOrder from "./Pages/ConfirmOrder/ConfirmOrder";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Pages/Home/Navigation/Navigation";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import MyOrder from "./Pages/MyOrder/MyOrder";
import NewServices from "./Pages/NewServices/NewServices";

import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Privateute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/placeOrder/:serviceId"
            element={
              <PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>
            }
          />
          <Route path="myorder" element={<MyOrder />} />
          <Route path="manageallorder" element={<ManageAllOrders />} />
          <Route path="newservices" element={<NewServices />} />
          <Route path="confirmOrder" element={<ConfirmOrder />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
