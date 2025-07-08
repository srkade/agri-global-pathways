
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Eye, 
  Trash2,
  Download
} from "lucide-react";

interface Document {
  id: string;
  name: string;
  type: string;
  status: "pending" | "approved" | "rejected";
  uploadDate: string;
  size: string;
}

const DocumentUpload = () => {
  const { toast } = useToast();
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "passport.pdf",
      type: "Passport",
      status: "approved",
      uploadDate: "2024-03-15",
      size: "2.1 MB"
    },
    {
      id: "2",
      name: "graduation_certificate.pdf",
      type: "Graduation Certificate",
      status: "pending",
      uploadDate: "2024-03-16",
      size: "1.8 MB"
    }
  ]);

  const requiredDocuments = [
    { type: "Passport", description: "Valid passport copy (PDF/JPG)", required: true },
    { type: "Graduation Certificate", description: "Educational qualification proof", required: true },
    { type: "Language Certificate", description: "IELTS/TOEFL/German A1-B2", required: true },
    { type: "CV/Resume", description: "Updated resume in English", required: true },
    { type: "Motivation Letter", description: "Statement of purpose", required: false },
    { type: "Medical Certificate", description: "Health clearance certificate", required: false }
  ];

  const handleFileUpload = (documentType: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF, JPG, or PNG files only.",
        variant: "destructive"
      });
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload files smaller than 5MB.",
        variant: "destructive"
      });
      return;
    }

    // Add document to list
    const newDocument: Document = {
      id: Date.now().toString(),
      name: file.name,
      type: documentType,
      status: "pending",
      uploadDate: new Date().toISOString().split('T')[0],
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
    };

    setDocuments(prev => [...prev, newDocument]);
    
    toast({
      title: "Document uploaded successfully!",
      description: `${documentType} has been uploaded and is under review.`,
    });

    // Reset input
    event.target.value = '';
  };

  const handleDeleteDocument = (docId: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== docId));
    toast({
      title: "Document deleted",
      description: "Document has been removed from your profile.",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  const isDocumentUploaded = (type: string) => {
    return documents.some(doc => doc.type === type);
  };

  return (
    <div className="space-y-6">
      {/* Upload Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Document Requirements</CardTitle>
          <CardDescription>
            Upload all required documents to complete your application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>{doc.type}</span>
                    {doc.required && <span className="text-red-500">*</span>}
                  </h4>
                  {isDocumentUploaded(doc.type) && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                </div>
                
                <p className="text-sm text-gray-600">{doc.description}</p>
                
                <div className="space-y-2">
                  <Label htmlFor={`upload-${index}`} className="text-sm font-medium">
                    Choose File
                  </Label>
                  <Input
                    id={`upload-${index}`}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(doc.type, e)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Your Documents</CardTitle>
          <CardDescription>
            Manage and track the status of your uploaded documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          {documents.length === 0 ? (
            <div className="text-center py-8">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No documents uploaded yet</p>
              <p className="text-sm text-gray-500">Upload your first document using the forms above</p>
            </div>
          ) : (
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <h4 className="font-medium">{doc.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>Uploaded {doc.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(doc.status)}
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteDocument(doc.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upload Tips */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-3">📋 Upload Guidelines</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• File formats: PDF, JPG, PNG only</li>
            <li>• Maximum file size: 5MB per document</li>
            <li>• Ensure documents are clear and readable</li>
            <li>• All documents should be in English or with certified translations</li>
            <li>• Passport must be valid for at least 2 years</li>
            <li>• Language certificates should be recent (within 2 years)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentUpload;
