export default class HomeController {
  constructor($http, userService, homeService, localStorage) {
    this.$http = $http
    this.user = userService
    this.home = homeService
    this.localStorage = localStorage
    this.items =
      []
    this.item = ''
  }

  $onInit() {
    // this.act()
    this.randomName()
    this.home.getTestData().then(function(resp) {
      console.log(resp.data)
    })
  }

  randomName() {
    this.name = this.user.getName()
  }

  setdata() {
    this.Sdata = this.localStorage.save()
  }

  getdata() {
    this.gdata = this.localStorage.fetch()
  }
  enter(e) {
    // var keycode = window.event ? e.keyCode : e.which
    if (e.keyCode === 13) {
      // console.log(this.newItem)
      this.items.push({
        lber: this.newItem, isfinsh: false
      })
      this.newItem = ''
    }
  }

  change(tem) {
    // tem.isfinsh
    tem.isfinsh = !tem.isfinsh
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
HomeController.$inject = ['$http', 'user', 'home', 'localStorage']
