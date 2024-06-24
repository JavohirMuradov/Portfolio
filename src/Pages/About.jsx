import { useEffect } from "react";
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

const About = () => {
  var { t } = useTranslation("Home")
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
  return (
    <>
      <Helmet>
        <title>Portfolio of Javohir Muradov(Java).</title>
        <meta name="description" content="Learn more about Me and my mission." />
        <meta name="og:title" content="Portfolio of Javohir Muradov(Java)." />
        <meta name="og:description" content="Learn more about Me and my mission." />
      </Helmet>
      <main className='bg-primary text-secondary'>
        <section className="container flex flex-col items-center lg:flex-row lg:items-start justify-between text-center lg:text-start py-10">
          <img src="https://ik.imagekit.io/ohgne7kibp/portfolio/Intersect%20(1).png?updatedAt=1716150006664" alt="" data-aos="fade-right" />
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5" data-aos="fade-left">
            <h1 className="text-3xl">{t("about.h1")}</h1>
            <p className="">{t("about.p")}</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
