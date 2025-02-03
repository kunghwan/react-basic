import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const MyName = "유경환";

  const email = "ysw03031@naver.com";

  const githubUrl = "https://github.com/kunghwan/react-basic/tree/intro";

  const mobile = "010-5555-5555";

  const intro = "안녕하세요, 잘가세요.";

  return (
    <div>
      <Header name={"hello world"} />
      <main>
        <h1>간단한 인삿말</h1>
        <p>
          안녕하세요.저는 {MyName}입니다. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis perferendis laborum asperiores, voluptates
          dicta itaque provident eos laudantium ullam laboriosam doloribus
          cumque dolorem ipsa suscipit nostrum dolores ad, beatae quasi.
        </p>
        <br />
        <p>연락처는 {mobile}</p>
        <br />
        <p>이메일은 {email}</p>
      </main>
      <Footer MyName={MyName} email={email} mobile={mobile} intro={intro} />
    </div>
  );
};

export default App;
