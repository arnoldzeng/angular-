export default class footerController {
  constructor(localStorage, dateFilter) {
    this.localStorage = localStorage
    this.dateFilter = dateFilter
    this.name = 'footer'
    this.item = []
    this.isAllDone = false
  }

// 初始化
  $onInit() {
    this.getList()
  }

  change(x) {
    // console.log(x.isfinshed)
    x.isfinshed = !x.isfinshed
  }

  newAdd(e) {
    if (e.keyCode === 13) {
      //  console.log(this.add)
      if (!this.noreapt(this.item, this.add)) {
        this.item.push({
          bel: this.add, isfinshed: false, id: this.item.length + 1
        })
      }
      this.add = ''
      this.setList()
    }
  }

  noreapt(arr, obj) {
    var i = arr.length
    while (i--) {
      if (arr[i].bel === obj) {
        // console.log(111)
        return true
      }
      else {
        // console.log(arr[i], obj)
      }
    }
    return false
  }

  // 提取数据
  getList() {
    this.item = this.localStorage.fetch('Todo')
  }

  // 保存数据
  setList() {
    this.localStorage.save('Todo', this.item)
  }

  // 删除按钮
  del(todo, e) {
    e.stopPropagation()
    this.item.splice(this.item.indexOf(todo), 1)
    // this.newitem = this.item
    // console.log(this.newitem)
    // this.newSetLsit()
    this.setList()
  }

  // 标记全部完成
  alldone() {
    angular.forEach(this.item, (x) => {
      // console.log(this.isAllDone)
      x.isfinshed = this.isAllDone
    })
    this.setList()
  }

  // 未完成的函数
  uncomplete() {
    var count = 0
    angular.forEach(this.item, (x) => {
      count += x.isfinshed ? 0 : 1
    })
    return count
  }

  // 已完成的函数
  complete() {
    var count = 0
    angular.forEach(this.item, (x) => {
      count += x.isfinshed ? 1 : 0
    })
    return count
  }

  // 时间搓
  getNowTime() {
    return dateFilter(new Date(), 'yyyy-MM-dd HH:mm:ss')
  }
}
footerController.$inject = ['localStorage']
