import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, Ship, Calendar, MapPin, FileText } from "lucide-react";

interface ShipmentDetailViewProps {
  open: boolean;
  onClose: () => void;
  shipment: any;
}

export function ShipmentDetailView({ open, onClose, shipment }: ShipmentDetailViewProps) {
  if (!shipment) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-base">Shipment Details</DialogTitle>
              <p className="text-xs text-muted-foreground mt-1">{shipment.blNo || shipment.hblNo}</p>
            </div>
            <Badge className="text-xs">{shipment.status}</Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Vessel Information */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Ship className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold">Vessel Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-muted-foreground mb-1">Vessel Name</p>
                <p className="font-medium">{shipment.vessel || "N/A"}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Voyage</p>
                <p className="font-medium">{shipment.voyage || "N/A"}</p>
              </div>
              {shipment.carrier && (
                <div>
                  <p className="text-muted-foreground mb-1">Carrier</p>
                  <p className="font-medium">{shipment.carrier}</p>
                </div>
              )}
              {shipment.masterBl && (
                <div>
                  <p className="text-muted-foreground mb-1">Master B/L</p>
                  <p className="font-medium">{shipment.masterBl}</p>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Route Information */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold">Route Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-muted-foreground mb-1">Port of Loading</p>
                <p className="font-medium">{shipment.pol}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Port of Discharge</p>
                <p className="font-medium">{shipment.pod}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Schedule */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold">Schedule</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {shipment.etd && (
                <div>
                  <p className="text-muted-foreground mb-1">ETD</p>
                  <p className="font-medium">{shipment.etd}</p>
                </div>
              )}
              {shipment.eta && (
                <div>
                  <p className="text-muted-foreground mb-1">ETA</p>
                  <p className="font-medium">{shipment.eta}</p>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Cargo Information */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold">Cargo Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {shipment.shipper && (
                <div>
                  <p className="text-muted-foreground mb-1">Shipper</p>
                  <p className="font-medium">{shipment.shipper}</p>
                </div>
              )}
              {shipment.consignee && (
                <div>
                  <p className="text-muted-foreground mb-1">Consignee</p>
                  <p className="font-medium">{shipment.consignee}</p>
                </div>
              )}
              {shipment.commodity && (
                <div className="col-span-2">
                  <p className="text-muted-foreground mb-1">Commodity</p>
                  <p className="font-medium">{shipment.commodity}</p>
                </div>
              )}
              {shipment.containers && (
                <div>
                  <p className="text-muted-foreground mb-1">Containers</p>
                  <p className="font-medium">{shipment.containers}</p>
                </div>
              )}
              {shipment.packages && (
                <div>
                  <p className="text-muted-foreground mb-1">Packages</p>
                  <p className="font-medium">{shipment.packages}</p>
                </div>
              )}
              {shipment.weight && (
                <div>
                  <p className="text-muted-foreground mb-1">Gross Weight</p>
                  <p className="font-medium">{shipment.weight} KG</p>
                </div>
              )}
              {shipment.cbm && (
                <div>
                  <p className="text-muted-foreground mb-1">Volume</p>
                  <p className="font-medium">{shipment.cbm} CBM</p>
                </div>
              )}
            </div>
          </div>

          {/* Documents */}
          {(shipment.blNo || shipment.hblNo) && (
            <>
              <Separator />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <h3 className="text-sm font-semibold">Documents</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-muted rounded hover:bg-muted/70 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Bill of Lading</span>
                    </div>
                    <span className="text-accent">View PDF</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded hover:bg-muted/70 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Commercial Invoice</span>
                    </div>
                    <span className="text-accent">View PDF</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded hover:bg-muted/70 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Packing List</span>
                    </div>
                    <span className="text-accent">View PDF</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}