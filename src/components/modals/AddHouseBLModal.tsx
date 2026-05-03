import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface AddHouseBLModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function AddHouseBLModal({ open, onClose, onSubmit }: AddHouseBLModalProps) {
  const [formData, setFormData] = useState({
    hblNo: "",
    masterBl: "",
    shipper: "",
    consignee: "",
    commodity: "",
    packages: "",
    weight: "",
    cbm: "",
    status: "Active",
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
          <DialogTitle className="text-base">Add House B/L (Sea)</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-1.5">
              <Label htmlFor="hblNo" className="text-xs">House B/L Number *</Label>
              <Input
                id="hblNo"
                value={formData.hblNo}
                onChange={(e) => setFormData({ ...formData, hblNo: e.target.value })}
                placeholder="HBL-2026-001"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="masterBl" className="text-xs">Master B/L *</Label>
              <Input
                id="masterBl"
                value={formData.masterBl}
                onChange={(e) => setFormData({ ...formData, masterBl: e.target.value })}
                placeholder="MAEU123456789"
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
                placeholder="ABC Trading Co Ltd"
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
                placeholder="XYZ Imports Ltd"
                required
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5 col-span-2">
              <Label htmlFor="commodity" className="text-xs">Commodity Description *</Label>
              <Textarea
                id="commodity"
                value={formData.commodity}
                onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                placeholder="Electronic Components"
                required
                className="h-16 text-xs resize-none"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="packages" className="text-xs">Packages</Label>
              <Input
                id="packages"
                value={formData.packages}
                onChange={(e) => setFormData({ ...formData, packages: e.target.value })}
                placeholder="150 Cartons"
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="weight" className="text-xs">Gross Weight (KG)</Label>
              <Input
                id="weight"
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                placeholder="2500"
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cbm" className="text-xs">Volume (CBM)</Label>
              <Input
                id="cbm"
                type="number"
                step="0.01"
                value={formData.cbm}
                onChange={(e) => setFormData({ ...formData, cbm: e.target.value })}
                placeholder="35.50"
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
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="In Transit">In Transit</SelectItem>
                  <SelectItem value="Arrived">Arrived</SelectItem>
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
              Save House B/L
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}