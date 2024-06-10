import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const KakaoLogin = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8080/api/callback?code=${code}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("name", res.data.kakao_account.name);
        navigate("/register");
      })
      .catch((error) => {
        console.error("로그인 에러 " + error);
        navigate("/login");
      });
  };

  useEffect(() => {
    if (code) {
      KakaoLogin();
    }
  }, [code]);

  return (
    <div className="LoginHandler">
      <div className="">로그인 중...</div>
    </div>
  );
};

export default LoginHandler;
