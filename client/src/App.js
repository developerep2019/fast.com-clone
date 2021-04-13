import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedoAlt,
  faQuestion,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import { getRequest } from "./utils/apiRequest";
import { BASE_URL, GET_INTERNET_SPEED } from "./utils/apiEndPoint";
import CountUp from "react-countup";

function App() {
  const [err, setErr] = useState(null);
  const [speed, setSpeed] = useState(null);
  let startMethod = useRef(null);
  console.log(`${BASE_URL}${GET_INTERNET_SPEED}`);
  const getInternetSpeed = async () => {
    const response = await getRequest(`${BASE_URL}${GET_INTERNET_SPEED}`);
    setSpeed(response.speed);
    startMethod();
  };
  useEffect(() => {
    getInternetSpeed();
  }, []);
  return (
    <div className="App">
      <div className="logo">
        <img
          src="https://fast.com/assets/new-logo-vert-fit-f0bf05.png"
          alt="Fast Logo"
        />
      </div>
      <div className="body">
        <div className="heading">
          <h3>Your Internet Speed Is</h3>
        </div>
        <CountUp
          start={speed ? speed - 10 : 0}
          end={speed ? speed : 0}
          duration={10}
          onEnd={() => console.log("end")}
          onStart={() => console.log("start")}
        >
          {({ countUpRef, start }) => {
            startMethod = start;
            return (
              <>
                <div className="left">
                  <div className="speed-count" ref={countUpRef}></div>
                </div>
                <div className="right">
                  <div className="speed-measure">Mbps</div>
                  <div
                    className="reload"
                    onClick={() => {
                      getInternetSpeed(start);
                    }}
                  >
                    <FontAwesomeIcon icon={faRedoAlt} className="icon-block" />
                  </div>
                </div>
              </>
            );
          }}
        </CountUp>
      </div>
      <div className="footer">
        <button className="showmore-btn">Show more info</button>
        <div className="social-icon">
          <div className="icon-container">
            <FontAwesomeIcon className="icon-block" icon={faQuestion} />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="icon-block" icon={faTwitter} />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="icon-block" icon={faFacebookF} />
          </div>
        </div>
        <div className="small-logo">
          <img
            src="https://fast.com/assets/new-logo-vert-fit-f0bf05.png"
            alt="Fast Small Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
