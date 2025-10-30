import React, { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [state, handleSubmit] = useForm("mgvparwp");
    if (state.succeeded) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            >
                <div className="bg-white rounded-xl p-8 shadow-2xl text-center">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">
                        ✅ Message Sent!
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Thanks for reaching out — we’ll get back to you soon.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 rounded-lg font-medium text-white"
                        style={{ backgroundColor: "rgb(0, 0, 77)" }}
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        );
    }
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div
            className="w-full"
            style={{
                backgroundColor: "rgb(247, 231, 206)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="text-5xl font-seasons font-bold text-center mb-4"
                    style={{
                        color: "rgb(0, 0, 77)",
                    }}
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}
                    className="text-xl text-center mb-16"
                    style={{
                        color: "rgb(0, 0, 77)",
                    }}
                >
                    We'd love to hear from you
                </motion.p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        <h2
                            className="text-3xl font-dm-sans font-semibold mb-8"
                            style={{
                                color: "rgb(0, 0, 77)",
                            }}
                        >
                            Get in Touch
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: MailIcon,
                                    title: "Email",
                                    content: "info@indulgia-lb.com",
                                },
                                {
                                    icon: PhoneIcon,
                                    title: "Phone",
                                    content: "+961 78 794 524",
                                },
                                {
                                    icon: MapPinIcon,
                                    title: "Location",
                                    content: "Lebanon, Beirut",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3 + index * 0.1,
                                    }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="flex-shrink-0">
                                        <item.icon
                                            className="h-6 w-6"
                                            style={{
                                                color: "rgb(0, 0, 77)",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-lg font-dm-sans font-semibold mb-1"
                                            style={{
                                                color: "rgb(0, 0, 77)",
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 whitespace-pre-line">
                                            {item.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.6,
                            }}
                            className="mt-12"
                        >
                            <h3
                                className="text-2xl font-dm-sans font-semibold mb-4"
                                style={{
                                    color: "rgb(0, 0, 77)",
                                }}
                            >
                                Business Hours
                            </h3>
                            <div className="space-y-2 text-gray-700">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/* Contact Form */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <h2
                            className="text-3xl font-dm-sans font-semibold mb-6"
                            style={{
                                color: "rgb(0, 0, 77)",
                            }}
                        >
                            Send us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                    style={{
                                        color: "rgb(0, 0, 77)",
                                    }}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                    style={{
                                        color: "rgb(0, 0, 77)",
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium mb-2"
                                    style={{
                                        color: "rgb(0, 0, 77)",
                                    }}
                                >
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                    style={{
                                        color: "rgb(0, 0, 77)",
                                    }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                                />
                            </div>
                            <motion.button
                                whileHover={{
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                type="submit"
                                className="w-full py-3 px-6 text-lg font-semibold rounded-lg transition-all hover:shadow-lg"
                                style={{
                                    backgroundColor: "rgb(0, 0, 77)",
                                    color: "rgb(247, 231, 206)",
                                }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
