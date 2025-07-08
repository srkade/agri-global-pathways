
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Euro, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Dairy Farm Management - Germany",
      location: "Bayern, Germany",
      duration: "6 months",
      stipend: "€1,200/month",
      participants: "20-30",
      description: "Learn modern dairy farming techniques, animal husbandry, and farm management in one of Europe's leading agricultural regions.",
      requirements: ["Basic German (A1/A2)", "Agricultural background preferred", "Valid passport"],
      type: "Dairy Farming"
    },
    {
      id: 2,
      title: "Organic Farming Program - Netherlands",
      location: "Wageningen, Netherlands",
      duration: "4 months",
      stipend: "€1,400/month",
      participants: "15-20",
      description: "Experience sustainable agriculture practices, organic certification processes, and innovative farming technologies.",
      requirements: ["English fluency", "Interest in sustainable farming", "Physical fitness"],
      type: "Organic Farming"
    },
    {
      id: 3,
      title: "Agricultural Research - UK",
      location: "Cambridge, UK",
      duration: "8 months",
      stipend: "£1,100/month",
      participants: "10-15",
      description: "Participate in cutting-edge agricultural research, crop improvement, and precision farming techniques.",
      requirements: ["English proficiency (IELTS 6.5+)", "Bachelor's in Agriculture", "Research experience"],
      type: "Research"
    },
    {
      id: 4,
      title: "Vineyard Management - France",
      location: "Bordeaux, France",
      duration: "5 months",
      stipend: "€1,000/month",
      participants: "12-18",
      description: "Learn viticulture, wine production, and vineyard management in the world's most famous wine region.",
      requirements: ["Basic French (A2)", "Interest in viticulture", "Age 20-30"],
      type: "Viticulture"
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
              International Agricultural Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting internship opportunities across Europe and gain hands-on experience 
              in modern farming, research, and agricultural innovation.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{program.type}</Badge>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{program.location}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium">{program.duration}</p>
                        <p className="text-xs text-gray-500">Duration</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Euro className="h-4 w-4 text-green-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium">{program.stipend}</p>
                        <p className="text-xs text-gray-500">Stipend</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-purple-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium">{program.participants}</p>
                        <p className="text-xs text-gray-500">Participants</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Link to="/register" className="flex-1">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Apply Now
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
              Ready to Start Your Agricultural Journey?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of Indian students who have transformed their careers through 
              international agricultural internships. Create your profile today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Create Profile
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
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

export default Programs;
