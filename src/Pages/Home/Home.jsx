import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MyCard from "./Card";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const cardsData = [
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190400.png?updatedAt=1716214070800", alt: "42.uz", text: "42.uz", path: "/projects/exactProject/42" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225401.png?updatedAt=1716227673855", alt: "Eshik Oyna", text: "Eshik Oyna", path: "/projects/exactProject/eshik_oyna" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230515.png?updatedAt=1716228346525", alt: "Imba Studio", text: "Imba Studio", path: "/projects/exactProject/imba_studio" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20190642.png?updatedAt=1716214070844", alt: "Where is the country?", text: "Where is the country?", path: "/projects/exactProject/where_is_the_country?" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20225327.png?updatedAt=1716227674562", alt: "Scoot", text: "Scoot", path: "/projects/exactProject/scoot" },
  { img: "https://ik.imagekit.io/ohgne7kibp/portfolio/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-20%20230220.png?updatedAt=1716228172031", alt: "Cafena", text: "Cafena", path: "/projects/exactProject/cafena" }
];


const Home = () => {
  const { t } = useTranslation("Home");
  const form = useRef();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [loading, setLoading] = useState(true);
  const sendEmail = () => {
    emailjs
      .sendForm('service_vohzq3g', 'template_vjtsclf', form.current, {
        publicKey: '-4YjWXb27DKTuUfe1',
      })
      .then(() => console.log("Succes"))
      .catch(() => console.log("error"))
  };
  var submit = (e) => {
    e.preventDefault()
    if (name || email || message) {
      return sendEmail()
    } else {
      return toast.error("Please enter name or email", {
        className: "bg-toast text-secondary",
      })
    }
  }
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);
  console.log(loading);
  return (
    <>
      <Helmet>
        <title>Portfolio of Javohir Muradov(Java).</title>
        <meta name="description" content="Welcome to the Portfolio of Javohir Muradov." />
        <meta name="og:title" content="Portfolio of Javohir Muradov(Java)." />
        <meta name="og:description" content="Welcome to the Portfolio of Javohir Muradov." />
      </Helmet>
      {loading === true ?
        <main className="bg-primary w-full h-screen">
          <div className="container flex flex-row items-center justify-center w-full h-full">
            <svg className="animate-spin bg-primary text-secondary h-32 w-32 block py-0 px-0" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-toast"></path>
            </svg>
          </div>
        </main> :
        <main className="bg-primary text-secondary font-forum duration-300 pt-10">
          <section className="container flex lg:flex-row flex-col justify-between gap-5 lg:gap-0 items-center text-center lg:text-start">
            <div className="flex flex-col gap-3 w-full lg:w-1/2 items-center lg:items-start">
              <h1 className="text-4xl">{t("hero.h1")}</h1>
              <p className="text-lg">{t("hero.p")}</p>
              <Button className="bg-custom-radial dark:bg-dark-custom-radial duration-300 text-[#98EA98] dark:text-[#4F4665] py-2 px-4 rounded-full">
                <Link to="/contact">{t("hero.btn")}</Link>
              </Button>
            </div>
            <div>
              <img src="https://ik.imagekit.io/ohgne7kibp/portfolio/Intersect.png?updatedAt=1716321270387" alt="it developer" />
            </div>
          </section>
          <section className="container flex flex-col-reverse gap-10 items-center lg:flex-row lg:items-start justify-between text-center lg:text-start py-10 mt-10">
            <img
              src="https://ik.imagekit.io/ohgne7kibp/portfolio/Intersect%20(1).png?updatedAt=1716150006664"
              alt=""
              data-aos="fade-right"
            />
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5" data-aos="fade-left">
              <h1 className="text-3xl">{t("about.h1")}</h1>
              <p className="">{t("about.p")}</p>
            </div>
          </section>
          <section className="container flex flex-col items-center mt-10">
            <h1 className="text-4xl relative after:absolute after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 after:-bottom-2 after:left-0 hover:after:scale-x-100 after:duration-300 cursor-pointer">{t("section2.h1")}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
              {cardsData.map((card, index) => (
                <MyCard key={index} img={card.img} alt={card.alt} text={card.text} path={card.path} />
              ))}
            </div>
          </section>
          <section className="container py-10 flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl relative after:absolute after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 after:-bottom-2 after:left-0 hover:after:scale-x-100 after:duration-300 cursor-pointer">{t("contact.h1")}</h1>
            <Card className="flex lg:flex-row flex-col items-center lg:items-start w-full bg-transparent shadow-none">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full lg:w-1/2 shrink-0"
                data-aos="fade-right"
              >
                <img
                  src="https://ik.imagekit.io/ohgne7kibp/portfolio/0bc49fd6-6df5-40dd-8f47-e56f496a2e9b.jpg?updatedAt=1716044398455"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="w-full flex flex-col gap-5" data-aos="fade-left">
                <div className="text-secondary text-center flex flex-col items-center">
                  <h1 className="text-3xl">{t("contact.h2")}</h1>
                  <p className="text-lg">{t("contact.span")}</p>
                </div>
                <form className="flex flex-col gap-4 items-center w-full justify-between h-full" onSubmit={(e) => submit(e)}>
                  <div className="relative w-full min-w-[200px] h-11">
                    <input className="peer w-full h-full bg-transparent text-secondary font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-primary disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-secondary placeholder-shown:border-t-secondary border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-secondary focus:border-secondary" name="name" placeholder=" " onChange={(e) => setName(e.target.value)} />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-secondary leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-secondary transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-secondary peer-focus:text-secondary before:border-secondary peer-focus:before:!border-secondary after:border-secondary peer-focus:after:!border-secondary">Name</label>
                  </div>
                  <div className="relative w-full min-w-[200px] h-11">
                    <input className="peer w-full h-full bg-transparent text-secondary font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-primary disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-secondary placeholder-shown:border-t-secondary border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-secondary focus:border-secondary" placeholder=" " name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-secondary leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-secondary transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-secondary peer-focus:text-secondary before:border-secondary peer-focus:before:!border-secondary after:border-secondary peer-focus:after:!border-secondary">Email</label>
                  </div>
                  <div className="w-full">
                    <div className="relative w-full min-w-[200px]">
                      <textarea className="peer w-full h-full min-h-[100px] bg-transparent text-secondary font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-secondary placeholder-shown:border-t-secondary border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-secondary focus:border-secondary !resize-none" placeholder=" " name="message" onChange={(e) => setMessage(e.target.value)}></textarea>
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-secondary leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-secondary transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-secondary peer-focus:text-secondary before:border-secondarypeer-focus:before:!border-secondary after:border-secondary peer-focus:after:!border-secondary">Message </label></div>
                  </div>
                  <Button variant="gradient" type="submit" className="!bg-custom-radial dark:!bg-dark-custom-radial !text-primary !text-md rounded-full">
                    {t("contact.send")}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </section>
        </main>
      }
    </>

  );
};

export default Home;
