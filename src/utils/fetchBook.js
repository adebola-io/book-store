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
export default fetchBook;
