
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Eye } from "lucide-react";

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

interface StudySearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onViewStudy: (study: Study) => void;
}

const StudySearchModal = ({ open, onOpenChange, onViewStudy }: StudySearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Study[]>([]);

  // Mock study database
  const allStudies: Study[] = [
    {
      id: 6,
      name: "Advanced Cancer Treatment Research",
      sponsor: "National Cancer Institute",
      status: "Active – Recruiting",
      statusType: "ongoing",
      description: "Investigating new immunotherapy approaches for advanced cancer treatment",
      participants: 250,
      duration: "24 months",
      location: "Multiple centers nationwide"
    },
    {
      id: 7,
      name: "Heart Disease Prevention Study",
      sponsor: "Cardiology Research Foundation",
      status: "Active – Data Collection",
      statusType: "ongoing",
      description: "Long-term study on dietary interventions for heart disease prevention",
      participants: 180,
      duration: "36 months",
      location: "University Medical Center"
    },
    {
      id: 8,
      name: "Alzheimer's Memory Enhancement Trial",
      sponsor: "Neurology Institute",
      status: "Now Analyzing",
      statusType: "analyzing",
      description: "Testing cognitive enhancement therapies for early-stage Alzheimer's",
      participants: 120,
      duration: "18 months",
      location: "Brain Research Center"
    },
    {
      id: 9,
      name: "Diabetes Type 2 Management Study",
      sponsor: "Endocrinology Research Group",
      status: "Results Published",
      statusType: "published",
      description: "Comparing different management approaches for Type 2 diabetes",
      participants: 300,
      duration: "12 months",
      location: "Regional Medical Centers"
    },
    {
      id: 10,
      name: "Mental Health in Young Adults",
      sponsor: "Psychology Research Center",
      status: "Active – Recruiting",
      statusType: "ongoing",
      description: "Understanding mental health patterns in college-age adults",
      participants: 150,
      duration: "6 months",
      location: "University Campus"
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = allStudies.filter(study => 
        study.name.toLowerCase().includes(query.toLowerCase()) ||
        study.sponsor.toLowerCase().includes(query.toLowerCase()) ||
        study.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

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
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900 font-medium">Search Studies</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by study name, sponsor, or description..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 bg-white border-gray-300 focus:border-orange-300 focus:ring-orange-200"
            />
          </div>

          {searchResults.length > 0 && (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {searchResults.map((study) => (
                <Card key={study.id} className="border-gray-200 hover:shadow-md transition-all duration-300 bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-gray-900 mb-1 font-medium text-lg">{study.name}</CardTitle>
                        <CardDescription className="text-gray-700 font-normal">
                          Sponsored by {study.sponsor}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(study.statusType)}>
                        {study.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 font-normal">{study.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <p className="font-medium text-gray-700">Participants</p>
                        <p className="text-gray-600 font-normal">{study.participants}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Duration</p>
                        <p className="text-gray-600 font-normal">{study.duration}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Location</p>
                        <p className="text-gray-600 font-normal">{study.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        onClick={() => onViewStudy(study)}
                        className="bg-orange-400 hover:bg-orange-500 text-white border-0 font-normal"
                        size="sm"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p className="font-normal">No studies found matching your search.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudySearchModal;
