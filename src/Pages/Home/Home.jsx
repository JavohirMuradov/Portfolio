import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Card from "./Card";

const cardsData = [
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190400.png?updatedAt=1716214070800", alt: "42.uz", text: "42.uz", path: "/projects/exactProject/42" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225401.png?updatedAt=1716227673855", alt: "Eshik Oyna", text: "Eshik Oyna", path: "/projects/exactProject/Eshik_Oyna" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230515.png?updatedAt=1716228346525", alt: "Imba Studio", text: "Imba Studio", path: "/projects/exactProject/Imba_Studio" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190642.png?updatedAt=1716214070844", alt: "Where is the country?", text: "Where is the country?", path: "/projects/exactProject/Where_is_the_country?" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225327.png?updatedAt=1716227674562", alt: "Scoot", text: "Scoot", path: "/projects/exactProject/Scoot" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230220.png?updatedAt=1716228172031", alt: "Cafena", text: "Cafena", path: "/projects/exactProject/Cafena" }
];

const Home = () => {
  const { t } = useTranslation("Home");

  return (
    <main className="bg-primary text-secondary font-forum duration-300">
      <section className="container flex lg:flex-row flex-col justify-between gap-5 lg:gap-0 items-center text-center lg:text-start">
        <div className="flex flex-col gap-3 w-full lg:w-1/2 items-center lg:items-start">
          <h1 className="text-4xl">{t("hero.h1")}</h1>
          <p className="text-lg">{t("hero.p")}</p>
          <button className="bg-custom-radial dark:bg-dark-radial duration-300 text-[#98EA98] dark:text-[#4F4665] py-2 px-4 rounded-full">
            <Link to="/contact">{t("hero.btn")}</Link>
          </button>
        </div>
        <div>
          <img src="https://ik.imagekit.io/ohgne7kibp/portfolio/Intersect%20(1).png?updatedAt=1716150006664" alt="it developer" />
        </div>
      </section>
      <section className="container flex flex-col items-center mt-10">
        <h1 className="text-4xl">{t("section2.h1")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
          {cardsData.map((card, index) => (
            <Card key={index} img={card.img} alt={card.alt} text={card.text} path={card.path} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
