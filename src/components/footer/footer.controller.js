export default class footerController {
  constructor() {
    this.name = 'footer'
    this.item = [{bel: '123', isfinshed: true}, {bel: '321', isfinshed: false}]
  }

  change(x) {
    console.log(x.isfinshed)
    x.isfinshed = !x.isfinshed
  }

  newAdd(e) {
    if (e.keyCode === 13) {
      //  console.log(this.add)
      if (!this.noreapt(this.item, this.add)) {
        this.item.push({
          bel: this.add, isfinshed: false
        })
      }
      this.add = ''
    }
  }

  noreapt(arr, obj) {
    var i = arr.length
    while (i--) {
      if (arr[i].bel === obj) {
        console.log(111)
        return true
      }
      else {
        console.log(arr[i], obj)
      }
    }
    return false
  }
}
