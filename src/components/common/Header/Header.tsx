import react from "react";
import "./Header.scss";
import logo from "../../../assets/img/logo.svg";

const Header = () => {
  return (
    <>
      <div className="HeaderForm">
        <div className="HeaderForm-logo">
          <img src={logo} alt="" className="HeaderForm-logo-img" />
        </div>
        <div className="HeaderForm-sub">글쓰기</div>
        <div className="HeaderForm-sub">로그인</div>
      </div>
    </>
  );
};

export default Header;
