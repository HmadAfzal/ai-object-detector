import Detector from "@/components/Detector";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center mt-8">
     <h1 className="md:text-5xl text-3xl mx-auto px-8 text-center font-extrabold"> Theif detector 🕵️‍♀️</h1>
     <Detector/>
    </div>
  );
}
