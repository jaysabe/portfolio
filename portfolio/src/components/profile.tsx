/* eslint-disable react/no-unescaped-entities */
export const Profile = () => {
  return (
    <section className="w-full max-w-3xl mx-auto p-8">
      <div className="text-center pb-4 shadow-md font-bold tracking-tight text-3xl lg:text-3xl">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-blue-700 mb-4">
          About Me
        </h2>
        <div className="flex items-center justify-center"></div>
        {/*New box style */}
        <div className="p-1 bg-gradient-to-r from-gray-400 to-gray-700 rounded-md">
          <div className="text-left bg-gray-800 text-white p-6 rounded-md shadow-lg w-full">
            <h1 className="text-3xl font-bold">
              Jacob (Jay) Abegglen
            </h1>
            <p className="mt-4 inline-block text-white-500 font-light text-xl">
              DevOps Engineer | Python Automation | Infrastructure
            </p>
            <p className="mt-4 inline-block text-white-500 font-light text-xl">
              I build CI/CD systems, cloud automation, and full-stack
              applications that prioritize reliability, observability, and fast
              delivery.
            </p>
            <p className="mt-4 inline-block text-white-500 font-light text-xl">
              My focus is production-ready engineering across infrastructure,
              backend services, and modern web platforms.
            </p>
            <p className="mt-4 inline-block text-white-500 font-semibold text-xl">
              (360) 831-2912 | jayabe@pdx.edu | linkedin.com/in/jacob-abegglen/ |
              github.com/jaysabe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
