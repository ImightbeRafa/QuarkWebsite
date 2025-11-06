import { Handshake } from "lucide-react";

export default function Partners() {
  // Placeholder partner data
  const partners = [
    { id: 1, name: "Partner 1" },
    { id: 2, name: "Partner 2" },
    { id: 3, name: "Partner 3" },
    { id: 4, name: "Partner 4" },
    { id: 5, name: "Partner 5" },
    { id: 6, name: "Partner 6" },
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
            <Handshake size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Partners & Collaborators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to collaborate with amazing businesses and organizations
            across Costa Rica and beyond.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center hover:shadow-lg transition-all border border-gray-200 group cursor-pointer"
            >
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-2 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Handshake size={24} className="text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Partner CTA */}
        <div className="text-center bg-gradient-to-br from-primary-50 to-white rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Partnering?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking to collaborate with like-minded businesses.
            Let's create something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
