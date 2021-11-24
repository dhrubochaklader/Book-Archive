const spinner = spin => {
    document.getElementById('spinner').style.display = spin;
}
const Spinner = Spin => {
    document.getElementById('bookDetails').style.display = Spin;
}
const bookSearch = async () => {
    const searchBook = document.getElementById('search-Text');
    spinner('block');
    Spinner('none')
    const searchText = searchBook.value;
    searchBook.value = '';
    if (searchText == '') {
        alert("No Results Found")
        spinner('none');
    }
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    loadBookDetails(data.docs);
    // console.log(data.docs);
};
const loadBookDetails = book => {
    const detailBook = document.getElementById('bookDetails');
    detailBook.textContent = '';
    // console.log(book);
    if (book.length == book) {
        alert("No Results Found");
    }
    book?.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
                <h1>Book Author Name-${element.author_name}</h1>
                <h2>Book Title- ${element.title}</h3>
                <h3>Publisher-${element.publisher}</h3>
                <h4>Publish Year-${element.publish_year}</h3>
                `;
        detailBook.appendChild(div);
    });
    spinner('none');
    Spinner('block')
}