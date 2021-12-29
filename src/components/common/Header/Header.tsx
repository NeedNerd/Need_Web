import react from "react";
import "./Header.scss";
import logo from "../../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import useHeader from "../../../hooks/common/Header/useHeader";

const Header = () => {
  const navigate = useNavigate();
  const { goWritePage } = useHeader();
  return (
    <>
      <div className="HeaderForm">
        <div className="HeaderForm-logo">
          <img src={logo} alt="" className="HeaderForm-logo-img" />
        </div>
        <div
          className="HeaderForm-sub"
          onClick={() => {
            goWritePage();
          }}
        >
          글쓰기
        </div>
        <div
          className="HeaderForm-sub"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </div>
      </div>
    </>
  );
};

export default Header;
