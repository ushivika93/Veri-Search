
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Users, Calendar, FileText, Settings, FileUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStudyContext } from "../contexts/StudyContext";
import { toast } from "sonner";

const ResearcherDashboard = () => {
  const navigate = useNavigate();
  const { studies } = useStudyContext();
  const [isNewStudyOpen, setIsNewStudyOpen] = useState(false);
  const [protocolFile, setProtocolFile] = useState<File | null>(null);
  
  // Form state for new study
  const [newStudy, setNewStudy] = useState({
    name: "",
    description: "",
    sponsor: "",
    phase: "",
    targetParticipants: "",
    irbRef: "",
    fundingAgency: "",
    principalInvestigator: "",
    studyType: "",
    primaryEndpoint: "",
    secondaryEndpoints: "",
    inclusionCriteria: "",
    exclusionCriteria: "",
    studyDuration: "",
    estimatedStartDate: "",
    estimatedCompletionDate: "",
    protocolVersion: "v1.0"
  });

  // Filter to show only researcher studies (those with description and phase)
  const researcherStudies = studies.filter(study => study.description && study.phase);

  const handleInputChange = (field: string, value: string) => {
    setNewStudy(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProtocolFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (allowedTypes.includes(fileExtension)) {
        setProtocolFile(file);
        toast.success(`Protocol file selected: ${file.name}`);
      } else {
        toast.error("Please select a valid file type (.pdf, .doc, .docx, .txt)");
        e.target.value = '';
      }
    }
  };

  const handleCreateStudy = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!newStudy.name.trim() || !newStudy.description.trim() || !newStudy.sponsor.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In a real app, this would create the study via API
    toast.success(`Study "${newStudy.name}" created successfully!`);
    
    // Reset form
    setNewStudy({
      name: "",
      description: "",
      sponsor: "",
      phase: "",
      targetParticipants: "",
      irbRef: "",
      fundingAgency: "",
      principalInvestigator: "",
      studyType: "",
      primaryEndpoint: "",
      secondaryEndpoints: "",
      inclusionCriteria: "",
      exclusionCriteria: "",
      studyDuration: "",
      estimatedStartDate: "",
      estimatedCompletionDate: "",
      protocolVersion: "v1.0"
    });
    setProtocolFile(null);
    setIsNewStudyOpen(false);
  };

  const getStatusColor = (status: string) => {
    if (status.includes("Recruiting")) return "bg-blue-100 text-blue-700 border-blue-200";
    if (status.includes("Collection")) return "bg-green-100 text-green-700 border-green-200";
    if (status.includes("Analysis")) return "bg-orange-100 text-orange-700 border-orange-200";
    return "bg-purple-100 text-purple-700 border-purple-200";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium text-gray-900">My Studies</h2>
          <p className="text-gray-600 mt-1">Manage and monitor your research studies</p>
        </div>
        
        <Dialog open={isNewStudyOpen} onOpenChange={setIsNewStudyOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange-400 hover:bg-orange-500 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Study
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Study</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new research study.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleCreateStudy} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studyName">Study Name *</Label>
                  <Input
                    id="studyName"
                    value={newStudy.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter study title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sponsor">Sponsor *</Label>
                  <Input
                    id="sponsor"
                    value={newStudy.sponsor}
                    onChange={(e) => handleInputChange("sponsor", e.target.value)}
                    placeholder="Enter sponsor organization"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Study Description *</Label>
                <Textarea
                  id="description"
                  value={newStudy.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Provide a detailed description of the study"
                  rows={3}
                  required
                />
              </div>

              {/* Study Details */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phase">Study Phase</Label>
                  <Select value={newStudy.phase} onValueChange={(value) => handleInputChange("phase", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select phase" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Phase I">Phase I</SelectItem>
                      <SelectItem value="Phase II">Phase II</SelectItem>
                      <SelectItem value="Phase III">Phase III</SelectItem>
                      <SelectItem value="Phase IV">Phase IV</SelectItem>
                      <SelectItem value="Observational">Observational</SelectItem>
                      <SelectItem value="Pilot">Pilot Study</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studyType">Study Type</Label>
                  <Select value={newStudy.studyType} onValueChange={(value) => handleInputChange("studyType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Interventional">Interventional</SelectItem>
                      <SelectItem value="Observational">Observational</SelectItem>
                      <SelectItem value="Expanded Access">Expanded Access</SelectItem>
                      <SelectItem value="Diagnostic">Diagnostic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetParticipants">Target Participants</Label>
                  <Input
                    id="targetParticipants"
                    type="number"
                    value={newStudy.targetParticipants}
                    onChange={(e) => handleInputChange("targetParticipants", e.target.value)}
                    placeholder="e.g., 200"
                  />
                </div>
              </div>

              {/* Administrative Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="irbRef">IRB Reference Number</Label>
                  <Input
                    id="irbRef"
                    value={newStudy.irbRef}
                    onChange={(e) => handleInputChange("irbRef", e.target.value)}
                    placeholder="e.g., IRB-2024-001"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fundingAgency">Funding Agency</Label>
                  <Input
                    id="fundingAgency"
                    value={newStudy.fundingAgency}
                    onChange={(e) => handleInputChange("fundingAgency", e.target.value)}
                    placeholder="e.g., NIH, NSF"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="principalInvestigator">Principal Investigator</Label>
                <Input
                  id="principalInvestigator"
                  value={newStudy.principalInvestigator}
                  onChange={(e) => handleInputChange("principalInvestigator", e.target.value)}
                  placeholder="Enter PI name"
                />
              </div>

              {/* Study Timeline */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studyDuration">Study Duration</Label>
                  <Input
                    id="studyDuration"
                    value={newStudy.studyDuration}
                    onChange={(e) => handleInputChange("studyDuration", e.target.value)}
                    placeholder="e.g., 12 months"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedStartDate">Estimated Start Date</Label>
                  <Input
                    id="estimatedStartDate"
                    type="date"
                    value={newStudy.estimatedStartDate}
                    onChange={(e) => handleInputChange("estimatedStartDate", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedCompletionDate">Estimated Completion Date</Label>
                  <Input
                    id="estimatedCompletionDate"
                    type="date"
                    value={newStudy.estimatedCompletionDate}
                    onChange={(e) => handleInputChange("estimatedCompletionDate", e.target.value)}
                  />
                </div>
              </div>

              {/* Study Endpoints */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryEndpoint">Primary Endpoint</Label>
                  <Textarea
                    id="primaryEndpoint"
                    value={newStudy.primaryEndpoint}
                    onChange={(e) => handleInputChange("primaryEndpoint", e.target.value)}
                    placeholder="Describe the primary endpoint of the study"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondaryEndpoints">Secondary Endpoints</Label>
                  <Textarea
                    id="secondaryEndpoints"
                    value={newStudy.secondaryEndpoints}
                    onChange={(e) => handleInputChange("secondaryEndpoints", e.target.value)}
                    placeholder="Describe any secondary endpoints"
                    rows={2}
                  />
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="inclusionCriteria">Inclusion Criteria</Label>
                  <Textarea
                    id="inclusionCriteria"
                    value={newStudy.inclusionCriteria}
                    onChange={(e) => handleInputChange("inclusionCriteria", e.target.value)}
                    placeholder="List inclusion criteria..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="exclusionCriteria">Exclusion Criteria</Label>
                  <Textarea
                    id="exclusionCriteria"
                    value={newStudy.exclusionCriteria}
                    onChange={(e) => handleInputChange("exclusionCriteria", e.target.value)}
                    placeholder="List exclusion criteria..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Protocol Upload */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="protocolVersion">Protocol Version</Label>
                  <Input
                    id="protocolVersion"
                    value={newStudy.protocolVersion}
                    onChange={(e) => handleInputChange("protocolVersion", e.target.value)}
                    placeholder="e.g., v1.0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="protocolFile">Upload Protocol Document</Label>
                  <div className="flex items-center space-x-3">
                    <div className="relative flex-1">
                      <Input
                        id="protocolFile"
                        type="file"
                        onChange={handleProtocolFileChange}
                        accept=".pdf,.doc,.docx,.txt"
                        className="file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
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
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsNewStudyOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white">
                  Create Study
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Studies Grid */}
      <div className="grid gap-6">
        {researcherStudies.map((study) => (
          <Card key={study.id} className="border-white/30 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-gray-900 mb-2 font-medium">{study.name}</CardTitle>
                  <div className="space-y-1 mb-3">
                    <CardDescription className="text-gray-700 text-sm">
                      <span className="font-medium">IRB:</span> {study.irbRef || "Not specified"}
                    </CardDescription>
                    <CardDescription className="text-gray-700 text-sm">
                      <span className="font-medium">Funding:</span> {study.fundingAgency || "Not specified"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(study.status)}>
                      {study.status}
                    </Badge>
                    <Badge variant="outline" className="border-orange-200 text-orange-700">
                      {study.phase}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/study/${study.id}/manage`)}
                  className="text-gray-600 hover:text-gray-800 hover:bg-orange-50"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Manage
                </Button>
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
                    <p className="font-medium text-gray-700">Protocol</p>
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
        ))}
      </div>

      {researcherStudies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No studies found. Create your first study to get started.</p>
          <Button 
            onClick={() => setIsNewStudyOpen(true)}
            className="bg-orange-400 hover:bg-orange-500 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create First Study
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResearcherDashboard;
