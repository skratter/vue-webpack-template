import Vue from 'vue'
import App from './App.vue'
import '../assets/app.scss'

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
