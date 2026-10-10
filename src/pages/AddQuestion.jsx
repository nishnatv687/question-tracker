import { useContext } from "react";
import { useForm } from "react-hook-form";
import DataContext from "../context/DataContext";

const AddQuestion = () => {
  const { addQuestions } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const QuestionSubmit = (data) => {
    addQuestions(data);
    reset();
  };

  return (
    <section className="min-h-[calc(100vh-72px)] bg-[#0b0d0a] px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Page Heading */}
        <div className="mb-8 sm:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Question Tracker
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Add a <span className="text-lime-300">Question.</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Track your preparation, organize questions by category,
            and build consistency in your interview practice.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#131510] shadow-2xl shadow-black/20 sm:rounded-3xl">

          {/* Card Header */}
          <div className="border-b border-white/10 px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-300 text-2xl font-bold text-[#10110f]">
                +
              </div>

              <div>
                <h2 className="text-lg font-semibold sm:text-xl">
                  Question Details
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Fill in the details below to add a question.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(QuestionSubmit)}
            className="space-y-6 p-5 sm:p-8"
          >
            {/* Question Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Question Title
                <span className="ml-1 text-red-400">*</span>
              </label>

              <input
                id="title"
                type="text"
                placeholder="e.g. Explain the JavaScript event loop"
                {...register("title", {
                  required: "Question is required",
                })}
                className={`w-full rounded-xl border bg-[#0d0f0b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:ring-2 focus:ring-lime-300/20 ${
                  errors.title
                    ? "border-red-500 focus:border-red-500"
                    : "border-white/10 focus:border-lime-300"
                }`}
              />

              {errors.title && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.title.message}
                </p>
              )}

              <p className="mt-2 text-xs text-zinc-500">
                Write a clear title so you can find it easily later.
              </p>
            </div>

            {/* Category and Difficulty */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Category
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <select
                  id="category"
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className={`w-full rounded-xl border bg-[#0d0f0b] px-4 py-3.5 text-sm text-white outline-none transition focus:ring-2 focus:ring-lime-300/20 ${
                    errors.category
                      ? "border-red-500"
                      : "border-white/10 focus:border-lime-300"
                  }`}
                >
                  <option value="">Select Category</option>
                  <option value="DSA">DSA</option>
                  <option value="Technical">Machine Code</option>
                  <option value="Git & GitHub">Git & GitHub</option>
                </select>

                {errors.category && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Difficulty */}
              <div>
                <label
                  htmlFor="difficulty"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Difficulty
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <select
                  id="difficulty"
                  {...register("difficulty", {
                    required: "Difficulty is required",
                  })}
                  className={`w-full rounded-xl border bg-[#0d0f0b] px-4 py-3.5 text-sm text-white outline-none transition focus:ring-2 focus:ring-lime-300/20 ${
                    errors.difficulty
                      ? "border-red-500"
                      : "border-white/10 focus:border-lime-300"
                  }`}
                >
                  <option value="">Select Difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>

                {errors.difficulty && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.difficulty.message}
                  </p>
                )}
              </div>
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Status
                <span className="ml-1 text-red-400">*</span>
              </label>

              <select
                id="status"
                {...register("status", {
                  required: "Status is required",
                })}
                className={`w-full rounded-xl border bg-[#0d0f0b] px-4 py-3.5 text-sm text-white outline-none transition focus:ring-2 focus:ring-lime-300/20 ${
                  errors.status
                    ? "border-red-500"
                    : "border-white/10 focus:border-lime-300"
                }`}
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

              {errors.status && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.status.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="border-t border-white/10 pt-6">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3.5 text-sm font-bold text-[#10110f] transition hover:bg-lime-200 active:scale-[0.99] sm:w-auto sm:min-w-48"
              >
                <span className="text-lg leading-none">+</span>
                Add Question
              </button>

              <p className="mt-3 text-xs leading-5 text-zinc-500">
                Fields marked with * are required.
              </p>
            </div>
          </form>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
          <span className="text-lg text-lime-300">✦</span>

          <p className="text-sm leading-6 text-zinc-400">
            <span className="font-medium text-zinc-200">
              Stay consistent.
            </span>{" "}
            Add the questions you practice and organize them to make your
            interview preparation easier.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AddQuestion;