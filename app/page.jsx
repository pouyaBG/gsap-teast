import IntroOne from "@/components/IntroOne";
import IntroText from "@/components/IntroText";
import Navbar from "@/components/Navbar";
import TextScrool from "@/components/TextScrool";
import Image from "@/components/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroOne />
      {/* <IntroText /> */}
      <TextScrool />
      <Image />
    </div>
  );
}
