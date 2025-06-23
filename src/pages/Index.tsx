
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="relative z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center shadow-sm">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-800">
                VeriSearch
              </span>
            </div>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white border-0 font-normal shadow-md hover:shadow-lg transition-all duration-200"
            >
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border-orange-200 font-normal backdrop-blur-sm">
              <Zap className="h-3 w-3 mr-2" />
              Powered by Blockchain
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800 leading-tight">
              Reclaim transparency in research.<br />
              Track your study. Stay informed.
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-normal max-w-3xl mx-auto">
              VeriSearch brings unprecedented transparency to clinical research through blockchain technology. 
              Participants can track their studies in real-time, while researchers maintain immutable records 
              of their protocols and findings.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white text-base px-6 py-3 rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-normal"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-800">
            Choose Your Path
          </h2>
          <p className="text-gray-600 text-base font-normal">
            Different roles, unified transparency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Participants */}
          <Card className="border border-white/40 hover:border-orange-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/90 to-orange-50/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-800 text-lg font-semibold">Participants</CardTitle>
              <CardDescription className="text-gray-600 font-normal text-sm">
                Track your enrolled studies and receive real-time updates about research progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-gray-600 font-normal">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mr-3"></div>
                  Monitor study protocols in real-time
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mr-3"></div>
                  Get notified of any changes
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mr-3"></div>
                  Access published results instantly
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Researchers */}
          <Card className="border border-white/40 hover:border-pink-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/90 to-pink-50/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-800 text-lg font-semibold">Researchers</CardTitle>
              <CardDescription className="text-gray-600 font-normal text-sm">
                Submit studies, update protocols, and maintain transparent research records
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-gray-600 font-normal">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3"></div>
                  Immutable protocol versioning
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3"></div>
                  Blockchain-verified submissions
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3"></div>
                  Transparent research tracking
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Public Oversight */}
          <Card className="border border-white/40 hover:border-rose-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/90 to-rose-50/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-800 text-lg font-semibold">Public Oversight</CardTitle>
              <CardDescription className="text-gray-600 font-normal text-sm">
                Anyone can verify study authenticity and track research progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-gray-600 font-normal">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full mr-3"></div>
                  Open study verification
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full mr-3"></div>
                  Community-driven oversight
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full mr-3"></div>
                  Publicly auditable records
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-12 bg-gradient-to-r from-white/80 to-orange-50/80 backdrop-blur-sm rounded-2xl mx-8 mb-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-800">
            How VeriSearch Works
          </h2>
          <p className="text-gray-600 text-base font-normal">
            Transparency powered by blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-semibold text-base shadow-sm">
              1
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-base">Submit & Verify</h3>
            <p className="text-gray-600 text-sm font-normal leading-relaxed">
              Researchers submit protocols that are cryptographically signed and stored on blockchain
            </p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-semibold text-base shadow-sm">
              2
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-base">Track Progress</h3>
            <p className="text-gray-600 text-sm font-normal leading-relaxed">
              All changes and updates are immutably recorded, creating an audit trail
            </p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-semibold text-base shadow-sm">
              3
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-base">Stay Informed</h3>
            <p className="text-gray-600 text-sm font-normal leading-relaxed">
              Participants and the public receive real-time notifications about study progress
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-white/70 to-pink-50/70 backdrop-blur-sm border-t border-white/30 py-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-7 h-7 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center shadow-sm">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-800">
              VeriSearch
            </span>
          </div>
          <p className="text-gray-600 mb-4 font-normal text-sm">
            Bringing transparency and trust to clinical research through blockchain technology
          </p>
          <Button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white border-0 font-normal shadow-md hover:shadow-lg transition-all duration-200"
          >
            Join the Movement
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
