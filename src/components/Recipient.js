import { AutoComplete } from 'antd';
import React from 'react';

const options = [
    {
        value: 'Mike'
    },
    {
        value: 'Jack'
    },
    {
        value: 'Kate'
    },
    {
        value: 'Lucy'
    },
    {
        value: 'Tommy'
    }
];

const Recipient = ({setCurrentMessage, currentMessage}) => (
    <AutoComplete
        onSelect={(value,option) => {
            setCurrentMessage({...currentMessage,recipient: value})}}
        options={options}
        placeholder="name..."
        filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
    />
);

export default Recipient ;
