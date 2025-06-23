import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, FileText, Shield, Calendar, Users, FileUp } from "lucide-react";
import { useStudyContext } from "../contexts/StudyContext";
import { toast } from "sonner";

const StudyManagement = () => {
  const { studyId } = useParams();
  const navigate = useNavigate();
  const { studies, updateStudyStatus, updateStudyProtocol } = useStudyContext();
  
  const [study, setStudy] = useState<any>(null);
  const [newStatus, setNewStatus] = useState("");
  const [statusNotes, setStatusNotes] = useState("");
  const [newProtocol, setNewProtocol] = useState("");
  const [protocolChanges, setProtocolChanges] = useState("");
  const [protocolFile, setProtocolFile] = useState<File | null>(null);

  useEffect(() => {
    if (studyId) {
      const foundStudy = studies.find(s => s.id === parseInt(studyId) && s.description && s.phase);
      if (foundStudy) {
        setStudy(foundStudy);
        setNewStatus(foundStudy.status);
      }
    }
  }, [studyId, studies]);

  const statusOptions = [
    "Active – Recruiting",
    "Data Collection", 
    "Analysis Phase",
    "Completed",
    "Paused",
    "Terminated",
    "Planning Phase"
  ];

  const handleStatusUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (study) {
      updateStudyStatus(study.id, newStatus, statusNotes);
      toast.success("Study status updated successfully");
      setStatusNotes("");
    }
  };

  const handleProtocolUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (study && newProtocol.trim() && protocolChanges.trim()) {
      updateStudyProtocol(study.id, newProtocol, protocolChanges);
      
      if (protocolFile) {
        toast.success(`Protocol updated successfully with file: ${protocolFile.name}`);
      } else {
        toast.success("Protocol updated successfully");
      }
      
      setNewProtocol("");
      setProtocolChanges("");
      setProtocolFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type (optional - you can restrict to specific types)
      const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (allowedTypes.includes(fileExtension)) {
        setProtocolFile(file);
        toast.success(`File selected: ${file.name}`);
      } else {
        toast.error("Please select a valid file type (.pdf, .doc, .docx, .txt)");
        e.target.value = '';
      }
    }
  };

  const getStatusColor = (status: string) => {
    if (status.includes("Recruiting")) return "bg-blue-100 text-blue-700 border-blue-200";
    if (status.includes("Collection")) return "bg-green-100 text-green-700 border-green-200";
    if (status.includes("Analysis")) return "bg-orange-100 text-orange-700 border-orange-200";
    return "bg-purple-100 text-purple-700 border-purple-200";
  };

  if (!study) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Study not found</p>
          <Button onClick={() => navigate("/")} className="mt-4">
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-gray-800 hover:bg-orange-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-medium text-gray-900">Study Management</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Study Overview */}
        <Card className="border-white/30 bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-gray-900 mb-2 font-medium">{study.name}</CardTitle>
                <CardDescription className="text-gray-700 mb-3 font-normal">
                  {study.description}
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(study.status)}>
                    {study.status}
                  </Badge>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    {study.phase}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-700">Participants</p>
                  <p className="text-gray-600">{study.participants}/{study.targetParticipants}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-700">Created</p>
                  <p className="text-gray-600">{study.created}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-700">Protocol Version</p>
                  <p className="text-gray-600">{study.protocolVersion}</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-700">Last Updated</p>
                <p className="text-gray-600">{study.lastUpdated}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Management Tabs */}
        <Tabs defaultValue="status" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-400 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="status" className="data-[state=active]:bg-orange-400 data-[state=active]:text-white">
              Update Status
            </TabsTrigger>
            <TabsTrigger value="protocol" className="data-[state=active]:bg-orange-400 data-[state=active]:text-white">
              Update Protocol
            </TabsTrigger>
          </TabsList>

          <TabsContent value="status">
            <Card className="border-white/30 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-medium">Update Study Status</CardTitle>
                <CardDescription className="font-normal">
                  Change the current status of your study and add notes about the update.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleStatusUpdate} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="status" className="text-gray-700">New Status *</Label>
                    <Select value={newStatus} onValueChange={setNewStatus}>
                      <SelectTrigger className="border-orange-200 focus:border-orange-400 focus:ring-orange-200">
                        <SelectValue placeholder="Select new status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="statusNotes" className="text-gray-700">Update Notes</Label>
                    <Textarea
                      id="statusNotes"
                      value={statusNotes}
                      onChange={(e) => setStatusNotes(e.target.value)}
                      placeholder="Add notes about this status change..."
                      className="border-orange-200 focus:border-orange-400 focus:ring-orange-200"
                      rows={4}
                    />
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-700">
                      <strong>Note:</strong> Status changes will be recorded on the blockchain 
                      and participants will be notified of the update.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-500 text-white"
                  >
                    Update Status
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="protocol">
            <Card className="border-white/30 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-medium">Update Protocol</CardTitle>
                <CardDescription className="font-normal">
                  Upload a new protocol version and describe the changes made.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProtocolUpdate} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentProtocol" className="text-gray-700">Current Protocol Version</Label>
                    <div className="p-3 bg-gray-50 rounded-md border">
                      <p className="text-sm text-gray-600">{study.protocolVersion}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newProtocol" className="text-gray-700">New Protocol Version *</Label>
                    <Input
                      id="newProtocol"
                      value={newProtocol}
                      onChange={(e) => setNewProtocol(e.target.value)}
                      placeholder="e.g., v2.1, v1.3, etc."
                      className="border-orange-200 focus:border-orange-400 focus:ring-orange-200"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="protocolFile" className="text-gray-700">Upload Protocol Document</Label>
                    <div className="flex items-center space-x-3">
                      <div className="relative flex-1">
                        <Input
                          id="protocolFile"
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.txt"
                          className="border-orange-200 focus:border-orange-400 focus:ring-orange-200 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                        />
                        <FileUp className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    {protocolFile && (
                      <div className="p-2 bg-orange-50 rounded-md border border-orange-200">
                        <p className="text-sm text-orange-700 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Selected: {protocolFile.name} ({(protocolFile.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      </div>
                    )}
                    <p className="text-xs text-gray-500">
                      Supported formats: PDF, DOC, DOCX, TXT (Max 10MB)
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="protocolChanges" className="text-gray-700">Description of Changes *</Label>
                    <Textarea
                      id="protocolChanges"
                      value={protocolChanges}
                      onChange={(e) => setProtocolChanges(e.target.value)}
                      placeholder="Describe what has changed from the previous protocol version..."
                      className="border-orange-200 focus:border-orange-400 focus:ring-orange-200"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-700">
                      <strong>Important:</strong> Protocol updates will be recorded on the blockchain 
                      for transparency and audit purposes. Participants will be notified of significant changes.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-500 text-white"
                    disabled={!newProtocol.trim() || !protocolChanges.trim()}
                  >
                    Update Protocol
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudyManagement;
