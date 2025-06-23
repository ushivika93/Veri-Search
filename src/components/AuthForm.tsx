
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-6 text-slate-600 hover:text-slate-800 hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-light bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">VeriSearch</span>
          </div>
          
          <h1 className="text-2xl font-light text-slate-800 mb-2">
            {isLogin ? 'Welcome Back' : 'Join VeriSearch'}
          </h1>
          <p className="text-slate-600 font-light">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        {!selectedRole ? (
          <div className="space-y-4">
            <h2 className="text-lg font-light text-slate-800 text-center mb-8">Choose Your Role</h2>
            
            <Card 
              className="cursor-pointer border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30"
              onClick={() => setSelectedRole('participant')}
            >
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-800 font-medium">Participant</CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  Track your studies and monitor research progress
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-indigo-50/30"
              onClick={() => setSelectedRole('researcher')}
            >
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-indigo-800 font-medium">Researcher</CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  Submit studies and maintain transparent records
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          <Card className="border-slate-200 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-3">
                <Badge 
                  className={selectedRole === 'participant' ? 
                    'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200' : 
                    'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200'
                  }
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  {selectedRole === 'participant' ? 'Participant' : 'Researcher'}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedRole(null)}
                  className="text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                >
                  Change
                </Button>
              </div>
              <CardTitle className="text-slate-800 font-medium">{isLogin ? 'Sign In' : 'Create Account'}</CardTitle>
              <CardDescription className="text-slate-600 font-light">
                {isLogin ? 'Access your dashboard' : 'Join the research platform'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-light">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="border-slate-200 focus:border-blue-400 focus:ring-blue-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 font-light">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border-slate-200 focus:border-blue-400 focus:ring-blue-200"
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-slate-700 font-light">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="border-slate-200 focus:border-blue-400 focus:ring-blue-200"
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 font-light"
                  disabled={!email}
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button 
                  variant="link" 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-slate-600 hover:text-slate-800 font-light"
                >
                  {isLogin ? "New to VeriSearch? Create account" : "Already have an account? Sign in"}
                </Button>
              </div>

              {!isLogin && (
                <div className="mt-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-600 font-light">
                    Connect your wallet later for enhanced verification and blockchain features.
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
