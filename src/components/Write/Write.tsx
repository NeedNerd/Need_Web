import react from "react";
import "./Write.scss";
import writeTitleImg from "../../assets/img/Write Message.svg";
import picture from "../../assets/img/Group 27.svg";
const Write = () => {
  return (
    <>
      <div className="WriteForm">
        <div className="WriteForm-TitleImg">
          <img src={writeTitleImg} alt="" className="WriteForm-TitleImg-img" />
        </div>
        <div className="WriteForm-Options">
          <div className="WriteForm-Options-titleDiv">
            <div className="WriteForm-Options-titleDiv-title">제목</div>
            <div className="WriteForm-Options-titleDiv-inputDiv">
              <input
                type="text"
                className="WriteForm-Options-titleDiv-inputDiv-input"
                placeholder="제목을 입력해주세요"
              />
            </div>
          </div>
          <div className="WriteForm-Options-pictureText">
            <div className="WriteForm-Options-pictureText-pictureDiv">
              <img
                src={picture}
                alt=""
                className="WriteForm-Options-pictureText-pictureDiv-img"
              />
            </div>
            <div className="WriteForm-Options-pictureText-textDiv">
              <textarea
                className="WriteForm-Options-pictureText-textDiv-input"
                placeholder="내용을 입력해주세요"
              />
            </div>
          </div>
          <div className="WriteForm-Options-TagDiv">
            <div className="WriteForm-Options-TagDiv-titleItems">
              <div className="WriteForm-Options-TagDiv-titleItems-title">
                <span className="WriteForm-Options-TagDiv-titleItems-title-tag">
                  태그를 선택해주세요.{" "}
                </span>
                <span className="WriteForm-Options-TagDiv-titleItems-title-count">
                  남은 나눔 횟수 : 2회
                </span>
              </div>
              <div className="WriteForm-Options-TagDiv-titleItems-items">
                <div className="WriteForm-Options-TagDiv-titleItems-items-item buy">
                  구매원해요
                </div>
                <div className="WriteForm-Options-TagDiv-titleItems-items-item gift">
                  나눔원해요
                </div>
              </div>
            </div>

            <div className="WriteForm-Options-TagDiv-money">
              <input
                type="text"
                className="WriteForm-Options-TagDiv-money-input"
                placeholder="0"
              />
              <span className="WriteForm-Options-TagDiv-money-title">원</span>
            </div>
          </div>
        </div>
        <div className="WriteForm-Submit">
          <button className="WriteForm-Submit-btn">작성 완료</button>
        </div>
      </div>
    </>
  );
};

export default Write;
