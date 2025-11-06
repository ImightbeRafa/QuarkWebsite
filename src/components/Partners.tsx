import { Handshake } from "lucide-react";

export default function Partners() {
  // Partner data with actual logos
  const partners = [
    { id: 1, name: "Partner 1", logo: "1.png" },
    { id: 2, name: "Partner 2", logo: "2.png" },
    { id: 3, name: "Partner 3", logo: "3.png" },
    { id: 4, name: "Partner 4", logo: "4.jpg" },
    { id: 5, name: "Partner 5", logo: "5.jpg" },
    { id: 6, name: "Partner 6", logo: "6.jpg" },
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
              className="aspect-square bg-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all border border-gray-200 group cursor-pointer p-4"
            >
              <img 
                src={`/images/partners/${partner.logo}`}
                alt={partner.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
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
            href="https://wa.me/50671746307?text=Hi%2C%20I%27m%20interested%20in%20partnering%20with%20Quark%20Costa%20Rica"
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
