import "../css/LoginHandler.css";
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
        const { email, birthday, birthyear, gender, name, phone_number } =
          res.data.kakao_account;
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("birthday", birthday);
        sessionStorage.setItem("birthyear", birthyear);
        sessionStorage.setItem("gender", gender.toUpperCase());
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("phoneNumber", phone_number);
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
      <div className="login-message">로그인 중...</div>
    </div>
  );
};

export default LoginHandler;
