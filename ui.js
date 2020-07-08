class UI {
  constructor() {
    this.barList = document.getElementById('bars');
  }

  clearBars() {
    this.barList.innerHTML = ''
  }

  showBar(bar) {
    this.barList.innerHTML +=
    `<li class="list-group-item">${bar.name}</li>`
  }

}

