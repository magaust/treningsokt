import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Hjem</a>
    </Link>
    <Link href="/setup">
      <a style={linkStyle}>Lag ny økt</a>
    </Link>
  </div>
);

export default Header;
