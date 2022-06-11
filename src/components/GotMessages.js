import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;


const GotMessages = ({messageList, showTimeOnly}) => {

    return (
        <div className="magazine">
            {messageList.map((messageContent, index) => {
                return (
                    <div key={index} className="message">
                        <div className="message-content">
                            <Collapse bordered={false} defaultActiveKey={['0']}>
                                <Panel header={messageContent.title} key="1">
                                    <p>{messageContent.message}</p>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className="message-meta">
                            <p>{messageContent.author}</p>
                            <p>{showTimeOnly(messageContent.time)}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default GotMessages;