// FriendsAndChats.jsx
import React, { useState } from 'react';
import { Container, Nav, Tab, ListGroup } from 'react-bootstrap';

// 샘플 데이터
const friends = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
{ id: 3, name: 'Charlie' },
];

const chatRooms = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Project Group' },
{ id: 3, name: 'Family' },
];

const FriendsAndChats = ({ onChatRoomSelect }) => {
return (
    <Container>
    <h2>친구 목록 및 채팅방 목록</h2>
    <Tab.Container defaultActiveKey="friends">
        <Nav variant="tabs">
        <Nav.Item>
            <Nav.Link eventKey="friends">친구 목록</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="chatRooms">채팅방 목록</Nav.Link>
        </Nav.Item>
        </Nav>
        <Tab.Content className="mt-3">
        <Tab.Pane eventKey="friends">
            <ListGroup>
            {friends.map((friend) => (
                <ListGroup.Item key={friend.id} onClick={() => onChatRoomSelect(friend.name, 'friend')}>
                {friend.name}
                </ListGroup.Item>
            ))}
            </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="chatRooms">
            <ListGroup>
            {chatRooms.map((chatRoom) => (
                <ListGroup.Item key={chatRoom.id} onClick={() => onChatRoomSelect(chatRoom.name, 'chatRoom')}>
                {chatRoom.name}
                </ListGroup.Item>
            ))}
            </ListGroup>
        </Tab.Pane>
        </Tab.Content>
    </Tab.Container>
    </Container>
);
};

export default FriendsAndChats;
