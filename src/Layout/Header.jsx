import { Link } from "react-router-dom"
import Switcher from "../utils/Theme/Switcher"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { IconButton, MobileNav } from "@material-tailwind/react"

const Header = () => {
  var { t } = useTranslation()
  const { i18n } = useTranslation();
  const [openNav, setOpenNav] = useState(false);
  var [language, setLanguage] = useState('en')
  console.log(language);
  useEffect(() => {
    i18n.changeLanguage(language)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  return (
    <header className="bg-primary font-forum text-lg text-secondary sticky py-5 top-0">
      <div className="container flex flex-row items-center justify-between">
        <h1 className="font-julia text-5xl"><Link to={"/"}>Java</Link></h1>
        <nav className="hidden lg:flex">
          <ul className="flex flex-row items-center gap-5">
            <li>
              <Link to={"/home"}>{t("header.li")}</Link>
            </li>
            <li>
              <Link to={"/contact"}>{t("header.li1")}</Link>
            </li>
            <li>
              <Link to={"/projects"}>{t("header.li2")}</Link>
            </li>
            <li>
              <Link to={"/about"}>{t("header.li3")}</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row gap-1">
          <Switcher />
          <div className="relative">
            <select defaultValue={"en"} onChange={(e) => setLanguage(e.target.value)} name="" id="" className="bg-primary text-secondary appearance-none text-xl pr-5 outline-none">
              <option value="en">en</option>
              <option value="ru">ru</option>
              <option value="uz">uz</option>
            </select>
            <svg className="absolute right-0 top-[10px]" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1C3.64878 2.22939 5.12657 5.56889 6.55038 8.4134C7.18529 9.68183 8.8099 9.67912 9.45505 8.41587C10.9004 5.58574 12.4251 2.29115 15 1" className="stroke-secondary" strokeWidth="2" />
            </svg>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav} className="w-full h-full bg-primary">
        <ul className="flex flex-col items-center gap-4">
          <li>
            <Link to={"/home"}>{t("header.li")}</Link>
          </li>
          <li>
            <Link to={"/contact"}>{t("header.li1")}</Link>
          </li>
          <li>
            <Link to={"/projects"}>{t("header.li2")}</Link>
          </li>
          <li>
            <Link to={"/about"}>{t("header.li3")}</Link>
          </li>
        </ul>
      </MobileNav>
    </header >
  )
}

export default Header