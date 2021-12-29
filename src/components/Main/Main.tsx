import react, { useEffect, useState } from "react";
import useMain from "../../hooks/Main/useMain";
import Item from "../common/Item";
import "./Main.scss";
const Main = () => {
  const [allMy, setAllMy] = useState(true);
  const [state, setState] = useState(undefined);
  const { getAllList, itemList, getMyList } = useMain();
  useEffect(() => {
    if (allMy) {
      getAllList(state);
    } else {
      getMyList(state);
    }
  }, [allMy, state]);
  return (
    <>
      <div className="MainForm">
        <div className="MainForm-AllMyTag">
          <div
            className={
              allMy ? "MainForm-AllMyTag-All check" : "MainForm-AllMyTag-All"
            }
            onClick={() => {
              setAllMy(true);
            }}
          >
            ALL
          </div>
          <div
            className={
              allMy ? "MainForm-AllMyTag-My" : "MainForm-AllMyTag-My check"
            }
            onClick={() => {
              setAllMy(false);
            }}
          >
            MY
          </div>
        </div>
        <div className="MainForm-SubTag">
          {allMy ? (
            <>
              <div className="MainForm-SubTag-item buy">구매원해요</div>
              <div className="MainForm-SubTag-item gift">나눔원해요</div>
            </>
          ) : (
            <>
              <div className="MainForm-SubTag-item buy">구매원해요</div>
              <div className="MainForm-SubTag-item gift">나눔원해요</div>
              <div className="MainForm-SubTag-item end">이제 괜찮아요</div>
              <div className="MainForm-SubTag-item buyEnd">구매했어요</div>
              <div className="MainForm-SubTag-item giftEnd">나눔받았어요</div>
            </>
          )}
        </div>
        <div className="MainForm-ItemList">
          {itemList.map((item: any) => (
            <Item
              date={item.date}
              key={item.idx}
              photo={item.photo}
              state={item.state}
              title={item.title}
              writer={item.writer}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
