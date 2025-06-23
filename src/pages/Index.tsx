

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-800">
                VeriSearch
              </span>
            </div>
            <Button 
              onClick={handleGetStarted}
              className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
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
          <div className="mb-12">
            <Badge className="mb-8 bg-emerald-100 text-emerald-700 border-emerald-200 font-medium">
              <Zap className="h-4 w-4 mr-2" />
              Powered by Blockchain
            </Badge>
            <h1 className="text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Reclaim transparency in research
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              VeriSearch brings unprecedented transparency to clinical research through blockchain technology. 
              Track studies in real-time with immutable records.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-10 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Choose Your Path
          </h2>
          <p className="text-gray-600 text-lg">
            Different roles, unified transparency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Participants */}
          <Card className="border border-emerald-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm group">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-gray-900 text-xl font-semibold">Participants</CardTitle>
              <CardDescription className="text-gray-600">
                Track your enrolled studies and receive real-time updates
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Monitor study protocols in real-time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Get notified of any changes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Access published results instantly
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Researchers */}
          <Card className="border border-emerald-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm group">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-gray-900 text-xl font-semibold">Researchers</CardTitle>
              <CardDescription className="text-gray-600">
                Submit studies and maintain transparent research records
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Immutable protocol versioning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Blockchain-verified submissions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Transparent research tracking
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Public Oversight */}
          <Card className="border border-emerald-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm group">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-gray-900 text-xl font-semibold">Public Oversight</CardTitle>
              <CardDescription className="text-gray-600">
                Verify study authenticity and track research progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Open study verification
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Community-driven oversight
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Publicly auditable records
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-emerald-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              How VeriSearch Works
            </h2>
            <p className="text-gray-600 text-lg">
              Transparency powered by blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Submit & Verify</h3>
              <p className="text-gray-600">
                Researchers submit protocols that are cryptographically signed and stored on blockchain
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Track Progress</h3>
              <p className="text-gray-600">
                All changes and updates are immutably recorded, creating an audit trail
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Stay Informed</h3>
              <p className="text-gray-600">
                Participants and the public receive real-time notifications about study progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/40 backdrop-blur-sm border-t border-emerald-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-800">
              VeriSearch
            </span>
          </div>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Bringing transparency and trust to clinical research through blockchain technology
          </p>
          <Button 
            onClick={handleGetStarted}
            className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join the Movement
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;

