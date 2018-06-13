export default function run($rootScope, $state) {
  'ngInject'

  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    $rootScope.pageLoading = true
  })
  $rootScope.$on('$stateChangeSuccess', (ev, to, toParams, from, fromParams) => {
    $rootScope.pageLoading = false
  })
}