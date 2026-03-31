const Experience = () => {
  return (
    <main className="pt-10 pb-8 bg-neutral-900 text-white flex flex-col items-center px-4">
      {/* Section title */}
      <h1 className="text-2xl text-white font-extrabold uppercase mb-8">
        Experience
      </h1>

      {/* HNG Experience card */}
      <article className="flex flex-col items-start ">
        <div className="flex flex-col items-center gap-4 mb-4">
          <h4 className="text-xl font-bold uppercase">
            Freelance Frontend Developer
          </h4>
        </div>

        {/* Achievements / bullets */}
        <ul className="list-disc list-inside space-y-2 text-left text-gray-400 px-4">
          <p className="text-gray-400">March 2025 – Present</p>
          <li>
            Engineered a full-scale Job Board & Filtering Platform using React
            and Tailwind CSS, prioritizing modular architecture to support
            future feature scaling and high-volume data handling.
          </li>
          <li>
            Architected a dynamic search and routing system that manages complex
            datasets, ensuring sub-second response times for user queries across
            mobile and desktop interfaces.
          </li>
          <li>
            Developed a custom Digital Management System for a local educational
            service, digitizing manual processes and creating a mobile-first
            interface for client engagement.
          </li>
          <li>
            Built and deployed high-converting landing pages for various
            clients, optimizing for core web vitals and ensuring 100%
            cross-browser compatibility.
          </li>
          <li>
            Managed the full deployment lifecycle using Git, GitHub, and Vercel,
            maintaining a 99.9% uptime for all client-facing applications.
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Experience;
