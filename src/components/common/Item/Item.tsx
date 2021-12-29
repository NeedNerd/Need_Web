import "./Item.scss";
const SERVER = require("../../../config/config.json").SERVER;
export interface ItemProps {
  date: string;
  photo: string;
  state: string;
  title: string;
  writer: string;
}

const Item = ({
  date,
  photo,
  state,
  title,
  writer,
}: ItemProps): JSX.Element => {
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
      <div className="ItemForm">
        <div className="ItemForm-ImgDiv">
          <img
            src={`${SERVER}/photo/${photo}`}
            alt=""
            className="ItemForm-ImgDiv-Img"
          />
        </div>
        <div className="ItemForm-TextDiv">
          <div className="ItemForm-TextDiv-TitleTag">
            <div className="ItemForm-TextDiv-TitleTag-Title">{title}</div>
            <div
              className="ItemForm-TextDiv-TitleTag-Tag"
              style={{ backgroundColor: data?.color }}
            >
              {data?.text}
            </div>
          </div>
          <div className="ItemForm-TextDiv-NameTime">
            <div className="ItemForm-TextDiv-NameTime-Name">{writer}</div>
            <div className="ItemForm-TextDiv-NameTime-Time">{date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
