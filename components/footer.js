export default function Footer() {
  return (
    <footer className="bg-light-on-background-900 text-light-on-background-50">
      <div className="container px-8 mx-auto">
        <div className="flex w-full py-2 md:flex-row">
          ©
          <a
            href="https://goright.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:no-underline "
          >
            {"  "}GoRight{"  "}
          </a>
          2021
        </div>
      </div>
    </footer>
  );
}
