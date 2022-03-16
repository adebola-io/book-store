function getBookCover(localCover, type) {
  return require(`../assets/images/books/${type}/${localCover}`).default;
}

export default getBookCover;
