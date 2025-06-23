
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Users, Calendar, MapPin, Activity, Search, Plus, Home, LogOut } from "lucide-react";
import StudySearch from "./StudySearch";

interface ParticipantDashboardProps {
  onBack: () => void;
}

const ParticipantDashboard = ({ onBack }: ParticipantDashboardProps) => {
  const [followedStudies, setFollowedStudies] = useState([
    {
      id: "1",
      title: "COVID-19 Vaccine Efficacy Study",
      status: "Active",
      progress: 65,
      role: "participant",
      nextAppointment: "Dec 28, 2024",
      location: "Stanford Medical Center"
    }
  ]);

  const handleFollowStudy = (studyId: string, role: 'participant' | 'interested') => {
    // Mock data for the new study
    const studyData = {
      "2": {
        title: "Heart Health and Exercise Research",
        status: "Recruiting",
        progress: 0,
        nextAppointment: "Jan 15, 2025",
        location: "Stanford Medical Center"
      },
      "3": {
        title: "Mental Health Technology Study",
        status: "Active", 
        progress: 25,
        nextAppointment: "Jan 10, 2025",
        location: "Online"
      },
      "4": {
        title: "Diabetes Prevention Program",
        status: "Recruiting",
        progress: 0,
        nextAppointment: "Jan 20, 2025", 
        location: "Multiple sites"
      }
    };

    const newStudy = studyData[studyId as keyof typeof studyData];
    if (newStudy) {
      setFollowedStudies(prev => [...prev, {
        id: studyId,
        ...newStudy,
        role
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 flex flex-col px-6">
      {/* Header */}
      <div className="flex items-center justify-between w-full py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-medium text-gray-900">VeriSearch</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            onClick={onBack}
            size="sm"
            className="bg-orange-400 hover:bg-orange-500 text-white border-0 shadow-lg font-normal"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <Button 
            onClick={onBack}
            size="sm"
            variant="outline"
            className="border-orange-200 text-orange-700 hover:bg-orange-50 font-normal"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-medium text-gray-900 mb-2">Participant and Public Dashboard</h1>
            <p className="text-gray-700 font-normal">Track your study participation and discover new research opportunities</p>
          </div>

          <Tabs defaultValue="my-studies" className="space-y-6">
            <TabsList className="bg-white/50 border border-orange-200">
              <TabsTrigger value="my-studies" className="data-[state=active]:bg-orange-400 data-[state=active]:text-white">
                My Studies
              </TabsTrigger>
              <TabsTrigger value="find-studies" className="data-[state=active]:bg-orange-400 data-[state=active]:text-white">
                <Search className="h-4 w-4 mr-2" />
                Find Studies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="my-studies" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-orange-400" />
                      <CardTitle className="text-gray-900 text-lg font-medium">Active Studies</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-medium text-gray-900">{followedStudies.filter(s => s.status === 'Active').length}</div>
                    <p className="text-gray-600 text-sm font-normal">Currently participating</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-orange-400" />
                      <CardTitle className="text-gray-900 text-lg font-medium">Next Appointment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-medium text-gray-900">Dec 28, 2024</div>
                    <p className="text-gray-600 text-sm font-normal">COVID-19 Vaccine Study</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-orange-400" />
                      <CardTitle className="text-gray-900 text-lg font-medium">Completion Rate</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-medium text-gray-900">65%</div>
                    <p className="text-gray-600 text-sm font-normal">Average across studies</p>
                  </CardContent>
                </Card>
              </div>

              {/* My Studies */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-gray-900">My Studies</h2>
                <div className="grid gap-6">
                  {followedStudies.map((study) => (
                    <Card key={study.id} className="border-orange-200 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-gray-900 font-medium">{study.title}</CardTitle>
                            <div className="flex items-center space-x-3">
                              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                                {study.status}
                              </Badge>
                              <Badge variant="outline" className="border-gray-300 text-gray-700">
                                {study.role === 'participant' ? 'Participant' : 'Observer'}
                              </Badge>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-orange-200 text-orange-700 hover:bg-orange-50 font-normal"
                          >
                            View Details
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700 font-normal">Progress</span>
                            <span className="text-gray-700 font-normal">{study.progress}%</span>
                          </div>
                          <Progress value={study.progress} className="h-2" />
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-orange-400" />
                              Next: {study.nextAppointment}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-orange-400" />
                              {study.location}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="find-studies" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-medium text-gray-900">Find New Studies</h2>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200 px-3 py-1">
                    <Plus className="h-3 w-3 mr-1" />
                    Discover Research
                  </Badge>
                </div>
                <p className="text-gray-700 font-normal">Search for studies by name, category, or description to find research opportunities that match your interests.</p>
              </div>
              
              <StudySearch onFollowStudy={handleFollowStudy} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDashboard;
