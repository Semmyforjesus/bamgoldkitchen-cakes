port React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Mail, MapPin, Clock, Users, Award } from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const cakes = [
    {
      id: 1,
      name: "Wedding Elegance",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
      price: "From ₦25,000",
      category: "Wedding"
    },
    {
      id: 2,
      name: "Birthday Delight",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop",
      price: "From ₦8,000",
      category: "Birthday"
    },
    {
      id: 3,
      name: "Chocolate Dreams",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
      price: "From ₦12,000",
      category: "Specialty"
    },
    {
      id: 4,
      name: "Floral Fantasy",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=400&fit=crop",
      price: "From ₦18,000",
      category: "Custom"
    },
    {
      id: 5,
      name: "Anniversary Bliss",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop",
      price: "From ₦15,000",
      category: "Anniversary"
    },
    {
      id: 6,
      name: "Kids' Paradise",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      price: "From ₦10,000",
      category: "Kids"
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1200&h=600&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              BamGoldKitchen Cakes
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Home</a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Gallery</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img} alt="Hero" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Crafting Sweet
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Memories
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            Custom cakes made with love, passion, and the finest ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="#gallery" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              View Our Cakes
            </a>
            <a href="#contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
              Order Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">20+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">20+</h3>
              <p className="text-gray-600">Custom Designs</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">6+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.gallery ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Sweet Creations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each cake is a masterpiece, crafted with attention to detail and made to make your special moments unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake, index) => (
              <div
                key={cake.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700">{cake.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cake.name}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {cake.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible.about ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                About BamGoldKitchen
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Welcome to BamGoldKitchen Cakes, where every cake tells a story and every bite creates a memory. 
                  With over 6 years of experience in the art of cake making, we specialize in creating custom cakes 
                  that are as beautiful as they are delicious.
                </p>
                <p>
                  Our passion lies in transforming your special occasions into unforgettable experiences. From elegant 
                  wedding cakes to whimsical birthday creations, we use only the finest ingredients and put love into 
                  every detail.
                </p>
                <p>
                  Each cake is handcrafted with precision, creativity, and a commitment to excellence that has made us 
                  the preferred choice for celebrations across the community.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-pink-600" size={20} />
                  <span className="text-gray-700">Call: +2347037365786</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="text-green-600" size={20} />
                  <span className="text-gray-700">WhatsApp: +2347037365786</span>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 ${
              isVisible.about ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
            }`}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop"
                  alt="Baker at work"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Let's Create Something Sweet
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to make your special occasion unforgettable? Get in touch with us today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+2347037365786</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">+2347037365786</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">bamgoldkitchen11@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Location</h3>
                  <p className="text-gray-600">Ilesa, Osun State, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your cake requirements..."
                    rows={5}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Thank you for your interest! Please call or WhatsApp us at +2347037365786 to place your order.');
                  }}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              BamGoldKitchen Cakes
            </div>
            <p className="text-gray-400 mb-6">Creating sweet memories, one cake at a time</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="tel:+2347037365786" className="text-pink-400 hover:text-pink-300 transition-colors">
                <Phone size={24} />
              </a>
              <a href="https://wa.me/2347037365786" className="text-green-400 hover:text-green-300 transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="mailto:bamgoldkitchen11@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 BamGoldKitchen Cakes. All rights reserved. | Made with ❤️ for sweet celebrations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;📱 How to add this file:File name: src/App.jsCopy and paste all the code aboveClick "Commit new file"🎉 YOU'RE DONE!Now you can deploy to Vercel! Go to vercel.com → Sign up with GitHub → Import your repository → Deploy!Your website will be LIVE! 🚀
