import { ProfileContainer, Description, UserAvatar, Name, Tag, Location, Stats, ListItem, Label, Quantity} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

    return (
        <ProfileContainer>
            <Description>
                <UserAvatar
                    src= {avatar}
                    alt= {username}
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{ location}</Location>
            </Description>

            <Stats>
                <ListItem>
                    <Label>Followers</Label>
                    <Quantity>{followers }</Quantity>
                </ListItem>
                <ListItem>
                    <Label>Views</Label>
                    <Quantity>{ views}</Quantity>
                </ListItem>
                <ListItem>
                    <Label>Likes</Label>
                    <Quantity>{ likes}</Quantity>
                </ListItem>
            </Stats>
      </ProfileContainer>
  );
};

export default Profile;
