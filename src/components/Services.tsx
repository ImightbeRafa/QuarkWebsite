import { Award, Clock, Palette, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Work with our team to create unique designs tailored to your vision and brand identity.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick processing and delivery times without compromising on quality or attention to detail.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "State-of-the-art laser technology ensuring precise, high-quality engravings every time.",
    },
    {
      icon: Shield,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a commitment to excellence and customer satisfaction.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with artistic expertise to deliver
            exceptional results for every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <Icon size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Share your ideas and requirements with us",
              },
              {
                step: "02",
                title: "Design & Approval",
                description: "We create mockups for your review and approval",
              },
              {
                step: "03",
                title: "Production & Delivery",
                description: "Your items are precisely engraved and delivered",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-primary-100 mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
