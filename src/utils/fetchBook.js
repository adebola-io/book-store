// const BACK_END = "http://localhost:8080";
const BACK_END = "https://adblserve.herokuapp.com";
/**
 * Fetches a book from ADBL using its Book ID.
 * @param {string} id
 */
async function fetchBook(id) {
  const res = await fetch(`${BACK_END}/books/id=${id}`);
  const data = await res.json();
  return data;
}

/**
 * Fetches a series from the ADBL API using its name.
 * @param {string} name
 * @returns {Promise<{author: string, books: Array<string>}>}
 */
export const fetchSeries = async function (name) {
  const res = await fetch(`${BACK_END}/books/seriesName=${name}`);
  const data = await res.json();
  return data;
};

/**
 * Searches for a books from ADBL using a query. The query can be the book title, book author, book series or characters from the book.
 * @param {string} query
 * @returns {{id: string, name: string, author: Array<string>}} An array of result objects. A result consists of the ID, title and author of the book.
 */
export const searchNames = async function (query) {
  const res = await fetch(`${BACK_END}/books/search?query=${query}`);
  const data = await res.json();
  return data;
};

export default fetchBook;
