const ContactPage = () => {
  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-gold mb-8 text-center [text-shadow:0_0_8px_rgba(255,215,0,0.8)]">Contact Us</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submission is not yet implemented.');
        }}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-black border-2 border-gold/30 rounded-md p-2 focus:ring-gold focus:border-gold focus:outline-none transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-black border-2 border-gold/30 rounded-md p-2 focus:ring-gold focus:border-gold focus:outline-none transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full bg-black border-2 border-gold/30 rounded-md p-2 focus:ring-gold focus:border-gold focus:outline-none transition-all duration-300"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 border-2 border-gold text-gold font-bold rounded-full transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gold"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
