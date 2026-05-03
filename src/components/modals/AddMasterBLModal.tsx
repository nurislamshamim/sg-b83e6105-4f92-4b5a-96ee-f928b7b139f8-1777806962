import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddMasterBLModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function AddMasterBLModal({ open, onClose, onSubmit }: AddMasterBLModalProps) {
  const [formData, setFormData] = useState({
    blNo: "",
    vessel: "",
    voyage: "",
    carrier: "",
    pol: "",
    pod: "",
    etd: "",
    eta: "",
    containers: "",
    status: "In Transit",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-base">Add Master B/L (Sea)</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-1.5">
              <Label htmlFor="blNo" className="text-xs">B/L Number *</Label>
              <Input
                id="blNo"
                value={formData.blNo}
                onChange={(e) => setFormData({ ...formData, blNo: e.target.value })}
                placeholder="MAEU123456789"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="carrier" className="text-xs">Carrier *</Label>
              <Select
                value={formData.carrier}
                onValueChange={(value) => setFormData({ ...formData, carrier: value })}
              >
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Select carrier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Maersk">Maersk Line</SelectItem>
                  <SelectItem value="MSC">MSC</SelectItem>
                  <SelectItem value="COSCO">COSCO Shipping</SelectItem>
                  <SelectItem value="CMA CGM">CMA CGM</SelectItem>
                  <SelectItem value="Hapag-Lloyd">Hapag-Lloyd</SelectItem>
                  <SelectItem value="Evergreen">Evergreen</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="vessel" className="text-xs">Vessel Name *</Label>
              <Input
                id="vessel"
                value={formData.vessel}
                onChange={(e) => setFormData({ ...formData, vessel: e.target.value })}
                placeholder="MAERSK ESSEX"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="voyage" className="text-xs">Voyage *</Label>
              <Input
                id="voyage"
                value={formData.voyage}
                onChange={(e) => setFormData({ ...formData, voyage: e.target.value })}
                placeholder="650E"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pol" className="text-xs">Port of Loading *</Label>
              <Input
                id="pol"
                value={formData.pol}
                onChange={(e) => setFormData({ ...formData, pol: e.target.value })}
                placeholder="Singapore"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pod" className="text-xs">Port of Discharge *</Label>
              <Input
                id="pod"
                value={formData.pod}
                onChange={(e) => setFormData({ ...formData, pod: e.target.value })}
                placeholder="Chattogram"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="etd" className="text-xs">ETD</Label>
              <Input
                id="etd"
                type="date"
                value={formData.etd}
                onChange={(e) => setFormData({ ...formData, etd: e.target.value })}
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="eta" className="text-xs">ETA</Label>
              <Input
                id="eta"
                type="date"
                value={formData.eta}
                onChange={(e) => setFormData({ ...formData, eta: e.target.value })}
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="containers" className="text-xs">Containers</Label>
              <Input
                id="containers"
                value={formData.containers}
                onChange={(e) => setFormData({ ...formData, containers: e.target.value })}
                placeholder="2x40HC, 1x20GP"
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="status" className="text-xs">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="In Transit">In Transit</SelectItem>
                  <SelectItem value="Arrived">Arrived</SelectItem>
                  <SelectItem value="Customs Cleared">Customs Cleared</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="h-8 text-xs">
              Cancel
            </Button>
            <Button type="submit" className="h-8 bg-accent hover:bg-accent/90 text-xs">
              Save Master B/L
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}