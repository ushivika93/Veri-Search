

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col px-6">
      {/* Header with logo and back button */}
      <div className="flex items-center justify-between w-full py-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Shield className="h-3 w-3 text-white" />
          </div>
          <span className="text-base font-medium text-gray-900">VeriSearch</span>
        </div>
        
        <Button 
          onClick={onBack}
          size="sm"
          className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg text-xs px-3 py-1.5"
        >
          <ArrowLeft className="h-3 w-3 mr-1" />
          Back
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          {!selectedRole ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">Choose Your Role</h2>
              
              <Card 
                className="cursor-pointer border border-emerald-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                onClick={() => setSelectedRole('participant')}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 font-semibold">Participant</CardTitle>
                  <CardDescription className="text-gray-600">
                    Track your studies and monitor research progress
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card 
                className="cursor-pointer border border-emerald-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                onClick={() => setSelectedRole('researcher')}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 font-semibold">Researcher</CardTitle>
                  <CardDescription className="text-gray-600">
                    Submit studies and maintain transparent records
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ) : (
            <Card className="border-emerald-100 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge 
                    className="bg-emerald-100 text-emerald-700 border-emerald-200"
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {selectedRole === 'participant' ? 'Participant' : 'Researcher'}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedRole(null)}
                    className="text-gray-600 hover:text-gray-800 hover:bg-emerald-50"
                  >
                    Change
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-800">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="border-emerald-200 focus:border-emerald-300 focus:ring-emerald-200 bg-white/70"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-800">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      className="border-emerald-200 focus:border-emerald-300 focus:ring-emerald-200 bg-white/70"
                    />
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-800">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        required
                        className="border-emerald-200 focus:border-emerald-300 focus:ring-emerald-200 bg-white/70"
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg"
                    disabled={!email}
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Button 
                    variant="link" 
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {isLogin ? "New to VeriSearch? Create account" : "Already have an account? Sign in"}
                  </Button>
                </div>

                {!isLogin && (
                  <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <p className="text-xs text-gray-700">
                      Connect your wallet later for enhanced verification and blockchain features.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

