import { useTranslation } from "react-i18next"

const Home = () => {
  var { t } = useTranslation()
  return (
    <main className="bg-primary text-secondary font-forum">
      <section className="container flex flex-row justify-between items-center">
        <div className="flex flex-col gap-3 w-1/2 items-start">
          <h1 className="text-4xl">{t("Home.hero.h1")}</h1>
          <p className="text-lg">{t("Home.hero.p")}</p>
          <button className="bg-custom-radial text-[#98EA98] py-2 px-4 rounded-full">{t("Home.hero.btn")}</button>
        </div>
        <div>
          <img src="https://ik.imagekit.io/ohgne7kibp/portfolio/Intersect%20(1).png?updatedAt=1716150006664" alt="" />
        </div>
      </section>
    </main>
  )
}

export default Home