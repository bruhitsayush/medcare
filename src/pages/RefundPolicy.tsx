import React from 'react';
import { RotateCcw, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const RefundPolicy: React.FC = () => {
  const eligibilityConditions = [
    'Products must be unopened and in original packaging',
    'Medical devices must have intact tamper-evident seals',
    'Items must be returned within 30 days of purchase',
    'Prescription items require valid authorization',
    'Products must not be damaged due to misuse or negligence'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Contact Our Support Team',
      description: 'Reach out to our customer service within 30 days of purchase with your order number and reason for return.'
    },
    {
      step: 2,
      title: 'Receive Return Authorization',
      description: 'We will provide you with a Return Merchandise Authorization (RMA) number and return shipping instructions.'
    },
    {
      step: 3,
      title: 'Package and Ship Items',
      description: 'Securely package the items in original packaging and ship to our returns facility using provided labels.'
    },
    {
      step: 4,
      title: 'Inspection and Processing',
      description: 'Our quality team inspects returned items to ensure they meet our return criteria and medical safety standards.'
    },
    {
      step: 5,
      title: 'Refund Issued',
      description: 'Once approved, refunds are processed within 5-7 business days to your original payment method.'
    }
  ];

  const timeframes = [
    { type: 'Standard Medical Supplies', days: '30 days', color: 'green' },
    { type: 'Surgical Instruments', days: '14 days', color: 'yellow' },
    { type: 'Prescription Items', days: '7 days', color: 'red' },
    { type: 'Custom Orders', days: 'Non-returnable', color: 'gray' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We stand behind the quality of our medical supplies. If you're not completely satisfied with your purchase, 
              we offer a comprehensive refund policy designed with healthcare professionals in mind.
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
          {/* Overview */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <RotateCcw className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Return Promise</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We understand that medical professionals require the highest quality supplies for patient care. 
              Our refund policy ensures you can purchase with confidence, knowing that we will address any 
              quality concerns or product issues promptly and professionally.
            </p>
          </div>

          {/* Return Eligibility */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Return Eligibility Conditions</h2>
            </div>
            <p className="text-gray-600 mb-6">
              To ensure product safety and maintain medical standards, returned items must meet the following criteria:
            </p>
            <ul className="space-y-3">
              {eligibilityConditions.map((condition, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{condition}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Return Timeframes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-orange-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Return Timeframes</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Different product categories have varying return windows to ensure safety and compliance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timeframes.map((item, index) => {
                const colorClasses = {
                  green: 'bg-green-50 border-green-200 text-green-800',
                  yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
                  red: 'bg-red-50 border-red-200 text-red-800',
                  gray: 'bg-gray-50 border-gray-200 text-gray-800'
                };
                
                return (
                  <div key={index} className={`p-4 rounded-lg border-2 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                    <div className="font-semibold mb-1">{item.type}</div>
                    <div className="text-sm">{item.days}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Return Process */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Process</h2>
            <p className="text-gray-600 mb-8">
              Follow these simple steps to return your medical supplies:
            </p>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Returnable Items */}
          <div className="bg-red-50 rounded-xl p-8 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Non-Returnable Items</h2>
            </div>
            <p className="text-gray-700 mb-4">
              For safety and regulatory compliance, the following items cannot be returned:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Opened medications and pharmaceutical products</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Used or opened sterile medical devices</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Custom-ordered or personalized medical equipment</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Products damaged due to misuse or normal wear</span>
              </li>
            </ul>
          </div>

          {/* Shipping and Fees */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Shipping and Return Fees
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Defective Products:</strong> We cover all return shipping costs for items that arrive damaged or defective.
              </p>
              <p>
                <strong>Change of Mind:</strong> Customer is responsible for return shipping costs, unless the order exceeds $500.
              </p>
              <p>
                <strong>Wrong Item Sent:</strong> We cover all costs and provide expedited replacement shipping at no charge.
              </p>
              <p>
                <strong>Restocking Fee:</strong> A 15% restocking fee may apply to non-defective returns of opened packages.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-700 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Need Help with a Return?
            </h2>
            <p className="mb-4 text-blue-100">
              Our customer service team is here to assist you with any return questions or concerns:
            </p>
            <div className="space-y-2 text-blue-100">
              <p>Returns Department: returns@medsupplypro.com</p>
              <p>Phone: +1 (555) 123-4567 (ext. 2)</p>
              <p>Hours: Monday - Friday, 8:00 AM - 6:00 PM EST</p>
            </div>
            <div className="mt-6 p-4 bg-blue-800 rounded-lg">
              <p className="text-sm text-blue-200">
                <strong>Emergency Returns:</strong> For urgent medical supply returns, call our 24/7 emergency line at +1 (555) 911-MEDS
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;