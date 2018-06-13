import template from './template.html'

export default function config($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'
  $stateProvider.state('app', {
    url: '',
    abstract: true,
    template,
    controllerAs: 'appCtrl',
  })
  $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true)
}