import controller from './controller'
import template from './template.html'

export default function config($stateProvider) {
  'ngInject'
  $stateProvider.state('app.trutien', {
    url: '/',
    controller,
    controllerAs: 'ctrl',
    template,
  })
}