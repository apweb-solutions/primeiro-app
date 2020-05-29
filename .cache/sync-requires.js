const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-caches-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/var/www/html/menu-digital/.cache/caches/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/var/www/html/menu-digital/src/pages/404.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/var/www/html/menu-digital/src/pages/about.jsx"))),
  "component---src-pages-contact-jsx": hot(preferDefault(require("/var/www/html/menu-digital/src/pages/contact.jsx"))),
  "component---src-pages-gallery-jsx": hot(preferDefault(require("/var/www/html/menu-digital/src/pages/gallery.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/var/www/html/menu-digital/src/pages/index.jsx")))
}

