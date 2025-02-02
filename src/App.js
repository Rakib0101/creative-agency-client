import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allservices" element={<AllServices />} />
            <Route path="/failed" element={<Failed />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="/dashboard" element={<Book />} />
              <Route path="/dashboard/bookinglist" element={<AllBookingList />} />
              <Route path="/dashboard/bookinglist/:id" element={<BookingList />} />
              <Route path="/dashboard/review" element={<Review />} />
              <Route path="/dashboard/orderlist" element={<AdminRoute><OrderList /></AdminRoute>} />
              <Route path="/dashboard/addservice" element={<AdminRoute><AddService /></AdminRoute>} />
              <Route path="/dashboard/addproject" element={<AdminRoute><AddProject /></AdminRoute>} />
              <Route path="/dashboard/makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path="/dashboard/manageservice" element={<AdminRoute><ManageService /></AdminRoute>} />
            </Route>
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
