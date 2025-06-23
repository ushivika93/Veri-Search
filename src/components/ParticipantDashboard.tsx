
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Calendar, Eye, FileText, LogOut, Shield, TrendingUp, Users, Plus } from "lucide-react";

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
      case 'ongoing': return 'bg-sage-green/20 text-sage-green border-sage-green/30';
      case 'analyzing': return 'bg-soft-lavender/20 text-soft-lavender border-soft-lavender/30';
      case 'published': return 'bg-soft-coral/20 text-soft-coral border-soft-coral/30';
      default: return 'bg-neutral-warm-light/50 text-neutral-warm border-neutral-warm/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream-light to-soft-mint-light">
      {/* Header */}
      <header className="bg-surface-cream/90 backdrop-blur-md border-b border-neutral-warm-light/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-sage-green to-soft-mint rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-sage-green to-dusty-blue bg-clip-text text-transparent">VeriSearch</span>
              </div>
              <Badge className="bg-sage-green/20 text-sage-green border-sage-green/30">
                Participant
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-soft-mint to-dusty-blue hover:from-soft-mint-light hover:to-dusty-blue-light text-white border-0 shadow-sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Project
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-sage-green/10">
                <Bell className="h-5 w-5 text-sage-green" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-soft-coral to-dusty-blue rounded-full text-xs text-white flex items-center justify-center">
                  3
                </div>
              </Button>
              <Button variant="ghost" onClick={onLogout} className="text-neutral-warm hover:text-sage-green hover:bg-sage-green/10">
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
          <h1 className="text-3xl font-bold bg-gradient-to-r from-sage-green to-dusty-blue bg-clip-text text-transparent mb-2">
            Welcome back, Sarah
          </h1>
          <p className="text-neutral-warm">Track your studies and stay informed about your research journey</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border border-neutral-warm-light/30 bg-surface-cream hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-warm">Active Studies</p>
                  <p className="text-2xl font-bold text-text-soft">3</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-sage-green to-soft-mint rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-warm-light/30 bg-surface-cream hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-warm">Notifications</p>
                  <p className="text-2xl font-bold text-text-soft">3</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-soft-lavender to-dusty-blue rounded-xl flex items-center justify-center">
                  <Bell className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-warm-light/30 bg-surface-cream hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-warm">Study Duration</p>
                  <p className="text-2xl font-bold text-text-soft">8mo</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-soft-coral to-dusty-blue rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-warm-light/30 bg-surface-cream hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-warm">Published Results</p>
                  <p className="text-2xl font-bold text-text-soft">1</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-sage-green to-soft-lavender rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="studies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-400 bg-surface-cream border border-neutral-warm-light/30">
            <TabsTrigger value="studies" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-sage-green data-[state=active]:to-dusty-blue data-[state=active]:text-white">My Studies</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-sage-green data-[state=active]:to-dusty-blue data-[state=active]:text-white">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="studies" className="space-y-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-gradient-to-r from-sage-green to-dusty-blue text-white border-0' : 'border-neutral-warm-light text-text-soft hover:bg-sage-green/10'}
              >
                All Studies
              </Button>
              <Button
                variant={filter === 'ongoing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('ongoing')}
                className={filter === 'ongoing' ? 'bg-gradient-to-r from-sage-green to-soft-mint text-white border-0' : 'border-neutral-warm-light text-text-soft hover:bg-sage-green/10'}
              >
                Ongoing
              </Button>
              <Button
                variant={filter === 'analyzing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('analyzing')}
                className={filter === 'analyzing' ? 'bg-gradient-to-r from-soft-lavender to-dusty-blue text-white border-0' : 'border-neutral-warm-light text-text-soft hover:bg-soft-lavender/10'}
              >
                Analyzing
              </Button>
              <Button
                variant={filter === 'published' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('published')}
                className={filter === 'published' ? 'bg-gradient-to-r from-soft-coral to-dusty-blue text-white border-0' : 'border-neutral-warm-light text-text-soft hover:bg-soft-coral/10'}
              >
                Published
              </Button>
            </div>

            {/* Studies List */}
            <div className="space-y-4">
              {filteredStudies.map((study) => (
                <Card key={study.id} className="border border-neutral-warm-light/30 hover:shadow-lg transition-all duration-300 bg-surface-cream">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-text-soft mb-2">{study.name}</CardTitle>
                        <CardDescription className="text-neutral-warm">
                          Sponsored by {study.sponsor}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {study.notifications > 0 && (
                          <Badge className="bg-soft-coral/20 text-soft-coral border-soft-coral/30">
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
                        <p className="font-medium text-neutral-warm">Enrolled</p>
                        <p className="text-text-soft">{study.enrolled}</p>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-warm">Last Update</p>
                        <p className="text-text-soft">{study.lastUpdate}</p>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-warm">Protocol Version</p>
                        <p className="text-text-soft">{study.protocolVersion}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-neutral-warm-light/30">
                      <Button variant="outline" size="sm" className="border-neutral-warm-light text-text-soft hover:bg-sage-green/10">
                        View Timeline
                      </Button>
                      <Button 
                        onClick={onViewStudy}
                        className="bg-gradient-to-r from-sage-green to-dusty-blue hover:from-sage-green-light hover:to-dusty-blue-light text-white border-0"
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
            <Card className="border border-neutral-warm-light/30 bg-surface-cream">
              <CardHeader>
                <CardTitle className="text-text-soft">Recent Notifications</CardTitle>
                <CardDescription>Stay updated on your research journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-sage-green pl-4 py-2 bg-sage-green/5 rounded-r-lg">
                  <p className="font-medium text-text-soft">Protocol Update - Cardiovascular Health Study</p>
                  <p className="text-sm text-neutral-warm">Study protocol updated to version 2.1. Review the changes.</p>
                  <p className="text-xs text-neutral-warm mt-1">2 days ago</p>
                </div>
                
                <div className="border-l-4 border-soft-lavender pl-4 py-2 bg-soft-lavender/5 rounded-r-lg">
                  <p className="font-medium text-text-soft">Results Published - Sleep Quality Research</p>
                  <p className="text-sm text-neutral-warm">Final results are now available for review.</p>
                  <p className="text-xs text-neutral-warm mt-1">3 weeks ago</p>
                </div>
                
                <div className="border-l-4 border-soft-coral pl-4 py-2 bg-soft-coral/5 rounded-r-lg">
                  <p className="font-medium text-text-soft">Study Phase Change - Diabetes Prevention Trial</p>
                  <p className="text-sm text-neutral-warm">Study has moved to analysis phase.</p>
                  <p className="text-xs text-neutral-warm mt-1">1 week ago</p>
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
