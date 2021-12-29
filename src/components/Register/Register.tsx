import react, { useState } from "react";
import "./Register.scss";
import logo from "../../assets/img/Group 17 2.svg";
import useRegister from "../../hooks/Register/useRegister";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [local, setLocal] = useState("");
  const { tryRegister } = useRegister();

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
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
          <div className="RegisterForm-Options-pw">
            <input
              type="text"
              className="RegisterForm-Options-pw-input AuthInput"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="RegisterForm-Options-name">
            <input
              type="text"
              className="RegisterForm-Options-name-input AuthInput"
              placeholder="이름"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="RegisterForm-Options-phoneNum">
            <input
              type="text"
              className="RegisterForm-Options-phoneNum-input AuthInput"
              placeholder="전화번호"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
          </div>
          <div className="RegisterForm-Options-area">
            <input
              type="text"
              className="RegisterForm-Options-area-input AuthInput"
              placeholder="거주 지역"
              value={local}
              onChange={(e) => {
                setLocal(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="RegisterForm-Submit">
          <button
            className="RegisterForm-Submit-btn"
            onClick={() => {
              tryRegister(id, password, name, contact, local);
            }}
          >
            가입 완료
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
