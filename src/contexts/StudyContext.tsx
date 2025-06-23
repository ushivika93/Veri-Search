import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Study {
  id: number;
  name: string;
  sponsor: string;
  status: string;
  statusType: string;
  description?: string;
  phase?: string;
  participants?: number;
  targetParticipants?: number;
  created?: string;
  lastUpdated: string;
  protocolVersion: string;
  enrolled?: string;
  approved?: string;
  notifications?: number;
  statusNotes?: string;
}

interface StudyContextType {
  studies: Study[];
  updateStudyStatus: (studyId: number, newStatus: string, notes: string) => void;
  getStudyById: (studyId: number) => Study | undefined;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export const useStudyContext = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudyContext must be used within a StudyProvider');
  }
  return context;
};

interface StudyProviderProps {
  children: ReactNode;
}

export const StudyProvider = ({ children }: StudyProviderProps) => {
  const [studies, setStudies] = useState<Study[]>([
    // Researcher studies
    {
      id: 1,
      name: "AI-Assisted Diagnostic Tool Validation",
      sponsor: "University Medical Center",
      description: "Evaluating the effectiveness of AI in medical diagnosis",
      status: "Active – Recruiting",
      statusType: "ongoing",
      phase: "Phase II",
      participants: 145,
      targetParticipants: 200,
      created: "February 1, 2024",
      lastUpdated: "Yesterday",
      protocolVersion: "v1.2"
    },
    {
      id: 2,
      name: "Remote Patient Monitoring Study",
      sponsor: "University Medical Center",
      description: "Assessment of wearable devices for chronic condition management",
      status: "Data Collection",
      statusType: "ongoing",
      phase: "Phase III",
      participants: 89,
      targetParticipants: 150,
      created: "December 15, 2023",
      lastUpdated: "3 days ago",
      protocolVersion: "v2.0"
    },
    {
      id: 3,
      name: "Telemedicine Effectiveness Analysis",
      sponsor: "University Medical Center",
      description: "Comparing outcomes between virtual and in-person consultations",
      status: "Analysis Phase",
      statusType: "analyzing",
      phase: "Phase III",
      participants: 300,
      targetParticipants: 300,
      created: "September 10, 2023",
      lastUpdated: "1 week ago",
      protocolVersion: "v1.1"
    },
    // Participant studies (same studies from participant perspective)
    {
      id: 1,
      name: "AI-Assisted Diagnostic Tool Validation",
      sponsor: "University Medical Center",
      status: "Active – Recruiting",
      statusType: "ongoing",
      enrolled: "March 15, 2024",
      lastUpdated: "Yesterday",
      protocolVersion: "v1.2",
      notifications: 2
    },
    // Additional participant studies
    {
      id: 4,
      name: "Diabetes Prevention Trial",
      sponsor: "National Health Institute",
      status: "Now Analyzing",
      statusType: "analyzing",
      enrolled: "January 8, 2024",
      lastUpdated: "1 week ago",
      protocolVersion: "v1.3",
      notifications: 0
    },
    {
      id: 5,
      name: "Sleep Quality Research",
      sponsor: "Sleep Research Foundation",
      status: "Results Published",
      statusType: "published",
      enrolled: "October 2, 2023",
      lastUpdated: "3 weeks ago",
      protocolVersion: "v1.0",
      notifications: 1
    },
    // Followed studies
    {
      id: 6,
      name: "Mental Health and Exercise Study",
      sponsor: "Psychology Research Center",
      status: "Active – Data Collection",
      statusType: "ongoing",
      approved: "February 20, 2024",
      lastUpdated: "5 days ago",
      protocolVersion: "v1.2",
      notifications: 0
    },
    {
      id: 7,
      name: "Nutrition and Longevity Research",
      sponsor: "Aging Research Institute",
      status: "Now Analyzing",
      statusType: "analyzing",
      approved: "December 10, 2023",
      lastUpdated: "2 weeks ago",
      protocolVersion: "v2.0",
      notifications: 1
    }
  ]);

  const updateStudyStatus = (studyId: number, newStatus: string, notes: string) => {
    setStudies(prevStudies => 
      prevStudies.map(study => {
        if (study.id === studyId) {
          // If this study has an enrolled field (participant study), increment notifications
          const shouldAddNotification = study.enrolled !== undefined;
          return {
            ...study, 
            status: newStatus, 
            lastUpdated: "Just now",
            statusNotes: notes,
            notifications: shouldAddNotification ? (study.notifications || 0) + 1 : study.notifications
          };
        }
        return study;
      })
    );
  };

  const getStudyById = (studyId: number) => {
    return studies.find(study => study.id === studyId);
  };

  return (
    <StudyContext.Provider value={{ studies, updateStudyStatus, getStudyById }}>
      {children}
    </StudyContext.Provider>
  );
};
