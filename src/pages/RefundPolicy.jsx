import React from 'react';
import { RotateCcw, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-600">
              We stand behind our products. If you're not satisfied, we offer a comprehensive refund policy.
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
            {/* Return Eligibility */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Return Eligibility</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Products must be unopened and in original packaging</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Items must be returned within 30 days of purchase</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Medical devices must have intact seals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Products must not be damaged due to misuse</span>
                </li>
              </ul>
            </div>

            {/* Return Process */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <RotateCcw className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Return Process</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
                    <p className="text-gray-700">Reach out to our customer service team with your order number.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Get Authorization</h3>
                    <p className="text-gray-700">We'll provide you with a return authorization number and instructions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ship Items</h3>
                    <p className="text-gray-700">Package items securely and ship to our returns facility.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Receive Refund</h3>
                    <p className="text-gray-700">Once approved, refunds are processed within 5-7 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeframes */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Processing Timeframes</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-semibold text-green-800 mb-1">Standard Items</div>
                  <div className="text-sm text-green-700">30 days return window</div>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="font-semibold text-yellow-800 mb-1">Medical Devices</div>
                  <div className="text-sm text-yellow-700">14 days return window</div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-1">Refund Processing</div>
                  <div className="text-sm text-blue-700">5-7 business days</div>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="font-semibold text-purple-800 mb-1">Store Credit</div>
                  <div className="text-sm text-purple-700">Immediate processing</div>
                </div>
              </div>
            </div>

            {/* Non-Returnable Items */}
            <div className="bg-red-50 rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Non-Returnable Items</h2>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Opened medications and pharmaceutical products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Used or opened sterile medical devices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Custom-ordered medical equipment</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Need Help with a Return?</h2>
              <p className="mb-4">Contact our returns department for assistance:</p>
              <div className="space-y-2">
                <p>Email: returns@medcaresupplies.com</p>
                <p>Phone: +1 (555) 123-4567 (ext. 2)</p>
                <p>Hours: Monday - Friday, 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;