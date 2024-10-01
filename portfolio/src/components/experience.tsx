import { useState } from "react";
import workHistory from "../../public/static/workex.json";
import React from "react";

export const WorkExperience = () => {
  const [selectedCompany, setSelectedCompany] = useState("Taskit");

  const handleCompanyChange = (company: string) => {
    setSelectedCompany(company);
  };

  const currentWork = workHistory.find(
    (work) => work.company === selectedCompany
  );

  return (
    <section className="w-full max-w-4xl mx-auto p-8">
      <div className="pb-4">
        <h2 className="text-3xl font-bold">Work Highlights</h2>
        <div className="flex mt-6">
          {/* Company List */}
          <div className="w-1/4">
            {workHistory.map((work) => (
              <div
                key={work.company}
                className={`cursor-pointer py-2 text-lg ${
                  selectedCompany === work.company
                    ? "text-pink-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleCompanyChange(work.company)}
              >
                {work.company}
              </div>
            ))}
          </div>
          {/* Work Details */}
          <div className="w-3/4 pl-8">
            {currentWork && (
              <>
                <h3 className="text-xl font-semibold">
                  {currentWork.role} @ {currentWork.company}
                </h3>
                <ul className="list-disc mt-4 space-y-2">
                  {currentWork.achievements.map((achievement, index) => (
                    <li key={index} className="text-white">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
