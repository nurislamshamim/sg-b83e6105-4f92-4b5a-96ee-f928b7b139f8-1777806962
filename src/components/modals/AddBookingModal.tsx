import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddBookingModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function AddBookingModal({ open, onClose, onSubmit }: AddBookingModalProps) {
  const [formData, setFormData] = useState({
    bookingNo: "",
    bookingDate: "",
    shipper: "",
    consignee: "",
    pol: "",
    pod: "",
    commodity: "",
    containers: "",
    status: "Pending",
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
          <DialogTitle className="text-base">Create E-Booking</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-1.5">
              <Label htmlFor="bookingNo" className="text-xs">Booking Number *</Label>
              <Input
                id="bookingNo"
                value={formData.bookingNo}
                onChange={(e) => setFormData({ ...formData, bookingNo: e.target.value })}
                placeholder="EXB-2026-XXX"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="bookingDate" className="text-xs">Booking Date *</Label>
              <Input
                id="bookingDate"
                type="date"
                value={formData.bookingDate}
                onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5 col-span-2">
              <Label htmlFor="shipper" className="text-xs">Shipper *</Label>
              <Input
                id="shipper"
                value={formData.shipper}
                onChange={(e) => setFormData({ ...formData, shipper: e.target.value })}
                placeholder="Company name"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5 col-span-2">
              <Label htmlFor="consignee" className="text-xs">Consignee *</Label>
              <Input
                id="consignee"
                value={formData.consignee}
                onChange={(e) => setFormData({ ...formData, consignee: e.target.value })}
                placeholder="Company name"
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
                placeholder="Chattogram"
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
                placeholder="Singapore"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="commodity" className="text-xs">Commodity *</Label>
              <Input
                id="commodity"
                value={formData.commodity}
                onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                placeholder="Ready Made Garments"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="containers" className="text-xs">Container Requirements *</Label>
              <Input
                id="containers"
                value={formData.containers}
                onChange={(e) => setFormData({ ...formData, containers: e.target.value })}
                placeholder="2x40HC"
                required
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
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Confirmed">Confirmed</SelectItem>
                  <SelectItem value="Shipped">Shipped</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="h-8 text-xs">
              Cancel
            </Button>
            <Button type="submit" className="h-8 bg-accent hover:bg-accent/90 text-xs">
              Create Booking
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}