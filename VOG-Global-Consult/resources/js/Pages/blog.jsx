import MainLayout from "@/Layouts/MainLayout";
import { Link } from '@inertiajs/react';

export default function Blog({  auth, }){
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return(
        <MainLayout>

            <Head title="Blog" />
            <div>
               <div>
                    <img src="{{ asset('img/AboutUsMain.png') }}" alt="" />
                </div> 
               <div></div>
            </div>
        </MainLayout>
    )
}