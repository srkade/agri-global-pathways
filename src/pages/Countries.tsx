
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, Euro, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Countries = () => {
  const countries = [
    {
      name: "Germany",
      flag: "🇩🇪",
      programs: 12,
      avgStipend: "€1,200-1,800",
      duration: "4-8 months",
      language: "German (A2-B1)",
      specialties: ["Dairy Farming", "Agricultural Technology", "Organic Farming"],
      description: "Europe's agricultural powerhouse offering advanced farming techniques and excellent training programs.",
      highlights: ["World-class dairy industry", "Cutting-edge farm technology", "Strong agricultural education system"]
    },
    {
      name: "Netherlands",
      flag: "🇳🇱",
      programs: 8,
      avgStipend: "€1,400-2,000",
      duration: "3-6 months",
      language: "English",
      specialties: ["Greenhouse Technology", "Sustainable Agriculture", "Precision Farming"],
      description: "Leading innovation in sustainable agriculture and greenhouse technology.",
      highlights: ["Advanced greenhouse systems", "Sustainable farming practices", "Innovation in agri-tech"]
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      programs: 10,
      avgStipend: "£1,000-1,500",
      duration: "4-12 months",
      language: "English (IELTS 6.5+)",
      specialties: ["Agricultural Research", "Livestock Management", "Farm Business"],
      description: "Excellent research opportunities and traditional farming practices with modern innovation.",
      highlights: ["Research excellence", "Diverse farming systems", "Strong agricultural heritage"]
    },
    {
      name: "France",
      flag: "🇫🇷",
      programs: 6,
      avgStipend: "€1,000-1,400",
      duration: "3-6 months",
      language: "French (A2-B1)",
      specialties: ["Viticulture", "Cheese Production", "Organic Farming"],
      description: "Rich agricultural tradition with focus on quality food production and viticulture.",
      highlights: ["World-renowned viticulture", "Artisanal food production", "Diverse agricultural regions"]
    },
    {
      name: "Denmark",
      flag: "🇩🇰",
      programs: 5,
      avgStipend: "€1,800-2,200",
      duration: "4-6 months",
      language: "English/Danish",
      specialties: ["Pig Farming", "Renewable Energy", "Cooperative Farming"],
      description: "Leader in sustainable agriculture and renewable energy integration in farming.",
      highlights: ["Sustainable farming", "Cooperative model", "Green energy integration"]
    },
    {
      name: "Switzerland",
      flag: "🇨🇭",
      programs: 4,
      avgStipend: "CHF 1,500-2,000",
      duration: "3-8 months",
      language: "German/French",
      specialties: ["Alpine Agriculture", "Dairy Technology", "Precision Farming"],
      description: "Alpine farming expertise with focus on high-quality dairy and mountain agriculture.",
      highlights: ["Alpine farming techniques", "Premium dairy products", "Mountainous agriculture"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Destination Countries
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore agricultural opportunities across Europe. Each country offers unique 
              learning experiences and specializations in modern farming practices.
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <CardTitle className="text-2xl">{country.name}</CardTitle>
                        <div className="flex items-center text-gray-500 mt-1">
                          <Globe className="h-4 w-4 mr-1" />
                          <span className="text-sm">{country.programs} Programs Available</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {country.avgStipend}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {country.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium">{country.duration}</p>
                        <p className="text-xs text-gray-500">Duration</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-green-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium">{country.language}</p>
                        <p className="text-xs text-gray-500">Language</p>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {country.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {country.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Link to="/programs" className="flex-1">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        View Programs
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Find Your Perfect Agricultural Destination
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Each country offers unique opportunities to learn, grow, and build your agricultural career. 
              Start your application today and take the first step towards your international experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start Application
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get Guidance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Countries;
