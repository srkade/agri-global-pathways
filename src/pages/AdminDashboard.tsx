
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  Search,
  Filter,
  Eye,
  Edit,
  Download,
  BarChart3
} from "lucide-react";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  // Mock data - replace with real API calls
  const stats = [
    { label: "Total Candidates", value: "1,247", icon: Users, color: "text-blue-600", change: "+12%" },
    { label: "Applications", value: "892", icon: FileText, color: "text-green-600", change: "+8%" },
    { label: "Approved", value: "234", icon: CheckCircle, color: "text-green-600", change: "+15%" },
    { label: "Pending Review", value: "158", icon: Clock, color: "text-yellow-600", change: "-3%" }
  ];

  const candidates = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      state: "Punjab",
      education: "B.Sc Agriculture",
      preferredCountry: "Germany",
      status: "approved",
      appliedDate: "2024-03-15",
      documentsComplete: true
    },
    {
      id: 2,
      name: "Rahul Patel",
      email: "rahul.patel@email.com",
      phone: "+91 87654 32109",
      state: "Gujarat",
      education: "M.Sc Agriculture",
      preferredCountry: "Netherlands",
      status: "pending",
      appliedDate: "2024-03-20",
      documentsComplete: false
    },
    {
      id: 3,
      name: "Meera Singh",
      email: "meera.singh@email.com",
      phone: "+91 76543 21098",
      state: "Haryana",
      education: "B.Tech Food Technology",
      preferredCountry: "New Zealand",
      status: "in-review",
      appliedDate: "2024-03-18",
      documentsComplete: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      case "in-review":
        return <Badge className="bg-blue-100 text-blue-800">In Review</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || candidate.status === statusFilter;
    const matchesCountry = countryFilter === "all" || candidate.preferredCountry === countryFilter;
    
    return matchesSearch && matchesStatus && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard 🎯
              </h1>
              <p className="text-gray-600 mt-2">
                Manage applications and track candidate progress
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <Tabs defaultValue="candidates" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="candidates">Candidates</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="candidates" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Candidate Management</CardTitle>
                      <CardDescription>
                        View, filter, and manage all candidate applications
                      </CardDescription>
                    </div>
                  </div>
                  
                  {/* Filters */}
                  <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search candidates..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-review">In Review</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={countryFilter} onValueChange={setCountryFilter}>
                      <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Filter by country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Countries</SelectItem>
                        <SelectItem value="Germany">Germany</SelectItem>
                        <SelectItem value="Netherlands">Netherlands</SelectItem>
                        <SelectItem value="New Zealand">New Zealand</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {filteredCandidates.map((candidate) => (
                      <div key={candidate.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 text-sm text-gray-600">
                              <div>
                                <p><strong>Email:</strong> {candidate.email}</p>
                                <p><strong>Phone:</strong> {candidate.phone}</p>
                              </div>
                              <div>
                                <p><strong>State:</strong> {candidate.state}</p>
                                <p><strong>Education:</strong> {candidate.education}</p>
                              </div>
                              <div>
                                <p><strong>Preferred:</strong> {candidate.preferredCountry}</p>
                                <p><strong>Applied:</strong> {candidate.appliedDate}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            {getStatusBadge(candidate.status)}
                            <Badge variant={candidate.documentsComplete ? "default" : "secondary"}>
                              {candidate.documentsComplete ? "✓ Complete" : "⚠ Incomplete"}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Update Status
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Documents
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Overview</CardTitle>
                  <CardDescription>
                    Track all applications and their current status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Application management content */}
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Application management interface coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics & Reports</CardTitle>
                  <CardDescription>
                    Insights and performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Analytics content */}
                  <div className="text-center py-8">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Analytics dashboard coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
