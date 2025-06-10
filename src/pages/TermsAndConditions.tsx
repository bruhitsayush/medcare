import React from 'react';
import { FileText, Users, Shield, Gavel } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  const sections = [
    {
      icon: Users,
      title: 'Account Usage and Responsibilities',
      content: [
        'You must provide accurate and complete registration information',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You must notify us immediately of any unauthorized use of your account',
        'Healthcare professionals must provide valid licensing information',
        'Institutional accounts require proper authorization from designated personnel'
      ]
    },
    {
      icon: FileText,
      title: 'Acceptable Use Policy',
      content: [
        'Use our services only for legitimate medical and healthcare purposes',
        'Do not attempt to circumvent security measures or access restrictions',
        'Respect intellectual property rights of all content and materials',
        'Do not engage in fraudulent activities or misrepresent your identity',
        'Comply with all applicable medical regulations and professional standards'
      ]
    },
    {
      icon: Shield,
      title: 'Product Information and Warranties',
      content: [
        'All medical products meet FDA and relevant regulatory standards',
        'Product descriptions and specifications are provided for informational purposes',
        'We warrant products against manufacturing defects for specified periods',
        'Proper storage and handling instructions must be followed',
        'Professional medical judgment should always supersede product information'
      ]
    },
    {
      icon: Gavel,
      title: 'Limitation of Liability',
      content: [
        'Our liability is limited to the purchase price of products',
        'We are not liable for indirect, consequential, or incidental damages',
        'Professional medical decisions remain the responsibility of healthcare providers',
        'Product performance may vary based on individual circumstances',
        'Emergency medical situations require immediate professional intervention'
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
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using our medical supply services. 
              By accessing our platform, you agree to be bound by these terms and conditions.
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
              Agreement Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") govern your use of MedSupply Pro's website, mobile applications, 
              and services. By creating an account or making a purchase, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a medical supply provider, we maintain strict standards to ensure compliance with healthcare 
              regulations and to protect the safety of patients and healthcare professionals.
            </p>
          </div>

          {/* Terms Sections */}
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
                Order Processing and Fulfillment
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Order Acceptance:</strong> All orders are subject to acceptance and product availability. 
                  We reserve the right to refuse orders that do not meet our verification requirements.
                </p>
                <p>
                  <strong>Pricing and Payment:</strong> Prices are subject to change without notice. Payment is 
                  due at the time of order unless credit terms have been established.
                </p>
                <p>
                  <strong>Delivery Terms:</strong> Delivery dates are estimates only. We are not liable for 
                  delays caused by circumstances beyond our reasonable control.
                </p>
                <p>
                  <strong>Professional Verification:</strong> Certain products require verification of professional 
                  licenses or institutional authorization before shipment.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  All content on our platform, including text, images, logos, and software, is protected by 
                  intellectual property laws. You may not reproduce, distribute, or create derivative works 
                  without our express written permission.
                </p>
                <p>
                  Product names, trademarks, and brand names are the property of their respective owners. 
                  We are authorized distributors for the products we sell but do not claim ownership of 
                  third-party trademarks.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Regulatory Compliance
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Medical Device Regulations:</strong> All medical devices are distributed in accordance 
                  with FDA regulations and applicable state laws. Users must comply with all applicable 
                  regulations in their jurisdiction.
                </p>
                <p>
                  <strong>Professional Standards:</strong> Healthcare professionals must use products in accordance 
                  with their professional training, applicable standards of care, and institutional policies.
                </p>
                <p>
                  <strong>Reporting Requirements:</strong> Users must report any adverse events or product 
                  defects to appropriate regulatory authorities and to us promptly.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Important Medical Disclaimers
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>No Medical Advice:</strong> We provide medical supplies but do not provide medical 
                  advice, diagnosis, or treatment recommendations. Always consult with qualified healthcare 
                  professionals.
                </p>
                <p>
                  <strong>Professional Judgment:</strong> Healthcare professionals must exercise their own 
                  clinical judgment in selecting and using medical products for patient care.
                </p>
                <p>
                  <strong>Emergency Situations:</strong> Our products and services are not intended for 
                  emergency situations requiring immediate medical intervention.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Dispute Resolution and Governing Law
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Governing Law:</strong> These Terms are governed by the laws of the State of New York, 
                  without regard to conflict of law principles.
                </p>
                <p>
                  <strong>Dispute Resolution:</strong> Any disputes will be resolved through binding arbitration 
                  in accordance with the Commercial Arbitration Rules of the American Arbitration Association.
                </p>
                <p>
                  <strong>Class Action Waiver:</strong> You agree to resolve disputes individually and waive 
                  the right to participate in class action lawsuits.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be communicated 
                through email notification or prominent website notices. Continued use of our services after 
                changes constitutes acceptance of the updated Terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-700 text-white rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">
              Questions About These Terms?
            </h2>
            <p className="mb-4 text-blue-100">
              If you have any questions about these Terms and Conditions, please contact our legal department:
            </p>
            <div className="space-y-2 text-blue-100">
              <p>Legal Department: legal@medsupplypro.com</p>
              <p>Phone: +1 (555) 123-4567 (ext. 3)</p>
              <p>Address: 1234 Medical Center Drive, Healthcare Plaza, Suite 567, New York, NY 10001</p>
            </div>
            <div className="mt-6 p-4 bg-blue-800 rounded-lg">
              <p className="text-sm text-blue-200">
                <strong>Note:</strong> These terms are binding upon acceptance. Please ensure you understand 
                all provisions before using our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;