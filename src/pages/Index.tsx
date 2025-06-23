
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileText, Eye, Bell, TrendingUp } from "lucide-react";
import ParticipantDashboard from "@/components/ParticipantDashboard";
import ResearcherDashboard from "@/components/ResearcherDashboard";
import StudyPublicPage from "@/components/StudyPublicPage";
import AuthForm from "@/components/AuthForm";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'participant' | 'researcher' | 'study'>('landing');
  const [userRole, setUserRole] = useState<'participant' | 'researcher' | null>(null);

  const handleGetStarted = () => {
    setCurrentView('auth');
  };

  const handleLogin = (role: 'participant' | 'researcher') => {
    setUserRole(role);
    setCurrentView(role);
  };

  const handleViewStudy = () => {
    setCurrentView('study');
  };

  if (currentView === 'auth') {
    return <AuthForm onLogin={handleLogin} onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'participant') {
    return <ParticipantDashboard onViewStudy={handleViewStudy} onLogout={() => setCurrentView('landing')} />;
  }

  if (currentView === 'researcher') {
    return <ResearcherDashboard onLogout={() => setCurrentView('landing')} />;
  }

  if (currentView === 'study') {
    return <StudyPublicPage onBack={() => setCurrentView(userRole || 'landing')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-800">VeriSearch</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#participants" className="text-slate-600 hover:text-blue-600 transition-colors">Participants</a>
              <a href="#researchers" className="text-slate-600 hover:text-blue-600 transition-colors">Researchers</a>
              <a href="#oversight" className="text-slate-600 hover:text-blue-600 transition-colors">Oversight</a>
              <Button variant="outline" onClick={handleGetStarted}>Login</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200" variant="secondary">
            Blockchain-Powered Transparency
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Reclaim transparency<br />in research
          </h1>
          <p className="text-xl text-slate-600 mb-4">Track your study. Stay informed.</p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            VeriSearch provides an immutable, transparent record of clinical and medical studies, 
            empowering participants and ensuring research integrity through blockchain technology.
          </p>
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-800">For Participants</CardTitle>
                <CardDescription className="text-slate-600">
                  Track your enrolled studies, receive protocol updates, and stay informed about research progress.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Real-time study status updates
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Protocol change notifications
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Results publication alerts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800">For Researchers</CardTitle>
                <CardDescription className="text-slate-600">
                  Submit studies, update protocols, and maintain transparent research records on the blockchain.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Immutable protocol logging
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Version control for studies
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Verified researcher profiles
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-slate-800">Ethical Oversight</CardTitle>
                <CardDescription className="text-slate-600">
                  Community governance and oversight to ensure ethical research practices and transparency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    Community flagging system
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    Transparent voting process
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    Public audit trails
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How VeriSearch Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built on blockchain technology to ensure immutable records and complete transparency in medical research.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Register & Verify</h3>
              <p className="text-sm text-slate-600">Create your account and verify your role as participant or researcher</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Submit or Enroll</h3>
              <p className="text-sm text-slate-600">Researchers submit studies; participants enroll and track progress</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Track & Update</h3>
              <p className="text-sm text-slate-600">Receive real-time updates and notifications about study changes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Verify Results</h3>
              <p className="text-sm text-slate-600">Access published results with full transparency and verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-slate-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Bring Transparency to Research?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join VeriSearch today and be part of the movement towards more transparent, 
            ethical, and accountable medical research.
          </p>
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">VeriSearch</span>
              </div>
              <p className="text-sm text-slate-400">
                Bringing transparency and trust to medical research through blockchain technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">For Participants</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">For Researchers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Public Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Ethics</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 VeriSearch. All rights reserved. Built for transparency in medical research.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
