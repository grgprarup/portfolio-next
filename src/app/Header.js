// src/app/components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white w-full py-4">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
                <div>
                    <Link href="/">
                        <Image
                            src="/next.svg"
                            alt="Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-10">
                        <li>
                            <Link href="/">
                                <span className="text-xl font-medium cursor-pointer hover:text-blue-400">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/About">
                                <span className="text-xl font-medium cursor-pointer hover:text-blue-400">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Projects">
                                <span className="text-xl font-medium cursor-pointer hover:text-blue-400">Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contact">
                                <span className="text-xl font-medium cursor-pointer hover:text-blue-400">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
