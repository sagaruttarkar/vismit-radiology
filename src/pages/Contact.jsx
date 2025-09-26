import React from 'react';

function Contact() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Your Name" className="border p-2" />
        <input type="email" placeholder="Your Email" className="border p-2" />
        <textarea placeholder="Your Message" className="border p-2"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send Message</button>
      </form>
      <p className="mt-4">Address: 123 Radiology Lane, City</p>
      <p>Phone: +91-1234567890</p>
    </div>
  );
}

export default Contact;
