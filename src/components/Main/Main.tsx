import react from "react";
import Item from "../common/Item";
import "./Main.scss";
const Main = () => {
  return (
    <>
      <div className="MainForm">
        <div className="MainForm-AllMyTag">
          <div className="MainForm-AllMyTag-All">ALL</div>
          <div className="MainForm-AllMyTag-My">MY</div>
        </div>
        <div className="MainForm-SubTag">
          <div className="MainForm-SubTag-item">구매원해요</div>
          <div className="MainForm-SubTag-item">나눔원해요</div>
          <div className="MainForm-SubTag-item">이제 괜찮아요</div>
          <div className="MainForm-SubTag-item">구매했어요</div>
          <div className="MainForm-SubTag-item">나눔받았어요</div>
        </div>
        <div className="MainForm-ItemList">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
};

export default Main;
