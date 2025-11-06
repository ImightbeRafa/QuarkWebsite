import { Cpu, Zap, Settings, CheckCircle } from "lucide-react";

export default function CNCLaserCutting() {
  const features = [
    {
      icon: Cpu,
      title: "High Precision",
      description: "CNC-controlled laser cutting with tolerances up to ±0.1mm for complex geometries.",
    },
    {
      icon: Zap,
      title: "Fast Production",
      description: "Rapid turnaround times for prototypes and production runs.",
    },
    {
      icon: Settings,
      title: "Custom Design",
      description: "From CAD files to finished parts - we handle the entire process.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Consistent quality across all parts with automated processes.",
    },
  ];

  const applications = [
    {
      title: "Industrial Parts",
      description: "Precision metal components for machinery and equipment",
      imageUrl: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Custom Brackets & Mounts",
      description: "Tailored mounting solutions and structural components",
      imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Decorative Metal Work",
      description: "Intricate patterns and designs for architectural elements",
      imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&q=80",
    },
  ];

  return (
    <section id="cnc-cutting" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
            <Cpu size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CNC Laser Cutting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precision metal cutting for industrial applications, custom parts, and decorative elements. 
            State-of-the-art CNC technology for accuracy and repeatability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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

        {/* Applications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Applications & Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Stock Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={app.imageUrl}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {app.title}
                  </h4>
                  <p className="text-gray-600">
                    {app.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-5 transition-opacity" />
              </div>
            ))}
          </div>

          {/* Materials Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Materials We Work With
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-primary-600 font-bold text-lg mb-1">Steel</div>
                <p className="text-sm text-gray-600">Up to 20mm thick</p>
              </div>
              <div className="p-4">
                <div className="text-primary-600 font-bold text-lg mb-1">Aluminum</div>
                <p className="text-sm text-gray-600">Up to 15mm thick</p>
              </div>
              <div className="p-4">
                <div className="text-primary-600 font-bold text-lg mb-1">Stainless Steel</div>
                <p className="text-sm text-gray-600">Up to 12mm thick</p>
              </div>
              <div className="p-4">
                <div className="text-primary-600 font-bold text-lg mb-1">Brass & Copper</div>
                <p className="text-sm text-gray-600">Up to 10mm thick</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Metal Parts?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Send us your CAD files or sketches and we'll provide a quote for your precision cutting needs.
          </p>
          <a
            href="https://wa.me/50671746307?text=Hi%2C%20I%27m%20interested%20in%20CNC%20laser%20cutting%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
