
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface StudyStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  studyName: string;
  currentStatus: string;
  onUpdateStatus: (newStatus: string, notes: string) => void;
}

const StudyStatusModal = ({ isOpen, onClose, studyName, currentStatus, onUpdateStatus }: StudyStatusModalProps) => {
  const [newStatus, setNewStatus] = useState(currentStatus);
  const [notes, setNotes] = useState("");

  const statusOptions = [
    "Active – Recruiting",
    "Data Collection",
    "Analysis Phase",
    "Completed",
    "Paused",
    "Terminated",
    "Planning Phase"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStatus(newStatus, notes);
    setNotes("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white/95 backdrop-blur-sm border-orange-200">
        <DialogHeader>
          <DialogTitle className="text-gray-900 font-medium">Update Study Status</DialogTitle>
          <DialogDescription className="text-gray-700 font-normal">
            Update the status for "{studyName}"
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="status" className="text-gray-700 font-normal">New Status *</Label>
            <Select value={newStatus} onValueChange={setNewStatus}>
              <SelectTrigger className="border-orange-200 focus:border-orange-400 focus:ring-orange-200">
                <SelectValue placeholder="Select new status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-gray-700 font-normal">Update Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about this status change..."
              className="border-orange-200 focus:border-orange-400 focus:ring-orange-200"
              rows={3}
            />
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-700 font-normal">
              <strong>Note:</strong> This status change will be recorded on the blockchain 
              for transparent tracking and cannot be undone.
            </p>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={onClose}
              className="border-orange-200 text-orange-700 hover:bg-orange-50 font-normal"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white border-0 font-normal"
            >
              Update Status
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StudyStatusModal;
