import Image from "@/components/Image";
import IntroOne from "@/components/IntroOne";
import IntroText from "@/components/IntroText";
import Navbar from "@/components/Navbar";
import Scrool from "@/components/Scrool";
import TextScrool from "@/components/TextScrool";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroOne />
      {/* <IntroText /> */}
      <TextScrool />
      <Image />
      <Scrool />
    </div>
  );
}
