import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Switch,
  useNavigate,
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import NewCom from "../pages/community/NewCom";
import NewPost from "../pages/community/NewPost";
import CommunityHome from "../pages/community/Home";
import Recent from "../pages/community/Recent";
import SideNavLayout from "../components/layouts/SideNavLayout";
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/app" element={<SideNavLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="community">
              <Route path="new" element={<NewCom />}></Route>
              <Route path="recent" element={<Recent />}></Route>
              <Route path=":name">
                <Route index element={<CommunityHome />}></Route>
                <Route path="post" element={<NewPost />}></Route>
              </Route>
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
