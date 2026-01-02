const Experience = () => {
  return (
    <main className="pt-10 pb-8 bg-neutral-900 text-white flex flex-col items-center px-4">
      {/* Section title */}
      <h1 className="text-2xl text-blue-500 font-extrabold uppercase mb-8">
        Experience
      </h1>

      {/* HNG Experience card */}
      <article className="flex flex-col items-start ">
        <div className="flex flex-col items-center gap-4 mb-4">
          <h4 className="text-xl font-bold uppercase">
            Front-End Developer Intern
          </h4>
        </div>

        {/* Achievements / bullets */}
        <ul className="list-disc list-inside space-y-2 text-left text-gray-400 px-4">
          <p className="text-blue-500 text-xl font-bold">HNG Internship </p>
          <p className="text-gray-400">Sep 2025 – Dec 2025</p>

          <li>
            Learned and applied React, JavaScript, and CSS to build small
            projects.
          </li>
          <li>
            Developed personal projects inspired by internship tasks to
            strengthen front-end skills.
          </li>
          <li>
            Gained experience in component-based architecture, responsive
            design, and best coding practices.
          </li>
          <li>
            Explored modern tools and workflows used in front-end development
            (GitHub, Git, etc.).
          </li>
          <li>
            Continued learning and building projects post-internship to prepare
            for professional opportunities.
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Experience;
