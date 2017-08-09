const form = document.querySelectorAll('form')[0]
const baseUrl = 'http://www.recipepuppy.com/api/'
let results
form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log(this)
  const nameInputValue = event.target.querySelector('input[name="name"]').value
  const emailInputValue = event.target.querySelector(
    'input[name="email"]'
  ).value

  getSearchResults(nameInputValue).then(function (results) {
    console.log(results)
    event.target.querySelector('input[name="name"]').value = ''
    event.target.querySelector('input[name="email"]').value = ''
  })
})

function getSearchResults (searchTerms) {
  return fetch(`${baseUrl}?q=${searchTerms}`).then(function (response) {
    return response.json()
  })
}

const searchInput = document.querySelector('input[name="search"]')

searchInput.addEventListener('search', function (event) {
  console.log(event.target.value)
})
