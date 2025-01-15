import Header from "./header";
import Image from "next/image";
export default function Form() {
  return (
    <div className="bg-[#EFDEC6] text-black font-bold">
      <Header />
      <div className="max-w-[1734px] mx-auto  ">
        <Image
          src={"/assets/images/new/pink-splat.png"}
          alt="/"
          width={3468 / 2}
          height={4212 / 2}
          className="absolute mt-20 "
        />
        <div className=" bg-[#EFDEC6] text-[#EFDEC6] h-screen  max-w-3xl mx-auto   ">
          <form className="flex flex-col items-center relative ">
            <div className="absolute mt-48 w-full flex flex-col ">
              <h1 className="font-bold text-5xl  italic max-w-xs self-center text-center leading-tight">
                ¡TRABAJEMOS JUNTOS!
              </h1>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="empresa">Empresa</label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  id="empresa"
                />
              </div>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="correo">E-mail (empresarial)</label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="email"
                  id="correo"
                />
              </div>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="tipo">Tipo de campaña o colaboración</label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  id="tipo"
                />
              </div>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="presupuesto">Presupuesto estimado</label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  id="presupuesto"
                />
              </div>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="detalles">
                  Detalles adicionales (fecha, duración, plataformas).
                </label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  id="detalles"
                />
                <button className="self-end absolute -mt-28 -mr-[460px]">
                  <Image
                    src={"/assets/images/new/enviar-button.png"}
                    alt="/"
                    width={586 / 2}
                    height={366 / 2}
                    className="   "
                  />
                  <p className="-mt-[118px] text-5xl"> enviar</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
