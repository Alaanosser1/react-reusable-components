import styled from "styled-components";

interface UserTagProps {
  name: string;
  image?: string;
}

const UserTagContainer = styled.div`
  min-width: 95px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  background-color: #60cf9b;
  border-radius: 100%;
  border-inline-end: 1px solid #ffffff;
  font-family: Poppins;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const UserTagName = styled.div`
  white-space: nowrap;
  padding: 0px 8px;
  height: 20px;
  background-color: #60cf9b;
  margin-left: -5px;
  border-radius: 0px 4px 4px 0px;
  font-family: Poppins;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserTag: React.FC<UserTagProps> = ({ name, image }) => {
  const getUserName = (fullName: string): string => {
    return fullName.split(" ").slice(0, 2).join(" ");
  };

  const getInitials = (name: string): string => {
    const username = getUserName(name);
    const initials = username
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
    return initials.toUpperCase();
  };

  return (
    <UserTagContainer>
      <UserAvatar>
        {!image ? getInitials(name) : <img src={image} />}
      </UserAvatar>
      <UserTagName>{getUserName(name)}</UserTagName>
    </UserTagContainer>
  );
};

export default UserTag;
