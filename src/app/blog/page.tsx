/* eslint-disable react/no-unescaped-entities */
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { Star } from "~/components/Icons";

export const metadata = {
  title: {
    default: "Blog",
    template: "%s | Sameer Jadav",
  },
  description:
    "Here I'll be sharing valuable insights, useful tips, and informative tutorials on the art of website development, as well as my personal reflections on life.",

  openGraph: {
    title: "Blog",
    description:
      "Here I'll be sharing valuable insights, useful tips, and informative tutorials on the art of website development, as well as my personal reflections on life.",
    url: "https://sameerjadav.me/blog",
    images: [
      {
        url: "https://sameerjadav.me/og.png",
        width: 1200,
        height: 600,
      },
    ],
  },
  twitter: {
    title: "Blog",
    description:
      "Here I'll be sharing valuable insights, useful tips, and informative tutorials on the art of website development, as well as my personal reflections on life.",
    images: ["https://sameerjadav.me/og.png"],
  },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-[816px] p-4 md:p-6">
      <h1 className="mb-8 text-center text-5xl uppercase md:text-7xl lg:my-10 lg:text-8xl">
        My Journal
      </h1>
      <p className="mb-10 text-center text-xl md:text-2xl">
        Here I'll be sharing valuable insights, useful tips, and informative
        tutorials on the art of website development, as well as my personal
        reflections on life.
      </p>
      <section className="flex flex-col gap-4 text-xl md:gap-6 md:text-2xl">
        {allPosts
          .sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.url}
              href={`/blog/${post.url}`}
              className="flex items-start gap-2 hover:underline hover:underline-offset-8 md:items-center md:gap-4"
            >
              <Star size={35} />
              <p>{post.title}</p>
            </Link>
          ))}
      </section>
    </main>
  );
}
