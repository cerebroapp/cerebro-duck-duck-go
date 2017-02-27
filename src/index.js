import icon from './icon.png'

const order = 1

const plugin = ({ term, actions, display }) => {
  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    actions.open(`https://duckduckgo.com/?q=${q}`)
    actions.hideWindow()
  }

  display({
    icon: icon,
    order: order, // High priority
    title: `Search DuckDuckGo for ${term}`,
    onSelect: () => search(term)
  })
}

module.exports = {
  fn: plugin
}
