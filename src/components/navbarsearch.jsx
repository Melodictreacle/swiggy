/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XjTB32VoNLC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"
import { Input } from "../components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faStar } from '@fortawesome/free-solid-svg-icons';

export default function NavbarS() {
    return (
        <header className="flex items-center justify-between h-16 px-4 bg-background  md:px-6">
            <div className="flex items-center gap-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false} to="/home">
                    <img className="w-37" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"></img>
                </Link>
                <nav className="hidden gap-4 md:flex">
                </nav>
            </div>
            <div className="relative flex-1 max-w-md md:max-w-lg">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-muted pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
            </div>
            <div>
                <Link href="#" className="flex items-center gap-2" prefetch={false} to="/profile">
                    <img className="w-10" src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"></img>
                </Link>
            </div>
        </header>
    )
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}