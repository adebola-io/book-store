const BACK_END = "http://localhost:8080";
/**
 * Fetches a book from ADBL using its Book ID.
 * @param {string} id
 */
async function fetchBook(id) {
  const res = await fetch(`${BACK_END}/books/id=${id}`, {
    method: "POST",
  });
  const data = await res.json();
  return data;
}

/**
 * Fetches a series from the ADBL API using its name.
 * @param {string} name
 * @returns {Promise<{author: string, books: Array<string>}>}
 */
export const fetchSeries = async function (name) {
  const res = await fetch(`${BACK_END}/books/seriesName=${name}`, {
    method: "POST",
  });
  const data = await res.json();
  return data;
};

export default fetchBook;
