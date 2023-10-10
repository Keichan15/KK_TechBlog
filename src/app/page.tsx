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
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Keichan's Tech Blog
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            日々学んだことの備忘録
          </p>
        </div>

        <div className="relative">
          <div className="relative flex justify-start">
            <span className="pr-3 text-lg font-medium text-neutral-600 bg-white">
              All Issues
            </span>
          </div>
        </div>
        {contents.map((post) => {
          return (
            <>
              <div className="space-y-8 divide-y divide-gray-100">
                <Link href={`/articles/${post.id}`}>
                  <div className="pt-8 sm:flex lg:items-end group">
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                      <Image
                        className="w-full rounded-md h-32 lg:w-32 object-cover"
                        src={localImage}
                        alt="text"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">
                        August 20.20.21
                      </span>
                      <p className="mt-3 text-lg font-medium leading-6">
                        {post.title}
                      </p>
                      <p className="mt-2 text-lg text-gray-500">
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}

        {/* {contents.map((post) => {
          return (
            <>
              <Link href={`/articles/${post.id}`}>
                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
                    <Image
                      className="w-full h-full absolute top-0 left-0 object-cover"
                      src={localImage}
                      alt="Image Description"
                    />
                  </div>
                  <div className="flex flex-wrap">
                    <div className="p-4 flex flex-col h-full sm:p-7">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Card title
                      </h3>
                      <p className="mt-1 text-gray-800 dark:text-gray-400">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="mt-5 sm:mt-auto">
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Last updated 5 mins ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })} */}
      </div>
      <div className="lg:col-span-1"></div>
    </>
  );
}
