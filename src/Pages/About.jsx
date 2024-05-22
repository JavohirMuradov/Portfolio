import { useTranslation } from "react-i18next"

const About = () => {
  var { t } = useTranslation()
  return (
    <main className='bg-primary text-secondary'>
      <section className="container flex flex-col items-center lg:flex-row lg:items-start justify-between text-center lg:text-start py-10">
        <img src="https://ik.imagekit.io/ohgne7kibp/portfolio/Intersect%20(1).png?updatedAt=1716150006664" alt="" />
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5">
          <h1 className="text-3xl">{t("about.h1")}</h1>
          <p className="">{t("about.p")}</p>
        </div>
      </section>
      <section>
        
      </section>
    </main>

  )
}

export default About