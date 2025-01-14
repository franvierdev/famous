"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function New() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: <p className="mb-4">para las marcas</p>,
      content: (
        <div className="flex flex-col items-center gap-4">
          <Image
            src={"/assets/images/new/estrella.png"}
            alt="/"
            width={63 / 2}
            height={63 / 2}
            className="  max-sm:mt-6 max-sm:w-5  mt-14"
          />
          <p className="">Consultoria</p>
          <p>
            Asesoramiento para conectar efectivamente con la comunidad hispana y
            estrategias de campaña dirigidas.
          </p>
          <Image
            src={"/assets/images/new/estrella.png"}
            alt="/"
            width={63 / 2}
            height={63 / 2}
            className="max-sm:w-5 "
          />
          <p>Monitoreo y Análisis</p>
          <p>
            Seguimiento y análisis de las campañas y colaboraciones para medir
            el impacto y ajustar las estrategias.
          </p>
        </div>
      ),
    },
    {
      id: 1,
      title: <p className="mb-4">para los talentos</p>,
      content: (
        <div className="flex  flex-col items-center max-2xl:gap-2  gap-3  ">
          <Image
            src={"/assets/images/new/estrella.png"}
            alt="/"
            width={63 / 2}
            height={63 / 2}
            className="  max-sm:mt-6 max-sm:w-5 max-2xl:mt-10 mt-14"
          />
          <p className="">Gestión</p>
          <p>
            Representación integral para talentos en sus redes sociales,
            incluyendo negociación de contratos, planificación de carrera y
            desarrollo de marca personal.
          </p>
          <Image
            src={"/assets/images/new/estrella.png"}
            alt="/"
            width={63 / 2}
            height={63 / 2}
            className="max-sm:w-5 "
          />
          <p>Booking</p>
          <p>
            Comercialización de talentos para ofrecer campañas en sus redes
            sociales, incluyendo la gestión de la campaña.
          </p>
        </div>
      ),
    },
  ];

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className=" bg-[#EFDEC6] text-black font-bold  ">
      <header className="  flex max-sm:flex-col max-sm:pt-6 justify-between text-2xl place-items-center pb-16 max-w-[1734px] px-8  mx-auto ">
        {/* ----- */}
        <div className="navbar  ">
          <div className="flex-1 px-2 lg:flex-none">
            <Image
              src={"/assets/images/fm-logo.png"}
              alt="/"
              height={48}
              width={144}
              className="place-self-start "
            />
          </div>
          <div className="flex justify-center flex-1  ">
            <Image
              src={"/assets/images/navbar-vector.png"}
              width={482}
              height={171}
              alt="vector-navbar"
              className="absolute mt-8  "
            />
            <div className="flex  gap-6 z-10">
              <Link href={"/"} className=" text-2xl wave-underline-1">
                nuestra casa
              </Link>
              <div className="dropdown dropdown-end dropdown-hover">
                <label tabIndex={0} className="cursor-pointer text-2xl ">
                  nuestra familia
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content  mt-8 items-end w-80 "
                >
                  <Image
                    src={"/assets/images/new/pink-cloud.png"}
                    width={711}
                    height={433}
                    alt="vector-navbar"
                    className=" absolute -mt-4 -mr-[90px] "
                  />
                  <li className="wave-underline-1 mt-2  w-36 ">
                    <a className="self-center hover:bg-transparent hover:text-[#EFDEC6]">
                      talentos
                    </a>
                  </li>
                  <li className="wave-underline-1 w-36 ">
                    <a className="self-center hover:bg-transparent hover:text-[#EFDEC6]">
                      equipo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-4 ">
            <Link href={"/"} className="max-sm:w-36">
              <Image
                src={"/assets/images/hablemos-button.png"}
                alt="/"
                width={170}
                height={106}
                className=""
              />
            </Link>
            <div className="flex gap-2 ">
              <button>en</button>
              <button>es</button>
            </div>
          </div>
        </div>
      </header>
      <div className=" bg-[#EFDEC6]  ">
        <div className="  sm:mt-28 max-sm:flex flex-col lg:grid lg:grid-cols-2  lg:px-28 max-w-[1734px] mx-auto ">
          <div className="max-sm:order-2 ">
            <Image
              src={"/assets/images/new/capa-1.png"}
              alt="/"
              width={1586 / 2}
              height={2040 / 2}
              className="sm:absolute mt-10 max-sm:pl-10 pl-10 xl:pl-0  max-2xl:max-w-2xl max-xl:max-w-3xl max-sm:w-full max-lg:w-2/4  sm:-mt-20"
            />
          </div>
          <div className=" max-sm:order-1 max-[1734px]:text-[4.2vw] max-sm:mx-auto max-sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.9rem] font-semibold italic max-sm:pe-4 leading-[1.1] lg:pl-40 xl:pl-20 2xl:pl-14 ">
            <p className="max-sm:ml-2 ml-8">CREAMOS</p>
            <p className="max-sm:ml-20 ml-32 ">CONEXIONES</p>

            <p className="max-sm:ml-8 ml-12  ">VALIOSAS</p>
            <p className="max-sm:ml-28 ml-52  ">ENTRE</p>
            <p className="ml-2 ">TALENTOS</p>
            <p className="max-sm:ml-24  ml-40 ">Y MARCAS</p>
          </div>
          <div className="max-sm:order-3  max-[1734px]:text-[2.35vw] text-[2.5rem] max-sm:-mt-20 max-sm:text-xl sm:mt-64 sm:pr-14 px-10 max-sm:text-center leading-snug ">
            <p>
              Somos una agencia dedicada a representar a los mejores talentos de
              redes sociales de la comunidad US Hispanic.<br></br>
              <br /> Conectamos a los talentos con marcas que desean captar la
              atención de la audiencia hispana, utilizando nuestra experiencia
              en la industria para maximizar el impacto y las oportunidades de
              conexión.
            </p>
          </div>

          <div className=" max-sm:order-4 max-sm:mt-10 mt-36 flex flex-col  items-center  max-[1734px]:text-[1.3vw] max-sm:text-xl text-[1.4rem]">
            <ul
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
              className="flex flex-col items-center"
            >
              <Image
                src={"/assets/images/new/vector-2.png"}
                alt="/"
                width={971 / 2}
                height={593 / 2}
                className="absolute z-10 max-sm:w-5/6 px-10"
              />
              {tabs.map((tab, index) => (
                <li
                  key={tab.id}
                  className="max-sm:mt-8 sm:mt-14 xl:mt-10 2xl:mt-10 z-10 hover:bg-[url('/assets/images/new/underline.png')] bg-contain bg-bottom bg-no-repeat bg-absolute"
                >
                  <button
                    className={`-mt-4  ${
                      index === activeTab
                        ? " text-[#AC4A86] bg-[url('/assets/images/new/underline.png')]  bg-contain bg-bottom bg-no-repeat "
                        : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
            <div
              id="default-tab-content"
              className=" flex flex-col max-w-md items-center text-center text-[#EFDEC6] z-10  max-sm:mt-6 px-9 max-sm:px-20 max-sm:gap-2  lg:gap-3 xl:gap-3 2xl:-gap-6 max-sm:text-base max-[1734px]:text-[1.4vw] text-[1.4rem] "
            >
              <Image
                src={"/assets/images/new/nube-negra.png"}
                alt="/"
                width={1360 / 2}
                height={1306 / 2}
                className="absolute  max-sm:px-8    -z-10 max-sm:w-full max-[1734px]:w-[39vw]"
              />
              {tabs[activeTab].content}
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
            className="absolute max-[1734px]:w-[38vw] max-sm:w-3/4 max-sm:-mt-36 -mt-28"
          />
          <div className="flex flex-col  max-sm:mt-72 mt-80 text-[#EFDEC6] font-medium ">
            <p className="max-[1734px]:text-[15vw] justify-center max-sm:text-7xl  text-[16rem] italic z-10">
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
