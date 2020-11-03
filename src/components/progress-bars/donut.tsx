import React, { useEffect, useState } from 'react';
import DonutProps from "../../props/donut.props";

function Donut(props: DonutProps) {
  const [size] = useState(props.size <= 0 ? 80 : props.size);
  const [stroke] = useState((props.size * 10) / 100);
  const [cx] = useState(size / 2);
  const [cy] = useState(size / 2);
  const [rad] = useState(size / 2 - stroke / 2);
  const [circumference] = useState(rad * 2 * Math.PI);
  const [percentage] = useState(props.percent <= 0 ? 0 : props.percent > 100 ? 100 : props.percent);
  const [offset] = useState(circumference - (percentage / 100) * circumference);

  const input =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

  function idGenerator(length: number, chars: string) {
    let result = "";
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  const uniqueid = `banners-${idGenerator(15, input)}`;

  useEffect(() => {
    const observer = setInterval(function () {
      if (document.getElementById(`circle-${uniqueid}`)) {
        clearInterval(observer);
        document
          .getElementById(`circle-${uniqueid}`)
          .setAttribute(
            "style",
            `fill: transparent;  stroke: ${
              props.gradient ? `url(#gradient-${uniqueid})` : props.theme ? props.theme[0] : "#F526BD"
            }; stroke-dashoffset: ${offset}; transition: stroke-dashoffset 1s`
          );
      }
    }, 1);
  }, [offset, props.gradient, props.theme, uniqueid]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <svg
          id={`svgs-${uniqueid}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: "rotate(-92deg) scale(1, -1)",
          }}
        >
          {props.gradient ? (
            <defs>
              <linearGradient
                id={`gradient-${uniqueid}`}
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0" stop-color={props.gradient[1]}></stop>
                <stop offset="100%" stop-color={props.gradient[0]}></stop>
              </linearGradient>
            </defs>
          ) : null}
          <circle
            style={{
              fill: "transparent",
              stroke: props.theme ? props.theme[2] : props.gradient ? props.gradient[3] : "#D6DBDF",
            }}
            cx={cx}
            cy={cy}
            r={rad}
            strokeWidth={stroke}
          ></circle>
          <circle
            id={`circle-${uniqueid}`}
            cx={cx}
            cy={cy}
            r={rad}
            strokeWidth={stroke}
            strokeLinecap={props.curvedEdge ? "round" : "square"}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          ></circle>
        </svg>
        {props.hidePercentText === true ? null : (
          <div
            style={{
              position: "absolute",
              fontSize: `${size / 6}px`,
              fontWeight: 600,
              color: props.theme ? props.theme[1] : props.gradient ? props.gradient[2] : "#000000",
            }}
          >
            {percentage}%
          </div>
        )}
      </div>
    </>
  );
}

export default Donut;
