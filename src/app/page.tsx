import Image from "next/image";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {contents.map((post) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
                <Link href={"/articles"}>
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-full h-48"
                      src="https://images.unsplash.com/photo-1561654791-00316c79efa8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                      alt=""
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <Link href={"/articles"}>
                      <p className="text-xl font-semibold text-neutral-600">
                        {post.title}
                      </p>
                    </Link>
                    <p className="mt-3 text-base text-gray-500">カテゴリ</p>
                  </div>
                  <div className="flex items-center mt-6">
                    <div>
                      <p className="text-sm font-medium text-gray-500">タグ</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:col-span-1"></div>
    </>
  );
}
