import { notFound } from "next/navigation";
import parse from "html-react-parser";
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
  const time = new Date().toLocaleString();

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
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
