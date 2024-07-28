import ApplicationLogo from '@/Components/ApplicationLogo';
import SignIn from '@/Components/SignIn';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
            <div>
                <Link href="/">
                    <SignIn className="w-20 h-20 fill-current" />
                </Link>
                    <p className='text-center text-primary-500 text-[39px]'>Sign In</p>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white  overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
