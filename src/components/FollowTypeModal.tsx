
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye } from "lucide-react";

interface Study {
  id: number;
  name: string;
  sponsor: string;
  status: string;
  statusType: string;
  description: string;
  participants: number;
  duration: string;
  location: string;
}

interface FollowTypeModalProps {
  study: Study | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectType: (study: Study, type: 'participant' | 'observer') => void;
}

const FollowTypeModal = ({ study, open, onOpenChange, onSelectType }: FollowTypeModalProps) => {
  if (!study) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900 font-medium">How would you like to follow this study?</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Card 
            className="border-2 border-blue-200 hover:border-blue-300 cursor-pointer transition-all duration-300 bg-blue-50 hover:bg-blue-100"
            onClick={() => onSelectType(study, 'participant')}
          >
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-medium">As a Participant</CardTitle>
              <CardDescription className="text-gray-700 font-normal">
                You are actively participating in this study
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="border-2 border-orange-200 hover:border-orange-300 cursor-pointer transition-all duration-300 bg-orange-50 hover:bg-orange-100"
            onClick={() => onSelectType(study, 'observer')}
          >
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 font-medium">As a Public Observer</CardTitle>
              <CardDescription className="text-gray-700 font-normal">
                You want to follow the study's progress publicly
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FollowTypeModal;
