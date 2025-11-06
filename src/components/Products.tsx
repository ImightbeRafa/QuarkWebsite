import { Box, Droplet, Layers, Wrench } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Wood Engraving",
      description: "Custom designs on various wood types with precision and detail.",
      icon: Box,
      color: "from-amber-400 to-amber-600",
      image: "wood-engraving.jpg",
    },
    {
      id: 2,
      title: "Steel & Metal",
      description: "Durable engravings on steel, aluminum, and other metals.",
      icon: Wrench,
      color: "from-gray-400 to-gray-600",
      image: "steel-engraving.jpg",
    },
    {
      id: 3,
      title: "Tumblers & Drinkware",
      description: "Personalized tumblers, bottles, and drinkware for any occasion.",
      icon: Droplet,
      color: "from-blue-400 to-blue-600",
      image: "tumblers.jpg",
    },
    {
      id: 4,
      title: "Leather",
      description: "Premium leather engraving for custom wallets, belts, and accessories.",
      icon: Layers,
      color: "from-amber-700 to-amber-900",
      image: "leather.jpg",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of laser engraving services across multiple materials.
            Each piece is crafted with precision and attention to detail.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Product image */}
                <div className="mt-6 aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={`/images/products/${product.image}`}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Don't see what you're looking for? We work with many other materials too!
          </p>
          <a
            href="https://wa.me/50671746307"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
