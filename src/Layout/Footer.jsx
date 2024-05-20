import { Link } from "react-router-dom"
import { FaGithub, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import useDarkSide from "../utils/Theme/useDarkSide";

const Footer = () => {
  var [colorTheme] = useDarkSide()
  return (
    <footer className="bg-primary text-secondary duration-300">
      <div className="container flex flex-row justify-between border-t border-t-secondary py-10">
        <h1 className="font-julia text-5xl"><Link to={"/"}>Java</Link></h1>
        <div className="flex flex-row items-center gap-2">
          <Link to={"tel:+998909653646"} target="_blank" rel="noreferrer">
            <button className="bg-radial p-2 rounded-full dark:bg-dark-radial">
              <FaPhone className="w-6 h-6 text-primary" color={colorTheme === "dark" ? "#4F4665": "#9BEA9B"} />
            </button>
          </Link>
          <Link to={"https://t.me/JavaMiyagi"} target="_blank" rel="noreferrer">
            <button
              className="bg-radial p-2 rounded-full dark:bg-dark-radial">
              <FaTelegram className="w-6 h-6 text-primary" color={colorTheme === "dark" ? "#4F4665": "#9BEA9B"} />
            </button>
          </Link>
          <Link to={"https://github.com/JavohirMuradov"} target="_blank" rel="noreferrer">
            <button
              className="bg-radial p-2 rounded-full dark:bg-dark-radial">
              <FaGithub className="w-6 h-6 text-primary" color={colorTheme === "dark" ? "#4F4665": "#9BEA9B"} />
            </button>
          </Link>
          <Link
            to={"mailto:javohirmuradov030@gmail.com"}
            target="_blank" rel="noreferrer">
            <button
              className="bg-radial p-2 rounded-full dark:bg-dark-radial">
              <SiGmail className="w-6 h-6 text-primary" color={colorTheme === "dark" ? "#4F4665": "#9BEA9B"} />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer