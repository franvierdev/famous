import Link from "next/link";
import Image from "next/image";
export default function Mediakit() {
  return (
    <div className="bg-[#EFDEC6] text-black font-bold ">
      <header className=" pt-4 flex justify-between text-2xl place-items-center pb-16 max-w-[1734px] px-8  mx-auto ">
        <div className=" ">
          <Image
            src={"/assets/images/fm-logo.png"}
            alt="/"
            height={48}
            width={144}
            className=""
          />
        </div>
        <div className="flex gap-4 justify-center ml-24 -mt-6 ">
          <Image
            src={"/assets/images/navbar-vector.png"}
            width={482}
            height={171}
            alt="vector-navbar"
            className="absolute -mt-10  "
          />
          <Link href={"/"} className="z-10">
            nuestra casa
          </Link>
          <Link href={"/"} className="z-10">
            nuestra familia
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href={"/"} className="">
            <Image
              src={"/assets/images/hablemos-button.png"}
              alt="/"
              width={170}
              height={106}
              className=""
            />
          </Link>
          <div className="flex gap-2">
            <button>en</button>
            <button>es</button>
          </div>
        </div>
      </header>
      <body className="max-w-[1734px] mx-auto">
        <div className="flex mt-4  gap-24 px-8 items-center ">
          <div className="">
            <Image
              src={"/assets/images/new/mediakit/splat-picture.png"}
              alt="/"
              width={1484 / 2}
              height={1766 / 2}
              className="w-full"
            />
          </div>
          <div className="place-self-start mt-10  font-extrabold flex flex-col gap-5">
            <p className="text-[5.2vw] 2xl:text-[5rem] leading-none  italic">
              MARI GUTIERREZ
            </p>
            <p className="text-[2.5vw] 2xl:text-[2.7rem] leading-none italic">
              Holistic health coach-personal trainer
            </p>
            <div className="flex gap-4   italic">
              <Image
                src={"/assets/images/new/mediakit/gps-icon.png"}
                alt="/"
                width={56 / 2}
                height={74 / 2}
                className=""
              />
              <p className="text-[1.6vw] 2xl:text-2xl">LEWISVILLE, TEXAS</p>
            </div>
            <div className="flex gap-4 my-2">
              <div className="flex flex-col items-center">
                <Image
                  src={"/assets/images/new/mediakit/instagra-icon.png"}
                  alt="/"
                  width={50 / 2}
                  height={56 / 2}
                  className="mt-5 absolute"
                />
                <Image
                  src={"/assets/images/new/mediakit/ig-followers.png"}
                  alt="/"
                  width={422 / 2}
                  height={264 / 2}
                  className=" "
                />
              </div>
              <div>
                <Image
                  src={"/assets/images/new/mediakit/tiktok-followers.png"}
                  alt="/"
                  width={422 / 2}
                  height={264 / 2}
                  className=""
                />
              </div>
            </div>
            <div className="">
              <p className=" max-w-4xl text-[1.625rem] pr-14 italic leading-tight">
                Mari Gutiérrez es una health coach apasionada por un estilo de
                vida positivo y saludable. Comparte rutinas de ejercicio
                accesibles y recetas saludables, siempre enfocada en mejorar la
                calidad de vida de su comunidad. Mari busca generar un impacto
                positivo promoviendo cambios simples en los hábitos diarios.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex gap-20">
            <div className="flex flex-col  items-end justify-center mb-32">
              <Image
                src={"/assets/images/new/mediakit/tiktok-icon.png"}
                alt="/"
                width={88 / 2}
                height={100 / 2}
                className="mr-4"
              />
              <p className="mr-4 text-[5rem] leading-tight italic">3.5%</p>
              <p className="text-3xl font-bold italic ">engagement rate</p>
            </div>
            <div>
              <Image
                src={"/assets/images/new/mediakit/phone-picture.png"}
                alt="/"
                width={788 / 2}
                height={1544 / 2}
                className="-mt-20"
              />
            </div>
            <div className="flex flex-col mt-12">
              <Image
                src={"/assets/images/new/mediakit/instagram-icon.png"}
                alt="/"
                width={86 / 2}
                height={98 / 2}
                className=" "
              />
              <p className="text-[5rem] leading-tight italic">0.67%</p>
              <p className="text-3xl font-bold italic ">engagement rate</p>
            </div>
          </div>
          <div className="flex gap-4 my-10">
            <p className="border border-black p-4 rounded-full italic text-3xl">
              coach-personal trainer
            </p>
            <p className="border border-black p-4 rounded-full italic text-3xl">
              Holistic health
            </p>
          </div>
          <p className="max-w-5xl text-center italic text-3xl ">
            Mari Gutiérrez es una entrenadora personal certificada y health
            coach, apasionada, positiva y agradecida por la vida, su contenido
            abarca rutinas de ejercicio, recetas saludables y recomendaciones de
            productos para mejorar la calidad de vida. Mari disfruta descubrir
            nuevos lugares, probar productos y compartir consejos prácticos para
            que su audiencia adopte hábitos saludables. Cree firmemente en el
            poder de los pequeños cambios para generar un impacto positivo
            duradero.
          </p>
          <Link href={"/"} className=" my-20">
            <Image
              src={"/assets/images/new/mediakit/nube-informacion.png"}
              alt="/"
              width={628 / 2}
              height={328 / 2}
            />
          </Link>
        </div>
      </body>
    </div>
  );
}
