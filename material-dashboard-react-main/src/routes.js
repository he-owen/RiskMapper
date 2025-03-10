/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Wildfire from "layouts/wildfire";
import Hurricane from "layouts/hurricane";
import Earthquake from "./layouts/earthquake";
import Nuclear from "./layouts/nuclear_event";
import Tsunami from "./layouts/tsunami";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadiation, faHouseCrack, faWater } from "@fortawesome/free-solid-svg-icons";

// @mui icons
import Icon from "@mui/material/Icon";
import Medical from "layouts/dashboard";

const routes = [
  {
    type: "collapse",
    name: "Medical Emergency",
    key: "dashboard",
    icon: <Icon fontSize="small">medical_services</Icon>,
    route: "/dashboard",
    component: <Medical />,
  },
  {
    type: "collapse",
    name: "Wildfire",
    key: "wildfire",
    icon: <Icon fontSize="small">local_fire_department</Icon>,
    route: "/wildfire",
    component: <Wildfire/>,
  },
  {
    type: "collapse",
    name: "Hurricane",
    key: "hurricane",
    icon: <Icon fontSize="small">storm</Icon>,
    route: "/hurricane",
    component: <Hurricane/>,
  },
  {
    type: "collapse",
    name: "Earthquake",
    key: "earthquake",
    icon: <FontAwesomeIcon icon={faHouseCrack} size="sm" />,
    route: "/earthquake",
    component: <Earthquake/>,
  },
  {
    type: "collapse",
    name: "Tsunami",
    key: "tsunami",
    icon: <FontAwesomeIcon icon={faWater} size="sm" />,
    route: "/tsunami",
    component: <Tsunami/>,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  }
];

export default routes;
