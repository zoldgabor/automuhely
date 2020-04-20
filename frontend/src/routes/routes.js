import Home from "../components/routes/Home";
import Login from "../components/routes/Login";
import Clients from "../components/routes/Clients";
import Client from "../components/routes/Client";
import Statistics from "../components/routes/Statistics";
import Schedule from "../components/routes/Schedule";
import Services from "../components/routes/Services";
import Service from "../components/routes/Service";
import Parts from "../components/routes/Parts";
import Part from "../components/routes/Part";

export const routes = [
    { path: '/', component: Home },
    { path: '/statistics', component: Statistics },
    { path: '/home', component: Home },
    { path: '/schedule', component: Schedule },
    { path: '/login', component: Login, name: 'login'},
    { path: '/clients', component: Clients},
    { path: '/client/:id', component: Client},
    { path: '/client', component: Client},
    { path: '/services', component: Services},
    { path: '/service/:id', component: Service},
    { path: '/service', component: Service},
    { path: '/parts', component: Parts},
    { path: '/part/:id', component: Part},
    { path: '/part', component: Part},
];

