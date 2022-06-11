import {Button, Form, Input} from 'antd';
import React from 'react';
import TextArea from "antd/es/input/TextArea";
import Recipient from "./Recipient";
import {useState} from "react";

const FormMessage = ({sendMessage}) => {
    const [currentMessage, setCurrentMessage] = useState({});

    const  send = (e) => {
        e.preventDefault();
        sendMessage(currentMessage);
        setCurrentMessage({recipient: '', title: '', body: ''});
    };

    return (
        <div className="formMessage">
            <Form labelCol={{
                span: 4,
            }}
              wrapperCol={{
                  span: 16,
              }}>
            <Form.Item
                label="Recipient"
                name="recipient"
            >
                <Recipient setCurrentMessage={setCurrentMessage} currentMessage={currentMessage}/>
            </Form.Item>

            <Form.Item
                label="Title"
                name="title"
            >
                <Input
                    type="text"
                    value={currentMessage.title}
                    onChange={(event) => {
                        setCurrentMessage({...currentMessage, title: event.target.value});
                    }}
                />
            </Form.Item>

            <Form.Item
                label="Text"
                name="text"
            >
                <TextArea
                    type="text"
                    value={currentMessage.body}
                    onChange={(event) => {
                        setCurrentMessage({...currentMessage, body: event.target.value});
                    }}
                />
            </Form.Item>

            <Form.Item wrapperCol={{
                offset: 16,
                span: 16,
            }}>
                <Button onClick={send} type="primary" htmlType="submit">
                    Send message
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default FormMessage;