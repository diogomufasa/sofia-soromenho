'use client'

import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';

const Error = () => {
    const router = useRouter();

    return (
        <div className="error">
            <div className="error_container">
                <h1 className="error_title">404</h1>
                <p className="error_text">Page not found</p>
                <Link href="/">
                    <a className="error_link">
                        <ArrowLeft className="error_icon" size={24} />
                        Go back home
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Error
