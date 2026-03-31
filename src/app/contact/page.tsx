export default function Contact() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-gray-50 dark:bg-darker py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="md:w-1/3 bg-dark text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black mb-6">Get In Touch</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center text-primary text-xl">📍</div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-400 text-sm mt-1">123 Builders Avenue,<br />Construct City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center text-primary text-xl">📞</div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-400 text-sm mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center text-primary text-xl">✉️</div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-400 text-sm mt-1">info@constructx.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <p className="text-sm text-gray-400">Operating Hours</p>
              <p className="font-semibold">Mon - Fri: 8am - 6pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 p-10">
            <h3 className="text-2xl font-bold text-dark dark:text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-primary/30">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
