import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Biruk<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
          <Button>Hire me</Button>
          </Link>
        </div>


        {/* Mobile Navigation */}
        <div className="xl:hidden" >mobile navigation</div>
      </div>
    </header>
  );
};

export default Header;
