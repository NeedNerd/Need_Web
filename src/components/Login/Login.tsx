import react from "react";
import "./Login.scss";
import logo from "../../assets/img/Group 17 2.svg";

const Login = () => {
  return (
    <>
      <div className="LoginForm">
        <div className="LoginForm-Logo">
          <img src={logo} alt="" className="LoginForm-Logo-Img" />
        </div>
        <div className="LoginForm-Options">
          <div className="LoginForm-Options-Inputs">
            <div className="LoginForm-Options-Inputs-Id">
              <input
                type="text"
                className="LoginForm-Options-Inputs-Id-input"
                placeholder="아이디"
              />
            </div>
            <div className="LoginForm-Options-Inputs-Pw">
              <input
                type="text"
                className="LoginForm-Options-Inputs-Pw-input"
                placeholder="비밀번호"
              />
            </div>
          </div>
          <div className="LoginForm-Options-Submits">
            <div className="LoginForm-Options-Submits-Login">
              <button className="LoginForm-Options-Submits-Login-btn">
                로그인
              </button>
            </div>
            <div className="LoginForm-Options-Submits-Register">
              <button className="LoginForm-Options-Submits-Register-btn">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
