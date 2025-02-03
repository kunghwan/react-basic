import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import Like from "./Like";

const App = () => {
  const [name, setName] = useState("유경환");
  return (
    <div>
      <Header name={name} />
      <h1>App</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Footer name={name} />
      <Counter />
      <Like />
    </div>
  );
};
export default App;
