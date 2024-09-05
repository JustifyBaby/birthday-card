import Image from "next/image";
import "./Birth.css";
import cr from "../../app/img/cracker-r.jpg";
import cl from "../../app/img/cracker-l.jpg";

const Birth = () => {
  return (
    <div className='flex justify-between'>
      <div className='anime'>
        <Image src={cl} alt='' width={100}></Image>
      </div>
      <p className={"m-2 text-4xl font-bold animate-bounce"}>
        お誕生日
        <span className={Math.random() > 0.5 ? "bg-yellow-400" : "text-black"}>
          おめでとう!!!
        </span>
      </p>
      <div className='anime'>
        <Image src={cr} alt='' width={90}></Image>
      </div>
    </div>
  );
};

export default Birth;
