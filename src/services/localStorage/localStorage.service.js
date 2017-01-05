/**
 * Created by Administrator on 2017/1/4.
 */
export default class localStorage {
  constructor(localStorage, service) {
    // this.localStorage = localStorage
    this.service = service
  }

  service = ('localStorageService', [function() {
    console.log(1)
    return {
      get: function localStorageServiceGet(key, defaulValue) {
        var stored = localStorage.getItem(key)
        try {
          stored = angular.fromJson(stored)
        }
        catch (error) {
          stored = null
        }
        if (defaulValue && stored === null) {
          stored = defaulValue
        }
        return stored
      },
      updata: function localStorageServiceUpdate(key, value) {
        if (value) {
          localStorage.setItem(key, angular.toJson(value))
        }
      },
      clear: function localStorageServiceClear(key) {
        localStorage.removeItem(key)
      }
    }
  }])

}

localStorage.$inject = ['localStorage', 'service']
