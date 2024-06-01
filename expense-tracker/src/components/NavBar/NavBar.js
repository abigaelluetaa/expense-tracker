import Link from "next/link";

export default function Nav() {
    return(
        <div>
            <Link href='/'> Homepage </Link>
            <Link href='/dashboard'> Dashboard </Link>
            <Link href='/reports'> Reports </Link>
            <Link href='/login'> Login </Link>
        </div>
    )
}