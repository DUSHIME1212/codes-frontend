import Link from "next/link";


const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link 
        href="/" 
        className="text-2xl font-semibold tracking-tight"
      >
        <span className="text-blue-700">Edu</span>
        <span>Codes</span>
      </Link>
    </div>
  );
};

export default Logo;