const about = '<div>About</div>'
const home = '<div>Home</div>'

const renderComponents = () => {
  const path = window.location.pathname

  window.history.pushState({}, path, window.location.origin + path)

  const root = document.getElementById('root')
  root.innerHTML = path === '/about' ? about : home
}

const onLinkClick = (event) => {
  event.preventDefault()
  const path = event.target.getAttribute('href')
  window.history.pushState({}, path, window.location.origin + path)
  renderComponents()
}

const links = document.querySelectorAll('a')
links.forEach((link) => {
  link.addEventListener('click', onLinkClick)
})

window.addEventListener('popstate', renderComponents)
window.addEventListener('load', renderComponents)
