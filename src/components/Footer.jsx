import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = (props) => {
  const FooterLink = (sub_props) => {
    return (
      <li>
        <Link to="#">{sub_props.children}</Link>
      </li>
    );
  };
  const FooterList = (sub_props) => {
    return (
      <div className="book-store_footer_list">
        <h4>{sub_props.heading}</h4>
        <ul>{sub_props.children}</ul>
      </div>
    );
  };
  return (
    <footer id="book-store_footer">
      <div id="book-store_footer_lists">
        <FooterList heading="GET TO KNOW US">
          <FooterLink>Careers</FooterLink>
          <FooterLink>Blog</FooterLink>
          <FooterLink>About Bookstore</FooterLink>
          <FooterLink>Investor Relations</FooterLink>
        </FooterList>
        <FooterList heading="MAKE MONEY WITH US">
          <FooterLink>Sell Books on Bookstore</FooterLink>
          <FooterLink>Become and Affiliate</FooterLink>
          <FooterLink>Advertise your Products</FooterLink>
        </FooterList>
        <FooterList heading="PAYMENT PRODUCTS">
          <FooterLink>Business Card</FooterLink>
          <FooterLink>Shop With Points</FooterLink>
          <FooterLink>Reload Yor Balance</FooterLink>
          <FooterLink>Currency Converter</FooterLink>
        </FooterList>
        <FooterList heading="LET US HELP YOU">
          <FooterLink>Your Account</FooterLink>
          <FooterLink>Shopping Policies</FooterLink>
          <FooterLink>Your Cart</FooterLink>
        </FooterList>
      </div>
      <p id="book-store_footer_copyright">
        All Rights Reserved, Book Store Company &copy;{" "}
        {new Date().getUTCFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
