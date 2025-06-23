
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Users, FileText } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 text-primary-blue hover:text-primary-blue-light hover:bg-primary-blue/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-secondary-purple rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-blue to-secondary-purple bg-clip-text text-transparent">VeriSearch</span>
          </div>
          
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            {isLogin ? 'Welcome Back' : 'Get Started'}
          </h1>
          <p className="text-neutral-gray">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        {!selectedRole ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-text-primary text-center mb-6">Choose Your Role</h2>
            
            <Card 
              className="cursor-pointer border border-neutral-gray-light/50 hover:border-primary-blue/50 hover:shadow-lg transition-all duration-300 bg-surface-elevated"
              onClick={() => setSelectedRole('participant')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-accent-cyan rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-text-primary">Participant</CardTitle>
                <CardDescription className="text-neutral-gray">
                  Track my studies and stay informed about research progress
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer border border-neutral-gray-light/50 hover:border-secondary-purple/50 hover:shadow-lg transition-all duration-300 bg-surface-elevated"
              onClick={() => setSelectedRole('researcher')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-purple to-accent-cyan rounded-xl flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-text-primary">Researcher</CardTitle>
                <CardDescription className="text-neutral-gray">
                  Submit studies and maintain transparent research records
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          <Card className="border border-neutral-gray-light/50 bg-surface-elevated">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Badge 
                  className={selectedRole === 'participant' ? 
                    'bg-primary-blue/10 text-primary-blue border-primary-blue/20' : 
                    'bg-secondary-purple/10 text-secondary-purple border-secondary-purple/20'
                  }
                >
                  {selectedRole === 'participant' ? 'Participant' : 'Researcher'}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedRole(null)}
                  className="text-primary-blue hover:text-primary-blue-light hover:bg-primary-blue/10"
                >
                  Change
                </Button>
              </div>
              <CardTitle className="text-text-primary">{isLogin ? 'Sign In' : 'Create Account'}</CardTitle>
              <CardDescription className="text-neutral-gray">
                {isLogin ? 'Welcome back to VeriSearch' : 'Join the transparency revolution'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-text-primary">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="border-neutral-gray-light/50 focus:border-primary-blue focus:ring-primary-blue/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-text-primary">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border-neutral-gray-light/50 focus:border-primary-blue focus:ring-primary-blue/20"
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-text-primary">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="border-neutral-gray-light/50 focus:border-primary-blue focus:ring-primary-blue/20"
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-blue to-secondary-purple hover:from-primary-blue-light hover:to-secondary-purple-light text-white border-0 shadow-sm"
                  disabled={!email}
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button 
                  variant="link" 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary-blue hover:text-primary-blue-light"
                >
                  {isLogin ? "New here? Create an account" : "Already have an account? Sign in"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
