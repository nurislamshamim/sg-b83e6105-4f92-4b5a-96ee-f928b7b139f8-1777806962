import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";

interface EBooking {
  bookingNo: string;
  bookingDate: string;
  shipper: string;
  consignee: string;
  pol: string;
  pod: string;
  commodity: string;
  containers: string;
  status: string;
}

export default function EBookingListPage() {
  const columns = [
    { key: "bookingNo", label: "Booking No" },
    { key: "bookingDate", label: "Booking Date" },
    { key: "shipper", label: "Shipper" },
    { key: "consignee", label: "Consignee" },
    { key: "pol", label: "POL" },
    { key: "pod", label: "POD" },
    { key: "commodity", label: "Commodity" },
    { key: "containers", label: "Containers" },
    { key: "status", label: "Status" },
  ];

  const data: EBooking[] = [
    {
      bookingNo: "EXB-2026-001",
      bookingDate: "2026-05-01",
      shipper: "Bangladesh Garments Ltd",
      consignee: "Fashion Hub USA",
      pol: "Chattogram",
      pod: "Los Angeles",
      commodity: "Ready Made Garments",
      containers: "2x40HC",
      status: "Confirmed",
    },
    {
      bookingNo: "EXB-2026-002",
      bookingDate: "2026-05-02",
      shipper: "Apex Textile Mills",
      consignee: "European Fashion Group",
      pol: "Chattogram",
      pod: "Rotterdam",
      commodity: "Cotton Fabric",
      containers: "3x40HC",
      status: "Pending",
    },
    {
      bookingNo: "EXB-2026-003",
      bookingDate: "2026-04-28",
      shipper: "Prime Leather Industries",
      consignee: "Global Leather Co",
      pol: "Chattogram",
      pod: "Hamburg",
      commodity: "Finished Leather",
      containers: "1x20GP",
      status: "Confirmed",
    },
    {
      bookingNo: "EXB-2026-004",
      bookingDate: "2026-04-25",
      shipper: "Jute Products BD",
      consignee: "Eco Materials Inc",
      pol: "Chattogram",
      pod: "New York",
      commodity: "Jute Products",
      containers: "2x40GP",
      status: "Shipped",
    },
    {
      bookingNo: "EXB-2026-005",
      bookingDate: "2026-05-03",
      shipper: "Ceramics Export House",
      consignee: "Asian Imports Ltd",
      pol: "Chattogram",
      pod: "Singapore",
      commodity: "Ceramic Tiles",
      containers: "2x40HC",
      status: "Pending",
    },
    {
      bookingNo: "EXB-2026-006",
      bookingDate: "2026-04-30",
      shipper: "Frozen Food Exports",
      consignee: "Middle East Traders",
      pol: "Chattogram",
      pod: "Dubai",
      commodity: "Frozen Seafood",
      containers: "1x40RF",
      status: "Confirmed",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="E-Booking List"
        searchPlaceholder="Search by booking no, shipper, consignee..."
        onAdd={() => alert("Create new E-Booking")}
        addButtonLabel="New Booking"
      />
    </Layout>
  );
}