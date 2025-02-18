import "./Project.css";
import CustomSlider from "../../components/custom-slider/CustomSlider";

import hafifCelikVilla from "../../assets/images/hafif-celik-villa.jpg";
import isiYalitimi from "../../assets/images/isiyalitimi.jpg";
import projectHome from "../../assets/images/project-home.png";

const slides = [
  {
    image: isiYalitimi,
    title: "Modern Çelik Ev Tasarımı",
    description:
      "Yeni nesil çelik evlerle, estetik ve sağlam yapıları bir arada sunuyoruz. Dayanıklı, uzun ömürlü ve enerji verimli çözümler.",
  },
  {
    image: hafifCelikVilla,
    title: "Çelik Ev İnşaat Süreci",
    description:
      "Hızlı montaj, düşük maliyet ve yüksek dayanıklılık! Çelik evlerin inşaat süreci, geleneksel inşaat yöntemlerine göre çok daha hızlı tamamlanmaktadır.",
  },
  {
    image: isiYalitimi,
    title: "Çelik Ev Avantajları",
    description:
      "Çelik yapıların sağladığı esneklik ve tasarım özgürlüğü ile kişiye özel projeler üretiyoruz. Deprem güvenliği ve uzun ömürlü yapılar garantisi ile huzurlu yaşam alanları.",
  },
  {
    image: projectHome,
    title: "Profesyonel Çelik Yapı Hizmetlerimiz",
    description:
      "Çelik evler, çevre dostu malzemelerle inşa edilir ve sürdürülebilir yaşam alanları yaratır. Hem doğaya dost hem de modern tasarımlar sunuyoruz.",
  },
];

// Projelerimiz sayfasında düzenlemeler yaptım
const Project = () => {
  return (
    <div className="project-container">
      <div>
        <CustomSlider slides={slides} />
      </div>
    </div>
  );
};

export default Project;
