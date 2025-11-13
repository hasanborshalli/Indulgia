import { motion } from "framer-motion";
const menuItems = [
    {
        id: 1,
        name: "Strawberry Affair",
        description:
            "9 fresh strawberries dipped in your choice of white, milk, dark or a mix - elegantly drizzled for a luxurious bite.",
        image: "/strawberry.jpeg",
    },
    {
        id: 2,
        name: "Pretty in Pink",
        description:
            "A charming selection of 9 strawberries dressed in pink and white chocolate, with delicate drizzles, edible butterflies and fruity freeze-dried toppings.",
        image: "/pinky.jpeg",
    },
    {
        id: 3,
        name: "Banana Opulence",
        description:
            "9 pieces of frozen banana dipped in your choice of milk, white, or dark chocolate – crowned with nuts, a delicate drizzle and golden accents for a touch of grandeur.",
        image: "/banana.jpeg",
    },
    {
        id: 4,
        name: "Fruity Symphony",
        description:
            "18 chocolate pieces topped with fresh raspberries, blueberries and pomegranate seeds. Choose your favorite of milk, white, dark or a mix.",
        image: "/fruity.jpeg",
    },
    {
        id: 5,
        name: "24 Karat Bites",
        description:
            "24 luxurious chocolate bites, each filled with a delicious variety of premium nuts, crafted from a perfect blend of milk, white and dark chocolate.",
        image: "/karat.jpeg",
    },
    {
        id: 6,
        name: "Pistachio Crunché",
        description:
            "18 delicate chocolate bites filled with a rich pistachio–feuilletine blend, enveloped in milk chocolate, elegantly drizzled and adorned with gold flakes.",
        image: "pistachio.jpeg",
    },
];
export default function Menu() {
    return (
        <>
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
                        Our Menu
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
                        Discover our collection of handcrafted chocolate
                        delights
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="h-64 overflow-hidden">
                                    <motion.img
                                        whileHover={{
                                            scale: 1.05,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3
                                        className="text-2xl font-dm-sans font-semibold mb-3"
                                        style={{
                                            color: "rgb(0, 0, 77)",
                                        }}
                                    >
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
