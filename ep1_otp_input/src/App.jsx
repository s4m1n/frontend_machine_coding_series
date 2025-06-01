import { useEffect, useRef, useState } from "react";

const OTP_LEN = 6;
function App() {
  const [otpArr, setOtpArr] = useState(new Array(OTP_LEN).fill(""));
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    console.log(value, index);
    if (!/^\d*$/.test(value)) return; // does not accept non numeric values

    const newArr = [...otpArr];
    newArr[index] = value.trim().slice(-1);

    setOtpArr(newArr);

    value && inputsRef.current[index + 1]?.focus();
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
          />
        );
      })}
    </div>
  );
}

export default App;
