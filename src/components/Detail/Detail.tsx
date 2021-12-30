import react, { useEffect } from "react";
import "./Detail.scss";
import mac from "../../assets/img/mac 1.svg";
import useDetail from "../../hooks/Detail/useDetail";
const SERVER = require("../../config/config.json").SERVER;

const Detail = () => {
  const idx: number = parseInt(window.location.pathname.substring(8), 10);
  const {
    ShowDetailPost,
    contact,
    content,
    date,
    local,
    photo,
    price,
    state,
    title,
    writer,
  } = useDetail();
  useEffect(() => {
    ShowDetailPost(idx);
  }, []);
  let data;
  switch (state) {
    case "0":
      data = {
        text: "구매원해요",
        color: "#8aaae5",
      };
      break;
    case "1":
      data = {
        text: "나눔원해요",
        color: "#2bae66",
      };
      break;
    case "2":
      data = {
        text: "이제 괜찮아요",
        color: "#7d5fff",
      };
      break;
    case "3":
      data = {
        text: "구매했어요",
        color: "#f96167",
      };
      break;
    case "4":
      data = {
        text: "나눔받았아요",
        color: "#fce77d",
      };
      break;
  }

  return (
    <>
      <div className="DetailForm">
        <div className="DetailForm-ImgText">
          <div className="DetailForm-ImgText-ImgDiv">
            <img
              src={`${SERVER}/photo/${photo}`}
              alt=""
              className="DetailForm-ImgText-ImgDiv-img"
            />
          </div>
          <div className="DetailForm-ImgText-Options">
            <div className="DetailForm-ImgText-Options-write">
              <div className="DetailForm-ImgText-Options-write-titleTag">
                <div className="DetailForm-ImgText-Options-write-titleTag-title">
                  {title}
                </div>
                <div
                  className="DetailForm-ImgText-Options-write-titleTag-tag"
                  style={{ backgroundColor: data?.color }}
                >
                  {data?.text}
                </div>
              </div>
              <div className="DetailForm-ImgText-Options-write-writerMoney">
                <div className="DetailForm-ImgText-Options-write-writerMoney-writer">
                  <span className="DetailForm-ImgText-Options-write-writerMoney-writer-title">
                    작성자
                  </span>
                  <span className="DetailForm-ImgText-Options-write-writerMoney-writer-name">
                    {writer}
                  </span>
                </div>
                <div className="DetailForm-ImgText-Options-write-writerMoney-money">
                  {price}원
                </div>
              </div>
              <div className="DetailForm-ImgText-Options-write-day">
                <span className="DetailForm-ImgText-Options-write-day-title">
                  작성일자
                </span>
                <span className="DetailForm-ImgText-Options-write-day-time">
                  {date}
                </span>
              </div>
              <div className="DetailForm-ImgText-Options-write-phoneNum">
                <span className="DetailForm-ImgText-Options-write-phoneNum-title">
                  연락처
                </span>
                <span className="DetailForm-ImgText-Options-write-phoneNum-number">
                  {contact}
                </span>
              </div>
              <div className="DetailForm-ImgText-Options-write-area">
                <span className="DetailForm-ImgText-Options-write-area-title">
                  지역
                </span>
                <span className="DetailForm-ImgText-Options-write-area-value">
                  {local}
                </span>
              </div>
              <div className="DetailForm-ImgText-Options-write-text">
                {content}
              </div>
            </div>
            {/* <div className="DetailForm-ImgText-Options-state">
              <div className="DetailForm-ImgText-Options-state-title">
                상태 변경
              </div>
              <div className="DetailForm-ImgText-Options-state-list">
                <div className="DetailForm-ImgText-Options-state-list-item end">
                  이제 괜찮아요
                </div>
                <div className="DetailForm-ImgText-Options-state-list-item buyEnd">
                  구매했어요
                </div>
                <div className="DetailForm-ImgText-Options-state-list-item giftEnd">
                  나눔받았아요
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
