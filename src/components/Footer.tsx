export default function Footer() {
  return (
    <footer className="mb-8 flex w-full justify-center p-4 text-lg md:flex-row md:text-2xl ">
      <div className="flex items-center gap-4 md:gap-8">
        <a
          href="https://twitter.com/SameerJadav_"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-black transition-all hover:border-white"
        >
          Twitter
        </a>
        <a
          href="https://github.com/SameerJadav"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-black transition-all hover:border-white"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sameer-jadav"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-black transition-all hover:border-white"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
}
