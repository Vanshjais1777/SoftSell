import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "SoftSell helped us recover over $50,000 from unused Adobe and Microsoft licenses after our company downsizing. The process was seamless and the team was incredibly professional throughout.",
      author: "Jennifer Martinez",
      position: "CIO",
      company: "TechStream Solutions",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
      rating: 5,
    },
    {
      id: 2,
      content:
        "As a startup that over-purchased enterprise software, SoftSell was a lifesaver. We recouped nearly 80% of our original investment, which helped extend our runway by almost two months.",
      author: "David Chen",
      position: "Founder & CEO",
      company: "Orbital Finance",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
      rating: 5,
    },
    {
      id: 3,
      content:
        "SoftSell's valuation process is incredibly transparent. We were skeptical at first, but they actually got us more for our enterprise licenses than we expected. The funds helped us invest in new tools.",
      author: "Sarah Johnson",
      position: "VP of Operations",
      company: "Meridian Health",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Our <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from companies that have successfully monetized their unused software with SoftSell.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow-md p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < testimonial.rating
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;