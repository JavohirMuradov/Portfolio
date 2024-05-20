import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Home = () => {
  var { t } = useTranslation("Home")
  return (
    <main className="bg-primary text-secondary font-forum duration-300">
      <section className="container flex flex-row justify-between items-center">
        <div className="flex flex-col gap-3 w-1/2 items-start">
          <h1 className="text-4xl">{t("hero.h1")}</h1>
          <p className="text-lg">{t("hero.p")}</p>
          <button className="bg-custom-radial dark:bg-dark-radial duration-300 text-[#98EA98] dark:text-[#4F4665] py-2 px-4 rounded-full">
            <Link to={"/contact"}>{t("hero.btn")}</Link>
          </button>
        </div>
        <div>
          <img src="https://ik.imagekit.io/ohgne7kibp/portfolio/Intersect%20(1).png?updatedAt=1716150006664" alt="" />
        </div>
      </section>
      <section className="container flex flex-col items-center">
        <h1 className="text-4xl">{t("section2.h1")}</h1>
        <div>
          <div>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home