import {FriendsList, FriendListItem, Status, Avatar, FriendName} from './FriendList.styled';

const FriendList = ({friends}) => {
    return (
        <FriendsList className='friend-list'>
            {friends.map(({ avatar, name, isOnline, id }) => 
                <FriendListItem key={id}>
                    <Status isOnline={isOnline}/>
                    <Avatar
                        src={avatar}
                        alt={name} />
                    <FriendName>{name}</FriendName>
              </FriendListItem>  
            )}
        </FriendsList>
    )
}

export default FriendList;