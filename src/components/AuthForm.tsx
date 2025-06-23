
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex flex-col px-6">
      {/* Header with logo and back button */}
      <div className="flex items-center justify-between w-full py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-light bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">VeriSearch</span>
        </div>
        
        <Button 
          onClick={onBack}
          variant="outline"
          className="border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          {!selectedRole ? (
            <div className="space-y-4">
              <h2 className="text-lg font-light text-slate-800 text-center mb-8">Choose Your Role</h2>
              
              <Card 
                className="cursor-pointer border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-orange-50/30"
                onClick={() => setSelectedRole('participant')}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-orange-800 font-medium">Participant</CardTitle>
                  <CardDescription className="text-slate-600 font-light">
                    Track your studies and monitor research progress
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card 
                className="cursor-pointer border border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-purple-50/30"
                onClick={() => setSelectedRole('researcher')}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-800 font-medium">Researcher</CardTitle>
                  <CardDescription className="text-slate-600 font-light">
                    Submit studies and maintain transparent records
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ) : (
            <Card className="border-orange-200 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge 
                    className={selectedRole === 'participant' ? 
                      'bg-gradient-to-r from-orange-50 to-pink-50 text-orange-700 border-orange-200' : 
                      'bg-gradient-to-r from-pink-50 to-purple-50 text-purple-700 border-purple-200'
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
                      className="border-orange-200 focus:border-orange-400 focus:ring-orange-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-700 font-light">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      className="border-orange-200 focus:border-orange-400 focus:ring-orange-200"
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
                        className="border-orange-200 focus:border-orange-400 focus:ring-orange-200"
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white border-0 font-light"
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
                  <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg border border-orange-100">
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
    </div>
  );
};

export default AuthForm;
