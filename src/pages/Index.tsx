import { useState } from "react";
import AuthForm from "@/components/AuthForm";
import ResearcherDashboard from "@/components/ResearcherDashboard";
import ParticipantDashboard from "@/components/ParticipantDashboard";
import StudyPublicPage from "@/components/StudyPublicPage";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'researcher' | 'participant' | 'study-public'>('home');

  const handleGetStarted = () => {
    // This could navigate to a role selection page
  };

  const handleRoleSelect = (role: 'researcher' | 'participant') => {
    if (role === 'researcher') {
      setCurrentView('researcher');
    } else {
      setCurrentView('participant');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleViewStudy = () => {
    setCurrentView('study-public');
  };

  const handleLogout = () => {
    setCurrentView('home');
  };

  if (currentView === 'researcher') {
    return <ResearcherDashboard onBackToHome={handleBackToHome} onLogout={handleLogout} />;
  }

  if (currentView === 'participant') {
    return (
      <ParticipantDashboard 
        onBackToHome={handleBackToHome}
        onViewStudy={handleViewStudy} 
        onLogout={handleLogout} 
      />
    );
  }

  if (currentView === 'study-public') {
    return <StudyPublicPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-cyan-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">VeriSearch</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Transparent Research, Verified Results
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            VeriSearch uses blockchain technology to ensure research integrity, 
            prevent data manipulation, and provide unprecedented transparency in clinical studies.
          </p>
          
          <AuthForm onRoleSelect={handleRoleSelect} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Immutable Records</h3>
            <p className="text-gray-600">All research data and protocols are stored on blockchain, making them tamper-proof and permanently verifiable.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-100 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Full Transparency</h3>
            <p className="text-gray-600">Real-time access to study progress, methodology changes, and results for all stakeholders.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-green-100 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Verified Results</h3>
            <p className="text-gray-600">Smart contracts automatically validate research processes and ensure compliance with protocols.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
