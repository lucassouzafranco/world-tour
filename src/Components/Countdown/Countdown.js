import React from "react";
import "./Countdown.css" ;

const Carousel = () => {
  return(
    <>
      <div className="countdownContainer">
        <div className="countdownArea">

          <div className="daysContainer">
            <div className="daysArea">
              <div className="blackStrip"/>
              <div className="daysText"><h1>2</h1></div>
            </div>
            <div className="daysArea">
            <div className="daysText"><h1>2</h1></div>
              <div className="blackStrip"/>
            </div>
          </div>

          <div className="hoursContainer">
            <div className="hoursArea">
              <div className="blackStrip"/>
              <div className="hoursText"><h1>2</h1></div>
            </div>
            <div className="hoursArea">
            <div className="hoursText"><h1>2</h1></div>
              <div className="blackStrip"/>
            </div>
          </div>
          
          <div className="minutesContainer">
            <div className="minutesArea">
              <div className="blackStrip"/>
              <div className="minutesText"><h1>2</h1></div>
            </div>
            <div className="minutesArea">
            <div className="minutesText"><h1>2</h1></div>
              <div className="blackStrip"/>
            </div>
          </div>

        </div>
      </div>
      <div className="backgroundColorContainer">
        <div className="legendContainer">
          <div className="legendText"></div>
        </div>
      </div>
    </>
  )
}

export default Carousel