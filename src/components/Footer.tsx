import { Link } from "react-router-dom";
import { InstagramIcon, PhoneIcon } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer
            className="w-full"
            style={{
                backgroundColor: "rgb(0, 0, 77)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3
                            className="text-2xl font-seasons font-bold mb-4"
                            style={{
                                color: "rgb(247, 231, 206)",
                            }}
                        >
                            Indulgia
                        </h3>
                        <p
                            className="text-sm"
                            style={{
                                color: "rgb(247, 231, 206)",
                            }}
                        >
                            Where Chocolate Meets Luxury
                        </p>
                    </div>
                    <div>
                        <h4
                            className="text-lg font-dm-sans font-semibold mb-4"
                            style={{
                                color: "rgb(247, 231, 206)",
                            }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm hover:opacity-70 transition-opacity"
                                    style={{
                                        color: "rgb(247, 231, 206)",
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/menu"
                                    className="text-sm hover:opacity-70 transition-opacity"
                                    style={{
                                        color: "rgb(247, 231, 206)",
                                    }}
                                >
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-sm hover:opacity-70 transition-opacity"
                                    style={{
                                        color: "rgb(247, 231, 206)",
                                    }}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-sm hover:opacity-70 transition-opacity"
                                    style={{
                                        color: "rgb(247, 231, 206)",
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4
                            className="text-lg font-dm-sans font-semibold mb-4"
                            style={{
                                color: "rgb(247, 231, 206)",
                            }}
                        >
                            Connect With Us
                        </h4>
                        <div className="flex space-x-4 mb-4">
                            <a
                                href="https://www.tiktok.com/@indulgia.lb"
                                className="hover:opacity-70 transition-opacity"
                                aria-label="Tiktok"
                                target="_blank"
                            >
                                <FaTiktok
                                    className="h-6 w-6"
                                    style={{
                                        color: "rgb(247, 231, 206)",
                                    }}
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/indulgia.lb/"
                                className="hover:opacity-70 transition-opacity"
                                aria-label="Instagram"
                                target="_blank"
                            >
                                <InstagramIcon
                                    className="h-6 w-6"
                                    style={{
                                        color: "rgb(247, 231, 206)",
                                    }}
                                />
                            </a>
                            <a
                                href="https://wa.me/96178794524"
                                className="hover:opacity-70 transition-opacity"
                                aria-label="Phone"
                                target="_blank"
                            >
                                <PhoneIcon
                                    className="h-6 w-6"
                                    style={{
                                        color: "rgb(247, 231, 206)",
                                    }}
                                />
                            </a>
                        </div>
                        <p
                            className="text-sm"
                            style={{
                                color: "rgb(247, 231, 206)",
                            }}
                        >
                            +961 78 794 524
                        </p>
                    </div>
                </div>
                <div
                    className="border-t mt-8 pt-8"
                    style={{
                        borderColor: "rgba(247, 231, 206, 0.3)",
                    }}
                >
                    <p
                        className="text-center text-sm"
                        style={{
                            color: "rgb(247, 231, 206)",
                        }}
                    >
                        © 2025 Indulgia. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="text-center">
                <p
                    className="text-[0.8rem]"
                    style={{
                        direction: "ltr",
                        unicodeBidi: "isolate",
                        color: "#FF914D",
                    }}
                >
                    Powered By{" "}
                    <a target="_blank" href="https://brndnglb.com">
                        <span
                            style={{
                                fontFamily: "Archivo Black",
                                color: "white",
                            }}
                            className="text-[1rem]"
                        >
                            Brndng
                        </span>
                        <span
                            className="text-[1.5rem]"
                            style={{
                                fontFamily: "Archivo Black",
                                color: "#FF914D",
                            }}
                        >
                            .
                        </span>
                    </a>
                </p>
            </div>
        </footer>
    );
}
