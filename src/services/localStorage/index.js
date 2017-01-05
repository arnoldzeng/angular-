/**
 * Created by Administrator on 2017/1/4.
 */
import angular from 'angular'
import localStorageService from './localStorage.service'

export default angular.module('services.localStorage', [])

  .service('localStorage', localStorageService)

  .name
