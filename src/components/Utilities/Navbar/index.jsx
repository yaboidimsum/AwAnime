import Link from 'next/link';
import InputSearch from './inputSearch';

const Navbar = () => {
    return (
        <header className="bg-color-primary">
            <div className='flex md:items-center md:flex-row flex-col gap-2 justify-between p-4 '>
                <Link href="/" className='font-bold text-2xl text-color-secondary'>AwAnime</Link>
                <InputSearch />
            </div>
        </header>
    );
};

export default Navbar;