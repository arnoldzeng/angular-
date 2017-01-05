import angular from 'angular'
import User from './user'
import Interceptor from './interceptor'
import LocalStorage from './localstorage'

export default angular.module('app.services', [
  User,
  Interceptor,
  LocalStorage
])

.name
