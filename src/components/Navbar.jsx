import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='border p-5 bg-zinc-300'>
            <div className='flex gap-10 justify-center'>
                <Link href={'/'}>Home</Link>
            <Link href={'/models'}>Models</Link>
            </div>
        </div>
    );
};

export default Navbar;