import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileText, Zap, Eye, ArrowRight } from "lucide-react";
import AuthForm from "@/components/AuthForm";
import ParticipantDashboard from "@/components/ParticipantDashboard";
import ResearcherDashboard from "@/components/ResearcherDashboard";
import StudyPublicPage from "@/components/StudyPublicPage";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'auth' | 'participant' | 'researcher' | 'study'>('home');

  const handleGetStarted = () => {
    setCurrentView('auth');
  };

  const handleLogin = (role: 'participant' | 'researcher') => {
    setCurrentView(role);
  };

  const handleBack = () => {
    setCurrentView('home');
  };

  const handleViewStudy = () => {
    setCurrentView('study');
  };

  if (currentView === 'auth') {
    return <AuthForm onLogin={handleLogin} onBack={handleBack} />;
  }

  if (currentView === 'participant') {
    return <ParticipantDashboard onViewStudy={handleViewStudy} onLogout={handleBack} />;
  }

  if (currentView === 'researcher') {
    return <ResearcherDashboard onLogout={handleBack} />;
  }

  if (currentView === 'study') {
    return <StudyPublicPage onBack={() => setCurrentView('participant')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-medium text-gray-900">
                VeriSearch
              </span>
            </div>
            <Button 
              onClick={handleGetStarted}
              className="bg-orange-400 hover:bg-orange-500 text-white border-0 font-normal shadow-lg"
            >
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl font-medium mb-6 text-gray-900">
              Reclaim transparency in research.<br />
              Track your study. Stay informed.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-normal">
              VeriSearch brings unprecedented transparency to clinical research through blockchain technology. 
              Participants can track their studies in real-time, while researchers maintain immutable records 
              of their protocols and findings.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-orange-400 hover:bg-orange-500 text-white text-lg px-8 py-6 rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-normal"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4 text-gray-900">
            Choose Your Path
          </h2>
          <p className="text-gray-700 text-lg font-normal">
            Different roles, unified transparency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Participants */}
          <Card className="border-2 border-white/30 hover:border-white/50 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-gray-900 text-xl font-medium">Participants</CardTitle>
              <CardDescription className="text-gray-700 font-normal">
                Track your enrolled studies and receive real-time updates about research progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-gray-700 font-normal">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Monitor study protocols in real-time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Get notified of any changes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Access published results instantly
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Researchers */}
          <Card className="border-2 border-white/30 hover:border-white/50 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-gray-900 text-xl font-medium">Researchers</CardTitle>
              <CardDescription className="text-gray-700 font-normal">
                Submit studies, update protocols, and maintain transparent research records
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-gray-700 font-normal">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Immutable protocol versioning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Blockchain-verified submissions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Transparent research tracking
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Public Oversight */}
          <Card className="border-2 border-white/30 hover:border-white/50 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-gray-900 text-xl font-medium">Public Oversight</CardTitle>
              <CardDescription className="text-gray-700 font-normal">
                Anyone can verify study authenticity and track research progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-gray-700 font-normal">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Open study verification
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Community-driven oversight
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Publicly auditable records
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16 bg-white/80 backdrop-blur-sm rounded-3xl mx-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4 text-gray-900">
            How VeriSearch Works
          </h2>
          <p className="text-gray-700 text-lg font-normal">
            Transparency powered by blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium text-lg">
              1
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Submit & Verify</h3>
            <p className="text-gray-700 text-sm font-normal">
              Researchers submit protocols that are cryptographically signed and stored on blockchain
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium text-lg">
              2
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-700 text-sm font-normal">
              All changes and updates are immutably recorded, creating an audit trail
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium text-lg">
              3
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Stay Informed</h3>
            <p className="text-gray-700 text-sm font-normal">
              Participants and the public receive real-time notifications about study progress
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-white/30 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-medium text-gray-900">
              VeriSearch
            </span>
          </div>
          <p className="text-gray-700 mb-6 font-normal">
            Bringing transparency and trust to clinical research through blockchain technology
          </p>
          <Button 
            onClick={handleGetStarted}
            className="bg-orange-400 hover:bg-orange-500 text-white border-0 font-normal shadow-lg"
          >
            Join the Movement
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
