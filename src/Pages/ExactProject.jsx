import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"

const ExactProject = () => {
    const { name } = useParams()
    const [project, setProject] = useState("")
    const { t } = useTranslation("exact-project")
    console.log(name);
    useEffect(() => {
        const pathProjectMap = {
            "42": "42.uz",
            "eshik_oyna": "Eshik Oyna",
            "imba_studio": "Imba Studio",
            "where_is_the_country": "Where is the country?",
            "scoot": "Scoot",
            "cafena": "Cafena",
        }
        setProject(pathProjectMap[name] || "")
    }, [name])

    const getImageSource = (project) => {
        const projectImageMap = {
            "42.uz": {
                name: "42.uz",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190400.png?updatedAt=1716214070800",
                description: t("42.description"),
                href: "https://42-tawny.vercel.app/"
            },
            "Eshik Oyna": {
                name: "Eshik Oyna",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225401.png?updatedAt=1716227673855",
                description: t("Eshik-Oyna.description"),
                href: "https://eshik-oyna.vercel.app/"
            },
            "Imba Studio": {
                name: "Imba Studio",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230515.png?updatedAt=1716228346525",
                description: t("Imba-Studio.description"),
                href: "https://imba-studio.vercel.app/"
            },
            "Where is the country?": {
                name: "Where is the country? ",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190642.png?updatedAt=1716214070844",
                description: t("Where-is-the-country?.description"),
                href: "https://countries-api-gold-nine.vercel.app/"
            },
            "Scoot": {
                name: "Scoot",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225327.png?updatedAt=1716227674562",
                description: t("Scoot.description"),
                href: "https://scoot-drab.vercel.app/"
            },
            "Cafena": {
                name: "Cafena",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230220.png?updatedAt=1716228172031",
                description: t("Cafena.description"),
                href: "https://cafena-five.vercel.app/"
            },
        }
        return projectImageMap[project] || ""
    }

    const project1 = getImageSource(project)

    return (
        <>
            <Helmet>
                <title>Portfolio of Javohir Muradov(Java).</title>
                <meta name="description" content="Detailed information about my projects." />
                <meta name="og:title" content="Portfolio of Javohir Muradov(Java)." />
                <meta name="og:description" content="Detailed information about my projects." />
            </Helmet>
            <section className="w-full h-full py-10 bg-primary flex flex-row items-center justify-center text-secondary duration-300 text-center pt-10">
                <div className="container flex flex-col items-center justify-between gap-10 h-full">
                    <h1 className="text-5xl">{project1.name}</h1>
                    <div className="flex flex-col items-center justify-between gap-10">
                        <div className="w-full">
                            {project1 && <img src={project1.img} className="w-full" alt={project.name} />}
                        </div>
                        <div className="w-full flex flex-col gap-3">
                            <h1 className="text-3xl">{project1.name}</h1>
                            <p className="text-lg">{project1.description}</p>
                            <Link to={project1.href}>
                                <button className="bg-custom-radial dark:bg-dark-custom-radial text-primary text-md py-2 px-4 rounded-full">{project1.name}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExactProject
