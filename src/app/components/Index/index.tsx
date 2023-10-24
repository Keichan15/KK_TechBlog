import Image from "next/image";
import localImage from "../../../../public/language/rails.svg";
import Link from "next/link";
import { getList } from "../../../../libs/microcms";

export default async function Index() {
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


    </>
  );
}
