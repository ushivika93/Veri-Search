
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar, Users, MapPin, FileText } from "lucide-react";

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

interface StudyDetailsModalProps {
  study: Study | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFollow: (study: Study) => void;
}

const StudyDetailsModal = ({ study, open, onOpenChange, onFollow }: StudyDetailsModalProps) => {
  if (!study) return null;

  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case 'ongoing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'analyzing': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'published': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-orange-100 text-orange-700 border-orange-200';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900 font-medium">Study Details</DialogTitle>
        </DialogHeader>
        
        <Card className="border-gray-200 bg-white">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-gray-900 mb-2 font-medium text-xl">{study.name}</CardTitle>
                <CardDescription className="text-gray-700 font-normal">
                  Sponsored by {study.sponsor}
                </CardDescription>
              </div>
              <Badge className={getStatusColor(study.statusType)}>
                {study.status}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 font-normal leading-relaxed">{study.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Participants</p>
                    <p className="text-gray-600 font-normal">{study.participants} enrolled</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Duration</p>
                    <p className="text-gray-600 font-normal">{study.duration}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-600 font-normal">{study.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Study ID</p>
                    <p className="text-gray-600 font-normal">ST-{study.id.toString().padStart(4, '0')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Button 
                onClick={() => onFollow(study)}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white border-0 font-normal"
              >
                <Plus className="h-4 w-4 mr-2" />
                Follow This Study
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default StudyDetailsModal;
