import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

type FormValues = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormValues]?: string;
};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    { value: '', label: 'Select License Type' },
    { value: 'adobe', label: 'Adobe Creative Cloud' },
    { value: 'microsoft', label: 'Microsoft Office/Windows' },
    { value: 'autodesk', label: 'Autodesk Products' },
    { value: 'atlassian', label: 'Atlassian Suite' },
    { value: 'oracle', label: 'Oracle Database' },
    { value: 'salesforce', label: 'Salesforce' },
    { value: 'other', label: 'Other Software' },
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formValues.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formValues.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }

    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormValues]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after submission (optional)
    setFormValues({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get a <span className="text-blue-600 dark:text-blue-400">Free Valuation</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find out how much your unused software licenses are worth. Fill out the form below and our team will provide a valuation within 24 hours.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-6 text-2xl font-medium text-gray-900 dark:text-white">
                Thank You!
              </h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Your request has been submitted successfully. Our team will review your information and get back to you with a valuation within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-all duration-300"
            >
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formValues.name}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } dark:bg-gray-800 dark:text-white`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } dark:bg-gray-800 dark:text-white`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formValues.company}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border ${
                        errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } dark:bg-gray-800 dark:text-white`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    License Type *
                  </label>
                  <div className="mt-1">
                    <select
                      name="licenseType"
                      id="licenseType"
                      value={formValues.licenseType}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border ${
                        errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } appearance-none bg-white dark:bg-gray-800 dark:text-white`}
                    >
                      {licenseTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formValues.message}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border ${
                        errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } dark:bg-gray-800 dark:text-white`}
                      placeholder="Please describe the software licenses you're looking to sell..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="ml-2 -mr-1 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;