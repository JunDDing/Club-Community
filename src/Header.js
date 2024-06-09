import './Header.css';

function Header() {
  return (
    <div className="App">
         <header>
            <button>로그인</button>
            <button>회원가입</button>
        </header>

        <nav>
            <button>동아리 조회</button>
            <button>동아리 행사</button>
            <button>동영상</button>
            <button>사진</button>
        </nav>
    </div>
  );
}

export default Header;
