import { Meat } from "./Food";
import Hobby from "./Hobby";
import { Contact, Country } from "./Info";
import MyName from "./MyName";

const App = () => {
  return (
    <div>
      <h1>app</h1>
      <MyName />
      <Contact />
      <Country />
      <Meat />
      <Hobby />
    </div>
  );
};

export default App;
