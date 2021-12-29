import react from "react";
import "./Register.scss";
import logo from "../../assets/img/Group 17 2.svg";

const Register = () => {
  return (
    <>
      <div className="RegisterForm">
        <div className="RegisterForm-Logo">
          <img src={logo} alt="" className="RegisterForm-Logo-Img" />
        </div>
        <div className="RegisterForm-Options">
          <div className="RegisterForm-Options-id">
            <input
              type="text"
              className="RegisterForm-Options-id-input AuthInput"
              placeholder="아이디"
            />
          </div>
          <div className="RegisterForm-Options-pw">
            <input
              type="text"
              className="RegisterForm-Options-pw-input AuthInput"
              placeholder="비밀번호"
            />
          </div>
          <div className="RegisterForm-Options-name">
            <input
              type="text"
              className="RegisterForm-Options-name-input AuthInput"
              placeholder="이름"
            />
          </div>
          <div className="RegisterForm-Options-phoneNum">
            <input
              type="text"
              className="RegisterForm-Options-phoneNum-input AuthInput"
              placeholder="전화번호"
            />
          </div>
          <div className="RegisterForm-Options-area">
            <input
              type="text"
              className="RegisterForm-Options-area-input AuthInput"
              placeholder="거주 지역"
            />
          </div>
        </div>
        <div className="RegisterForm-Submit">
          <button className="RegisterForm-Submit-btn">가입 완료</button>
        </div>
      </div>
    </>
  );
};

export default Register;
