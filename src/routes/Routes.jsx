// Layouts
import HeaderOnly from '../components/Layouts/HeaderOnly/HeaderOnly'

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Portfolio from '../pages/Portfolio/Portfolio';
import Upload from '../pages/Upload/Upload';


export const publicRoutes = [
    {path:'/', component: Home},
    {path:'/about', component: About},
    {path:'/contact', component: Contact},
    {path:'/portfolio', component: Portfolio, layout : HeaderOnly},
    {path:'/upload', component: Upload, layout : null}
]




export const privateRoutes = [
    
]
