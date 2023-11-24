import styled from "@emotion/styled";

export const FriendsList = styled.ul`
    list-style: none;
`

export const FriendListItem = styled.li`
    display: flex;
    align-items: center;
    background-color: #ffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 200px;
    padding: 20px 30px;
    margin-bottom: 10px;

`
export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  margin-right: 10px;

`
export const Avatar = styled.img`
    width: 50px;
`
export const FriendName = styled.p`
    margin-left: 20px;
    font-size: 18px;
    font-weight: 500;
`
