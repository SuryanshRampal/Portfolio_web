import { Zap, Shield, Sparkles } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed and performance with cutting-edge optimization techniques.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: Sparkles,
      title: 'Beautiful Design',
      description: 'Stunning visuals that captivate and engage your audience.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to succeed in the modern digital landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
