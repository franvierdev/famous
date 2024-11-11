"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function New() {
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    setOpen(!open);
  };
  return (
    <div className=" bg-[#EFDEC6] text-black font-bold  ">
      <header className="  flex max-sm:flex-col max-sm:pt-6 justify-between text-2xl place-items-center pb-16 max-w-[1734px] px-8  mx-auto ">
        <div className="flex place-items-start max-sm:justify-between max-sm:w-full">
          <Image
            src={"/assets/images/fm-logo.png"}
            alt="/"
            height={48}
            width={144}
            className="place-self-start"
          />

          <button onClick={handleSubmit} className=" h-8 sm:hidden">
            {open === false ? (
              <svg
                width="6"
                height="23"
                viewBox="0 0 6 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.917" cy="2.917" r="2.917" fill="#000"></circle>
                <circle cx="2.917" cy="11.249" r="2.917" fill="#000"></circle>
                <circle cx="2.917" cy="19.585" r="2.917" fill="#000"></circle>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="h-8 -mr-2  z-10 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            open
              ? "flex max-sm:flex-col max-sm:absolute max-sm:mt-10  gap-4  max-sm:self-end max-sm:text-end sm:ml-24 sm:-mt-6 "
              : "max-sm:hidden flex max-sm:flex-col  gap-4 justify-center  ml-24 -mt-6"
          }
        >
          <Image
            src={"/assets/images/navbar-vector.png"}
            width={482}
            height={171}
            alt="vector-navbar"
            className="absolute -mt-10  max-sm:hidden "
          />
          <Link href={"/"} className="z-10">
            nuestra casa
          </Link>
          <Link href={"/"} className="z-10">
            nuestra familia
          </Link>
        </div>
        <div
          className={
            open
              ? "flex max-sm:flex-col  max-sm:absolute max-sm:mt-32 max-sm:self-end max-sm:text-end sm:gap-8 justify-center ml-24  sm:mt-4"
              : "max-sm:hidden flex max-sm:flex-col  gap-8 justify-center ml-24 sm:mt-6 "
          }
        >
          <Link href={"/"} className="max-sm:w-36">
            <Image
              src={"/assets/images/hablemos-button.png"}
              alt="/"
              width={170}
              height={106}
              className=""
            />
          </Link>
          <div className="flex gap-2 max-sm:self-end">
            <button>en</button>
            <button>es</button>
          </div>
        </div>
      </header>
      <div className=" bg-[#EFDEC6] ">
        <div className="  lg:mt-32 max-sm:flex flex-col lg:grid lg:grid-cols-2  lg:px-28 max-w-[1734px] mx-auto ">
          <div className="max-sm:order-2">
            <Image
              src={"/assets/images/new/capa-1.png"}
              alt="/"
              width={1586 / 2}
              height={2040 / 2}
              className="lg:absolute mt-10 max-sm:pl-14 sm:-mt-20"
            />
          </div>
          <div className=" max-sm:order-1 sm:max-[1734px]:text-[4.2vw] max-sm:mx-auto max-sm:text-6xl sm:text-7xl font-semibold italic sm:leading-[1.1]  sm:pl-20 ">
            <p className="ml-8">CREAMOS</p>
            <p className="ml-32 ">CONEXIONES</p>

            <p className="ml-12  ">VALIOSAS</p>
            <p className="ml-52  ">ENTRE</p>
            <p className="ml-2 ">TALENTOS</p>
            <p className="ml-40 ">Y MARCAS</p>
          </div>
          <div className="max-sm:order-3 max-sm:-mt-32 sm:max-[1734px]:text-[2.35vw] text-[2.6rem] max-sm:text-3xl sm:mt-64 sm:pr-14 px-10 text-center leading-snug ">
            <p>
              Somos una agencia dedicada a representar a los mejores talentos de
              redes sociales de la comunidad US Hispanic.<br></br>
              <br /> Conectamos a los talentos con marcas que desean captar la
              atención de la audiencia hispana, utilizando nuestra experiencia
              en la industria para maximizar el impacto y las oportunidades de
              conexión.
            </p>
          </div>
          <div className="max-sm:order-4 mt-36 flex flex-col  items-center  sm:max-[1734px]:text-[1.3vw] max-sm:text-3xl text-[1.4rem] text-md ">
            {" "}
            <Image
              src={"/assets/images/new/vector-2.png"}
              alt="/"
              width={971 / 2}
              height={593 / 2}
              className="absolute  sm:max-[1734px]:w-[28vw] "
            />
            <Link
              href={"/"}
              className="max-sm:mt-20 lg:mt-14 xl:mt-10 2xl:mt-16 z-10"
            >
              para las marcas
            </Link>
            <Link href={"/"} className="max-sm:mt-8 lg:mt-8 xl:mt-12 z-10">
              para los talentos
            </Link>
            <div className=" flex flex-col max-w-md items-center text-center text-[#EFDEC6] z-10 mt-28 px-9 max-sm:gap-2  lg:gap-3 xl:gap-3 2xl:-gap-6 max-sm:text-2xl sm:max-[1734px]:text-[1.3vw] text-[1.4rem] ">
              <Image
                src={"/assets/images/new/nube-negra.png"}
                alt="/"
                width={1360 / 2}
                height={1306 / 2}
                className="absolute max-sm:-mt-20 max-sm:px-8 lg:-mt-20 xl:-mt-28 2xl:-mt-16 -z-10 sm:max-[1734px]:w-[39vw]"
              />
              <Image
                src={"/assets/images/new/estrella.png"}
                alt="/"
                width={63 / 2}
                height={63 / 2}
                className=" max-sm:-mt-10 xl:-mt-10 2xl:-mt-0"
              />
              <p className="">Consultoria</p>
              <p>
                Asesoramiento para conectar efectivamente con la comunidad
                hispana y estrategias de campaña dirigidas.
              </p>
              <Image
                src={"/assets/images/new/estrella.png"}
                alt="/"
                width={63 / 2}
                height={63 / 2}
              />
              <p>Monitoreo y Análisis</p>
              <p>
                Seguimiento y análisis de las campañas y colaboraciones para
                medir el impacto y ajustar las estrategias.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col mx-auto  items-center max-sm:mt-64 sm:mt-52">
          <Image
            src={"/assets/images/new/pink-splat.png"}
            alt="/"
            width={3468 / 2}
            height={4212 / 2}
            className="absolute  "
          />
          <Image
            src={"/assets/images/new/splat-foto.png"}
            alt="/"
            width={1305 / 2}
            height={2074 / 2}
            className="absolute sm:max-[1734px]:w-[38vw] max-sm:w-3/4 max-sm:-mt-36 -mt-28"
          />
          <div className="flex flex-col  mt-80 text-[#EFDEC6] font-medium leading-snug">
            <p className="sm:max-[1734px]:text-[15vw] justify-center max-sm:text-8xl text-[16rem] italic z-10">
              SOMOS <br />
              LATINOS
            </p>
          </div>
        </div>
        <div className="relative bg-zinc-900 text-[#EFDEC6] font-bold italic text-4xl ">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-14 py-14 max-sm:px-4">
            <Image
              src={"/assets/images/new/estrella-x2.png"}
              alt="/"
              width={127 / 2}
              height={127 / 2}
              className=""
            />
            <p>
              En Latinoamerica <br /> las historias se cuentan intensas los
              sabores se beben intensos con ritmo, con baile.
            </p>
            <p>
              Nuestra cultura la llevamos tatuada, intensa también, estemos
              cerca, estemos lejos siempre llevamos la casa por <br />
              dentro.
            </p>
            <Image
              src={"/assets/images/new/estrella-x1.5.png"}
              alt="/"
              width={84 / 2}
              height={84 / 2}
              className=""
            />
          </div>
          <div className="text-center items-center flex flex-col gap-16 pb-16 max-sm:mx-4 ">
            <p>SOMOS LATINOS Y ENTRE LATINOS NOS ENTENDEMOS</p>
            <button>
              <Image
                src={"/assets/images/new/hablemos-purple.png"}
                alt="/"
                width={608 / 2}
                height={380 / 2}
                className=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
