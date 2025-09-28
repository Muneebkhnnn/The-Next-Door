import React, { useState } from 'react';
import { Menu, X, ArrowRight, Code, ShoppingCart, Smartphone, FileText, Settings, Palette, Zap, Server, BarChart3, CheckCircle, Star, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function TheNextDoorWebsite({
    'data-id': dataId
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const services = [{
        icon: <Code className="w-8 h-8" />,
        title: 'Business Websites',
        description: 'Professional websites that showcase your brand and drive conversions.'
    }, {
        icon: <ShoppingCart className="w-8 h-8" />,
        title: 'E-commerce Development',
        description: 'Full-featured online stores with secure payment processing and inventory management.'
    }, {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'Custom Web Applications',
        description: 'Tailored web applications built to solve your specific business challenges.'
    }, {
        icon: <FileText className="w-8 h-8" />,
        title: 'Landing Pages',
        description: 'High-converting landing pages designed to maximize your marketing campaigns.'
    }, {
        icon: <Settings className="w-8 h-8" />,
        title: 'CMS Development',
        description: 'Easy-to-manage content management systems for effortless website updates.'
    }, {
        icon: <Palette className="w-8 h-8" />,
        title: 'UI/UX Design & Branding',
        description: 'Beautiful, user-friendly designs that reflect your brand identity.'
    }, {
        icon: <Zap className="w-8 h-8" />,
        title: 'SEO Optimization & Website Speed',
        description: 'Boost your search rankings and improve site performance.'
    }, {
        icon: <Server className="w-8 h-8" />,
        title: 'Hosting & Maintenance',
        description: 'Reliable hosting and ongoing maintenance to keep your site running smoothly.'
    }, {
        icon: <BarChart3 className="w-8 h-8" />,
        title: 'Automation & Integrations',
        description: 'Streamline your workflow with custom automations and third-party integrations.'
    }];

    const benefits = [{
        icon: <Zap className="w-6 h-6" />,
        title: 'Fast Delivery',
        description: 'Quick turnaround times without compromising quality'
    }, {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Scalable Solutions',
        description: 'Built to grow with your business needs'
    }, {
        icon: <CheckCircle className="w-6 h-6" />,
        title: 'Affordable Packages',
        description: 'Competitive pricing for exceptional value'
    }, {
        icon: <Star className="w-6 h-6" />,
        title: 'Ongoing Support',
        description: 'Continuous support and maintenance services'
    }];

    const packages = [{
        name: 'Starter',
        price: '$79',
        description: 'Perfect for small businesses getting started online',
        features: ['5-page website', 'Mobile responsive', 'Basic SEO', 'Contact form', '3 month support']
    }, {
        name: 'Business Pro',
        price: '$259',
        description: 'Comprehensive solution for growing businesses',
        features: ['10-page website', 'Advanced SEO', 'CMS integration', 'Analytics setup', '6 month support', 'Social media integration']
    }, {
        name: 'E-commerce',
        price: '$399',
        description: 'Complete online store solution',
        features: ['Custom e-commerce site', 'Payment integration', 'Inventory management', 'Order tracking', '1 year support', 'Marketing tools']
    }, {
        name: 'Custom Web App',
        price: 'Custom Quote',
        description: 'Tailored web applications for unique requirements',
        features: ['Custom development', 'Database design', 'API integration', 'User authentication', 'Ongoing maintenance', 'Scalable architecture']
    }];

    return <div data-id={dataId} className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-gray-50 backdrop-blur-sm border-b border-gray-100 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center bg-slate-100 p-2 rounded-sm">
                        <img src="/TheNextDoorlogo.png" alt="The Next Door Logo" className="h-8 w-auto mr-3 rounded-sm" />
                        <h1 className="text-2xl font-bold text-gray-900">
                            The Next Door
                        </h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
                            About
                        </button>
                        <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
                            Services
                        </button>
                        <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-blue-600 transition-colors">
                            Packages
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
                            Contact
                        </button>
                    </nav>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-100">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        Home
                    </button>
                    <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        About
                    </button>
                    <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        Services
                    </button>
                    <button onClick={() => scrollToSection('packages')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        Packages
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        Contact
                    </button>
                </div>
            </div>}
        </header>
        {/* Hero Section */}
        <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Your Partner for
                        <span className="text-blue-600 block">Modern Web Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        We help businesses build powerful, user-friendly, and scalable
                        digital solutions that drive growth and success in the digital
                        age.
                    </p>
                    <button onClick={() => scrollToSection('contact')} className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
        {/* About Us */}
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        About The Next Door
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        At The Next Door, we're passionate about helping businesses unlock
                        their digital potential. Our mission is to create powerful,
                        user-friendly, and scalable digital solutions that not only meet
                        your current needs but also adapt and grow with your business. We
                        believe that great web development is the foundation of digital
                        success, and we're here to be your trusted partner on that
                        journey.
                    </p>
                </div>
            </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We offer comprehensive web development services to help your
                        business thrive in the digital landscape.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="text-blue-600 mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>)}
                </div>
            </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We're committed to delivering exceptional results that exceed your
                        expectations.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </div>)}
                </div>
            </div>
        </section>
        {/* Packages Section */}
        <section id="packages" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Packages
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose the perfect package for your business needs, or let us
                        create a custom solution just for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {pkg.name}
                        </h3>
                        <div className="text-3xl font-bold text-blue-600 mb-4">
                            {pkg.price}
                        </div>
                        <p className="text-gray-600 mb-6">{pkg.description}</p>
                        <ul className="space-y-3 mb-8">
                            {pkg.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-gray-600">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                {feature}
                            </li>)}
                        </ul>
                        <button onClick={() => scrollToSection('contact')} className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                    </div>)}
                </div>
            </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Ready to start your project? We'd love to hear from you. Send us a
                        message and we'll get back to you as soon as possible.
                    </p>
                </div>
                <div className="flex-col md:flex gap-12">
                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                            </div>
                            <button type="submit" className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    Email
                                </h3>
                                <p className="text-gray-600">contact@thenextdoor.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    Phone
                                </h3>
                                <p className="text-gray-600">+91 9858325704</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    Address
                                </h3>
                                <p className="text-gray-600">
                                    Delhi | India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">The Next Door</h3>
                        <p className="text-gray-300 mb-6">
                            Your trusted partner for modern web solutions. We help
                            businesses build powerful, user-friendly, and scalable digital
                            experiences.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                            <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                            <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
                                    About
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('packages')} className="text-gray-300 hover:text-white transition-colors">
                                    Packages
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        © 2025 The Next Door. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>;
}