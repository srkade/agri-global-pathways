
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  Users, 
  Plane, 
  Award,
  AlertCircle
} from "lucide-react";

const ApplicationTracker = () => {
  const applications = [
    {
      id: 1,
      program: "Dairy Farm Internship - Germany",
      institution: "Bayern Agricultural Institute",
      country: "Germany",
      status: "approved",
      progress: 100,
      currentStep: 5,
      steps: [
        { name: "Application Submitted", status: "completed", date: "Mar 15, 2024" },
        { name: "Document Verification", status: "completed", date: "Mar 18, 2024" },
        { name: "Initial Review", status: "completed", date: "Mar 22, 2024" },
        { name: "Interview Scheduled", status: "completed", date: "Mar 25, 2024" },
        { name: "Final Approval", status: "completed", date: "Mar 28, 2024" }
      ]
    },
    {
      id: 2,
      program: "Organic Farming Program - Netherlands",
      institution: "Wageningen University",
      country: "Netherlands",
      status: "in-review",
      progress: 60,
      currentStep: 3,
      steps: [
        { name: "Application Submitted", status: "completed", date: "Mar 20, 2024" },
        { name: "Document Verification", status: "completed", date: "Mar 22, 2024" },
        { name: "Initial Review", status: "current", date: "In Progress" },
        { name: "Interview Scheduled", status: "pending", date: "Pending" },
        { name: "Final Decision", status: "pending", date: "Pending" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "in-review":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "current":
        return <Clock className="h-5 w-5 text-blue-600" />;
      default:
        return <div className="h-5 w-5 rounded-full border-2 border-gray-300 bg-white" />;
    }
  };

  return (
    <div className="space-y-6">
      {applications.map((application) => (
        <Card key={application.id} className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{application.program}</CardTitle>
                <CardDescription className="text-lg mt-1">
                  {application.institution} • {application.country}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(application.status)}>
                {application.status === "approved" && "✅ Approved"}
                {application.status === "in-review" && "⏳ Under Review"}
                {application.status === "rejected" && "❌ Rejected"}
              </Badge>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Application Progress</span>
                <span className="text-sm text-gray-600">{application.progress}% Complete</span>
              </div>
              <Progress value={application.progress} className="h-2" />
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              {application.steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    {getStepIcon(step.status)}
                    {index < application.steps.length - 1 && (
                      <div className={`w-0.5 h-8 mt-2 ${
                        step.status === "completed" ? "bg-green-300" : "bg-gray-200"
                      }`} />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className={`font-medium ${
                        step.status === "current" ? "text-blue-600" : 
                        step.status === "completed" ? "text-green-600" : "text-gray-600"
                      }`}>
                        {step.name}
                      </h4>
                      <span className="text-sm text-gray-500">{step.date}</span>
                    </div>
                    
                    {step.status === "current" && (
                      <p className="text-sm text-blue-600 mt-1">
                        Your application is currently being reviewed by our academic partners.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            {application.status === "approved" && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-800">Congratulations! 🎉</h4>
                </div>
                <p className="text-green-700 mt-2">
                  Your application has been approved! Our team will contact you within 48 hours 
                  with next steps for visa processing and pre-departure preparation.
                </p>
              </div>
            )}

            {application.status === "in-review" && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Review in Progress</h4>
                </div>
                <p className="text-blue-700 mt-2">
                  Our team is actively reviewing your application. We'll notify you of any 
                  updates via email and SMS. Average review time: 5-7 business days.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Quick Actions */}
      <Card className="border-2 border-dashed border-gray-300">
        <CardContent className="p-8 text-center">
          <Plane className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready for Your Next Application?
          </h3>
          <p className="text-gray-600 mb-4">
            Explore more internship opportunities and apply to increase your chances
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Browse Programs
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Get Guidance
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationTracker;
