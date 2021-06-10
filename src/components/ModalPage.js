import { useEffect, useRef, useState } from "react";
import Portal from "@reach/portal";

import { YoutubePlayer } from "reactjs-media";
export const ModalPage = ({ movieId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=eafc0da50e46a0fe474daa07b094c302`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideoURL(data.results[0].key);
      });
  }, [movieId]);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-gray-500 hover:bg-gray-700"
      >
        Watch the Trailer
      </button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <Modal.Header>Official Trailer</Modal.Header>
        <Modal.Body>
          <YoutubePlayer
            src={`https://www.youtube.com/watch?v=${videoURL}`}
            allowFullScreen={true}
            width={565}
            height={318}
          />
        </Modal.Body>

        <Modal.Footer>
          <button
            onClick={toggle}
            className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-gray-500"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const style = {
  container: `fixed top-0 overflow-y-auto left-0 z-40 w-full h-full m-0`,
  content: `relative flex flex-col bg-black pointer-events-auto`,
  orientation: `mt-12 mx-8 pb-6 md:m-auto md:w-8/12 md:pt-12 focus:outline-none`,
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
  header: `items-start justify-between p-4 border-b border-gray-800 text-white`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  body: `flex-shrink flex-grow p-4 m-auto`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-800`,
};

const Modal = ({ children, isOpen, toggle }) => {
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, ref, toggle]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        toggle(false);
      }
    };
    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isOpen, toggle]);

  useEffect(() => {
    if (!isOpen) return;

    ref.current?.focus();

    const html = document.documentElement;

    const overflow = html.style.overflow;
    const paddingRight = html.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    html.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = overflow;
      html.style.paddingRight = paddingRight;
    };
  }, [isOpen]);

  return (
    <Portal>
      {isOpen && (
        <>
          <div className={style.overlay} />
          <div className={style.container}>
            <div className={style.orientation} ref={ref} tabIndex={-1}>
              <div className={style.content}>{children}</div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
};

Modal.Header = ({ children }) => (
  <div className={style.header}>
    <h4 className={style.headerTitle}>{children}</h4>
  </div>
);
Modal.Body = ({ children }) => <div className={style.body}>{children}</div>;
Modal.Footer = ({ children }) => <div className={style.footer}>{children}</div>;

export default ModalPage;
