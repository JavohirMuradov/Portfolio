import { useTranslation } from "react-i18next";
import MyCard from "./Home/Card";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const cardsData = [
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190400.png?updatedAt=1716214070800", alt: "42.uz", text: "42.uz", path: "/projects/exactProject/42" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225401.png?updatedAt=1716227673855", alt: "Eshik Oyna", text: "Eshik Oyna", path: "/projects/exactProject/eshik_oyna" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230515.png?updatedAt=1716228346525", alt: "Imba Studio", text: "Imba Studio", path: "/projects/exactProject/imba_studio" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190642.png?updatedAt=1716214070844", alt: "Where is the country?", text: "Where is the country?", path: "/projects/exactProject/where_is_the_country?" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225327.png?updatedAt=1716227674562", alt: "Scoot", text: "Scoot", path: "/projects/exactProject/scoot" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230220.png?updatedAt=1716228172031", alt: "Cafena", text: "Cafena", path: "/projects/exactProject/cafena" }
];

const Projects = () => {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 600,
        once: true,
        disable: 'mobile'
      });
    };
    loadAOS();
  }, []);
  const { t } = useTranslation("Home")
  return (
    <>
      <Helmet>
        <title>Portfolio of Javohir Muradov(Java).</title>
        <meta name="description" content="Explore my projects and see what I've been working on." />
        <meta name="og:title" content="Portfolio of Javohir Muradov(Java)." />
        <meta name="og:description" content="Explore my projects and see what I've been working on." />
      </Helmet>
      <main className='bg-primary text-secondary'>
        <section className="container flex flex-col items-center pt-10">
          <h1 className="text-4xl relative after:absolute after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 after:-bottom-2 after:left-0 hover:after:scale-x-100 after:duration-300">{t("section2.h1")}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
            {cardsData.map((card, index) => (
              <MyCard key={index} img={card.img} alt={card.alt} text={card.text} path={card.path} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Projects
