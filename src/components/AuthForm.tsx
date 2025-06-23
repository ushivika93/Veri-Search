
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Users, FileText, Sparkles } from "lucide-react";

interface AuthFormProps {
  onLogin: (role: 'participant' | 'researcher') => void;
  onBack: () => void;
}

const AuthForm = ({ onLogin, onBack }: AuthFormProps) => {
  const [selectedRole, setSelectedRole] = useState<'participant' | 'researcher' | null>(null);
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole && email) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-cyan-50 to-blue-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 text-purple-600 hover:text-purple-800 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">VeriSearch</span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {isLogin ? 'Welcome Back! ✨' : 'Join the Revolution! 🚀'}
          </h1>
          <p className="text-gray-600">
            {isLogin ? 'Sign in to your account' : 'Be part of transparent research'}
          </p>
        </div>

        {!selectedRole ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">Choose Your Adventure</h2>
            
            <Card 
              className="cursor-pointer border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-purple-50"
              onClick={() => setSelectedRole('participant')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-purple-800">I'm a Participant 🌟</CardTitle>
                <CardDescription className="text-gray-600">
                  Track my studies and stay in the loop about research progress
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-cyan-50"
              onClick={() => setSelectedRole('researcher')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-cyan-800">I'm a Researcher 🔬</CardTitle>
                <CardDescription className="text-gray-600">
                  Submit studies and maintain transparent research records
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Badge 
                  className={selectedRole === 'participant' ? 
                    'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200' : 
                    'bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200'
                  }
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  {selectedRole === 'participant' ? 'Participant' : 'Researcher'}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedRole(null)}
                  className="text-purple-500 hover:text-purple-700 hover:bg-purple-50"
                >
                  Change
                </Button>
              </div>
              <CardTitle className="text-gray-800">{isLogin ? 'Sign In 🎉' : 'Create Account 🚀'}</CardTitle>
              <CardDescription className="text-gray-600">
                {isLogin ? 'Welcome back to the future of research!' : 'Ready to join the transparency revolution?'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-200"
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="border-purple-200 focus:border-purple-400 focus:ring-purple-200"
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
                  disabled={!email}
                >
                  {isLogin ? '✨ Sign In' : '🚀 Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button 
                  variant="link" 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-purple-600 hover:text-purple-800"
                >
                  {isLogin ? "New here? Let's get you started! 🌟" : "Already part of the family? Sign in! 👋"}
                </Button>
              </div>

              {!isLogin && (
                <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg border border-purple-100">
                  <p className="text-xs text-purple-700">
                    <strong>🎯 Pro tip:</strong> Connect your wallet later for enhanced verification and 
                    cool blockchain features. You can do this anytime in your profile!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
