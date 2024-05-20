import { useTranslation } from "react-i18next"
import { FaGithub, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Entering = () => {
    const { t } = useTranslation()
    return (
        <main className="bg-primary duration-300 text-secondary w-full h-full font-forum text-center lg:text-start py-10 lg:py-0">
            <section className="flex h-full lg:h-screen container flex-col items-center justify-center lg:flex-row lg:justify-evenly">
                <img className="w-[400px]" src="https://ik.imagekit.io/ohgne7kibp/portfolio/Intersect.png?updatedAt=1716138845794" alt="frontend developer" />
                <div className="w-1/2 flex flex-col items-center lg:items-start gap-3">
                    <h1 className="text-5xl italic">{t("entering.name")}</h1>
                    <span className="text-3xl italic">{t("entering.developer")}</span>
                    <button className="bg-custom-radial text-[#98EA98] text-md py-2 px-4 rounded-full">
                        <Link to={"/home"}>{t("entering.btn")}</Link>
                    </button>
                    <div className="flex flex-row items-center gap-2">
                        <Link to={"tel:+998909653646"} target="_blank" rel="noreferrer">
                            <button className="bg-radial p-2 rounded-full">
                                <FaPhone className="w-6 h-6" color="#98EA98" />
                            </button>
                        </Link>
                        <Link to={"https://t.me/JavaMiyagi"} target="_blank" rel="noreferrer">
                            <button
                                className="bg-radial p-2 rounded-full">
                                <FaTelegram className="w-6 h-6" color="#98EA98" />
                            </button>
                        </Link>
                        <Link to={"https://github.com/JavohirMuradov"} target="_blank" rel="noreferrer">
                            <button
                                className="bg-radial p-2 rounded-full">
                                <FaGithub className="w-6 h-6" color="#98EA98" />
                            </button>
                        </Link>
                        <Link
                            to={"mailto:javohirmuradov030@gmail.com"}
                            target="_blank" rel="noreferrer">
                            <button
                                className="bg-radial p-2 rounded-full">
                                <SiGmail className="w-6 h-6" color="#98EA98" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Entering