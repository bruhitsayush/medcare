import React from 'react';
import { FileText, Users, Shield, Gavel } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services. By using our platform, you agree to these terms.
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
          <div className="space-y-12">
            {/* Account Usage */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Account Usage</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>You must provide accurate registration information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>You are responsible for account security</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Healthcare professionals must provide valid licensing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Notify us of unauthorized account access</span>
                </li>
              </ul>
            </div>

            {/* Acceptable Use */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Acceptable Use Policy</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Use services only for legitimate medical purposes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Do not attempt to circumvent security measures</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Respect intellectual property rights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Comply with medical regulations and standards</span>
                </li>
              </ul>
            </div>

            {/* Product Warranties */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Product Information & Warranties</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>All products meet FDA and regulatory standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Product descriptions are for informational purposes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Warranty against manufacturing defects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Professional medical judgment supersedes product info</span>
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Gavel className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Liability limited to purchase price of products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Not liable for indirect or consequential damages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Medical decisions remain healthcare provider responsibility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Emergency situations require immediate professional care</span>
                </li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of the State of New York. Any disputes will be resolved through binding arbitration.
              </p>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Continued use of our services constitutes acceptance of updated Terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="mb-4">If you have questions about these Terms and Conditions, contact us:</p>
              <div className="space-y-2">
                <p>Email: legal@medcaresupplies.com</p>
                <p>Phone: +1 (555) 123-4567 (ext. 3)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;