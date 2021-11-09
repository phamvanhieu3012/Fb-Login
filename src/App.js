import "./App.css";
import FacebookLogin from "react-facebook-login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const responseFacebook = (response) => {
    console.log(response);
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      {isLoggedIn ? (
        "Home"
      ) : (
        <FacebookLogin
          appId="452317036044756"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      )}
    </div>
  );
}

export default App;
