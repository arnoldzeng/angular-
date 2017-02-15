export default class HomeController {
  constructor($http, $rootScope, $scope, $filter, userService, homeService, localStorage, dateFilter) {
    this.$http = $http
    this.$rootScope = $rootScope
    this.$scope = $scope
    this.$filter = $filter
    this.user = userService
    this.home = homeService
    this.localStorage = localStorage
    this.dateFilter = dateFilter
    this.item = ''
    this.items = []
    this.newItems = []
    this.taskList = []
    this.newTasklist = []
    // this.items = this.getdata()
  }

  // 初始化
  $onInit() {
    this.randomName()
    this.home.getTestData().then(function(resp) {
      console.log(resp.data)
    })
    this.getList()
    // console.log(dateFilter((new Date(), 'yyyy-MM-dd HH:mm:ss')))
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

  // 新的TODO 提取数据
  getTask() {
    this.taskList = this.localStorage.fetch('todo')
  }

  // 保存一个新的数据
  newSetLsit() {
    this.localStorage.save('todo', this.newItems)
  }

  // TODO的保存新数据
  newSetask() {
    this.localStorage.save('todo', this.newTasklist)
  }

  // 保存数据
  setList() {
    this.localStorage.save('todo', this.items)
  }

  // 新的TODO 保存数据
  savetask() {
    this.localStorage.save('todo', this.taskList)
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

  // TODO新的输入回车保存数据
  // newEnter(e) {
  //   if (e.keyCode === 13) {
  //     console.log(this.newTasklist)
  //     this.taskList.push({
  //       id: this.taskList.length + 1, text: this.taskList, done: false, time: getNowTime()
  //     })
  //     this.newTasklist = ''
  //     this.savetask()
  //   }
  // }

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

  // 获取当前时间
  getNowTime() {
    return dateFilter(new Date(), 'yyyy-MM-dd HH:mm:ss')
  }
}
HomeController.$inject = ['$http', '$rootScope', '$scope', '$filter', 'user', 'home', 'localStorage', 'dateFilter']
