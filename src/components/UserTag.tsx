import styled from "styled-components";

interface UserTagProps {
  name: string;
  image?: string;
}

const UserTagContainer = styled.div`
  width: 95px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserTagCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #60cf9b;
  border: 1px solid #fff;
  border-radius: 100%;
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
  width: 70px;
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

const getInitials = (name: string): string => {
  const words = name.split(" ");
  const initials = words
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("");
  return initials.toUpperCase();
};

const UserTag: React.FC<UserTagProps> = ({ name, image }) => {
  return (
    <UserTagContainer>
      <UserTagCircle>
        {!image ? getInitials(name) : <img src={image} />}
      </UserTagCircle>
      <UserTagName>{name.split(" ").slice(0, 2).join(" ")}</UserTagName>
    </UserTagContainer>
  );
};

export default UserTag;
