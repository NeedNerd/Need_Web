import { useState } from "react";
import PostApi from "../../assets/Api/PostApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const useWrite = () => {
  const navigate = useNavigate();

  const tryUploadImg = async (file: any) => {
    await PostApi.UploadImg(file)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const tryPost = async () => {
    await PostApi.Post()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const end = async () => {
    await PostApi.Post()
      .then((res) => {
        console.log(res);
        toast.success("글 작성되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { tryUploadImg, tryPost, end };
};
export default useWrite;
