import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  useNavigate,
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import NewCom from "../pages/community/NewCom";
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/app">
            <Route path="" element={<Home />}></Route>
            <Route path="community">
              <Route path="new" element={<NewCom />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

{
  /* <Route path="/products" component={ProductList}>
  <Route path="/products/:productId" component={ProductDetail} />
</Route> */
}
