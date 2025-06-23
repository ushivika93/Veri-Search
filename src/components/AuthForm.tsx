
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
    <div className="min-h-screen bg-gradient-to-br from-anthropic-cream via-white to-anthropic-orange-light flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 text-anthropic-orange hover:text-anthropic-coral hover:bg-anthropic-orange-light/30"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-anthropic-orange to-anthropic-coral rounded-xl flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-anthropic-orange to-anthropic-coral bg-clip-text text-transparent">VeriSearch</span>
          </div>
          
          <h1 className="text-2xl font-bold text-anthropic-text-dark mb-2">
            {isLogin ? 'Welcome Back! ✨' : 'Join the Revolution! 🚀'}
          </h1>
          <p className="text-anthropic-text-dark/70">
            {isLogin ? 'Sign in to your account' : 'Be part of transparent research'}
          </p>
        </div>

        {!selectedRole ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-anthropic-text-dark text-center mb-6">Choose Your Adventure</h2>
            
            <Card 
              className="cursor-pointer border-2 border-anthropic-coral/20 hover:border-anthropic-coral/40 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-anthropic-coral-light/30"
              onClick={() => setSelectedRole('participant')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-anthropic-coral to-anthropic-accent rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-anthropic-text-dark">I'm a Participant 🌟</CardTitle>
                <CardDescription className="text-anthropic-text-dark/70">
                  Track my studies and stay in the loop about research progress
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer border-2 border-anthropic-orange/20 hover:border-anthropic-orange/40 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-anthropic-orange-light/30"
              onClick={() => setSelectedRole('researcher')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-anthropic-orange to-anthropic-coral rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-anthropic-text-dark">I'm a Researcher 🔬</CardTitle>
                <CardDescription className="text-anthropic-text-dark/70">
                  Submit studies and maintain transparent research records
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          <Card className="border-anthropic-coral/20 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Badge 
                  className={selectedRole === 'participant' ? 
                    'bg-gradient-to-r from-anthropic-coral-light to-anthropic-accent/20 text-anthropic-text-dark border-anthropic-coral/20' : 
                    'bg-gradient-to-r from-anthropic-orange-light to-anthropic-coral-light text-anthropic-text-dark border-anthropic-orange/20'
                  }
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  {selectedRole === 'participant' ? 'Participant' : 'Researcher'}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedRole(null)}
                  className="text-anthropic-orange hover:text-anthropic-coral hover:bg-anthropic-orange-light/30"
                >
                  Change
                </Button>
              </div>
              <CardTitle className="text-anthropic-text-dark">{isLogin ? 'Sign In 🎉' : 'Create Account 🚀'}</CardTitle>
              <CardDescription className="text-anthropic-text-dark/70">
                {isLogin ? 'Welcome back to the future of research!' : 'Ready to join the transparency revolution?'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-anthropic-text-dark">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="border-anthropic-warm-gray/50 focus:border-anthropic-orange focus:ring-anthropic-orange/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-anthropic-text-dark">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border-anthropic-warm-gray/50 focus:border-anthropic-orange focus:ring-anthropic-orange/20"
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-anthropic-text-dark">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="border-anthropic-warm-gray/50 focus:border-anthropic-orange focus:ring-anthropic-orange/20"
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-anthropic-orange to-anthropic-coral hover:from-anthropic-coral hover:to-anthropic-accent text-white border-0 shadow-lg"
                  disabled={!email}
                >
                  {isLogin ? '✨ Sign In' : '🚀 Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button 
                  variant="link" 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-anthropic-orange hover:text-anthropic-coral"
                >
                  {isLogin ? "New here? Let's get you started! 🌟" : "Already part of the family? Sign in! 👋"}
                </Button>
              </div>

              {!isLogin && (
                <div className="mt-4 p-3 bg-gradient-to-r from-anthropic-cream to-anthropic-orange-light/50 rounded-lg border border-anthropic-orange/20">
                  <p className="text-xs text-anthropic-text-dark">
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
