const Footer = ({ email, MyName, mobile, intro }) => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/kunghwan/react-basic/tree/intro">
            {MyName}
          </a>
        </li>
        <li>
          <a href="">{email}</a>
        </li>
        <li>
          <a href="" target="blank">
            {mobile}
          </a>
        </li>
      </ul>
      <p>{intro}</p>
    </footer>
  );
};

export default Footer;
