import { useEffect } from "react";

const useScrollLock = (isModalOpen: boolean) => {
  useEffect(() => {
    // Add event listener to handle scrolling when the modal is open
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Remove event listener when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
};

export default useScrollLock;
