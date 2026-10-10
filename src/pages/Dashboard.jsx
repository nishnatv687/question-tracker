import React, { useContext } from "react";
import { Layers, Code2, BookOpen, GitBranch } from "lucide-react";
import DataContext from "../context/DataContext";

const Dashboard = () => {
  const {
    questions,
    technicalQuestion,
    dsaQuestions,
    gitHubQuestions,
    totalDsaQuestions,
    totalGitHubQuestions,
    totalTechnicalQuestion,
   } = useContext(DataContext);

  // Total questions completed across all categories
  const completedQuestions = questions.filter(
    (q) => q.status === "Completed"
  ).length;

  // Overall progress percentage
  const totalProgress = questions.length
    ? Math.round((completedQuestions / questions.length) * 100)
    : 0;

  // Category-wise statistics
  const stats = [
    {
      title: "Total Questions",
      count: questions.length,
      description: "Across all categories",
      icon: Layers,
      iconStyle: "bg-lime-300/10 text-lime-300",
      showTotal: false,
    },
    {
      title: "DSA Completed",
      count: dsaQuestions.length,
      total: totalDsaQuestions.length,
      description: "Problems completed",
      icon: Code2,
      iconStyle: "bg-sky-400/10 text-sky-400",
      showTotal: true,
    },
    {
      title: "Machine Code Completed",
      count: technicalQuestion.length,
      total: totalTechnicalQuestion.length,
      description: "Questions completed",
      icon: BookOpen,
      iconStyle: "bg-purple-400/10 text-purple-400",
      showTotal: true,
    },
    {
      title: "Git & GitHub Completed",
      count: gitHubQuestions.length,
      total: totalGitHubQuestions.length,
      description: "Questions completed",
      icon: GitBranch,
      iconStyle: "bg-amber-400/10 text-amber-400",
      showTotal: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0d0a] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            PrepTrack / Overview
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your <span className="text-lime-300">Dashboard.</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Track your preparation and monitor your progress
            across all question categories.
          </p>
        </header>

        {/* Statistics Cards */}
        <section
          aria-label="Question statistics"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            const percentage =
              stat.showTotal && stat.total > 0
                ? Math.round((stat.count / stat.total) * 100)
                : 0;

            return (
              <article
                key={stat.title}
                className="group flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#131510] p-5 transition duration-200 hover:-translate-y-1 hover:border-lime-300/25 hover:bg-[#171a13] sm:p-6"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-5 text-zinc-400">
                      {stat.title}
                    </p>

                    <p className="mt-2 text-xs text-zinc-600">
                      {stat.description}
                    </p>
                  </div>

                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${stat.iconStyle}`}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Count */}
                <div className="mt-7 flex items-baseline gap-2">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {stat.count}
                  </h2>

                  {stat.showTotal && (
                    <span className="text-base font-medium text-zinc-500">
                      / {stat.total}
                    </span>
                  )}
                </div>

                {/* Category Progress */}
                {stat.showTotal && (
                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs text-zinc-500">
                        Completion
                      </span>

                      <span className="text-xs font-semibold text-zinc-300">
                        {percentage}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-lime-300 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )}

                {!stat.showTotal && (
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs text-zinc-500">
                      All questions in your tracker
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </section>

        {/* Overall Progress */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-[#131510] p-5 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-400">
                Overall Progress
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {totalProgress}
                <span className="ml-1 text-xl text-lime-300">%</span>
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                {completedQuestions} of {questions.length} questions completed
              </p>
            </div>

            <div className="flex h-20 w-20 shrink-0 items-center justify-center self-start rounded-full border-4 border-lime-300/20 sm:self-center">
              <span className="text-xl font-bold text-lime-300">
                {totalProgress}%
              </span>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div
            className="mt-6 h-3 overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-label="Overall question completion"
            aria-valuenow={totalProgress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-lime-300 transition-all duration-500"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </section>

        {/* Bottom Note */}
        <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
          <p className="text-sm leading-6 text-zinc-400">
            <span className="font-semibold text-zinc-200">
              Keep going.
            </span>{" "}
            Your overall progress and category statistics update
            automatically when your shared questions state changes.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;