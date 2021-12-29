import react from "react";
import "./Detail.scss";
import mac from "../../assets/img/mac 1.svg";

const Detail = () => {
  return (
    <>
      <div className="DetailForm">
        <div className="DetailForm-ImgText">
          <div className="DetailForm-ImgText-ImgDiv">
            <img src={mac} alt="" className="DetailForm-ImgText-ImgDiv-img" />
          </div>
          <div className="DetailForm-ImgText-Options">
            <div className="DetailForm-ImgText-Options-write">
              <div className="DetailForm-ImgText-Options-write-titleTag">
                <div className="DetailForm-ImgText-Options-write-titleTag-title">
                  맥북 삽니다
                </div>
                <div className="DetailForm-ImgText-Options-write-titleTag-tag">
                  구매원해요
                </div>
              </div>
              <div className="DetailForm-ImgText-Options-write-writerMoney">
                <div className="DetailForm-ImgText-Options-write-writerMoney-writer">
                  <span className="DetailForm-ImgText-Options-write-writerMoney-writer-title">
                    작성자
                  </span>
                  <span className="DetailForm-ImgText-Options-write-writerMoney-writer-name">
                    사승은
                  </span>
                </div>
                <div className="DetailForm-ImgText-Options-write-writerMoney-money">
                  50000원
                </div>
              </div>
              <div className="DetailForm-ImgText-Options-write-day">
                <span className="DetailForm-ImgText-Options-write-day-title">
                  작성일자
                </span>
                <span className="DetailForm-ImgText-Options-write-day-time">
                  2022/01/13
                </span>
              </div>
              <div className="DetailForm-ImgText-Options-write-phoneNum">
                <span className="DetailForm-ImgText-Options-write-phoneNum-title">
                  연락처
                </span>
                <span className="DetailForm-ImgText-Options-write-phoneNum-number">
                  010-1234-5678
                </span>
              </div>
              <div className="DetailForm-ImgText-Options-write-area">
                <span className="DetailForm-ImgText-Options-write-area-title">
                  지역
                </span>
                <span className="DetailForm-ImgText-Options-write-area-value">
                  대구
                </span>
              </div>
              <div className="DetailForm-ImgText-Options-write-text">
                제가 맥북이 급하게 필요한데 m1 16인치 150에 삽니다 지역은
                대구이고 직거래 희망합니다 필요없으시면 꼭 연락주세요
              </div>
            </div>
            <div className="DetailForm-ImgText-Options-state">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
