import PostApi from "../../assets/Api/PostApi";
import { useState } from "react";
const useDetail = () => {
  const [contact, setContact] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [local, setLocal] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const ShowDetailPost = async (idx: number) => {
    await PostApi.DetailPost(idx)
      .then((res) => {
        console.log(res);
        setContact(res.data.contact);
        setContent(res.data.contact);
        setDate(res.data.date);
        setLocal(res.data.local);
        setPhoto(res.data.photo);
        setPrice(res.data.price);
        setState(res.data.state);
        setTitle(res.data.title);
        setWriter(res.data.writer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
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
  };
};

export default useDetail;
