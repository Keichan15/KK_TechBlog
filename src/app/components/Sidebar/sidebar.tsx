import Image from "next/image";
import localImage from "../../../../public/language/rails.svg";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="lg:col-span-1">
      <div className="relative items-center w-full px-5 py-12 mx-auto max-w-7xl">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <Image
            className="flex-shrink-0 object-cover object-center w-32 h-32 mx-auto -mt-8 rounded-full shadow-xl aboslute"
            src={localImage}
            alt="team"
          />

          <div className="p-6 lg:text-center">
            <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Keichan_15
            </h4>
            <p className="mt-3 text-base leading-relaxed text-gray-500">
              関西でエンジニアをさせて頂いています。
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
  );
}
