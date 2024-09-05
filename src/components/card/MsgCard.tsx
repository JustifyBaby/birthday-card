"use client";
import { useEffect, useState } from "react";
import "./MsgCard.css";

const MsgCard = ({ passKey }: { passKey: string }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    setAuth(prompt("Enter pass key") === passKey);
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
