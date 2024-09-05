import Birth from "@/components/card/Birth";
import MsgCard from "@/components/card/MsgCard";

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Birth />
      <MsgCard />
    </div>
  );
}
