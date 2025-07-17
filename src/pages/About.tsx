
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Target, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "500+", label: "Students Placed", icon: Users },
    { number: "15+", label: "Partner Countries", icon: Globe },
    { number: "50+", label: "Agricultural Programs", icon: Award },
    { number: "95%", label: "Success Rate", icon: Target }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Agriculture",
      description: "We believe agriculture is the backbone of society and are passionate about developing the next generation of agricultural leaders."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We connect Indian youth with international opportunities, fostering cultural exchange and global agricultural knowledge."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Learning",
      description: "We promote innovative farming techniques and continuous learning to address modern agricultural challenges."
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      image: "👨‍🌾",
      description: "Former Agricultural Scientist with 20+ years of international farming experience."
    },
    {
      name: "Priya Sharma",
      role: "Program Director",
      image: "👩‍💼",
      description: "Expert in international education placement with extensive European network."
    },
    {
      name: "Michael Weber",
      role: "European Coordinator",
      image: "👨‍💼",
      description: "Based in Germany, coordinates with European farms and institutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Go2Agro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging the gap between Indian agricultural talent and international opportunities. 
              We're dedicated to transforming careers through world-class agricultural experiences.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <IconComponent className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 mb-6">
                    To empower young Indians with international agricultural experiences that transform 
                    their careers and contribute to global food security. We believe that by connecting 
                    passionate individuals with world-class farming opportunities, we're building a 
                    sustainable future for agriculture.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Connect Indian youth with international opportunities</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Provide comprehensive support throughout the journey</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Foster innovation in sustainable agriculture</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🌾</div>
                  <p className="text-gray-500 italic">
                    "Cultivating Global Agricultural Leaders"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <IconComponent className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Go2Agro Services LLP was founded as a Pune-based agricultural training and consulting 
                company with a mission to empower the next generation of agri-professionals through 
                international exposure and real-world experience. Our founders recognized the immense 
                potential of Indian youth in global agriculture and created pathways for students and 
                farmers to gain valuable experience abroad.
              </p>
              <p>
                Starting with partnerships in Germany and the UK, we provide comprehensive programs 
                including greenhouse farming, dairy management, poultry, and crop management training. 
                Our approach combines hands-on experience with exposure to European farming technologies 
                and practices, along with our 30-day Agri Professional Development Program (APDP).
              </p>
              <p>
                Today, Go2Agro alumni are making significant contributions to sustainable agriculture 
                worldwide, bringing back invaluable knowledge and experience to transform Indian 
                agriculture. We're proud to be part of their journey and committed to expanding 
                opportunities for the next generation of agricultural leaders.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Your Agricultural Journey?
            </h2>
            <p className="mb-6 max-w-2xl mx-auto opacity-90">
              Join our community of agricultural leaders and take the first step towards 
              an international career that makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Contact Our Team
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

export default About;
