import projects from "@/data/data.json";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <main className="pt-10 pb-8 bg-neutral-900 text-[#FFFFFF] flex flex-col items-center  px-4 ">
      <h1 className="text-2xl text-white font-extrabold uppercase">projects</h1>
      {/* projects */}
      <article className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 mt-8 px-4 max-w-3xl ">
        {projects.map((project) => {
          const { id, name, image, description, liveUrl, githubUrl } = project;
          return (
            <div
              key={id}
              className="rounded-xl w-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group cursor-pointer"
            >
              {/* Image */}

              <img
                src={image}
                alt={name}
                className="object-fill aspect-square  transition-transform duration-300 group-hover:scale-105"
              />

              {/* Content */}
              <div className="p-4 bg-[#222222]">
                <h2 className="text-2xl font-extrabold mb-2">{name}</h2>
                <p className="text-gray-400 mb-4">{description}</p>

                {/* Links */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    <FiExternalLink /> Live Site
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    <FiExternalLink /> View Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </main>
  );
};

export default Projects;
