/* eslint-disable react/no-unescaped-entities */
import { Separator } from "./ui/separator";

export const Profile = () => {
  return (
    <section className="w-full max-w-3xl mx-auto p-8">
      <div className="text-center pb-4 shadow-md font-bold tracking-tight text-3xl lg:text-3xl">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-blue-700 mb-4">
          About Me
        </h2>
        <div className="flex items-center justify-center">
          <Separator className="my-4 mx-auto bg-slate-100/20 h-0.5 w-40"></Separator>
        </div>
        {/*New box style */}
        <div className="p-1 bg-gradient-to-r from-gray-400 to-gray-700 rounded-md">
          <div className="text-left bg-gray-800 text-white p-6 rounded-md shadow-lg w-full">
            <h1 className="text-3xl font-bold">
              Howdy <span>👋🏽</span>, I'm Jay!
            </h1>
            <p className="mt-4 inline-block text-white-500 font-light text-xl">
              I'm a Fullstack Developer who finds immense fulfillment in
              engineering creative solutions to society's challenges, whether
              tackling complex web applications 🧑🏽‍💻, creating the next terminator
              through firmware / llm development 🤖, or through celebrating the
              small victories of writing automation scripts.🗒️
            </p>
            <p className="mt-4 inline-block text-white-500 font-light text-xl">
              {" "}
              I believe that the language you use in coding does not matter as
              long as it serves your purpose and enhances your workflow. 💪🏽
            </p>
            <p className="mt-4 inline-block text-white-500 font-light text-xl">
              I believe that open-source applications should be the norm,
              fostering collaboration and creativity within the tech community
              .🧑‍🤝‍🧑
            </p>
            <p className="mt-4 inline-block text-white-500 font-semibold text-xl">
              My craftsmanship and contributions as an engineer are centered
              around these values, striving to create impactful software that
              both empowers others and drives positive change for our future. 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
