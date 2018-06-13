import angular from 'angular'
import 'bootstrap-less/bootstrap/index.less'
import 'font-awesome/less/font-awesome.less'
import 'angular-ui-bootstrap'
import 'angular-ui-router'
import 'angular-resource'
import 'angular-ui-validate'
import 'angular-busy'
import 'angular-busy/angular-busy.css'
import 'moment'
import 'angular-material'

import appConfig from './config'
import './services/main'
import './resources/main'
import './components/main'
import './pages/main'

import '../public/fonts/fonts.css'
import 'angular-material/angular-material.css'

export default angular
  .module('desktop', [
    'ui.bootstrap',
    'ui.router',
    'ngResource',
    'ui.validate',
    'ngMaterial',
    'cgBusy',
    'desktop.resources',
    'desktop.services',
    'desktop.components',
    'desktop.pages'
  ])
  .constant('config', appConfig['development'])
  .value('cgBusyDefaults', {
    backdrop: false
  })

export const bootstrap = () => angular.bootstrap(document, ['desktop'])