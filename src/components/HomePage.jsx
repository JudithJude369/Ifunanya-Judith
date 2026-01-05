import ifyImg from "@/assets/judith-jude.png";
import popcornImg from "@/assets/popcorn.gif";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const HomePage = () => {
  return (
    <main className="pt-30 pb-8 bg-neutral-900 text-[#FFFFFF] flex flex-col items-center justify-center px-4">
      <div className="max-w-[300px] w-full flex flex-col items-center mb-8">
        <img
          src={ifyImg}
          alt="ifunanya judith"
          className="w-3/4 rounded-[50%] shadow-2xl object-fill aspect-square"
        />
      </div>
      {/* about me */}
      <h1 className="inline-block animate-bounce font-extrabold uppercase text-4xl text-center">
        ifunanya judith
      </h1>
      <article className="flex font-bold text-2xl gap-1">
        <h4>I do Code & </h4>
        <h4 className=" bg-gradient-to-b from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
          Chill
        </h4>
        <img src={popcornImg} alt="popcorn" className="max-w-[50px]" />
      </article>

      {/* short story */}
      <div className=" max-w-4xl px-6 text-gray-400 items-center flex flex-col gap-6">
        <div className="text-center">
          <p>
            I’m a passionate front-end developer with a strong foundation in
            HTML, CSS, JavaScript, and React. I enjoy building clean, modern,
            and user-friendly web applications that are visually appealing and
            functional. I focus on creating responsive designs, and intuitive
            user experiences while following best practices in web development.
          </p>
          <p className="mt-4">
            I’m actively expanding my skills in TypeScript and Next.js to grow
            as a versatile front-end developer. I’m eager to contribute to
            dynamic teams, where I can continue learning and building impactful
            applications.
          </p>
        </div>
        <a
          href="#contact"
          className=" text-[#FFFFFF] py-3 px-10 rounded-2xl shadow-2xl transition-all hover:bg-[#FFFFFF] hover:text-neutral-900 border-2 "
        >
          <button className="font-bold cursor-pointer">Get in Touch</button>
        </a>
      </div>
      {/* my tech stack  section*/}
      <article className="flex flex-col items-center mt-12 gap-3 px-4">
        <h2 className="uppercase font-bold text-2xl">tech stack</h2>
        <div className=" flex-wrap flex items-center flex-col lg:flex-row md:flex-row gap-4">
          <p className="flex items-center gap-1 text-[#FFFFFF] py-2 px-8 rounded-2xl  border-[0.1px] border-gray-500 font-bold">
            <span>
              <DiHtml5 />
            </span>
            HTML
          </p>
          <p className="flex items-center gap-1 text-[#FFFFFF] py-2 px-10 rounded-2xl border-[0.1px] border-gray-500 font-bold">
            <span>
              <FaCss3Alt />
            </span>
            CSS
          </p>
          <p className="flex items-center gap-1 text-[#FFFFFF] py-2 px-4 rounded-2xl border-[0.1px] border-gray-500 font-bold">
            <span>
              <RiTailwindCssFill />
            </span>
            Tailwind CSS
          </p>
          <p className="flex items-center gap-1 text-[#FFFFFF] py-2 px-5 rounded-2xl border-[0.1px] border-gray-500 font-bold">
            <span>
              <BiLogoJavascript />
            </span>
            JavaScript
          </p>
          <p className="flex items-center gap-1 text-[#FFFFFF] py-2 px-10 rounded-2xl border-[0.1px] border-gray-500 font-bold">
            <span>
              <FaReact />
            </span>
            React
          </p>
        </div>
      </article>
    </main>
  );
};

export default HomePage;
