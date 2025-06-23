
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
    <div className="min-h-screen bg-gradient-to-br from-warm-cream-light to-soft-mint-light flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 text-sage-green hover:text-sage-green-light hover:bg-sage-green/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-sage-green to-soft-mint rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sage-green to-dusty-blue bg-clip-text text-transparent">VeriSearch</span>
          </div>
          
          <h1 className="text-2xl font-bold text-text-soft mb-2">
            {isLogin ? 'Welcome Back' : 'Get Started'}
          </h1>
          <p className="text-neutral-warm">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        {!selectedRole ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-text-soft text-center mb-6">Choose Your Role</h2>
            
            <Card 
              className="cursor-pointer border border-neutral-warm-light/30 hover:border-sage-green/50 hover:shadow-lg transition-all duration-300 bg-surface-cream"
              onClick={() => setSelectedRole('participant')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-sage-green to-soft-mint rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-text-soft">Participant</CardTitle>
                <CardDescription className="text-neutral-warm">
                  Track my studies and stay informed about research progress
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer border border-neutral-warm-light/30 hover:border-soft-lavender/50 hover:shadow-lg transition-all duration-300 bg-surface-cream"
              onClick={() => setSelectedRole('researcher')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-soft-lavender to-dusty-blue rounded-xl flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-text-soft">Researcher</CardTitle>
                <CardDescription className="text-neutral-warm">
                  Submit studies and maintain transparent research records
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          <Card className="border border-neutral-warm-light/30 bg-surface-cream">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Badge 
                  className={selectedRole === 'participant' ? 
                    'bg-sage-green/20 text-sage-green border-sage-green/30' : 
                    'bg-soft-lavender/20 text-soft-lavender border-soft-lavender/30'
                  }
                >
                  {selectedRole === 'participant' ? 'Participant' : 'Researcher'}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedRole(null)}
                  className="text-sage-green hover:text-sage-green-light hover:bg-sage-green/10"
                >
                  Change
                </Button>
              </div>
              <CardTitle className="text-text-soft">{isLogin ? 'Sign In' : 'Create Account'}</CardTitle>
              <CardDescription className="text-neutral-warm">
                {isLogin ? 'Welcome back to VeriSearch' : 'Join the transparency revolution'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-text-soft">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="border-neutral-warm-light/50 focus:border-sage-green focus:ring-sage-green/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-text-soft">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border-neutral-warm-light/50 focus:border-sage-green focus:ring-sage-green/20"
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-text-soft">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="border-neutral-warm-light/50 focus:border-sage-green focus:ring-sage-green/20"
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-sage-green to-dusty-blue hover:from-sage-green-light hover:to-dusty-blue-light text-white border-0 shadow-sm"
                  disabled={!email}
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button 
                  variant="link" 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sage-green hover:text-sage-green-light"
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
