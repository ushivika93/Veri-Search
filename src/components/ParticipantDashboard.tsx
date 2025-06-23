
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Calendar, Eye, FileText, LogOut, Shield, TrendingUp, Users, Sparkles, Heart } from "lucide-react";

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
      case 'analyzing': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'published': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-orange-100 text-orange-700 border-orange-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">VeriSearch</span>
              </div>
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                <Sparkles className="h-3 w-3 mr-1" />
                Participant
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative hover:bg-gray-50">
                <Bell className="h-5 w-5 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </div>
              </Button>
              <Button variant="ghost" onClick={onLogout} className="text-gray-600 hover:text-gray-800 hover:bg-gray-50">
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hey Sarah! 👋 Welcome back!
          </h1>
          <p className="text-gray-600">Track your studies and stay in the loop about your research journey! ✨</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Active Studies</p>
                  <p className="text-2xl font-bold text-orange-800">3</p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Notifications</p>
                  <p className="text-2xl font-bold text-orange-800">3</p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Bell className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Study Duration</p>
                  <p className="text-2xl font-bold text-orange-800">8mo</p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Published Results</p>
                  <p className="text-2xl font-bold text-orange-800">1</p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="studies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-400 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="studies" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">My Studies</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="studies" className="space-y-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-orange-500 text-white border-0' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}
              >
                All Studies ✨
              </Button>
              <Button
                variant={filter === 'ongoing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('ongoing')}
                className={filter === 'ongoing' ? 'bg-blue-500 text-white border-0' : 'border-blue-200 text-blue-700 hover:bg-blue-50'}
              >
                Ongoing 🚀
              </Button>
              <Button
                variant={filter === 'analyzing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('analyzing')}
                className={filter === 'analyzing' ? 'bg-yellow-500 text-white border-0' : 'border-yellow-200 text-yellow-700 hover:bg-yellow-50'}
              >
                Analyzing 🔍
              </Button>
              <Button
                variant={filter === 'published' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('published')}
                className={filter === 'published' ? 'bg-green-500 text-white border-0' : 'border-green-200 text-green-700 hover:bg-green-50'}
              >
                Published 🎉
              </Button>
            </div>

            {/* Studies List */}
            <div className="space-y-4">
              {filteredStudies.map((study) => (
                <Card key={study.id} className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-gray-800 mb-2">{study.name}</CardTitle>
                        <CardDescription className="text-gray-600">
                          Sponsored by {study.sponsor} 🏥
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {study.notifications > 0 && (
                          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                            <Heart className="h-3 w-3 mr-1" />
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
                        <p className="font-medium text-gray-700">Enrolled</p>
                        <p className="text-gray-600">{study.enrolled}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Last Update</p>
                        <p className="text-gray-600">{study.lastUpdate}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Protocol Version</p>
                        <p className="text-gray-600">{study.protocolVersion}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                        View Timeline 📊
                      </Button>
                      <Button 
                        onClick={onViewStudy}
                        className="bg-orange-500 hover:bg-orange-600 text-white border-0"
                        size="sm"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details ✨
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Recent Notifications 🔔</CardTitle>
                <CardDescription>Stay updated on your research journey!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50 rounded-r-lg">
                  <p className="font-medium text-blue-800">Protocol Update - Cardiovascular Health Study 💙</p>
                  <p className="text-sm text-blue-600">Study protocol updated to version 2.1. Check out the changes!</p>
                  <p className="text-xs text-blue-500 mt-1">2 days ago</p>
                </div>
                
                <div className="border-l-4 border-green-400 pl-4 py-2 bg-green-50 rounded-r-lg">
                  <p className="font-medium text-green-800">Results Published - Sleep Quality Research 🎉</p>
                  <p className="text-sm text-green-600">Amazing news! Final results are now available for you to explore.</p>
                  <p className="text-xs text-green-500 mt-1">3 weeks ago</p>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50 rounded-r-lg">
                  <p className="font-medium text-orange-800">Study Phase Change - Diabetes Prevention Trial 🔄</p>
                  <p className="text-sm text-orange-600">Exciting progress! Study has moved to analysis phase.</p>
                  <p className="text-xs text-orange-500 mt-1">1 week ago</p>
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
