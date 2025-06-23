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
      case 'ongoing': return 'bg-primary-blue/10 text-primary-blue border-primary-blue/20';
      case 'analyzing': return 'bg-secondary-purple/10 text-secondary-purple border-secondary-purple/20';
      case 'published': return 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20';
      default: return 'bg-neutral-gray-light/50 text-neutral-gray border-neutral-gray/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-neutral-gray-light/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-primary-blue to-secondary-purple rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-secondary-purple bg-clip-text text-transparent">VeriSearch</span>
              </div>
              <Badge className="bg-primary-blue/10 text-primary-blue border-primary-blue/20">
                Participant
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-accent-cyan to-primary-blue hover:from-accent-cyan-light hover:to-primary-blue-light text-white border-0 shadow-sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Project
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-primary-blue/10">
                <Bell className="h-5 w-5 text-primary-blue" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-secondary-purple to-accent-cyan rounded-full text-xs text-white flex items-center justify-center">
                  3
                </div>
              </Button>
              <Button variant="ghost" onClick={onLogout} className="text-neutral-gray hover:text-primary-blue hover:bg-primary-blue/10">
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
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-blue to-secondary-purple bg-clip-text text-transparent mb-2">
            Welcome back, Sarah
          </h1>
          <p className="text-neutral-gray">Track your studies and stay informed about your research journey</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border border-neutral-gray-light/50 bg-surface-elevated hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-gray">Active Studies</p>
                  <p className="text-2xl font-bold text-text-primary">3</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-accent-cyan rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-gray-light/50 bg-surface-elevated hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-gray">Notifications</p>
                  <p className="text-2xl font-bold text-text-primary">3</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-purple to-accent-cyan rounded-xl flex items-center justify-center">
                  <Bell className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-gray-light/50 bg-surface-elevated hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-gray">Study Duration</p>
                  <p className="text-2xl font-bold text-text-primary">8mo</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-primary-blue rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-gray-light/50 bg-surface-elevated hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-gray">Published Results</p>
                  <p className="text-2xl font-bold text-text-primary">1</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-secondary-purple rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="studies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-400 bg-surface-elevated border border-neutral-gray-light/50">
            <TabsTrigger value="studies" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-blue data-[state=active]:to-secondary-purple data-[state=active]:text-white">My Studies</TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-blue data-[state=active]:to-secondary-purple data-[state=active]:text-white">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="studies" className="space-y-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-gradient-to-r from-primary-blue to-secondary-purple text-white border-0' : 'border-neutral-gray-light text-text-primary hover:bg-primary-blue/10'}
              >
                All Studies
              </Button>
              <Button
                variant={filter === 'ongoing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('ongoing')}
                className={filter === 'ongoing' ? 'bg-gradient-to-r from-primary-blue to-accent-cyan text-white border-0' : 'border-neutral-gray-light text-text-primary hover:bg-primary-blue/10'}
              >
                Ongoing
              </Button>
              <Button
                variant={filter === 'analyzing' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('analyzing')}
                className={filter === 'analyzing' ? 'bg-gradient-to-r from-secondary-purple to-accent-cyan text-white border-0' : 'border-neutral-gray-light text-text-primary hover:bg-secondary-purple/10'}
              >
                Analyzing
              </Button>
              <Button
                variant={filter === 'published' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('published')}
                className={filter === 'published' ? 'bg-gradient-to-r from-accent-cyan to-primary-blue text-white border-0' : 'border-neutral-gray-light text-text-primary hover:bg-accent-cyan/10'}
              >
                Published
              </Button>
            </div>

            {/* Studies List */}
            <div className="space-y-4">
              {filteredStudies.map((study) => (
                <Card key={study.id} className="border border-neutral-gray-light/50 hover:shadow-lg transition-all duration-300 bg-surface-elevated">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-text-primary mb-2">{study.name}</CardTitle>
                        <CardDescription className="text-neutral-gray">
                          Sponsored by {study.sponsor}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {study.notifications > 0 && (
                          <Badge className="bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20">
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
                        <p className="font-medium text-neutral-gray">Enrolled</p>
                        <p className="text-text-primary">{study.enrolled}</p>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-gray">Last Update</p>
                        <p className="text-text-primary">{study.lastUpdate}</p>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-gray">Protocol Version</p>
                        <p className="text-text-primary">{study.protocolVersion}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-neutral-gray-light/50">
                      <Button variant="outline" size="sm" className="border-neutral-gray-light text-text-primary hover:bg-primary-blue/10">
                        View Timeline
                      </Button>
                      <Button 
                        onClick={onViewStudy}
                        className="bg-gradient-to-r from-primary-blue to-secondary-purple hover:from-primary-blue-light hover:to-secondary-purple-light text-white border-0"
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
            <Card className="border border-neutral-gray-light/50 bg-surface-elevated">
              <CardHeader>
                <CardTitle className="text-text-primary">Recent Notifications</CardTitle>
                <CardDescription>Stay updated on your research journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary-blue pl-4 py-2 bg-primary-blue/5 rounded-r-lg">
                  <p className="font-medium text-text-primary">Protocol Update - Cardiovascular Health Study</p>
                  <p className="text-sm text-neutral-gray">Study protocol updated to version 2.1. Review the changes.</p>
                  <p className="text-xs text-neutral-gray mt-1">2 days ago</p>
                </div>
                
                <div className="border-l-4 border-secondary-purple pl-4 py-2 bg-secondary-purple/5 rounded-r-lg">
                  <p className="font-medium text-text-primary">Results Published - Sleep Quality Research</p>
                  <p className="text-sm text-neutral-gray">Final results are now available for review.</p>
                  <p className="text-xs text-neutral-gray mt-1">3 weeks ago</p>
                </div>
                
                <div className="border-l-4 border-accent-cyan pl-4 py-2 bg-accent-cyan/5 rounded-r-lg">
                  <p className="font-medium text-text-primary">Study Phase Change - Diabetes Prevention Trial</p>
                  <p className="text-sm text-neutral-gray">Study has moved to analysis phase.</p>
                  <p className="text-xs text-neutral-gray mt-1">1 week ago</p>
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
