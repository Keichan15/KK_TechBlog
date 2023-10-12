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
      <div className="lg:col-span-3">
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
      </div>

      <div className="lg:col-span-2">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {contents.map((post) => {
              return (
                <>
                  <Link
                    href={`/articles/${post.id}`}
                    className="group relative block"
                  >
                    <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute bg-gradient-to-t from-gray-500 to-gray-200 z-[1]">
                      <Image
                        className="w-full h-full absolute top-0 left-0 object-cover"
                        src={localImage}
                        alt="img Description"
                      />
                    </div>

                    <div className="absolute bottom-0 inset-x-0 z-10">
                      <div className="flex flex-col h-full p-4 sm:p-6">
                        <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-white/[.8]">
                          {new Date(post.createdAt)
                            .toLocaleDateString("ja-JP", {
                              timeZone: "Asia/Tokyo",
                            })
                            .replace(/\//g, "-")}
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

      <div className="lg:col-span-1">
        <div className="relative items-center w-full px-5 py-12 mx-auto max-w-7xl">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <img
              alt="team"
              className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
              src="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_DUFTlhOdmSdoT9F4r1Woo40pyML2.webp"
            />

            <div className="p-6 lg:text-center">
              <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                {" "}
                Info
              </span>
              <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Michael Andreuzza
              </h4>
              <p className="mt-3 text-base leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View profile{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
