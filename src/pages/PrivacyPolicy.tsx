import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal identification information (name, email address, phone number)',
        'Medical facility information and professional credentials',
        'Order history and purchasing preferences',
        'Website usage data and analytics',
        'Communication records and customer service interactions'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Process and fulfill your medical supply orders',
        'Provide customer support and technical assistance',
        'Send important updates about orders and account status',
        'Improve our products and services based on your feedback',
        'Comply with medical industry regulations and legal requirements'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection & Security',
      content: [
        'All data is encrypted during transmission and storage',
        'Regular security audits and vulnerability assessments',
        'Access controls limiting data access to authorized personnel only',
        'Secure data centers with 24/7 monitoring and backup systems',
        'Compliance with HIPAA and other healthcare data protection standards'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights & Choices',
      content: [
        'Access, update, or delete your personal information',
        'Opt-out of marketing communications at any time',
        'Request a copy of all data we have about you',
        'Lodge complaints with relevant data protection authorities',
        'Withdraw consent for data processing where applicable'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our medical supply services.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: January 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As a trusted medical supply provider, we understand the sensitive nature of healthcare information. 
              This Privacy Policy describes how MedSupply Pro collects, uses, shares, and protects your personal 
              information in compliance with applicable privacy laws and medical industry standards.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <section.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="space-y-8 mt-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use both session cookies (which expire when you close your browser) and persistent cookies 
                (which remain on your device until deleted) to provide you with a seamless experience.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-Party Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Trusted service providers who assist in our operations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Legal authorities when required by law</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Business partners for order fulfillment and delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                requirements. We will notify you of any material changes by email or through a prominent notice on 
                our website. Your continued use of our services after any modifications indicates your acceptance 
                of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-700 text-white rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">
              Questions About This Policy?
            </h2>
            <p className="mb-4 text-blue-100">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-blue-100">
              <p>Email: privacy@medsupplypro.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 1234 Medical Center Drive, Healthcare Plaza, Suite 567, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;