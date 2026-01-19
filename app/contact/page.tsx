'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Accordion from '@/components/Accordion';
import { Mail, MapPin, Phone } from 'lucide-react';

const faqItems = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee on all products. Items must be in original condition with tags attached.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee.',
  },
  {
    question: 'Do you offer free shipping?',
    answer: 'Yes, we offer free shipping on all orders over $100. Orders under $100 have a flat shipping rate of $9.99.',
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes, once your order ships, you will receive a tracking number via email that you can use to track your package.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we only ship within the United States. International shipping will be available soon.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=600&fit=crop"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Contact' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left - Contact Info (40%) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-beige p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-brown p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">info@karigari.com</p>
                  <p className="text-gray-600">support@karigari.com</p>
                </div>
              </div>
            </div>

            <div className="bg-beige p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-brown p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">
                    123 Furniture Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-beige p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-brown p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form (60%) */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brown transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brown transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brown transition-colors"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brown transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brown text-white py-3 rounded-lg hover:bg-brown/90 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-beige py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion items={faqItems} />
        </div>
      </section>
    </div>
  );
}
