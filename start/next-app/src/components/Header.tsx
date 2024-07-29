import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">ALOHA CLASS</h1>
        </Link>
        <nav>
          <Link href="/" className="mx-2 hover:underline">
            Home
          </Link>
          <Link href="/login" className='mx-2 hover:underline'>
            Login
          </Link>
          <Link href="/about" className='mx-2 hover:underline'>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
