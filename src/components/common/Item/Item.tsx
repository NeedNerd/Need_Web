import "./Item.scss";
import img from "../../../assets/img/chicken1.svg";
const Item = () => {
  return (
    <>
      <div className="ItemForm">
        <div className="ItemForm-ImgDiv">
          <img src={img} alt="" className="ItemForm-ImgDiv-Img" />
        </div>
        <div className="ItemForm-TextDiv">
          <div className="ItemForm-TextDiv-TitleTag">
            <div className="ItemForm-TextDiv-TitleTag-Title">치킨 삽니다</div>
            <div className="ItemForm-TextDiv-TitleTag-Tag">구매원해요</div>
          </div>
          <div className="ItemForm-TextDiv-NameTime">
            <div className="ItemForm-TextDiv-NameTime-Name">사승은</div>
            <div className="ItemForm-TextDiv-NameTime-Time">2021/01/13</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
