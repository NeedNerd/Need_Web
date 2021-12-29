import AuthApi from "../../assets/Api/AuthApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const tryRegister = async (
    id: string,
    password: string,
    name: string,
    contact: string,
    local: string
  ) => {
    console.log(id, password, name, contact, local);
    if (!id || !password || !name || !contact || !local) {
      toast.error("빈칸을 입력해주세요");
    } else {
      await AuthApi.Register(id, password, name, contact, local)
        .then((res) => {
          console.log(res);
          toast.success("회원가입 완료");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("회원가입 실패");
        });
    }
  };

  return { tryRegister };
};

export default useRegister;
