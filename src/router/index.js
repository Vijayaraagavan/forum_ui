import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
export default function Router() {
  return (
    <>
      <SignIn></SignIn>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signIn" component={SignIn}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

{
  /* <Route path="/products" component={ProductList}>
  <Route path="/products/:productId" component={ProductDetail} />
</Route> */
}
