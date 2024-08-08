import { useState } from "react";
import { useRef, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Forms from "./Components/Forms";
import { FaLinkedin, FaCanadianMapleLeaf, FaGithub, FaGripLines } from 'react-icons/fa';

const ESCAPE_KEYS = ["27", "Escape", " "];

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default function App() {
  const ref = useRef(null);
  const style = {fontSize: "2.0em"}

  let [sidebarState, toggleSideBarState] = useState(false);

  function changeClass() {
    toggleSideBarState(!sidebarState);
    return sidebarState;
  }

  const keydownHandler = ({ key }) => {
    if (ESCAPE_KEYS.includes(String(key))) {
      changeClass();
    }
  };

  const doubleClickHandler = (event) => {
    changeClass();
  };

  useEventListener("keydown", keydownHandler);
  useEventListener("dblclick", doubleClickHandler);

  return (
    <>
      <div className="l-app" ref={ref}>
        <button className="l-sidebar__btn" type="button" onClick={changeClass}>
        <FaGripLines style={{fontSize: "1.8em"}}/>
        </button>
        
        <Sidebar classState={sidebarState} changeClass={changeClass}></Sidebar>
        
        <div className="l-content">
          <div className="l-page bg__profile">
            <main>
              <h1 className="title">Hi, I'm Vinicius Hayden <FaCanadianMapleLeaf/></h1>
              <p className="description">
                Software Engineer
              </p>
              <nav className="c-nav u-my-3">
                <a className="c-nav__item" href="https://github.com/vinicius-hayden" target='_blank'><FaGithub style={style}/></a>
                <a className="c-nav__item" href="https://www.linkedin.com/in/vinicius-hayden/"target='_blank'><FaLinkedin style={style}/></a>
              </nav>
              <a className="c-btn u-my-3" href="#sobre-mim">About me</a>
            </main>
          </div>

          <div className="l-page" id="sobre-mim">
            <article>
              <h1 className="title">About me</h1>
              <p>
              Computer Programming and Analysis student at Seneca Polytechnic, with experience in full-stack development, 
              particularly in JavaScript and Java-based environments. I have honed my skills through a Full Stack Development
              Internship at Digital House Brasil. My techo various 
              languages and frameworks, including React, MySQL, Docker, and AWS, which I have used to build, maintain, and 
              optimize scalable and efficient applications. Passionate about problem-solving and continuous learning, 
              I am committed to advancing my knowledge and skills in software engineering.
              </p>
              <p>
                Passionate about learning new technologies and in the idea of sharing experiences
                and life values through coding. Strongly believes that code has no accent nor gender
                , and that through diversity, people flourish and foster their own human revolution, 
                self-development and self-knowledge.
              </p>
              <p>
                Open-minded, inquirer, risk-taker, knowledgeable and communicator are some of the words 
                that I would describe myself.
              </p>
            </article>
          </div>
          <Forms/>
        </div>
      </div>
    </>
  );
}