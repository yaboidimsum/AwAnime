import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold text-color-light">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-md font-semibold text-color-light underline transition-all ease-in-out hover:text-color-primary md:text-xl"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
