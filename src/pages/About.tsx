import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
export default function About() {
    return (
        <>
            <Helmet>
                <title>About Indulgia | Handcrafted Chocolates</title>
                <meta
                    name="description"
                    content="Discover the story behind Indulgia — artisanal handcrafted chocolates made with passion and premium ingredients."
                />
                <meta
                    name="keywords"
                    content="Indulgia, chocolate, artisanal, handmade, Lebanon, premium sweets"
                />
                <link rel="canonical" href="https://indulgia-lb.com/about" />
            </Helmet>
            <div className="w-full bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                            <h1
                                className="text-5xl font-seasons font-bold mb-6"
                                style={{
                                    color: "rgb(0, 0, 77)",
                                }}
                            >
                                About Indulgia
                            </h1>
                            <p className="text-lg text-gray-700 mb-6">
                                At Indulgia, we believe that chocolate should be
                                more than a treat — it should be an experience.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Born from a passion for artisanal craftsmanship
                                and pure ingredients, Indulgia brings you
                                hand-crafted chocolates that blend elegance,
                                flavor, and emotion in every piece.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Each creation is made in small batches to ensure
                                quality, care, and consistency — because every
                                bite deserves attention. Whether shared with
                                loved ones or enjoyed in a quiet moment,
                                Indulgia invites you to savor the bliss of true
                                indulgence.
                            </p>
                        </motion.div>
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
                            className="relative flex justify-center items-center"
                        >
                            <img
                                src="/about.jpeg"
                                alt="Artisan chocolate making"
                                className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-xl"
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mt-20 py-16 px-8 rounded-lg"
                        style={{
                            backgroundColor: "rgb(247, 231, 206)",
                        }}
                    >
                        <h2
                            className="text-4xl font-seasons font-bold text-center mb-12"
                            style={{
                                color: "rgb(0, 0, 77)",
                            }}
                        >
                            Our Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Passion in Every Detail",
                                    description:
                                        "From sourcing ingredients to final presentation, every step is guided by genuine passion and care.",
                                },
                                {
                                    title: "Quality Without Compromise",
                                    description:
                                        "We believe excellence starts with purity — only premium chocolate and fine ingredients make it into our creations.",
                                },
                                {
                                    title: "Elegance in Simplicity",
                                    description:
                                        "We embrace minimalism in design and flavor, allowing the beauty of authentic chocolate to shine through.",
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    className="text-center"
                                >
                                    <h3
                                        className="text-2xl font-dm-sans font-semibold mb-4"
                                        style={{
                                            color: "rgb(0, 0, 77)",
                                        }}
                                    >
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
