import Image from "next/image";
import localImage from "../../public/language/rails.svg";
import Link from "next/link";
import { getList } from "../../libs/microcms";

export default async function Page() {
  const { contents } = await getList();
  console.log(contents);

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <>
      <div className="lg:col-span-2">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Keichan's Tech Blog
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                日々学んだことの備忘録
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid lg:grid-cols-1 lg:gap-y-16 gap-10">
            {contents.map((post) => {
              return (
                <>
                  <Link
                    href={`/articles/${post.id}`}
                    className="group rounded-xl overflow-hidden"
                  >
                    <div className="sm:flex">
                      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                        <Image
                          className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                          src={localImage}
                          alt="text"
                        />
                      </div>

                      <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Tag
                        </p>
                        <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                          Read more
                          <svg
                            className="w-2.5 h-2.5"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
        <div className="sticky top-0 left-0 py-8 lg:pl-4 lg:pl-8">
          <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
            <a className="block flex-shrink-0" href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </a>

            <a className="group grow block" href="">
              <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                Leyla Ludic
              </h5>
              <p className="text-sm text-gray-500">UI/UX enthusiast</p>
            </a>

            <div className="grow">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <a className="group flex items-center gap-x-6" href="#">
              <div className="grow">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                  5 Reasons to Not start a UX Designer Career in 2022/2023
                </span>
              </div>

              <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </div>
            </a>

            <a className="group flex items-center gap-x-6" href="#">
              <div className="grow">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                  If your UX Portfolio has this 20% Well Done, it Will Give You
                  an 80% Result
                </span>
              </div>

              <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </div>
            </a>

            <a className="group flex items-center gap-x-6" href="#">
              <div className="grow">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                  7 Principles of Icon Design
                </span>
              </div>

              <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
