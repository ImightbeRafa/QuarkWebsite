import { Building2, Package, Truck, Users } from "lucide-react";

export default function B2BSolutions() {
  const features = [
    {
      icon: Package,
      title: "Bulk Orders",
      description: "Competitive pricing for large quantity orders with consistent quality.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Account managers to handle your business needs and requirements.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "On-time delivery with flexible shipping options for your business.",
    },
    {
      icon: Building2,
      title: "Custom Branding",
      description: "Perfect for corporate gifts, promotional items, and brand merchandising.",
    },
  ];

  const useCases = [
    {
      title: "Corporate Gifts",
      description: "Personalized items for employees, clients, and partners",
      image: "corporate-gifts",
    },
    {
      title: "Retail Products",
      description: "Custom merchandise for your store or online business",
      image: "retail-products",
    },
    {
      title: "Event Merchandise",
      description: "Branded items for conferences, trade shows, and events",
      image: "event-merchandise",
    },
  ];

  return (
    <section id="b2b" className="py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            B2B Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us for custom laser engraving solutions tailored to your
            business needs. We scale with you from small batches to large production runs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Placeholder Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Building2 size={64} className="text-primary-600 mx-auto mb-3" />
                    <span className="text-gray-600 text-sm">{useCase.image}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-5 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-white rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business with custom laser engraving solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50671746307?text=Hi%2C%20I%27m%20interested%20in%20B2B%20laser%20engraving%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg"
            >
              Request a Quote
            </a>
            <a
              href="https://www.instagram.com/quark.cr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200 font-medium text-lg"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
