export default class HomeController {
  constructor($http, $rootScope, $scope, userService, homeService, localStorage) {
    this.$http = $http
    this.$rootScope = $rootScope
    this.$scope = $scope
    this.user = userService
    this.home = homeService
    this.localStorage = localStorage
    this.item = ''
    this.items = []
    this.newItems = []
    // this.items = this.getdata()
  }

  $onInit() {
    // this.act().
    // this.Test()
    // console.log(this.Test())
    // console.log(this.getdata('df'))
    this.randomName()
    this.home.getTestData().then(function(resp) {
      console.log(resp.data)
    })
    this.getList()
    // console.log(this.getdata('todotype'))
    // this.items = this.getdata()
    // console.log(this.getdata('11'))
    // this.$scope.$watch(this.items, () => {
    //  this.setdata('key', 'val')
    // })
  }

  randomName() {
    this.name = this.user.getName()
  }

  del(index, e) {
    e.stopPropagation()
    // let item = this.items[index]
    // this.localStorage.claerItem(tem)
    console.log(this.items[0])
    this.items.splice(index, 1)
    this.newItems = this.items
    console.log(this.newItems)
    this.newSetLsit()
  }

  Test() {
    this.t = this.localStorage.test()
    return this.t
  }

  getList() {
    this.items = this.localStorage.fetch('todo')
  }

  newSetLsit() {
    this.localStorage.save('todo', this.newItems)
  }

  setList() {
    this.localStorage.save('todo', this.items)
  }

  enter(e) {
    // var keycode = window.event ? e.keyCode : e.which
    if (e.keyCode === 13) {
      console.log(this.newItem)
      this.items.push({
        lber: this.newItem, isfinsh: false
      })
      this.newItem = ''
      this.setList()
    }
  }

  clearItem() {
    console.log(this.items.length)
    console.log(this.localStorage.claerItem(this.items))
    console.log(this.items.length)
  }

  Clear() {
    // this.items = this.localStorage.clear(this.items)
    // this.localStorage.claer(this.items)
    // console.log(this.items)
    this.localStorage.claer('todo')
    this.items = []
    // this.items = null
  }

  change(tem) {
    // tem.isfinsh
    tem.isfinsh = !tem.isfinsh
    this.setList()
    // this.isfinsh
    // console.log(tem.isfinsh)
  }

  // addNew(e) {
  //  var keycode = window.event ? e.keyCode : e.which
  //  if (keycode === 13) {
  //    console.log(1)
  //  }
  // }
}
HomeController.$inject = ['$http', '$rootScope', '$scope', 'user', 'home', 'localStorage']
