import { useState } from "react";

const useUserNameAndInitials = (name: string) => {
  const getUserName = (name: string): string => {
    return name.split(" ").slice(0, 2).join(" ");
  };

  const getInitials = (name: string): string => {
    const username = getUserName(name);
    const initials = username
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
    return initials.toUpperCase();
  };

  const [userName] = useState(() => getUserName(name));
  const [userInitials] = useState(() => getInitials(name));

  return {
    userName,
    userInitials,
  };
};

export default useUserNameAndInitials;
