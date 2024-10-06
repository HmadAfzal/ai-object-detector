import Detector from "@/components/Detector";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center mt-8">
     <h1 className="text-5xl font-extrabold"> Theif detector 🕵️‍♀️</h1>
     <Detector/>
    </div>
  );
}
