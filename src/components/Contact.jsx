const Contact = () => {
  return (
    // <main className=" bg-neutral-900  flex flex-col items-center px-4 text-gray-400">
    //   {/* Section title */}
    //   <article className="text-justify">
    //     <h1 className="text-2xl text-[#FFFFFF] font-extrabold uppercase mb-8 ">
    //       contact
    //     </h1>
    //     <p className="">contact weee</p>
    //   </article>
    // </main>
    <main className="pt-10 pb-8 bg-[#222222] text-gray-400 flex flex-col items-center px-4">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-extrabold text-white mb-6 ">Contact Me</h2>
        <p className=" mb-6 ">
          I’m open to opportunities, collaborations, and discussions about
          innovative projects. You can reach me directly on LinkedIn, and I’d be
          happy to connect and chat about how we can work together.
        </p>
        {/* className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition" */}
        <a
          href=" https://www.linkedin.com/in/ifunanya-mmeremikwu/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-[#FFFFFF] py-3 px-10 rounded-2xl shadow-2xl transition-all hover:bg-[#FFFFFF] hover:text-neutral-900 border-2"
        >
          Connect on LinkedIn
        </a>
      </div>
    </main>
  );
};

export default Contact;
