import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Outlet , ReactLocation, Link , useMatch} from "react-location";

import "./index.scss"; 

const Product = () => {
  const params = useMatch().params;
  return (
    <div>
      Product Page : {JSON.stringify(params)}
    </div>
  )
}
const routes: Routes[] = [
  {
    path: "test",
    element: <div> Test Page </div>,
  },
  {
    path: "product",
    children: [
      {
        path: ":id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/",
    element: <div> Home Page</div>,
  },
];

const location = new ReactLocation();

const App = () => (
  <Router routes={routes} location={location}>
    <div className="p-4 bg-blue-500 text-white text-2xl font-bold">
      <Outlet />
    </div>
    <div className="flex-grow flex">
      <Link to="/test">Go to Test Page </Link>
    </div>
    <div className="flex-end relative">
      <Link to="/product/1">Go to Product 1 Page </Link>
    </div>
    <div className="flex-end relative">
      <Link to="/">Go to HomePage </Link>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
