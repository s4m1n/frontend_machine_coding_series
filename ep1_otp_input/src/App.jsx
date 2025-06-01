import { useEffect, useRef, useState } from "react";

function App({ otpLength = 6 }) {
  const [otpArr, setOtpArr] = useState(new Array(otpLength).fill(""));
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // does not accept non numeric values

    const newArr = [...otpArr];
    newArr[index] = value.trim().slice(-1);

    setOtpArr(newArr);

    value && inputsRef.current[index + 1]?.focus();
  };

  const handleOnKeyUp = (e, index) => {
    if (!e.target.value && e.code === "Backspace") {
      inputsRef.current[index - 1]?.focus();
    } else if (e.code === "ArrowRight") {
      inputsRef.current[index + 1]?.focus();
    } else if (e.code === "ArrowLeft") {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h1>OTP Input</h1>

      {otpArr.map((digit, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleOnChange(e.target.value, index)}
            ref={(element) => (inputsRef.current[index] = element)}
            onKeyUp={(e) => handleOnKeyUp(e, index)}
          />
        );
      })}
    </div>
  );
}

export default App;
