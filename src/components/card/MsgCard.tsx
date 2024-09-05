"use client";
import "./MsgCard.css";
import { useEffect, useState } from "react";

const MsgCard = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    setAuth(
      prompt("Enter pass key") === String(process.env.NEXT_PUBLIC_PASS_KEY)
    );
    console.log(auth);
  }, []);
  return (
    <div>
      {auth ? (
        <div>
          <p className='text-3xl font-medium p-1'>
            お父さん、お仕事<span className='stand-out'>お疲れ様</span>!!!
          </p>
          <p className='text-2xl font-medium p-1'>
            これからも、お互い<span className='stand-out'>元気</span>
            でいようね！
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default MsgCard;
