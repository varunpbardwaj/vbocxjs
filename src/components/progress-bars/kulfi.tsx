import React from 'react';
import KulfiProps from "../../props/kulfi.props";

function Kulfi(props: KulfiProps) {
    const input =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  
    function idGenerator(length: number, chars: string) {
      let result = "";
      for (let i = length; i > 0; i -= 1) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    }
  
    const uniqueid = `banners-${idGenerator(15, input)}`;
  
    const observer = setInterval(function () {
      if (document.getElementById(`kulfi-${uniqueid}`)) {
        clearInterval(observer);
        document.getElementById(`kulfi-${uniqueid}`).animate(
          [
            { width: "0%" },
            {
              width:
                props.percent <= 0
                  ? "0%"
                  : props.percent >= 100
                  ? "100%"
                  : `${props.percent}%`,
            },
          ],
          {
            duration: 800,
            iterations: 1,
            easing: "linear",
          }
        );
      }
    }, 1);
  
    return (
      <>
        <div
          style={{
            width: `${props.length}px`,
            height: props.length > 400 ? "14px" : `${props.length / 28.5}px`,
            backgroundColor: props.theme ? props.theme[2] : props.gradient ? props.gradient[3] : "#D6DBDF",
            borderRadius: props.curvedEdge ? "70px" : "0px",
          }}
        >
          <div
            id={`kulfi-${uniqueid}`}
            style={{
              width:
                props.percent <= 0
                  ? "0%"
                  : props.percent >= 100
                  ? "100%"
                  : `${props.percent}%`,
              height: props.length > 400 ? "14px" : `${props.length / 28.5}px`,
              background: props.gradient
                ? `linear-gradient(to right, ${props.gradient[0]}, ${props.gradient[1]})`
                : props.theme ? props.theme[0] : "#F526BD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: props.curvedEdge ? "70px" : "0px",
            }}
          >
            {props.hidePercentText ? null : props.percent > 3 ? (
              <div
                style={{
                  fontSize:
                    props.length > 400 ? "12px" : `${props.length / 36}px`,
                  fontWeight: 500,
                  color: props.theme ? props.theme[1] : props.gradient ? props.gradient[2] : "#ffffff",
                }}
              >
                {props.percent}%
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }

export default Kulfi;
