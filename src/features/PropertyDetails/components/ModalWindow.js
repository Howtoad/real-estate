import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useCallback, useState } from "react";

// component requires a useState called showModalWindow and setShowModalWindow to be passed down
const ModalWindow = ({
  showModalWindow,
  setShowModalWindow,
  modalContainerAnimation,
  modalContentAnimation,
  children,
}) => {
  //default animation
  const ContainerAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 0.5,
    },
  };
  const ContentAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    show: {
      display: "flex",
      opacity: 1,
    },
  };

  const containerControls = useAnimationControls();
  const contentControls = useAnimationControls();
  const [ariaHidden, setAriaHidden] = useState(false);

  const showSequence = async () => {
    await containerControls.start("show");
    return await contentControls.start("show");
  };
  const hideSequence = async () => {
    contentControls.start("hidden");
    containerControls.start("hidden");
  };

  useEffect(() => {
    if (showModalWindow === true) {
      setAriaHidden(false);
    } else {
      setAriaHidden(true);
    }
  }, [showModalWindow]);

  if (showModalWindow === true) {
    showSequence();
  } else {
    hideSequence();
  }

  const escapeDown = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setShowModalWindow(false);
      }
    },
    [setShowModalWindow]
  );

  useEffect(() => {
    document.addEventListener("keydown", escapeDown, false);
    return () => {
      document.removeEventListener("keydown", escapeDown, false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <motion.section
        aria-modal="true"
        role="dialog"
        aria-hidden={ariaHidden}
        className="lightbox w-screen h-screen bg-black fixed top-0"
        variants={
          (modalContainerAnimation && modalContainerAnimation) ||
          ContainerAnimation
        }
        initial="hidden"
        animate={containerControls}
        onClick={(e) => {
          e.target === e.currentTarget && setShowModalWindow(false);
        }}
      ></motion.section>
      <motion.div
        aria-modal="true"
        role="alertdialog"
        aria-hidden={ariaHidden}
        className="m-auto min-w-10 min-h-10 w-fit h-fit z-10 fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 justify-between flex-col rounded-md"
        variants={
          (modalContentAnimation && modalContentAnimation) || ContentAnimation
        }
        initial="hidden"
        animate={contentControls}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ModalWindow;
