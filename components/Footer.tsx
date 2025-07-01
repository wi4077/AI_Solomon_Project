
const Footer = () => {
  return (
    <footer className="chatbot-text-tertiary flex justify-between text-sm mt-6">
      <a
        className=" vercel-link flex h-8 w-max flex-none items-center justify-center border rounded-md text-xs"
        aria-label="Deploy on Vercel"
        href="https://vercel.com/templates/next.js/ragbot-starter"
      >
        <span className="px-3">▲</span>
        <hr className="h-full border-r" />
        <span className="px-3">Deploy</span>
      </a>
      
    </footer>
  );
};

export default Footer;
