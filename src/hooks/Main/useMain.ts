import PostApi from "../../assets/Api/PostApi";
import { useState } from "react";
const useMain = () => {
  const [itemList, setItemList] = useState([]);
  const getAllList = async (state?: string) => {
    await PostApi.AllList(state)
      .then((res) => {
        console.log(res);
        setItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMyList = async (state?: string) => {
    await PostApi.MyList(state)
      .then((res) => {
        setItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { getAllList, itemList, getMyList };
};
export default useMain;
