import Vue from 'vue'
import Router from 'vue-router';
import Personnel from '../components/Personnel';
import order from '../components/FoodOrder';
import Food from '../components/Food';
import viewFood from '../components/viewFood';
import PatientBed from '../components/PatientBed';
import dis from '../components/newDisease';
import Register from '../components/Register';
import viewRegister from '../components/viewRegister';
import Home from '../components/Home';
import Login from '../components/Login';
import Em2 from '../components/Em2';
import nurse from '../components/Nurse';
import LoginAdmin from '../components/LoginAdmin';
import ViewPersonnel from '../components/ViewPersonnel';
import Suc from '../components/Succcsess';
import BedSuccess from '../components/BedSuccess';
import ViewBedData from '../components/ViewBedData';
import viewOrder from '../components/ViewOrderData';
import viewdis from '../components/ViewDisease';
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
             path: '/per',
            component: Personnel
        },

        {
              path: '/order',
              component: order
        },
        {
            path: '/dis',
            component: dis
       },
      
       {
            path: '/Food',
            component: Food
        },
        {
            path: '/Regis',
            component: Register
        },
        {
            path: '/bed',
            component: PatientBed

        },{
            path: '/',
            component: Home
        }
        ,{
            path: '/login',
            component: Login
        }
        ,{
            path: '/Em2',
            component: Em2
        },{
            path: '/nurse',
            component: nurse
        }
        ,{
            path: '/Admin',
            component: LoginAdmin
        }
        ,{
            path: '/Suc',
            component: Suc
        }
        ,{
            path: '/viewregis',
            component: viewRegister
        },{
            path: '/viewFood',
            component: viewFood
        }
        ,{
            path: '/viewpersonnel',
            component: ViewPersonnel
        },{
            path: '/bedsuccess',
            component: BedSuccess
        },{
            path: '/ViewBedData',
            component: ViewBedData
        },
        {
            path: '/vieworder',
            component: viewOrder
       },
       { 
            path: '/viewdis',
            component: viewdis  
       },
    ]
});