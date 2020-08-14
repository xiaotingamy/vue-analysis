export default {
  name: 'functional-button',
  functional: true,
  render (createElement) {
    return [createElement('button', 'click me'), null]
  }
}