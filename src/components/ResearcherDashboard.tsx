
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, LogOut, Plus, Shield, Users, Calendar, TrendingUp, Edit } from "lucide-react";

interface ResearcherDashboardProps {
  onLogout: () => void;
}

const ResearcherDashboard = ({ onLogout }: ResearcherDashboardProps) => {
  const [isNewStudyOpen, setIsNewStudyOpen] = useState(false);
  const [newStudy, setNewStudy] = useState({
    name: "",
    description: "",
    protocol: "",
    irbRef: "",
    phase: "",
    estimatedDuration: ""
  });

  const mockStudies = [
    {
      id: 1,
      name: "AI-Assisted Diagnostic Tool Validation",
      description: "Evaluating the effectiveness of AI in medical diagnosis",
      status: "Active – Recruiting",
      phase: "Phase II",
      participants: 145,
      targetParticipants: 200,
      created: "February 1, 2024",
      lastUpdated: "Yesterday",
      protocolVersion: "v1.2"
    },
    {
      id: 2,
      name: "Remote Patient Monitoring Study",
      description: "Assessment of wearable devices for chronic condition management",
      status: "Data Collection",
      phase: "Phase III",
      participants: 89,
      targetParticipants: 150,
      created: "December 15, 2023",
      lastUpdated: "3 days ago",
      protocolVersion: "v2.0"
    },
    {
      id: 3,
      name: "Telemedicine Effectiveness Analysis",
      description: "Comparing outcomes between virtual and in-person consultations",
      status: "Analysis Phase",
      phase: "Phase III",
      participants: 300,
      targetParticipants: 300,
      created: "September 10, 2023",
      lastUpdated: "1 week ago",
      protocolVersion: "v1.1"
    }
  ];

  const handleSubmitStudy = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting new study:", newStudy);
    setIsNewStudyOpen(false);
    setNewStudy({
      name: "",
      description: "",
      protocol: "",
      irbRef: "",
      phase: "",
      estimatedDuration: ""
    });
  };

  const getStatusColor = (status: string) => {
    if (status.includes("Recruiting")) return "bg-blue-100 text-blue-700 border-blue-200";
    if (status.includes("Collection")) return "bg-green-100 text-green-700 border-green-200";
    if (status.includes("Analysis")) return "bg-orange-100 text-orange-700 border-orange-200";
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-slate-800">VeriSearch</span>
              </div>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">Researcher</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog open={isNewStudyOpen} onOpenChange={setIsNewStudyOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Study
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Submit New Study</DialogTitle>
                    <DialogDescription>
                      Add a new research study to the VeriSearch platform for transparent tracking.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmitStudy} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="studyName">Study Name *</Label>
                      <Input
                        id="studyName"
                        value={newStudy.name}
                        onChange={(e) => setNewStudy({...newStudy, name: e.target.value})}
                        placeholder="Enter study name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={newStudy.description}
                        onChange={(e) => setNewStudy({...newStudy, description: e.target.value})}
                        placeholder="Brief description of the study objectives and methodology"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="protocol">Protocol Document/Link *</Label>
                      <Textarea
                        id="protocol"
                        value={newStudy.protocol}
                        onChange={(e) => setNewStudy({...newStudy, protocol: e.target.value})}
                        placeholder="Upload protocol document or provide link to detailed protocol"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phase">Study Phase</Label>
                        <Select value={newStudy.phase} onValueChange={(value) => setNewStudy({...newStudy, phase: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select phase" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="preclinical">Preclinical</SelectItem>
                            <SelectItem value="phase1">Phase I</SelectItem>
                            <SelectItem value="phase2">Phase II</SelectItem>
                            <SelectItem value="phase3">Phase III</SelectItem>
                            <SelectItem value="phase4">Phase IV</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="duration">Estimated Duration</Label>
                        <Input
                          id="duration"
                          value={newStudy.estimatedDuration}
                          onChange={(e) => setNewStudy({...newStudy, estimatedDuration: e.target.value})}
                          placeholder="e.g., 12 months"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="irbRef">IRB Reference Number *</Label>
                      <Input
                        id="irbRef"
                        value={newStudy.irbRef}
                        onChange={(e) => setNewStudy({...newStudy, irbRef: e.target.value})}
                        placeholder="Institutional Review Board reference number"
                        required
                      />
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <strong>Blockchain Verification:</strong> This study will be recorded on the blockchain 
                        for immutable tracking. Your researcher wallet ID will be associated with this submission.
                      </p>
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setIsNewStudyOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Submit Study
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button variant="ghost" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome, Dr. Johnson</h1>
          <p className="text-slate-600">Manage your research studies with transparency and blockchain verification.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Active Studies</p>
                  <p className="text-2xl font-bold text-slate-800">3</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Participants</p>
                  <p className="text-2xl font-bold text-slate-800">534</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg Duration</p>
                  <p className="text-2xl font-bold text-slate-800">8mo</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Publications</p>
                  <p className="text-2xl font-bold text-slate-800">12</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="studies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-600">
            <TabsTrigger value="studies">My Studies</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>

          <TabsContent value="studies" className="space-y-6">
            {/* Studies List */}
            <div className="space-y-4">
              {mockStudies.map((study) => (
                <Card key={study.id} className="border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-slate-800 mb-2">{study.name}</CardTitle>
                        <CardDescription className="text-slate-600 mb-3">
                          {study.description}
                        </CardDescription>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(study.status)}>
                            {study.status}
                          </Badge>
                          <Badge variant="outline">{study.phase}</Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-slate-700">Participants</p>
                        <p className="text-slate-600">{study.participants}/{study.targetParticipants}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Created</p>
                        <p className="text-slate-600">{study.created}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Last Updated</p>
                        <p className="text-slate-600">{study.lastUpdated}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Protocol Version</p>
                        <p className="text-slate-600">{study.protocolVersion}</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Enrollment Progress</span>
                        <span className="text-slate-800 font-medium">
                          {Math.round((study.participants / study.targetParticipants) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(study.participants / study.targetParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <Button variant="outline" size="sm">
                        Update Status
                      </Button>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          View Timeline
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
                          Manage Study
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Research Analytics</CardTitle>
                <CardDescription>Overview of your research portfolio performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-slate-500">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                  <p>Analytics dashboard coming soon</p>
                  <p className="text-sm">Track study performance, participant engagement, and research outcomes</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Blockchain Verification</CardTitle>
                <CardDescription>Your researcher verification status and blockchain records</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Verified Researcher</p>
                      <p className="text-sm text-green-600">Your identity has been verified on the blockchain</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Verified</Badge>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-800">Researcher Details</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-slate-700">Wallet Address</p>
                      <p className="text-slate-600 font-mono text-xs">0x742d35Cc6cF7...</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Institution</p>
                      <p className="text-slate-600">University Medical Center</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Verification Date</p>
                      <p className="text-slate-600">January 15, 2024</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Studies Submitted</p>
                      <p className="text-slate-600">3 studies</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResearcherDashboard;
