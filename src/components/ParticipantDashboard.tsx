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
      case 'ongoing': return 'bg-gradient-to-r from-anthropic-orange-light to-anthropic-coral-light text-anthropic-text-dark border-anthropic-orange/20';
      case 'analyzing': return 'bg-gradient-to-r from-anthropic-accent/20 to-anthropic-coral-light text-anthropic-text-dark border-anthropic-accent/20';
      case 'published': return 'bg-gradient-to-r from-anthropic-cream to-anthropic-warm-gray/30 text-anthropic-text-dark border-anthropic-warm-gray/30';
      default: return 'bg-gradient-to-r from-anthropic-coral-light to-anthropic-orange-light text-anthropic-text-dark border-anthropic-coral/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-anthropic-cream via-white to-anthropic-orange-light">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-anthropic-warm-gray/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-anthropic-orange to-anthropic-coral rounded-xl flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-anthropic-orange to-anthropic-coral bg-clip-text text-transparent">VeriSearch</span>
              </div>
              <Badge className="bg-gradient-to-r from-anthropic-coral-light to-anthropic-accent/20 text-anthropic-text-dark border-anthropic-coral/20">
                <Sparkles className="h-3 w-3 mr-1" />
                Participant
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative hover:bg-anthropic-orange-light/30">
                <Bell className="h-5 w-5 text-anthropic-orange" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-anthropic-coral to-anthropic-accent rounded-full text-xs text-white flex items-center justify-center">
                  3
                </div>
              </Button>
              <Button variant="ghost" onClick={onLogout} className="text-anthropic-orange hover:text-anthropic-coral hover:bg-anthropic-orange-light/30">
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
          <h1 className="text-3xl font-bold bg-gradient-to-r from-anthropic-orange to-anthropic-coral bg-clip-text text-transparent mb-2">
            Hey Sarah! 👋 Welcome back!
          </h1>
          <p className="text-anthropic-text-dark/70">Track your studies and stay in the loop about your research journey! ✨</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-anthropic-coral/20 bg-gradient-to-br from-white to-anthropic-coral-light/30 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-anthropic-text-dark/80">Active Studies</p>
                  <p className="text-2xl font-bold text-anthropic-text-dark">3</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-anthropic-coral to-anthropic-accent rounded-2xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-anthropic-orange/20 bg-gradient-to-br from-white to-anthropic-orange-light/40 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-anthropic-text-dark/80">Notifications</p>
                  <p className="text-2xl font-bold text-anthropic-text-dark">3</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-anthropic-orange to-anthropic-coral rounded-2xl flex items-center justify-center">
                  <Bell className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-anthropic-accent/20 bg-gradient-to-br from-white to-anthropic-cream hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-anthropic-text-dark/80">Study Duration</p>
                  <p className="text-2xl font-bold text-anthropic-text-dark">8mo</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-anthropic-accent to-anthropic-coral rounded-2xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-anthropic-warm-gray/30 bg-gradient-to-br from-white to-anthropic-warm-gray/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-anthropic-text-dark/80">Published Results</p>
                  <p className="text-2xl font-bold text-anthropic-text-dark">1</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-anthropic-warm-gray to-anthropic-orange rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="studies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-400 bg-white/90 backdrop-blur-sm border border-anthropic-warm-gray/30">
            <TabsTrigger value="studies" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-anthropic-orange data-[state=active]:to-anthropic-coral data-[state=active]:text-white">My Studies</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-anthropic-orange data-[state=active]:to-anthropic-coral data-[state=active]:text-white">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="studies" className="space-y-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-gradient-to-r from-anthropic-orange to-anthropic-coral text-white border-0' : 'border-anthropic-orange/30 text-anthropic-text-dark hover:bg-anthropic-orange-light/30'}
              >
                All Studies ✨
              </Button>
              <Button
                variant={filter === 'ongoing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('ongoing')}
                className={filter === 'ongoing' ? 'bg-gradient-to-r from-anthropic-coral to-anthropic-accent text-white border-0' : 'border-anthropic-coral/30 text-anthropic-text-dark hover:bg-anthropic-coral-light/30'}
              >
                Ongoing 🚀
              </Button>
              <Button
                variant={filter === 'analyzing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('analyzing')}
                className={filter === 'analyzing' ? 'bg-gradient-to-r from-anthropic-accent to-anthropic-orange text-white border-0' : 'border-anthropic-accent/30 text-anthropic-text-dark hover:bg-anthropic-accent/20'}
              >
                Analyzing 🔍
              </Button>
              <Button
                variant={filter === 'published' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('published')}
                className={filter === 'published' ? 'bg-gradient-to-r from-anthropic-warm-gray to-anthropic-orange text-white border-0' : 'border-anthropic-warm-gray/40 text-anthropic-text-dark hover:bg-anthropic-warm-gray/20'}
              >
                Published 🎉
              </Button>
            </div>

            {/* Studies List */}
            <div className="space-y-4">
              {filteredStudies.map((study) => (
                <Card key={study.id} className="border-anthropic-warm-gray/30 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-anthropic-text-dark mb-2">{study.name}</CardTitle>
                        <CardDescription className="text-anthropic-text-dark/70">
                          Sponsored by {study.sponsor} 🏥
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {study.notifications > 0 && (
                          <Badge className="bg-gradient-to-r from-anthropic-coral-light to-anthropic-accent/20 text-anthropic-text-dark border-anthropic-coral/20">
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
                        <p className="font-medium text-anthropic-text-dark/80">Enrolled</p>
                        <p className="text-anthropic-text-dark/70">{study.enrolled}</p>
                      </div>
                      <div>
                        <p className="font-medium text-anthropic-text-dark/80">Last Update</p>
                        <p className="text-anthropic-text-dark/70">{study.lastUpdate}</p>
                      </div>
                      <div>
                        <p className="font-medium text-anthropic-text-dark/80">Protocol Version</p>
                        <p className="text-anthropic-text-dark/70">{study.protocolVersion}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-anthropic-warm-gray/30">
                      <Button variant="outline" size="sm" className="border-anthropic-warm-gray/50 text-anthropic-text-dark hover:bg-anthropic-orange-light/30">
                        View Timeline 📊
                      </Button>
                      <Button 
                        onClick={onViewStudy}
                        className="bg-gradient-to-r from-anthropic-orange to-anthropic-coral hover:from-anthropic-coral hover:to-anthropic-accent text-white border-0"
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
            <Card className="border-anthropic-warm-gray/30 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-anthropic-text-dark">Recent Notifications 🔔</CardTitle>
                <CardDescription>Stay updated on your research journey!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-anthropic-orange pl-4 py-2 bg-gradient-to-r from-anthropic-orange-light/30 to-anthropic-coral-light/30 rounded-r-lg">
                  <p className="font-medium text-anthropic-text-dark">Protocol Update - Cardiovascular Health Study 💙</p>
                  <p className="text-sm text-anthropic-text-dark/70">Study protocol updated to version 2.1. Check out the changes!</p>
                  <p className="text-xs text-anthropic-text-dark/60 mt-1">2 days ago</p>
                </div>
                
                <div className="border-l-4 border-anthropic-coral pl-4 py-2 bg-gradient-to-r from-anthropic-coral-light/30 to-anthropic-accent/20 rounded-r-lg">
                  <p className="font-medium text-anthropic-text-dark">Results Published - Sleep Quality Research 🎉</p>
                  <p className="text-sm text-anthropic-text-dark/70">Amazing news! Final results are now available for you to explore.</p>
                  <p className="text-xs text-anthropic-text-dark/60 mt-1">3 weeks ago</p>
                </div>
                
                <div className="border-l-4 border-anthropic-accent pl-4 py-2 bg-gradient-to-r from-anthropic-accent/20 to-anthropic-warm-gray/20 rounded-r-lg">
                  <p className="font-medium text-anthropic-text-dark">Study Phase Change - Diabetes Prevention Trial 🔄</p>
                  <p className="text-sm text-anthropic-text-dark/70">Exciting progress! Study has moved to analysis phase.</p>
                  <p className="text-xs text-anthropic-text-dark/60 mt-1">1 week ago</p>
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
