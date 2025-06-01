import { useState } from "react";

const OTP_LEN = 6;
function App() {
  const [otpArr, setOtpArr] = useState(new Array(OTP_LEN).fill(""));

  return (
    <div className="App">
      <h1>OTP Input</h1>

      {otpArr.map((digit, index) => {
        return (
          <input className="otp-input" key={index} type="text" value={digit} />
        );
      })}
    </div>
  );
}

export default App;
