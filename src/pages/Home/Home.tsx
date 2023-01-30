import Files from "../../Components/Files";
import Header from "../../Components/Header";

import WaveImg from "../../assets/wave.svg";

function Home() {
  return (
    <section>
      <Header />
      <Files />
      <img src={WaveImg} className="min-w-screen fixed bottom-0 z-10" />
    </section>
  );
}

export default Home;
