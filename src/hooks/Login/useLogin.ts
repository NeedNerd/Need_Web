import AuthApi from "../../assets/Api/AuthApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const navigate = useNavigate();

  const tryLogin = async (id: string, password: string) => {
    await AuthApi.Login(id, password)
      .then((res) => {
        console.log(res);
        console.log(res.code);
        toast.success("로그인 성공");
        localStorage.setItem("accessToken", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("로그인 실패");
      });
  };
  return { tryLogin };
};

export default useLogin;
