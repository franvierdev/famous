import Header from "@/modules/shared/components/header-new/header";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { useMutation } from "react-query";

interface FormValues {
  companyName: string;
  contactName: string;
  email: string;
  contactVia: string;
  details?: string;
}

export default function ContactUs() {
  const { formatMessage } = useIntl();
  const { register, handleSubmit } = useForm<FormValues>();

  const mutate = useMutation<unknown, Error, FormValues>(
    async (data) => {
      const response = await fetch(
        "https://fm-web-testing.famosos.com/api/v1/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("no hay respuesta");
      }

      return response.json();
    },
    {
      onError: (error) => {
        console.error("Error al crear lead:", error);
      },
    }
  );

  const onSubmit = async (data: FormValues) => {
    try {
      await mutate.mutateAsync(data);
      console.log(data);
      alert("Exito");
    } catch (error) {
      console.error("Error al enviar formulario", error);
    }
  };

  return (
    <div className="bg-[#EFDEC6] w-full  h-screen text-black font-bold">
      <NextSeo
        title={formatMessage({
          defaultMessage: "Contactanos",
          id: "gYhLLT",
        })}
      />
      <Header />
      <div className="max-w-[1734px]  mx-auto  ">
        <Image
          src={"/assets/images/new/pink-splat.png"}
          alt="/"
          width={3468 / 2}
          height={1838 / 2}
          className="absolute -mt-20   "
          priority
        />
        <div className="  text-[#EFDEC6]   max-w-3xl mx-auto    ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center relative "
          >
            <div className="absolute mt-32 w-full flex flex-col ">
              <h1 className="font-bold text-5xl  italic max-w-xs self-center text-center leading-tight">
                ¡TRABAJEMOS JUNTOS!
              </h1>
              <div className="border-b flex flex-col text-2xl mt-10 ">
                <label htmlFor="companyName">Empresa</label>
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
                <label htmlFor="email">E-mail</label>
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
