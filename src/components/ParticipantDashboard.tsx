
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Calendar, Eye, FileText, LogOut, Shield, TrendingUp, Users } from "lucide-react";

interface ParticipantDashboardProps {
  onViewStudy: () => void;
  onLogout: () => void;
}

const ParticipantDashboard = ({ onViewStudy, onLogout }: ParticipantDashboardProps) => {
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'analyzing' | 'published'>('all');

  const mockStudies = [
    {
      id: 1,
      name: "Cardiovascular Health Study 2024",
      sponsor: "University Medical Center",
      status: "Active – Data Collection",
      statusType: "ongoing" as const,
      enrolled: "March 15, 2024",
      lastUpdate: "2 days ago",
      protocolVersion: "v2.1",
      notifications: 2
    },
    {
      id: 2,
      name: "Diabetes Prevention Trial",
      sponsor: "National Health Institute",
      status: "Now Analyzing",
      statusType: "analyzing" as const,
      enrolled: "January 8, 2024",
      lastUpdate: "1 week ago", 
      protocolVersion: "v1.3",
      notifications: 0
    },
    {
      id: 3,
      name: "Sleep Quality Research",
      sponsor: "Sleep Research Foundation",
      status: "Results Published",
      statusType: "published" as const,
      enrolled: "October 2, 2023",
      lastUpdate: "3 weeks ago",
      protocolVersion: "v1.0",
      notifications: 1
    }
  ];

  const filteredStudies = filter === 'all' 
    ? mockStudies 
    : mockStudies.filter(study => study.statusType === filter);

  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case 'ongoing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'analyzing': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'published': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
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
              <Badge className="bg-green-100 text-green-700 border-green-200">Participant</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </div>
              </Button>
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
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back, Sarah</h1>
          <p className="text-slate-600">Track your enrolled studies and stay informed about research progress.</p>
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
                  <p className="text-sm font-medium text-slate-600">Notifications</p>
                  <p className="text-2xl font-bold text-slate-800">3</p>
                </div>
                <Bell className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Study Duration</p>
                  <p className="text-2xl font-bold text-slate-800">8mo</p>
                </div>
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Published Results</p>
                  <p className="text-2xl font-bold text-slate-800">1</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="studies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-400">
            <TabsTrigger value="studies">My Studies</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="studies" className="space-y-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-slate-800' : ''}
              >
                All Studies
              </Button>
              <Button
                variant={filter === 'ongoing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('ongoing')}
                className={filter === 'ongoing' ? 'bg-blue-600' : ''}
              >
                Ongoing
              </Button>
              <Button
                variant={filter === 'analyzing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('analyzing')}
                className={filter === 'analyzing' ? 'bg-orange-600' : ''}
              >
                Analyzing
              </Button>
              <Button
                variant={filter === 'published' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('published')}
                className={filter === 'published' ? 'bg-green-600' : ''}
              >
                Published
              </Button>
            </div>

            {/* Studies List */}
            <div className="space-y-4">
              {filteredStudies.map((study) => (
                <Card key={study.id} className="border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-slate-800 mb-2">{study.name}</CardTitle>
                        <CardDescription className="text-slate-600">
                          Sponsored by {study.sponsor}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {study.notifications > 0 && (
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            {study.notifications} new
                          </Badge>
                        )}
                        <Badge className={getStatusColor(study.statusType)}>
                          {study.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-slate-700">Enrolled</p>
                        <p className="text-slate-600">{study.enrolled}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Last Update</p>
                        <p className="text-slate-600">{study.lastUpdate}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Protocol Version</p>
                        <p className="text-slate-600">{study.protocolVersion}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <Button variant="outline" size="sm">
                        View Timeline
                      </Button>
                      <Button 
                        onClick={onViewStudy}
                        className="bg-blue-600 hover:bg-blue-700"
                        size="sm"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Recent Notifications</CardTitle>
                <CardDescription>Stay updated on your enrolled studies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-medium text-slate-800">Protocol Update - Cardiovascular Health Study</p>
                  <p className="text-sm text-slate-600">Study protocol updated to version 2.1. Review changes.</p>
                  <p className="text-xs text-slate-500 mt-1">2 days ago</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-medium text-slate-800">Results Published - Sleep Quality Research</p>
                  <p className="text-sm text-slate-600">Final results have been published and are now available.</p>
                  <p className="text-xs text-slate-500 mt-1">3 weeks ago</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <p className="font-medium text-slate-800">Study Phase Change - Diabetes Prevention Trial</p>
                  <p className="text-sm text-slate-600">Study has moved to analysis phase. Data collection complete.</p>
                  <p className="text-xs text-slate-500 mt-1">1 week ago</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParticipantDashboard;
