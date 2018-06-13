import angular from 'angular'
import socket from './socket'

export default angular
  .module('desktop.services', [])
  .factory('SocketService', socket)