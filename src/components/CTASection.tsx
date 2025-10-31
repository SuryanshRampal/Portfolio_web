export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of satisfied customers and transform your digital presence today
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
