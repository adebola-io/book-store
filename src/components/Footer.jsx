import "./Footer.css";

const Footer = () => {
  return (
    <footer id="book-store_footer">
      <p id="book-store_footer_copyright">
        All Rights Reserved, Book Store Company &copy;{" "}
        {new Date().getUTCFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
