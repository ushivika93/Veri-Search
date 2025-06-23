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
import { FileText, LogOut, Plus, Shield, Users, Calendar, TrendingUp, Edit, Sparkles, Zap } from "lucide-react";

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
    if (status.includes("Recruiting")) return "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200";
    if (status.includes("Collection")) return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200";
    if (status.includes("Analysis")) return "bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 border-orange-200";
    return "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-cyan-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">VeriSearch</span>
              </div>
              <Badge className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200">
                <Zap className="h-3 w-3 mr-1" />
                Researcher
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog open={isNewStudyOpen} onOpenChange={setIsNewStudyOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                    <Plus className="h-4 w-4 mr-2" />
                    New Study ✨
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur-sm border-purple-200">
                  <DialogHeader>
                    <DialogTitle className="text-gray-800">Submit New Study 🚀</DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Add a new research study to the VeriSearch platform for transparent tracking.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmitStudy} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="studyName" className="text-gray-700">Study Name *</Label>
                      <Input
                        id="studyName"
                        value={newStudy.name}
                        onChange={(e) => setNewStudy({...newStudy, name: e.target.value})}
                        placeholder="Enter study name"
                        required
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-gray-700">Description *</Label>
                      <Textarea
                        id="description"
                        value={newStudy.description}
                        onChange={(e) => setNewStudy({...newStudy, description: e.target.value})}
                        placeholder="Brief description of the study objectives and methodology"
                        required
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="protocol" className="text-gray-700">Protocol Document/Link *</Label>
                      <Textarea
                        id="protocol"
                        value={newStudy.protocol}
                        onChange={(e) => setNewStudy({...newStudy, protocol: e.target.value})}
                        placeholder="Upload protocol document or provide link to detailed protocol"
                        required
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-200"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phase" className="text-gray-700">Study Phase</Label>
                        <Select value={newStudy.phase} onValueChange={(value) => setNewStudy({...newStudy, phase: value})}>
                          <SelectTrigger className="border-purple-200 focus:border-purple-400 focus:ring-purple-200">
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
                        <Label htmlFor="duration" className="text-gray-700">Estimated Duration</Label>
                        <Input
                          id="duration"
                          value={newStudy.estimatedDuration}
                          onChange={(e) => setNewStudy({...newStudy, estimatedDuration: e.target.value})}
                          placeholder="e.g., 12 months"
                          className="border-purple-200 focus:border-purple-400 focus:ring-purple-200"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="irbRef" className="text-gray-700">IRB Reference Number *</Label>
                      <Input
                        id="irbRef"
                        value={newStudy.irbRef}
                        onChange={(e) => setNewStudy({...newStudy, irbRef: e.target.value})}
                        placeholder="Institutional Review Board reference number"
                        required
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-200"
                      />
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg border border-purple-200">
                      <p className="text-sm text-purple-700">
                        <strong>🔗 Blockchain Verification:</strong> This study will be recorded on the blockchain 
                        for immutable tracking. Your researcher wallet ID will be associated with this submission.
                      </p>
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setIsNewStudyOpen(false)}
                        className="border-purple-200 text-purple-700 hover:bg-purple-50"
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
                      >
                        🚀 Submit Study
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button variant="ghost" onClick={onLogout} className="text-purple-600 hover:text-purple-800 hover:bg-purple-50">
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
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Welcome, Dr. Johnson! 👨‍🔬
          </h1>
          <p className="text-gray-600">Manage your research studies with transparency and blockchain magic! ✨</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-purple-100 bg-gradient-to-br from-white to-purple-50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Active Studies</p>
                  <p className="text-2xl font-bold text-purple-800">3</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100 bg-gradient-to-br from-white to-green-50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Total Participants</p>
                  <p className="text-2xl font-bold text-green-800">534</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100 bg-gradient-to-br from-white to-orange-50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Avg Duration</p>
                  <p className="text-2xl font-bold text-orange-800">8mo</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-cyan-100 bg-gradient-to-br from-white to-cyan-50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-cyan-600">Publications</p>
                  <p className="text-2xl font-bold text-cyan-800">12</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="studies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-600 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="studies" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">My Studies</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Analytics</TabsTrigger>
            <TabsTrigger value="verification" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Verification</TabsTrigger>
          </TabsList>

          <TabsContent value="studies" className="space-y-6">
            {/* Studies List */}
            <div className="space-y-4">
              {mockStudies.map((study) => (
                <Card key={study.id} className="border-purple-100 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-gray-800 mb-2">{study.name}</CardTitle>
                        <CardDescription className="text-gray-600 mb-3">
                          {study.description} 🔬
                        </CardDescription>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(study.status)}>
                            {study.status}
                          </Badge>
                          <Badge variant="outline" className="border-purple-200 text-purple-700">{study.phase}</Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800 hover:bg-purple-50">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700">Participants</p>
                        <p className="text-gray-600">{study.participants}/{study.targetParticipants}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Created</p>
                        <p className="text-gray-600">{study.created}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Last Updated</p>
                        <p className="text-gray-600">{study.lastUpdated}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Protocol Version</p>
                        <p className="text-gray-600">{study.protocolVersion}</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Enrollment Progress ✨</span>
                        <span className="text-gray-800 font-medium">
                          {Math.round((study.participants / study.targetParticipants) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-purple-100 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${(study.participants / study.targetParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-purple-100">
                      <Button variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                        Update Status 🔄
                      </Button>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                          View Timeline 📊
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0" size="sm">
                          Manage Study ⚡
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Research Analytics 📊</CardTitle>
                <CardDescription>Overview of your research portfolio performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">Analytics dashboard coming soon! 🚀</p>
                  <p className="text-sm text-gray-600">Track study performance, participant engagement, and research outcomes</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6">
            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Blockchain Verification 🔗</CardTitle>
                <CardDescription>Your researcher verification status and blockchain records</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Verified Researcher ✅</p>
                      <p className="text-sm text-green-600">Your identity has been verified on the blockchain</p>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Researcher Details 👨‍🔬</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Wallet Address</p>
                      <p className="text-gray-600 font-mono text-xs">0x742d35Cc6cF7...</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Institution</p>
                      <p className="text-gray-600">University Medical Center</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Verification Date</p>
                      <p className="text-gray-600">January 15, 2024</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Studies Submitted</p>
                      <p className="text-gray-600">3 studies</p>
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
