
import { Link } from '@inertiajs/react';

export default function Main({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
          
        
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white  overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}