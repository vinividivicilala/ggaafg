/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { ExternalLinkIcon, GitHubIcon, Star } from "~/components/Icons";

export default function Home() {
  return (
    <main className="p-4 md:p-6">
      <section className="mobile-min-height lg:desktop-min-height flex flex-col justify-center text-5xl md:text-8xl lg:text-9xl">
        <div className="mx-auto mb-20 max-w-max uppercase lg:my-10">
          <h1 className="w-full text-center">sameer jadav</h1>
          <div className="flex w-full flex-col items-center text-center">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="-mt-3 md:-mt-6 lg:-mt-10">
                <Star />
              </div>
              <p className="text-white">front-end</p>
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
              <p className="text-white">developer</p>
              <div className="-mt-3 md:-mt-6 lg:-mt-10">
                <Star />
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mb-20 text-center text-xl lg:hidden">
          From India, passionated about creating memorable projects
        </p>

        <p className="mx-auto mb-16 max-w-prose text-center text-xl md:text-2xl">
          I'm a frontend developer with a passion for learning and building
          awesome projects. Currently, I'm focusing on full stack development to
          expand my skillset and create even more performant and feature-rich
          applications.
        </p>
      </section>

      <section className="mx-auto mb-16 max-w-prose text-xl md:text-2xl">
        <div className="space-y-3 md:space-y-4">
          <h2 className="uppercase text-myGray">info about me</h2>
          <p>
            Hi there, I'm Sameer Jadav, a front-end developer with a passion for
            programming that has grown stronger each day since I started
            learning a year ago. My journey began with exploring front-end web
            development and I am now dedicatedly pursuing full-stack
            development.
          </p>
          <p>
            My ultimate goal is to become a solid full-stack developer with the
            level of expertise you'd expect from a top-tier frontend developer,
            as showcased on{" "}
            <a
              href="https://www.awwwards.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-dotted hover:border-solid"
            >
              Awwward
            </a>
            . As of now, I work as a freelance developer and I take pride in my
            strong command of HTML, CSS/Tailwindcss, and JavaScript/TypeScript.
          </p>
          <p>
            For my front-end projects, I love working with Next.js and
            Tailwindcss, while for full-stack development, I prefer the{" "}
            <a
              href="https://create.t3.gg"
              target="_blank"
              rel="noopener noreferrer"
              className=" border-b border-dotted hover:border-solid"
            >
              T3
            </a>{" "}
            stack. I stay up to date with the latest technologies and trends in
            the constantly evolving world of programming to enhance my skills
            and stay ahead of the game. Let's work together to create innovative
            and dynamic websites that will leave a lasting impression.
          </p>
        </div>
      </section>

      <section className="mx-auto mb-16 max-w-prose text-xl md:text-2xl">
        <h2 className="mb-2 uppercase text-myGray">projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Portfolio */}
          <div className="rounded-md border border-myGray p-3">
            <div className="mb-4">
              <Image
                src="/portfolio.png"
                alt="Guestbook App screenshot"
                className="h-full w-full rounded-md border border-myGray object-cover"
                width={1366}
                height={10}
              />
            </div>
            <div>
              <h3 className="mb-2 text-2xl md:text-3xl">Sameerjadav.me</h3>
              <p className="mb-2 text-neutral-300">
                My personal portfolio website. The website is built with
                Next.js, Contentlayer, which allows for easy conversion of mdx
                files to HTML with TypeScript typechecking, Tailwind CSS for
                styling. This website was designed and built entirely by me.
              </p>
              <div className="flex flex-col gap-2 md:flex-row">
                <a
                  href="https://github.com/SameerJadav/sameerjadav.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md border border-myGray transition-all hover:border-white"
                >
                  <div className="flex items-center justify-center gap-2 rounded-md py-2">
                    <GitHubIcon size={21} />
                    <span>GitHub</span>
                  </div>
                </a>
                <a
                  href="https://sameerjadav.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md border border-myGray transition-all hover:border-white"
                >
                  <div className="flex items-center justify-center gap-2 rounded-md py-2">
                    <ExternalLinkIcon size={21} />
                    <span>Live</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Guestbook */}
          <div className="rounded-md border border-myGray p-3">
            <div className="mb-4">
              <Image
                src="/guestbook.png"
                alt="Guestbook App screenshot"
                className="h-full w-full rounded-md border border-myGray object-cover"
                width={1366}
                height={768}
              />
            </div>
            <div>
              <h3 className="mb-2 text-2xl md:text-3xl">Guestbook</h3>
              <p className="mb-2 text-neutral-300">
                Guestbook app built with Next.js, Prisma, Supabase, tRPC, and
                Clerk for user management. Users can sign in and leave messages,
                which are stored in a PostgreSQL database. Clerk handles user
                authentication and authorization.
              </p>
              <div className="flex flex-col gap-2 md:flex-row">
                <a
                  href="https://github.com/SameerJadav/guestbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md border border-myGray transition-all hover:border-white"
                >
                  <div className="flex items-center justify-center gap-2 rounded-md py-2">
                    <GitHubIcon size={21} />
                    <span>GitHub</span>
                  </div>
                </a>
                <a
                  href="https://guestbook.sameerjadav.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md border border-myGray transition-all hover:border-white"
                >
                  <div className="flex items-center justify-center gap-2 rounded-md py-2">
                    <ExternalLinkIcon size={21} />
                    <span>Live</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* QR Code Generator */}
          <div className="rounded-md border border-myGray p-3">
            <div className="mb-4">
              <Image
                src="/qrcode.png"
                alt="QR code generator App screenshot"
                className="h-full w-full rounded-md border border-myGray object-cover"
                width={1366}
                height={768}
              />
            </div>
            <div>
              <h3 className="mb-2 text-2xl md:text-3xl">QR Code Generator</h3>
              <p className="mb-2 text-neutral-300">
                Generate QR codes for any website instantly with this simple and
                user-friendly QR code generator. This project is inspired by{" "}
                <a
                  href="https://dub.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-dotted hover:border-solid"
                >
                  dub
                </a>
                .
              </p>
              <div className="flex flex-col gap-2 md:flex-row">
                <a
                  href="https://github.com/SameerJadav/qrcode-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md border border-myGray transition-all hover:border-white"
                >
                  <div className="flex items-center justify-center gap-2 rounded-md py-2">
                    <GitHubIcon size={21} />
                    <span>GitHub</span>
                  </div>
                </a>
                <a
                  href="https://qr.sameerjadav.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md border border-myGray transition-all hover:border-white"
                >
                  <div className="flex items-center justify-center gap-2 rounded-md py-2">
                    <ExternalLinkIcon size={21} />
                    <span>Live</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-16 max-w-prose text-center text-xl md:text-2xl">
        <p className="uppercase text-myGray">What's next</p>
        <h2 className="my-10 text-2xl uppercase md:text-5xl lg:text-6xl">
          Let's create something awesome together
        </h2>
        <p className="mb-10">
          If you're looking for a freelancer for your project, I am available
          for hire. Please don't hesitate to contact me if you need any help
          with your project. Additionally, if you're interested in offering me
          an internship or job opportunity, feel free to check out my{" "}
          <a
            href="https://drive.google.com/file/d/1Wy311PqSl4gJAJ2Fz2PrUdiSvdoJVxg8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-dotted hover:border-solid"
          >
            resume
          </a>
          .
        </p>
        <a
          href="mailto:sameerjadav001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-myGray px-8 py-4 transition-all hover:border-white"
        >
          Say hello
        </a>
      </section>
    </main>
  );
}
