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
  // 初始化
  $onInit() {
    this.randomName()
    this.home.getTestData().then(function(resp) {
      console.log(resp.data)
    })
    this.getList()
  }
  // 随机提取名字
  randomName() {
    this.name = this.user.getName()
  }
  // 删除按钮
  del(index, e) {
    e.stopPropagation()
    this.items.splice(index, 1)
    this.newItems = this.items
    console.log(this.newItems)
    this.newSetLsit()
  }

  Test() {
    this.t = this.localStorage.test()
    return this.t
  }
  stopBubble(e) {
    e.stopPropagation()
  }

  //  提取数据
  getList() {
    this.items = this.localStorage.fetch('todo')
  }
  // 保存一个新的数据
  newSetLsit() {
    this.localStorage.save('todo', this.newItems)
  }
  // 保存数据
  setList() {
    this.localStorage.save('todo', this.items)
  }
  // 输入回车后，保存数据
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
  // 清空数据
  Clear() {
    this.localStorage.claer('todo')
    this.items = []
  }
  // 点击改变 样式
  change(tem, e) {
    e.stopPropagation()
    tem.isfinsh = !tem.isfinsh
    this.setList()
  }

}
HomeController.$inject = ['$http', '$rootScope', '$scope', 'user', 'home', 'localStorage']
