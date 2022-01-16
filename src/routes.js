import SignUp from "./Pages/SignUp";
import Landing from "./Pages/Landing";

import {SIGN_ROUTE, WEATHER_ROUTE} from "./Utils/consts";
import {LANDING_ROUTE} from "./Utils/consts";
import Weather from "./Pages/Weather";


export const publicRoutes = [
    {
        path: SIGN_ROUTE,
        // path: '/Signup',
        Component: SignUp
    },
    {
        path: LANDING_ROUTE,
        // path: '/',
        Component: Landing
    }

]
export const authRoutes = [
    {
        path: WEATHER_ROUTE,
        // path: '/Signup',
        Component: Weather
    }
]