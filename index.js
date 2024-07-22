function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch ('https://anapioficeandfire.com/api/books')
  .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Convert response to JSON
    })
    .then(data => {
      console.log('Data fetched:', data); // Log the fetched data
      renderBooks(data); // Pass the JSON data to renderBooks
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

function renderBooks(books) {
  // To pass the tests, don't forget to return your render!
  return books.map(function (book){
    return `<li>` + book.name +`</li>`
    }).join('');

  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
 
  fetchBooks();
});
