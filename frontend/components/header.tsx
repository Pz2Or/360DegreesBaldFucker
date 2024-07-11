export default function Header() {
    return (
        <header className="text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Website</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
