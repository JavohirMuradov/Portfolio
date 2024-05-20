import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"

const ExactProject = () => {
    const { pathname } = useLocation()
    const [project, setProject] = useState("")
    const { t } = useTranslation("exact-project")

    useEffect(() => {
        const pathProjectMap = {
            "/projects/exactProject/42": "42.uz",
            "/projects/exactProject/Eshik_Oyna": "Eshik Oyna",
            "/projects/exactProject/Imba_Studio": "Imba Studio",
            "/projects/exactProject/Where_is_the_country?": "Where is the country?",
            "/projects/exactProject/Scoot": "Scoot",
            "/projects/exactProject/Cafena": "Cafena",
            // Add other paths here if needed
        }
        setProject(pathProjectMap[pathname] || "")
    }, [pathname])

    const getImageSource = (project) => {
        const projectImageMap = {
            "42.uz": {
                name: "42.uz",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190400.png?updatedAt=1716214070800",
                description: t("42.description"),
                href: ""
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
                href: ""
            },
            "Where is the country?": {
                name: "Where is the country? ",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190642.png?updatedAt=1716214070844",
                description: t("Where-is-the-country?.description"),
                href: ""
            },
            "Scoot": {
                name: "Scoot",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225327.png?updatedAt=1716227674562",
                description: t("Scoot.description"),
                href: ""
            },
            "Cafena": {
                name: "Cafena",
                img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230220.png?updatedAt=1716228172031",
                description: t("Cafena.description"),
                href: ""
            },
        }
        return projectImageMap[project] || ""
    }

    const project1 = getImageSource(project)

    return (
        <section className="w-full bg-primary text-secondary duration-300 h-full lg:max-h-[64vh] 2xl:max-h-[90vh] text-center lg:text-start">
            <div className="container flex flex-col items-center lg:flex-row justify-between gap-10">
                <h1>{project.name}</h1>
                <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-10">
                    <div className="lg:w-1/2 w-full">
                        {project1 && <img src={project1.img} alt={project.name} />}
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col gap-3">
                        <h1>{project1.name}</h1>
                        <p>{project1.description}</p>
                        <Link></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExactProject
