import { backend } from "./backend";
/**
 * Fetches a book from ADBL using its Book ID.
 * @param {string} id
 */
async function fetchBook(id) {
  const res = await fetch(`${backend}/books/id=${id}`, { method: "POST" });
  const data = await res.json();
  return data;
}
export default fetchBook;
