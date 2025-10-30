import { Link } from "react-router-dom";
import { HeartIcon, GiftIcon, SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
export default function Home() {
    return (
        <>
            <Helmet>
                <title>Indulgia | Handcrafted Chocolates in Lebanon</title>
                <meta
                    name="description"
                    content="Indulgia crafts luxurious handcrafted chocolates made with pure ingredients and timeless elegance. Experience the art of chocolate indulgence in Lebanon."
                />
                <meta
                    name="keywords"
                    content="Indulgia, chocolate Lebanon, artisanal chocolates, handmade sweets, premium chocolate, gift boxes"
                />
                <link rel="canonical" href="https://indulgia-lb.com/" />
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Indulgia",
        "image": "https://indulgia-lb.com/logo.png",
        "url": "https://indulgia-lb.com",
        "telephone": "+96178794524",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Beirut",
          "addressCountry": "LB"
        },
        "sameAs": [
          "https://www.instagram.com/indulgia.lb/",
          "https://www.tiktok.com/@indulgia.lb"
        ]
      }
    `}
                </script>
            </Helmet>

            <div className="w-full">
                {/* Hero Section */}
                <section
                    className="relative h-screen flex items-center justify-center"
                    style={{
                        backgroundColor: "rgb(247, 231, 206)",
                    }}
                >
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1511381939415-e44015466834?w=1600&h=900&fit=crop"
                            alt="Luxury chocolates"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                    >
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
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className="text-5xl md:text-7xl font-seasons font-bold mb-6"
                            style={{
                                color: "rgb(0, 0, 77)",
                            }}
                        >
                            Indulgia
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
                                duration: 0.8,
                                delay: 0.4,
                            }}
                            className="text-xl md:text-2xl mb-8"
                            style={{
                                color: "rgb(0, 0, 77)",
                            }}
                        >
                            Where Chocolate Meets Luxury
                        </motion.p>
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
                                duration: 0.8,
                                delay: 0.6,
                            }}
                        >
                            <Link
                                to="/menu"
                                className="inline-block px-8 py-4 text-lg font-semibold rounded-full transition-all hover:shadow-lg hover:scale-105"
                                style={{
                                    backgroundColor: "rgb(0, 0, 77)",
                                    color: "rgb(247, 231, 206)",
                                }}
                            >
                                Explore Our Menu
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
                {/* Features Section */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
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
                            }}
                            className="text-4xl font-dm-sans font-bold text-center mb-16"
                            style={{
                                color: "rgb(0, 0, 77)",
                            }}
                        >
                            Why Choose Indulgia
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: HeartIcon,
                                    title: "Crafted to Perfection",
                                    description:
                                        "Every piece of chocolate is made with precision, using premium Belgian chocolate and handpicked ingredients to deliver the perfect balance of taste and texture.",
                                },
                                {
                                    icon: SparklesIcon,
                                    title: "A Moment of Pure Indulgence",
                                    description:
                                        "Indulgia isn’t just chocolate — it’s an experience designed to slow you down, awaken your senses, and let you savor every bite.",
                                },
                                {
                                    icon: GiftIcon,
                                    title: "Thoughtfully Made, Beautifully Presented",
                                    description:
                                        "From the smooth finish of each piece to the elegant packaging, every detail reflects care, passion, and the joy of gifting or treating yourself.",
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
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
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    className="text-center"
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                                        style={{
                                            backgroundColor:
                                                "rgb(247, 231, 206)",
                                        }}
                                    >
                                        <feature.icon
                                            className="h-10 w-10"
                                            style={{
                                                color: "rgb(0, 0, 77)",
                                            }}
                                        />
                                    </motion.div>
                                    <h3
                                        className="text-2xl font-dm-sans font-semibold mb-4"
                                        style={{
                                            color: "rgb(0, 0, 77)",
                                        }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section
                    className="py-20 px-4"
                    style={{
                        backgroundColor: "rgb(0, 0, 77)",
                    }}
                >
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
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2
                            className="text-4xl font-seasons font-bold mb-6"
                            style={{
                                color: "rgb(247, 231, 206)",
                            }}
                        >
                            Indulge Yourself Today
                        </h2>
                        <p
                            className="text-xl mb-8"
                            style={{
                                color: "rgb(247, 231, 206)",
                            }}
                        >
                            Discover our collection of handcrafted chocolates
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 text-lg font-semibold rounded-full transition-all hover:shadow-lg hover:scale-105"
                            style={{
                                backgroundColor: "rgb(247, 231, 206)",
                                color: "rgb(0, 0, 77)",
                            }}
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </section>
            </div>
        </>
    );
}
