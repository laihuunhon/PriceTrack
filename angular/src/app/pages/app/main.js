import angular from 'angular'
import config from './config'
import run from './run'
import './home/main'
import './trutien/main'
import './timer/main'

import './style.less'

export default angular
  .module('app', [
    'app.trutien',
    'app.timer',
  ])
  .config(config)
  .run(run)
  .directive('highlightOnChange', function($timeout) {
    'ngInject'
    return {
      link : function(scope, element, attrs) {
        attrs.$observe('highlightOnChange', function(newValue, oldValue) {
          element.addClass('highlight');

          // auto remove after some delay
          $timeout(function () {
            element.removeClass('highlight');
          }, 1000);
        });
      }
    };
  });