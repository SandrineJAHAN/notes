import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LoginButton from '@/auth/loginButton';
import DarkMode from '../darkMode/pages';


export default function Navbar(){
    return (
    <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <ul className="flex md:space-x-4 md:mb-0 mb-4">
                <Link href="/">
                        <li className="hover:text-blue-500 hover:underline">
                            Accueil
                        </li>
                    </Link>
                    <Link href="/notesList">
                        <li className="hover:text-blue-500 hover:underline">
                            La liste de mes notes
                        </li>
                    </Link>
                    <li>
                   <LoginButton />
                   </li>
                   <li>
                    <DarkMode />
                   </li>
                </ul>
                <div className="md:ml-auto mb-4 md:mb-0">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    </nav>
)};


