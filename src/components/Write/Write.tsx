import react, { useState } from "react";
import "./Write.scss";
import writeTitleImg from "../../assets/img/Write Message.svg";
import picture from "../../assets/img/Group 27.svg";
import useWrite from "../../hooks/Write/useWrite";
const Write = () => {
  const [imgBase64, setImgBase64]: any[] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [money, setMoney] = useState("");
  const [state, setState] = useState(0);
  const { tryUploadImg, tryPost, end } = useWrite();
  console.log(imgFile);
  const handleChangeFile = (event: any) => {
    console.log(event.target.files);
    setImgFile(event.target.files);

    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            var base64Sub = base64.toString();
            setImgBase64((imgBase64: any) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="WriteForm-Options-pictureText">
            <div className="WriteForm-Options-pictureText-pictureDiv">
              {imgBase64.length === 0 ? (
                <>
                  <img
                    src={picture}
                    alt=""
                    className="WriteForm-Options-pictureText-pictureDiv-img"
                  />
                  <label htmlFor="addFile">사진 선택</label>
                </>
              ) : (
                imgBase64.map((item: any) => {
                  return (
                    <>
                      <img
                        className="WriteForm-Options-pictureText-pictureDiv-img"
                        src={item}
                        alt="First slide"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <label htmlFor="addFile">사진 선택</label>
                    </>
                  );
                })
              )}
              <input
                type="file"
                id="addFile"
                style={{ display: "none" }}
                onChange={handleChangeFile}
                multiple={true}
              />
            </div>
            <div className="WriteForm-Options-pictureText-textDiv">
              <textarea
                className="WriteForm-Options-pictureText-textDiv-input"
                placeholder="내용을 입력해주세요"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
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
                <div
                  className={
                    state === 0
                      ? "WriteForm-Options-TagDiv-titleItems-items-item buy"
                      : "WriteForm-Options-TagDiv-titleItems-items-item"
                  }
                  onClick={() => {
                    setState(0);
                  }}
                >
                  구매원해요
                </div>
                <div
                  className={
                    state === 0
                      ? "WriteForm-Options-TagDiv-titleItems-items-item"
                      : "WriteForm-Options-TagDiv-titleItems-items-item gift"
                  }
                  onClick={() => {
                    setState(1);
                  }}
                >
                  나눔원해요
                </div>
              </div>
            </div>

            {state === 0 ? (
              <>
                <div className="WriteForm-Options-TagDiv-money">
                  <input
                    type="text"
                    className="WriteForm-Options-TagDiv-money-input"
                    placeholder="0"
                    value={money}
                    onChange={(e) => {
                      setMoney(e.target.value);
                    }}
                  />
                  <span className="WriteForm-Options-TagDiv-money-title">
                    원
                  </span>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="WriteForm-Submit">
          <button
            className="WriteForm-Submit-btn"
            onClick={() => {
              end();
            }}
          >
            작성 완료
          </button>
        </div>
      </div>
    </>
  );
};

export default Write;
