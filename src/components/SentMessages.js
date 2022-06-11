import React from 'react';

const SentMessages = ({messageSentList, showTimeOnly}) => {

    return (
        <div className="magazine">
            {messageSentList.map((messageContent, index) => {
                return (
                    <div key={index} className="message">
                        <div className="message-content">
                            <p>{messageContent.title}</p>
                            <p>{messageContent.message}</p>
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

export default SentMessages;