import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import { getMDXComponent } from "next-contentlayer/hooks";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allPosts.map((post) => {
    return {
      slug: post.url,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.url === params.slug);

  if (!post) return;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://sameerjadav.me/blog/${post.url}`,
      images: [
        {
          url: "https://sameerjadav.me/og.png",
          width: 1200,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://sameerjadav.me/og.png"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post.url === params.slug);

  if (!post) notFound();

  const Content = getMDXComponent(post.body.code);

  return (
    <section className="p-4">
      <div className="mx-auto mb-10 max-w-[816px] md:mb-14 lg:my-14">
        <h1 className="w-full text-3xl font-black md:text-6xl lg:text-7xl">
          <Balancer>{post.title}</Balancer>
        </h1>
      </div>
      <article className="prose prose-invert prose-quoteless mx-auto mb-16 w-max md:prose-lg lg:prose-xl">
        <Content />
      </article>
    </section>
  );
}
