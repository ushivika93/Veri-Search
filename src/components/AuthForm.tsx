
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
            className="mb-4 text-slate-600 hover:text-slate-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-800">VeriSearch</span>
          </div>
          
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-slate-600">
            {isLogin ? 'Sign in to your account' : 'Join the transparency movement'}
          </p>
        </div>

        {!selectedRole ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 text-center mb-6">Choose Your Role</h2>
            
            <Card 
              className="cursor-pointer border-2 border-slate-200 hover:border-green-300 hover:shadow-md transition-all"
              onClick={() => setSelectedRole('participant')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-800">I am a Participant</CardTitle>
                <CardDescription className="text-slate-600">
                  Track your enrolled studies and receive updates about research progress
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer border-2 border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              onClick={() => setSelectedRole('researcher')}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800">I am a Researcher</CardTitle>
                <CardDescription className="text-slate-600">
                  Submit studies, update protocols, and maintain transparent research records
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          <Card className="border-slate-200">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Badge 
                  variant="secondary" 
                  className={selectedRole === 'participant' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}
                >
                  {selectedRole === 'participant' ? 'Participant' : 'Researcher'}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedRole(null)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  Change
                </Button>
              </div>
              <CardTitle>{isLogin ? 'Sign In' : 'Create Account'}</CardTitle>
              <CardDescription>
                {isLogin ? 'Enter your credentials to continue' : 'Fill in your details to get started'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="border-slate-300 focus:border-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border-slate-300 focus:border-blue-500"
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="border-slate-300 focus:border-blue-500"
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!email}
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button 
                  variant="link" 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-slate-600 hover:text-slate-800"
                >
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </Button>
              </div>

              {!isLogin && (
                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-600">
                    <strong>Optional:</strong> Connect your wallet for enhanced verification and 
                    blockchain features. You can do this later in your profile settings.
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
