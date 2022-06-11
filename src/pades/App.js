import "../style/App.css";
import io from "socket.io-client";
import { useState } from "react";
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import Mail from "./Mail";


const socket = io.connect("https://task5-mail.herokuapp.com/");

function App() {
  const [username, setUsername] = useState("");
  const [showMail, setShowMail] = useState(false);

  const enterEmail = () => {
    if (username !== "") {
      socket.emit("join_room", username);
      setShowMail(true);
    };
  };

  return (
    <div className="App">
      {!showMail ? (
        <div className="toolbar">
              <Input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="John..."
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
              />

              <Button
                  type="primary"
                  htmlType="submit"
                  onClick={enterEmail}
              >
                Enter my mail
              </Button>
        </div>
      ) : (
        <Mail socket={socket} username={username}/>
      )}
    </div>
  );
};

export default App;
