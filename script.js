async function getJson() {
    try {
    const url = "https://63c136e2376b9b2e6475eb53.mockapi.io/book";
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    return result;
    } catch (err) {
        console.log(err);
    }
}
function changeBookBlock(json = getJson()) {
    let id =  currentId;
    let title = json[id]['title'];
    let author = json[id]['year'];
    let pages = json[id]['pages'];
    let genre = json[id]['genre'];
    let year = json[id]['year'];
    let image = json[id]['image'];
    let description = json[id]['description'];
    var bookDiv = document.createElement("div");
    bookDiv.innerHTML =
    `<div class="book-block">
        <div class="book-img"><img src="${image}"></div>
        <div class="book-footer">
            <div class="book-title">${title}</div>
            <div class="book-mainInformation">
                <div class="book-author">${author}</div>
                <div class="book-year">${year} г.</div>
                <div class="book-pages">${pages} стр.</div>
                <div class="book-genre">${genre}</div>
            </div>
            <div class="book-description">${description}</div>
            </div>
        </div>
    </div>`;
    document.body.appendChild(bookDiv);
}

var currentId = 0;