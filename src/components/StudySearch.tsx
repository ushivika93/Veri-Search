
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Calendar, MapPin, Eye, Heart } from "lucide-react";

// Mock data for studies
const mockStudies = [
  {
    id: "1",
    title: "COVID-19 Vaccine Efficacy Study",
    description: "A randomized controlled trial studying the long-term efficacy of COVID-19 vaccines in different age groups.",
    status: "Active",
    participants: 1250,
    duration: "18 months",
    location: "Multiple sites",
    category: "Infectious Disease"
  },
  {
    id: "2", 
    title: "Heart Health and Exercise Research",
    description: "Investigating the impact of regular exercise on cardiovascular health in adults over 50.",
    status: "Recruiting",
    participants: 800,
    duration: "12 months",
    location: "Stanford Medical Center",
    category: "Cardiology"
  },
  {
    id: "3",
    title: "Mental Health Technology Study", 
    description: "Evaluating the effectiveness of mobile apps for managing anxiety and depression.",
    status: "Active",
    participants: 500,
    duration: "6 months",
    location: "Online",
    category: "Mental Health"
  },
  {
    id: "4",
    title: "Diabetes Prevention Program",
    description: "A lifestyle intervention study for preventing type 2 diabetes in high-risk individuals.",
    status: "Recruiting",
    participants: 2000,
    duration: "24 months", 
    location: "Multiple sites",
    category: "Endocrinology"
  }
];

interface StudySearchProps {
  onFollowStudy: (studyId: string, role: 'participant' | 'interested') => void;
}

const StudySearch = ({ onFollowStudy }: StudySearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudy, setSelectedStudy] = useState<typeof mockStudies[0] | null>(null);
  const [followRole, setFollowRole] = useState<'participant' | 'interested'>('participant');
  const [showFollowDialog, setShowFollowDialog] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredStudies = mockStudies.filter(study =>
    study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStudySelect = (study: typeof mockStudies[0]) => {
    setSelectedStudy(study);
    setSearchTerm(study.title);
    setShowSuggestions(false);
  };

  const handleFollow = () => {
    if (selectedStudy) {
      onFollowStudy(selectedStudy.id, followRole);
      setShowFollowDialog(false);
      setSelectedStudy(null);
      setSearchTerm("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search for studies by name, category, or description..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(e.target.value.length > 0);
              setSelectedStudy(null);
            }}
            onFocus={() => setShowSuggestions(searchTerm.length > 0)}
            className="pl-10 border-orange-200 focus:border-orange-400 focus:ring-orange-200 bg-white/50"
          />
        </div>

        {showSuggestions && filteredStudies.length > 0 && (
          <Card className="absolute top-full left-0 right-0 mt-1 z-50 border-orange-200 bg-white/95 backdrop-blur-sm shadow-lg max-h-80 overflow-y-auto">
            <Command>
              <CommandList>
                <CommandGroup>
                  {filteredStudies.map((study) => (
                    <CommandItem
                      key={study.id}
                      onSelect={() => handleStudySelect(study)}
                      className="cursor-pointer hover:bg-orange-50"
                    >
                      <div className="flex flex-col space-y-1 w-full">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{study.title}</span>
                          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                            {study.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{study.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {study.participants} participants
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {study.duration}
                          </span>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </Card>
        )}
      </div>

      {selectedStudy && (
        <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-gray-900">{selectedStudy.title}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                    {selectedStudy.status}
                  </Badge>
                  <Badge variant="outline" className="border-gray-300 text-gray-700">
                    {selectedStudy.category}
                  </Badge>
                </div>
              </div>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-sm">
                    <DialogHeader>
                      <DialogTitle className="text-gray-900">{selectedStudy.title}</DialogTitle>
                      <DialogDescription className="text-gray-700">
                        Study Details and Information
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-gray-700">{selectedStudy.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-orange-400" />
                          <span className="text-sm text-gray-700">{selectedStudy.participants} participants</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-orange-400" />
                          <span className="text-sm text-gray-700">{selectedStudy.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-orange-400" />
                          <span className="text-sm text-gray-700">{selectedStudy.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                            {selectedStudy.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  onClick={() => setShowFollowDialog(true)}
                  className="bg-orange-400 hover:bg-orange-500 text-white border-0 shadow-lg"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Follow
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700">{selectedStudy.description}</CardDescription>
            <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-orange-400" />
                {selectedStudy.participants} participants
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-orange-400" />
                {selectedStudy.duration}
              </span>
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-orange-400" />
                {selectedStudy.location}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      <Dialog open={showFollowDialog} onOpenChange={setShowFollowDialog}>
        <DialogContent className="bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Follow Study</DialogTitle>
            <DialogDescription className="text-gray-700">
              Please specify your relationship to this study
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <RadioGroup value={followRole} onValueChange={(value: 'participant' | 'interested') => setFollowRole(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="participant" id="participant" />
                <Label htmlFor="participant" className="text-gray-700 font-normal">
                  I am a study participant
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="interested" id="interested" />
                <Label htmlFor="interested" className="text-gray-700 font-normal">
                  I am an interested party (observer)
                </Label>
              </div>
            </RadioGroup>
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFollowDialog(false)}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleFollow}
                className="bg-orange-400 hover:bg-orange-500 text-white border-0 shadow-lg"
              >
                Follow Study
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudySearch;
