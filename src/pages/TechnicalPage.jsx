import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const TechnicalPage = () => {
  const { questions,updateQuestionStatus, deleteQuestion} = useContext(DataContext);

  const [Search, setSearch] = useState("");
  const [Difficulty, setDifficulty] = useState("All");
  const [Status, setStatus] = useState("All");

  // Filter Technical questions
  const technicalQuestions = questions.filter((val) => {
    return val.category === "Technical";
  });

  // Search + Difficulty + Status filters
  const filterQuestions = technicalQuestions.filter((val) => {
    return (
      (val.title || "").toLowerCase().includes(Search.toLowerCase()) &&
      (Difficulty === "All" || val.difficulty === Difficulty) &&
      (Status === "All" || val.status === Status)
    );
  });

  return (
    <div className="min-h-screen bg-[#0b0d0a] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300">
              <span className="h-2 w-2 rounded-full bg-lime-300" />
              PrepTrack / Machine Code
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Machine Code <span className="text-lime-300">Questions.</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              Prepare for technical interviews, strengthen your concepts,
              and keep track of your learning progress.
            </p>
          </div>

          {/* Question Count */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#131510] px-5 py-4 sm:min-w-52">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime-300/10 text-xl font-bold text-lime-300">
              #
            </div>

            <div>
              <p className="text-sm text-zinc-400">Total Questions</p>
              <h2 className="mt-1 text-2xl font-bold">
                {technicalQuestions.length}
              </h2>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-7 rounded-2xl border border-white/10 bg-[#131510] p-4 sm:p-5">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-white">
              Your Question Library
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Search and filter technical questions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {/* Search Input */}
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                type="text"
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search technical questions..."
                aria-label="Search technical questions"
                className="w-full rounded-xl border border-white/10 bg-[#0b0d0a] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-300 focus:ring-2 focus:ring-lime-300/10"
              />
            </div>

            {/* Difficulty Filter */}
            <select
              value={Difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              aria-label="Filter by difficulty"
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0b0d0a] px-4 py-3.5 text-sm text-zinc-200 outline-none transition focus:border-lime-300 focus:ring-2 focus:ring-lime-300/10"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            {/* Status Filter */}
            <select
              value={Status}
              onChange={(e) => setStatus(e.target.value)}
              aria-label="Filter by status"
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0b0d0a] px-4 py-3.5 text-sm text-zinc-200 outline-none transition focus:border-lime-300 focus:ring-2 focus:ring-lime-300/10"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Results Count and Reset */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
            <p className="text-xs text-zinc-500">
              Showing{" "}
              <span className="font-semibold text-zinc-300">
                {filterQuestions.length}
              </span>{" "}
              of {technicalQuestions.length} questions
            </p>

            {(Search !== "" ||
              Difficulty !== "All" ||
              Status !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDifficulty("All");
                  setStatus("All");
                }}
                className="rounded-lg px-3 py-1.5 text-xs font-semibold text-lime-300 transition hover:bg-lime-300/10"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Questions Grid */}
        {filterQuestions.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filterQuestions.map((val) => {
              return (
                <div
                  key={val.id}
                  className="group flex min-h-48 min-w-0 flex-col justify-between rounded-2xl border border-white/10 bg-[#131510] p-5 transition duration-200 hover:-translate-y-1 hover:border-lime-300/30 hover:bg-[#171a13] sm:p-6"
                >
                  {/* Category and Difficulty */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-lg border border-lime-300/20 bg-lime-300/10 px-3 py-1.5 text-xs font-semibold text-lime-300">
                      Machine Code
                    </span>

                    <span
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                        val.difficulty === "Easy"
                          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                          : val.difficulty === "Medium"
                          ? "border-amber-400/20 bg-amber-400/10 text-amber-400"
                          : val.difficulty === "Hard"
                          ? "border-rose-400/20 bg-rose-400/10 text-rose-400"
                          : "border-zinc-400/20 bg-zinc-400/10 text-zinc-400"
                      }`}
                    >
                      {val.difficulty || "Not set"}
                    </span>
                  </div>

                  {/* Question Title */}
                  <h2 className="mt-6 break-words text-lg font-semibold leading-7 text-zinc-100 transition group-hover:text-lime-200 sm:text-xl">
                    {val.title}
                  </h2>  
                    <button
                       type="button"
                       onClick={() => {
                         const confirmed = window.confirm(
                           "Are you sure you want to delete this question?"
                         );                     

                         if (confirmed) {
                           deleteQuestion(val.id);
                         }
                       }}
                       className="mt-3 rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-2 text-xs font-semibold text-red-400 transition hover:bg-red-400/20">
                       Delete
                     </button>

                  {/* Status Badge */}
                  <div className="mt-5">
                    <span
                      className={`inline-flex rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                        val.status === "Completed"
                          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                          : val.status === "In Progress"
                          ? "border-sky-400/20 bg-sky-400/10 text-sky-400"
                          : "border-zinc-400/20 bg-zinc-400/10 text-zinc-400"
                      }`}
                    >
                      {val.status || "Pending"}
                    </span>
                  </div>
                    <select 
                        value={val.status || "Pending"}
                        onChange={(e) =>updateQuestionStatus(val.id, e.target.value) } 
                        className="mt-4 rounded-xl border border-white/10 bg-[#0b0d0a] px-3 py-2 text-sm text-white outline-none focus:border-lime-300" >
                   <option value="Pending">Pending</option>
                   <option value="In Progress">In Progress</option>
                   <option value="Completed">Completed</option>
                  </select> 

                  {/* Card Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="text-xs text-zinc-500">
                      Technical interview
                    </p>

                    <span className="text-lg text-zinc-600 transition group-hover:text-lime-300">
                      ↗
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty States */
          <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#131510] px-5 py-12 text-center">
            <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-lime-300/20 bg-lime-300/10 text-3xl text-lime-300">
              {technicalQuestions.length === 0 ? "+" : "⌕"}
            </div>

            <h2 className="text-xl font-semibold text-white">
              {technicalQuestions.length === 0
                ? "No Technical Questions Yet"
                : "No Matching Questions"}
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
              {technicalQuestions.length === 0
                ? "Add technical interview questions through your question form, and they will appear here."
                : "Try another search term or change your difficulty or status filters."}
            </p>

            {technicalQuestions.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDifficulty("All");
                  setStatus("All");
                }}
                className="mt-5 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-lime-300/30 hover:text-lime-300"
              >
                Reset Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicalPage;