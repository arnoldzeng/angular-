/**
 * Created by Administrator on 2017/1/4.
 */
export default class localStorageService {
  test() {
    return 'ok'
  }

  fetch(key) {
    return JSON.parse(localStorage.getItem(key) || '[]')
  }

  // fetch(key) {
  //  return JSON.parse(window.localStorage.getItem(key) || '[]')
  // }
  claerItem(key, val) {
    localStorage.removeItem(key, val)
  }

  claer(key) {
    localStorage.removeItem(key)
  }

  save(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  }

  // save(items) {
  //  window.localStorage.setItem(key, JSON.stringify(items))
  // }
  // get(key, defaulValue) {
  //  var stored = localStorage.getItem(key)
  //  try {
  //    stored = angular.fromJson(stored)
  //  }
  //  catch (error) {
  //    stored = null
  //  }
  //  if (defaulValue && stored === null) {
  //    stored = defaulValue
  //  }
  //  return stored
  // }

  // updata(key, value) {
  //  if (value) {
  //    localStorage.setItem(key, angular.toJSON(value))
  //  }
  // }
  //
  // clear(key) {
  //  localStorage.removeItem(key)
  // }

  // service = ('localStorageService', [function() {
  //  console.log(1)
  //  return {
  //    get: function localStorageServiceGet(key, defaulValue) {
  //      var stored = localStorage.getItem(key)
  //      try {
  //        stored = angular.fromJson(stored)
  //      }
  //      catch (error) {
  //        stored = null
  //      }
  //      if (defaulValue && stored === null) {
  //        stored = defaulValue
  //      }
  //      return stored
  //    },
  //    updata: function localStorageServiceUpdate(key, value) {
  //      if (value) {
  //        localStorage.setItem(key, angular.toJson(value))
  //      }
  //    },
  //    clear: function localStorageServiceClear(key) {
  //      localStorage.removeItem(key)
  //    }
  //  }
  // }])

}
