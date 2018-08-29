import React from 'react';
import styled from 'styled-components';

const ShoutoutEle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Shoutout = (props) => {
  return(
    <ShoutoutEle>
      <div className="user">{props.user}</div>
      <div className="message">{props.message}</div>
    </ShoutoutEle>
  )
}