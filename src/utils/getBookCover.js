/**
 * Returns a book cover from the assets folder.
 * @param {string} localCover
 * @param {"md"|"hd"|"min"} type
 * @returns image.
 */
function getBookCover(localCover, type) {
  try {
    return require(`../assets/images/books/${type}/${localCover}`).default;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export default getBookCover;
