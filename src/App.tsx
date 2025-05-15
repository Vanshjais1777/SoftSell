import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference in local storage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
    } else if (savedMode === null) {
      // Check system preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to html element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save preference to local storage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Set document title and meta tags for SEO
  useEffect(() => {
    document.title = 'SoftSell | Unlock Value from Unused Software Licenses';

    const metaTags = [
      {
        name: 'description',
        content: 'SoftSell helps businesses recover value from unused software licenses through our secure marketplace. Get a free valuation today!'
      },
      {
        name: 'keywords',
        content: 'software resale, license resale, software marketplace, unused licenses, license valuation'
      },
      {
        property: 'og:title',
        content: 'SoftSell | Unlock Value from Unused Software Licenses'
      },
      {
        property: 'og:description',
        content: 'Turn unused software licenses into cash with SoftSell\'s secure marketplace. Get paid within 48 hours of accepting our offer.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        if (tag.property) {
          newTag.setAttribute('property', tag.property);
        } else {
          newTag.setAttribute('name', tag.name);
        }
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;