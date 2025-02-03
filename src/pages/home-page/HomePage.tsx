import "./HomePage.css";

import HomePageBackgroundVideo from "../../assets/videos/HomePageBackgroundVideo.mp4";
import AnimatedText from "../../components/animated-text/AnimatedText";

const texts = [
  "Sayfanıza Hoşgeldiniz!",
  "En kaliteli çelik villalar burada",
  "Hayallerinizdeki ev için doğru adres",
  "Bizimle iletişime geçin!",
];

// Anasayfa
const HomePage = () => {
  return (
    <div className="container">
      <video className="video-background" autoPlay loop muted>
        <source src={HomePageBackgroundVideo} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <div className="content">
        <AnimatedText texts={texts} interval={4000} />
      </div>
    </div>
  );
};

export default HomePage;
