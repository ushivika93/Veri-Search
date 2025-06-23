import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, FileText, Shield, Users, ExternalLink, Clock, Sparkles, Heart, Zap } from "lucide-react";

interface StudyPublicPageProps {
  onBack: () => void;
}

const StudyPublicPage = ({ onBack }: StudyPublicPageProps) => {
  const studyData = {
    name: "Cardiovascular Health Study 2024",
    sponsor: "University Medical Center",
    description: "A comprehensive longitudinal study examining the relationship between lifestyle factors and cardiovascular health outcomes in adults aged 40-70.",
    status: "Active – Data Collection",
    phase: "Phase III",
    startDate: "March 15, 2024",
    estimatedCompletion: "March 15, 2025",
    participants: 145,
    targetParticipants: 200,
    principalInvestigator: "Dr. Sarah Johnson, MD, PhD",
    irbNumber: "IRB-2024-CV-001",
    walletId: "0x742d35Cc6cF7...",
    protocolVersion: "v2.1"
  };

  const timelineEvents = [
    {
      date: "March 15, 2024",
      event: "Study Initiated",
      description: "Protocol v1.0 submitted and approved by IRB",
      type: "milestone"
    },
    {
      date: "April 2, 2024",
      event: "First Participant Enrolled",
      description: "Recruitment phase began",
      type: "enrollment"
    },
    {
      date: "May 20, 2024",
      event: "Protocol Update",
      description: "Minor amendments made to data collection procedures (v1.1)",
      type: "protocol"
    },
    {
      date: "July 15, 2024",
      event: "Milestone: 100 Participants",
      description: "Reached 50% enrollment target",
      type: "milestone"
    },
    {
      date: "October 8, 2024",
      event: "Protocol Update",
      description: "Enhanced safety monitoring procedures (v2.0)",
      type: "protocol"
    },
    {
      date: "November 12, 2024",
      event: "Safety Review",
      description: "Independent safety monitoring board review completed",
      type: "safety"
    },
    {
      date: "December 15, 2024",
      event: "Protocol Refinement",
      description: "Minor clarifications to inclusion criteria (v2.1)",
      type: "protocol"
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'milestone': return <Calendar className="h-4 w-4 text-blue-600" />;
      case 'enrollment': return <Users className="h-4 w-4 text-green-600" />;
      case 'protocol': return <FileText className="h-4 w-4 text-orange-600" />;
      case 'safety': return <Shield className="h-4 w-4 text-red-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'milestone': return 'border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50';
      case 'enrollment': return 'border-green-200 bg-gradient-to-r from-green-50 to-emerald-50';
      case 'protocol': return 'border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50';
      case 'safety': return 'border-red-200 bg-gradient-to-r from-red-50 to-pink-50';
      default: return 'border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-cyan-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="text-purple-600 hover:text-purple-800 hover:bg-purple-50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">VeriSearch</span>
              </div>
              <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200">
                <Sparkles className="h-3 w-3 mr-1" />
                Public Study Page
              </Badge>
            </div>
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
              <ExternalLink className="h-4 w-4 mr-2" />
              Share Study ✨
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Study Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {studyData.name} 💖
              </h1>
              <p className="text-lg text-gray-600 mb-4">{studyData.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
                  <Heart className="h-3 w-3 mr-1" />
                  {studyData.status}
                </Badge>
                <Badge variant="outline" className="border-purple-200 text-purple-700">{studyData.phase}</Badge>
                <span className="text-sm text-gray-600">
                  Sponsored by <strong>{studyData.sponsor}</strong> 🏥
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="border-green-100 bg-gradient-to-br from-white to-green-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Enrollment</p>
                    <p className="text-2xl font-bold text-green-800">
                      {studyData.participants}/{studyData.targetParticipants}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${(studyData.participants / studyData.targetParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Protocol Version</p>
                    <p className="text-2xl font-bold text-blue-800">{studyData.protocolVersion}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100 bg-gradient-to-br from-white to-orange-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-600">Duration</p>
                    <p className="text-2xl font-bold text-orange-800">12mo</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 bg-gradient-to-br from-white to-green-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Blockchain Verified</p>
                    <p className="text-lg font-bold text-green-700">✓ Verified</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-800 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="timeline" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Timeline</TabsTrigger>
            <TabsTrigger value="protocol" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Protocol Log</TabsTrigger>
            <TabsTrigger value="verification" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Verification</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800">Study Details 📋</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Start Date</p>
                      <p className="text-gray-600">{studyData.startDate}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Est. Completion</p>
                      <p className="text-gray-600">{studyData.estimatedCompletion}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Phase</p>
                      <p className="text-gray-600">{studyData.phase}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">IRB Number</p>
                      <p className="text-gray-600">{studyData.irbNumber}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cyan-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800">Research Team 👥</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-700">Principal Investigator</p>
                    <p className="text-gray-600">{studyData.principalInvestigator}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Institution</p>
                    <p className="text-gray-600">{studyData.sponsor}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Verified Wallet</p>
                    <p className="text-gray-600 font-mono text-xs">{studyData.walletId}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Study Objectives 🎯</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Primary Objective</h4>
                    <p className="text-gray-600">
                      To evaluate the relationship between dietary patterns, physical activity, and cardiovascular 
                      health outcomes in a diverse adult population over a 12-month period.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Secondary Objectives</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Assess the impact of lifestyle interventions on blood pressure and cholesterol levels</li>
                      <li>Examine the correlation between sleep quality and cardiovascular risk factors</li>
                      <li>Evaluate participant adherence to lifestyle modification recommendations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Study Timeline 📅</CardTitle>
                <CardDescription>Complete history of study milestones and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className={`p-4 rounded-xl border ${getEventColor(event.type)}`}>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {getEventIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-800">{event.event} ✨</h4>
                            <span className="text-sm text-gray-600">{event.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="protocol" className="space-y-6">
            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Immutable Protocol Log 🔒</CardTitle>
                <CardDescription>Blockchain-verified protocol versions and changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-green-800">Protocol v2.1 (Current) ✨</h4>
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
                        <Zap className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                    <p className="text-sm text-green-600 mb-2">
                      Minor clarifications to inclusion criteria and data collection procedures
                    </p>
                    <div className="text-xs text-green-500">
                      <p>Hash: 0xa7b8c9d...</p>
                      <p>Timestamp: December 15, 2024, 14:30 UTC</p>
                    </div>
                  </div>

                  <div className="p-4 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-purple-800">Protocol v2.0</h4>
                      <Badge variant="outline" className="border-purple-200 text-purple-700">Superseded</Badge>
                    </div>
                    <p className="text-sm text-purple-600 mb-2">
                      Enhanced safety monitoring procedures and adverse event reporting
                    </p>
                    <div className="text-xs text-purple-500">
                      <p>Hash: 0x1a2b3c4...</p>
                      <p>Timestamp: October 8, 2024, 09:15 UTC</p>
                    </div>
                  </div>

                  <div className="p-4 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-purple-800">Protocol v1.1</h4>
                      <Badge variant="outline" className="border-purple-200 text-purple-700">Superseded</Badge>
                    </div>
                    <p className="text-sm text-purple-600 mb-2">
                      Minor amendments to data collection procedures and participant communication
                    </p>
                    <div className="text-xs text-purple-500">
                      <p>Hash: 0x5e6f7g8...</p>
                      <p>Timestamp: May 20, 2024, 16:45 UTC</p>
                    </div>
                  </div>

                  <div className="p-4 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-purple-800">Protocol v1.0</h4>
                      <Badge variant="outline" className="border-purple-200 text-purple-700">Original</Badge>
                    </div>
                    <p className="text-sm text-purple-600 mb-2">
                      Initial protocol submitted and approved by IRB
                    </p>
                    <div className="text-xs text-purple-500">
                      <p>Hash: 0x9h0i1j2...</p>
                      <p>Timestamp: March 15, 2024, 08:00 UTC</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6">
            <Card className="border-purple-100 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Blockchain Verification 🔗</CardTitle>
                <CardDescription>Immutable verification details and researcher credentials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Verified on Blockchain ✅</p>
                      <p className="text-sm text-green-600">All study data and protocols are immutably recorded</p>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800">Study Verification 🔬</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Study ID:</span>
                        <span className="text-gray-800 font-mono">CV2024-001</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Blockchain Network:</span>
                        <span className="text-gray-800">Ethereum</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contract Address:</span>
                        <span className="text-gray-800 font-mono text-xs">0x4a5b6c7...</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800">Researcher Verification 👨‍🔬</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Researcher Wallet:</span>
                        <span className="text-gray-800 font-mono text-xs">{studyData.walletId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Verification Date:</span>
                        <span className="text-gray-800">Jan 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Institution Verified:</span>
                        <span className="text-green-700">✓ Yes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl">
                  <h4 className="font-medium text-blue-800 mb-2">Transparency Guarantee 🛡️</h4>
                  <p className="text-sm text-blue-700">
                    This study's protocols, updates, and results are permanently recorded on the blockchain, 
                    ensuring complete transparency and preventing data manipulation or selective reporting. ✨
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudyPublicPage;
