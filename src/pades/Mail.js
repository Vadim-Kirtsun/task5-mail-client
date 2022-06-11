import React, { useEffect, useState } from "react";
import FormMessage from "../components/FormMessage";
import GotMessages from "../components/GotMessages";
import {notification} from "antd";

const key = 'updatable';

const openNotification = (from, title, text) => {
  notification.open({
    key,
    message: 'New message notification!',
    description: 'From:' + from,
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'Title: ' + title,
      description: 'Text: ' + text,
    });
  }, 1000);
};

const Mail = ({ socket, username }) => {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async (message) => {
    if (message !== "") {
      const messageData = {
        author: username,
        recipient: message.recipient,
        title: message.title,
        message: message.body,
        time: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
      };

      await socket.emit("send_message", messageData);
    };
  };

  const getUsers = async (username) => {
    if (username !== "") {
      await socket.emit("get_my_message", username);
    };
  };

  function showTimeOnly(date){
    let time = new Date(date).getHours() +
        ":" +
        new Date(date).getMinutes();
    return time;
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      openNotification(data.author, data.title, data.message);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("get_message_result", (data) => {
      setMessageList(data);
    });
    getUsers(username);
  }, []);

  return (
      <div className="mail">
        <h2>Send A Message</h2>
        <FormMessage sendMessage={sendMessage}/>
        <h2>My Messages</h2>
        <GotMessages showTimeOnly={showTimeOnly} messageList={messageList}/>
      </div>
  );
};

export default Mail;
