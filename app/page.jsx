import IntroOne from "@/components/IntroOne";
import IntroText from "@/components/IntroText";
import Navbar from "@/components/Navbar";
import Image from "@/components/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroOne />
      <IntroText />
      <Image />
    </div>
  );
}
