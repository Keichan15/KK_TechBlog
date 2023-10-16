import Image from "next/image";
import localImage from "../../public/language/rails.svg";
import Link from "next/link";
import { getList } from "../../libs/microcms";
import Index from "./components/Index";

export default async function Page() {
  const { contents } = await getList();
  console.log(contents);

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return <Index></Index>;
}
