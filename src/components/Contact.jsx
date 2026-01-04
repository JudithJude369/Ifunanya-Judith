import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <main className="pt-10 pb-8 bg-[#222222] text-gray-400 flex flex-col items-center px-4">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-extrabold text-white mb-6 ">Contact Me</h2>
        <p className=" mb-6 ">
          I’m open to new opportunities, collaborations, and conversations
          around innovative projects. Feel free to reach out — I’m always happy
          to connect and explore how we can work together.
        </p>
        <article className="flex gap-4 items-center text-xl justify-center">
          <a
            href=" https://www.linkedin.com/in/ifunanya-mmeremikwu/"
            className=" hover:bg-blue-500 p-2 hover:shadow hover:rounded-[50%]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/JudithJ08832378"
            className=" hover:bg-blue-500 p-2 hover:shadow hover:rounded-[50%]"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/JudithJude369?tab=repositories"
            className=" hover:bg-blue-500 p-2 hover:shadow hover:rounded-[50%]"
          >
            <FaGithub />
          </a>
        </article>
      </div>
    </main>
  );
};

export default Contact;
