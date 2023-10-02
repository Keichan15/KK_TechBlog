import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../libs/microcms";
import markdownHtml from "zenn-markdown-html";
import "zenn-content-css";

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

  const html = markdownHtml(post.content);

  return (
    <div className="lg:col-span-2">
      <div className="znc">
        <div>{parse(html)}</div>
      </div>
    </div>
  );
}
