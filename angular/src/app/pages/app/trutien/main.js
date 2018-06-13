import angular from 'angular'
import config from './config'
const agGrid = require('ag-grid')
agGrid.initialiseAgGridWithAngular1(angular)
import './style.less'

export default angular
  .module('app.trutien', ['agGrid'])
  .config(config)
