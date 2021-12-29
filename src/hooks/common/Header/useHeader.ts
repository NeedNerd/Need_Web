import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
// import { isLoginState } from "../../../stores/stateStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useHeader = () => {
  const navigate = useNavigate();
  //   const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const goWritePage = () => {
    const isLogin = localStorage.getItem("accessToken");
    if (isLogin) {
      navigate("/write");
    } else {
      toast.warning("로그인 후 이용가능 합니다.");
      navigate("/login");
    }
  };

  return { goWritePage };
};

export default useHeader;
