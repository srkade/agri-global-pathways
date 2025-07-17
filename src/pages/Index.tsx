
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sprout, 
  Globe, 
  Users, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Star,
  MapPin,
  Clock,
  Award
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Maharashtra, India",
      destination: "Germany",
      quote: "Go2Agro helped me secure a greenhouse farming internship in Bavaria. The visa assistance and pre-departure training were excellent!",
      rating: 5,
      program: "Greenhouse Farming"
    },
    {
      name: "Rahul Patel",
      location: "Gujarat, India", 
      destination: "United Kingdom",
      quote: "From application to placement, Go2Agro guided me every step. Now I'm gaining valuable experience in UK dairy farming.",
      rating: 5,
      program: "Dairy Management"
    },
    {
      name: "Meera Singh",
      location: "Punjab, India",
      destination: "Germany",
      quote: "The international exposure and hands-on training I received through Go2Agro transformed my agricultural knowledge!",
      rating: 5,
      program: "Mixed Farming"
    }
  ];

  const countries = [
    { 
      name: "Germany", 
      flag: "🇩🇪", 
      programs: "Greenhouse, Dairy, Mixed Farming", 
      features: "Advanced agricultural technology, structured training programs"
    },
    { 
      name: "United Kingdom", 
      flag: "🇬🇧", 
      programs: "Dairy, Poultry, Crop Management", 
      features: "Modern farming practices, English-speaking environment"
    }
  ];

  const process = [
    { step: 1, title: "Application Form", description: "Fill the online application form at go2agro.com", icon: FileText },
    { step: 2, title: "Document Verification", description: "Submit academic qualifications, ID proof, and relevant documents", icon: CheckCircle },
    { step: 3, title: "Interview & Selection", description: "Telephonic/virtual interview and program selection", icon: Users },
    { step: 4, title: "Visa & Departure", description: "Visa assistance, fee payment, and pre-departure training", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 text-sm px-4 py-2">
            🌾 Go2Agro Services LLP - Pune Based Agricultural Training & Consulting
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Gateway to
            <span className="text-green-600 block mt-2">International Agriculture</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of agri-professionals with international internships, 
            professional development programs, and real-world experience in Germany and the UK.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/login">
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl">
                Sign In
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2</div>
              <div className="text-gray-600">Partner Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">30 Days</div>
              <div className="text-gray-600">APDP Program</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">Pune</div>
              <div className="text-gray-600">Based Company</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">Expert</div>
              <div className="text-gray-600">Visa Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Internship Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Current destinations for agricultural training and internships (2025)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {countries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{country.flag}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{country.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Available Programs:</h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {country.programs}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <p className="text-gray-600 text-sm">{country.features}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process for International Internship
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to secure your agricultural training abroad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-green-500">
                      <span className="text-sm font-bold text-green-600">{item.step}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our successful candidates now working abroad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-blue-100 text-blue-800">
                        📍 {testimonial.destination}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {testimonial.program}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Agricultural Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join thousands of Indian students who have transformed their careers 
            through international agricultural experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Apply Now - It's Free!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-green-600 px-8 py-4 text-lg rounded-xl">
              📞 Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:+917972939738" 
          className="group flex items-center bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
        >
          <div className="bg-white/20 rounded-full p-2 mr-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.19 11.19 0 003.48.56 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 3a1 1 0 011-1h3.5a1 1 0 011 1 11.19 11.19 0 00.56 3.48 1 1 0 01-.27 1.11l-2.2 2.2z"/>
            </svg>
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold">Get Free Consultation</div>
            <div className="text-xs opacity-90">+91 79729 39738</div>
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
