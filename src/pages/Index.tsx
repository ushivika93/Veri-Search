
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileText, Zap, Eye, ArrowRight, LogIn } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-neutral-gray-light/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-secondary-purple rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-secondary-purple bg-clip-text text-transparent">
                VeriSearch
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={handleGetStarted}
                className="text-neutral-gray hover:text-primary-blue hover:bg-primary-blue/10"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-primary-blue to-secondary-purple hover:from-primary-blue-light hover:to-secondary-purple-light text-white border-0 shadow-sm"
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-6 bg-gradient-to-r from-accent-cyan/20 to-primary-blue/20 text-primary-blue border-primary-blue/20">
              <Zap className="h-4 w-4 mr-2" />
              Powered by Blockchain
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-blue via-secondary-purple to-accent-cyan bg-clip-text text-transparent leading-tight">
              Transparent research.<br />
              Real-time tracking.
            </h1>
            <p className="text-xl text-neutral-gray mb-8 leading-relaxed max-w-3xl mx-auto">
              VeriSearch brings unprecedented transparency to clinical research through blockchain technology. 
              Track studies in real-time with immutable, verifiable records.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-primary-blue to-secondary-purple hover:from-primary-blue-light hover:to-secondary-purple-light text-white text-lg px-8 py-6 rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
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
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-secondary-purple bg-clip-text text-transparent">
            Choose Your Role
          </h2>
          <p className="text-neutral-gray text-lg">
            Unified transparency for all stakeholders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Participants */}
          <Card className="border border-neutral-gray-light/50 hover:border-primary-blue/30 hover:shadow-lg transition-all duration-300 bg-surface-elevated">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-accent-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-text-primary text-xl">Participants</CardTitle>
              <CardDescription className="text-neutral-gray">
                Track your enrolled studies and receive real-time updates
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-neutral-gray">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Monitor study protocols in real-time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Get notified of any changes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                  Access published results instantly
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Researchers */}
          <Card className="border border-neutral-gray-light/50 hover:border-secondary-purple/30 hover:shadow-lg transition-all duration-300 bg-surface-elevated">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-purple to-accent-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-text-primary text-xl">Researchers</CardTitle>
              <CardDescription className="text-neutral-gray">
                Submit studies and maintain transparent research records
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-neutral-gray">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-purple rounded-full mr-3"></div>
                  Immutable protocol versioning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-purple rounded-full mr-3"></div>
                  Blockchain-verified submissions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-purple rounded-full mr-3"></div>
                  Transparent research tracking
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Public Oversight */}
          <Card className="border border-neutral-gray-light/50 hover:border-accent-cyan/30 hover:shadow-lg transition-all duration-300 bg-surface-elevated">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan to-primary-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-text-primary text-xl">Public Oversight</CardTitle>
              <CardDescription className="text-neutral-gray">
                Verify study authenticity and track research progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-neutral-gray">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                  Open study verification
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                  Community-driven oversight
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                  Publicly auditable records
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-r from-surface-elevated to-slate-50 rounded-2xl mx-8 mb-16 border border-neutral-gray-light/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-secondary-purple bg-clip-text text-transparent">
            How VeriSearch Works
          </h2>
          <p className="text-neutral-gray text-lg">
            Transparency powered by blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-secondary-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              1
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Submit & Verify</h3>
            <p className="text-neutral-gray text-sm">
              Researchers submit protocols that are cryptographically signed and stored on blockchain
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary-purple to-accent-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              2
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Track Progress</h3>
            <p className="text-neutral-gray text-sm">
              All changes and updates are immutably recorded, creating an audit trail
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-primary-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              3
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Stay Informed</h3>
            <p className="text-neutral-gray text-sm">
              Participants and the public receive real-time notifications about study progress
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-neutral-gray-light/50 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-secondary-purple rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-secondary-purple bg-clip-text text-transparent">
              VeriSearch
            </span>
          </div>
          <p className="text-neutral-gray mb-6">
            Bringing transparency and trust to clinical research through blockchain technology
          </p>
          <Button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-primary-blue to-secondary-purple hover:from-primary-blue-light hover:to-secondary-purple-light text-white border-0 shadow-sm"
          >
            Join the Platform
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
