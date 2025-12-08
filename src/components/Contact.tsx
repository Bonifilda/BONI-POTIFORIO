import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! Thank you.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-600 text-center mb-4 animate-fadeInUp">Get In Touch</h2>
        <p className="text-gray-700 text-center mb-12">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-6">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-green-600 font-semibold mb-1">Email</h4>
                <p className="text-gray-700">bonimani2020@gmail.com</p>
              </div>
              <div>
                <h4 className="text-green-600 font-semibold mb-1">Phone</h4>
                <p className="text-gray-700">0784120496</p>
              </div>
              <div>
                <h4 className="text-green-600 font-semibold mb-1">Location</h4>
                <p className="text-gray-700">Kigali city</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=" you name"
                className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you email"
                className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
