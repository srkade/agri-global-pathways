
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  FileText, 
  Upload, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Download,
  Eye,
  Edit,
  Bell
} from "lucide-react";
import Navbar from "../components/Navbar";
import ProfileForm from "../components/ProfileForm";
import DocumentUpload from "../components/DocumentUpload";
import ApplicationTracker from "../components/ApplicationTracker";

const UserDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profileComplete, setProfileComplete] = useState(45);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Profile updated successfully", time: "2 hours ago", read: false },
    { id: 2, message: "Document verification in progress", time: "1 day ago", read: false },
    { id: 3, message: "Welcome to AgriPath!", time: "3 days ago", read: true }
  ]);

  useEffect(() => {
    if (!user || user.isAdmin) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const stats = [
    { label: "Applications", value: "2", icon: FileText, color: "text-blue-600" },
    { label: "Documents", value: "3/5", icon: Upload, color: "text-green-600" },
    { label: "Pending Reviews", value: "1", icon: Clock, color: "text-yellow-600" },
    { label: "Approved", value: "1", icon: CheckCircle, color: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-gray-600 mt-2">
                Track your applications and manage your agricultural internship journey
              </p>
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
              {notifications.filter(n => !n.read).length > 0 && (
                <Badge className="ml-2 bg-red-500">
                  {notifications.filter(n => !n.read).length}
                </Badge>
              )}
            </Button>
          </div>

          {/* Profile Completion */}
          <Card className="mb-8 border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Profile Completion</h3>
                <span className="text-2xl font-bold text-blue-600">{profileComplete}%</span>
              </div>
              <Progress value={profileComplete} className="mb-4" />
              <div className="flex items-center text-sm text-gray-600">
                <AlertCircle className="h-4 w-4 mr-2 text-yellow-500" />
                Complete your profile to increase your chances of selection
              </div>
            </CardContent>
          </Card>

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
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      </div>
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Documents</span>
              </TabsTrigger>
              <TabsTrigger value="applications" className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Applications</span>
              </TabsTrigger>
              <TabsTrigger value="tracker" className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Progress</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <ProfileForm onProfileUpdate={(percentage) => setProfileComplete(percentage)} />
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <DocumentUpload />
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Applications</CardTitle>
                  <CardDescription>
                    Track all your internship applications in one place
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Sample Applications */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">Dairy Farm Internship - Germany</h4>
                          <p className="text-sm text-gray-600">Bayern Agricultural Institute</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Approved</Badge>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Duration: 6 months</p>
                        <p>Applied: March 15, 2024</p>
                        <p>Stipend: €1,200/month</p>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">Organic Farming Program - Netherlands</h4>
                          <p className="text-sm text-gray-600">Wageningen University</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Duration: 4 months</p>
                        <p>Applied: March 20, 2024</p>
                        <p>Stipend: €1,400/month</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tracker" className="space-y-6">
              <ApplicationTracker />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
