/**
 * Format a book blurb.
 * @param {string} blurb
 * @returns {{head: HTMLElement, content: string}}
 */
function blurbify(blurb) {
  let head = document.createElement("b");
  let content = document.createElement("span");
  head.innerText = blurb.slice(0, blurb.indexOf("\n"));
  content.innerText = blurb
    .slice(blurb.indexOf("\n"))
    .replace(/\s•\s/g, "\n • ");
  return {
    head,
    content,
  };
}

export default blurbify;
