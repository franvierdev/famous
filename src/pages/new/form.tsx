import Header from "./header";
import Image from "next/image";
import { useForm } from "react-hook-form";
export default function Form() {
  interface formValues {
    companyName: string;
    contactName: string;
    email: string;
    contactVia: string;
    presupuesto: string;
    details: string;
  }
  const { register, handleSubmit } = useForm<formValues>();
  const onSubmit = (data: formValues) => {
    console.log(data);
  };
  return (
    <div className="bg-[#EFDEC6] text-black font-bold">
      <Header />
      <div className="max-w-[1734px] mx-auto  ">
        <Image
          src={"/assets/images/new/pink-splat.png"}
          alt="/"
          width={3468 / 2}
          height={1838 / 2}
          className="absolute -mt-20 "
        />
        <div className=" bg-[#EFDEC6] text-[#EFDEC6] h-screen  max-w-3xl mx-auto   ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center relative "
          >
            <div className="absolute mt-32 w-full flex flex-col ">
              <h1 className="font-bold text-5xl  italic max-w-xs self-center text-center leading-tight">
                ¡TRABAJEMOS JUNTOS!
              </h1>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="companyName">companyName</label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  {...register("companyName", { required: true })}
                  id="companyName"
                />
              </div>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="contactName">Nombre de contacto</label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  {...register("contactName", { required: true })}
                  id="contactName"
                />
              </div>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="email">E-mail (companyNamerial)</label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  {...register("email", { required: true })}
                  id="email"
                />
              </div>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="contactVia">
                  ¿Cómo te encontramos en la web o en redes sociales?
                </label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  {...register("contactVia", { required: true })}
                  id="contactVia"
                />
              </div>

              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label className="flex gap-2" htmlFor="details">
                  Detalles adicionales (fecha, duración, plataformas)
                  <p className="font-thin">opcional</p>
                </label>
                <input
                  className=" bg-transparent focus:outline-none  "
                  type="text"
                  {...register("details")}
                  id="details"
                />
                <button className="self-end absolute -mt-28 -mr-[460px]">
                  <Image
                    src={"/assets/images/new/enviar-button.png"}
                    alt="/"
                    typeof="submit"
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
