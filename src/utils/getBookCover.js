/**
 * Returns a book cover from the assets folder.
 * @param {string} localCover
 * @param {"md"|"hd"|"min"} type
 * @returns image.
 */
function getBookCover(localCover, type) {
  return require(`../assets/images/books/${type}/${localCover}`).default;
}

export default getBookCover;
