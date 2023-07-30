import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="flex">
        <div className="header"></div>
        <div className="content">
          <li>Best Sellers</li>
          <li>Gift Ideas</li>
          <li>New Releases</li>
          <li>Today's Deal</li>
          <li>Customer Service</li>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default Header;
