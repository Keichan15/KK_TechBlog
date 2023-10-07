import { notFound } from "next/navigation";
import { getDetail, getList } from "../../../../libs/microcms";
import markdownHtml from "zenn-markdown-html";
import { load } from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);
  console.log(post);

  // ページの生成された時間を取得
  // const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }

  let html = markdownHtml(post.content);

  const $ = load(html);

  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  html = $.html();

  return (
    <div className="lg:col-span-2">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Keichan's Tech Blog
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          日々学んだことの備忘録
        </p>
      </div>

      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
