// Ссылка на плагин:      https://imask.js.org/
// Подключаем через npm:  https://www.npmjs.com/package/imask
// Подключаем через CDN:  <script src="https://unpkg.com/imask"></script>

const element = document.querySelector('.phone__input')
const maskOptions = {
  mask: '+{43}(000)000-000-00'
}
const mask = IMask(element, maskOptions)