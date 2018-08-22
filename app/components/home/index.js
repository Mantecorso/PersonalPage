
import angular from 'angular';
import {HomeComponent} from "./inicio/home.component";
import {CuatroCeroCuatroComponent} from "./cuatrocerocuatro/cuatrocerocuatro.component";

const home = angular
.module('home',[])
.component ('inicio', HomeComponent)
.component ('cuatrocerocuatro', CuatroCeroCuatroComponent)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('error', {
            url: '/cuatrocerocuatro',
            component: 'cuatrocerocuatro'
        })
        .state('inicio', {
            url: '/',
            component: 'inicio'
        });
    $urlRouterProvider.otherwise('/cuatrocerocuatro')
    })
    .name

export default home