import Image from "next/image";
import Link from "next/link";
export default function Roster() {
  return (
    <div className="bg-[#AC4A86] h-full text-black font-bold">
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
      <div className="flex mx-auto justify-between items-center -mt-16 max-w-[1734px] px-8">
        <div className="flex flex-col  gap-4 leading-tight ">
          <h1 className="text-[5rem] italic font-extrabold">MARI GUTIERREZ</h1>
          <h2 className="text-[2.75rem] italic ">
            Holistic health coach-personal trainer
          </h2>
          <div className="flex items-center gap-7 pl-2 font-extrabold mt-8  ">
            <Image
              src={"/assets/images/new/roster/ellipse.png"}
              alt="/"
              width={184 / 2}
              height={184 / 2}
              className=""
            />
            <Image
              src={"/assets/images/new/roster/instagram-icon.png"}
              alt="/"
              width={108 / 2}
              height={124 / 2}
              className="absolute ml-[18px]"
            />
            <p className="text-[5.1rem] italic">373 K</p>
          </div>
          <div className="flex items-center gap-7 pl-2 font-extrabold ">
            <Image
              src={"/assets/images/new/roster/ellipse.png"}
              alt="/"
              width={184 / 2}
              height={184 / 2}
              className=""
            />
            <Image
              src={"/assets/images/new/roster/tiktok-icon.png"}
              alt="/"
              width={88 / 2}
              height={100 / 2}
              className="absolute ml-6"
            />
            <p className="text-[5.1rem] italic">404 K</p>
          </div>
          <div className="max-w-max flex text-center mt-4">
            <Link href={"/"}>
              <Image
                src={"/assets/images/new/roster/nube-beige.png"}
                alt="/"
                width={374 / 2}
                height={198 / 2}
                className=" "
              />
              <p className="text-[1.6rem] -mt-16 -ml-2">ver más</p>
            </Link>
          </div>
        </div>
        <div className="flex place-items-center">
          <Image
            src={"/assets/images/new/roster/nube-healt.png"}
            alt="/"
            width={640 / 2}
            height={336 / 2}
            className=" absolute -ml-56 mt-32 "
          />
          <Image
            src={"/assets/images/new/roster/roster-pictures.png"}
            alt="/"
            width={1536 / 2}
            height={1796 / 2}
            className=" "
          />
        </div>
      </div>
    </div>
  );
}
