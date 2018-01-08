import {
  observable,
  computed,
  action,
} from 'mobx'

export default class TestState {
  constructor({ count, name } = { count: 0, name: 'Tony' }) {
    this.count = count
    this.name = name
  }
  @observable count
  @observable name
  @computed get msg() {
    return (`${this.name} say count is ${this.count}`)
  }
  @action add(s) {
    this.count += 100
  }
  @action cut(s) {
    this.count -= 10
  }

  @action changeName(name) {
    this.name = name
  }
}
