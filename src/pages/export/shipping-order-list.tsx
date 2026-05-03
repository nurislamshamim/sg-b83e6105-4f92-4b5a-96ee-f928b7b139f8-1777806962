import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface ShippingOrder {
  soNo: string;
  soDate: string;
  bookingNo: string;
  shipper: string;
  vessel: string;
  voyage: string;
  etd: string;
  pol: string;
  pod: string;
  status: string;
}

export default function ShippingOrderListPage() {
  const columns = [
    { key: "soNo", label: "S/O No" },
    { key: "soDate", label: "S/O Date" },
    { key: "bookingNo", label: "Booking No" },
    { key: "shipper", label: "Shipper" },
    { key: "vessel", label: "Vessel" },
    { key: "voyage", label: "Voyage" },
    { key: "etd", label: "ETD" },
    { key: "pol", label: "POL" },
    { key: "pod", label: "POD" },
    { key: "status", label: "Status" },
  ];

  const data: ShippingOrder[] = [
    {
      soNo: "SO-2026-001",
      soDate: "2026-05-02",
      bookingNo: "EXB-2026-001",
      shipper: "Bangladesh Garments Ltd",
      vessel: "MAERSK ESSEX",
      voyage: "650E",
      etd: "2026-05-10",
      pol: "Chattogram",
      pod: "Los Angeles",
      status: "Active",
    },
    {
      soNo: "SO-2026-002",
      soDate: "2026-05-03",
      bookingNo: "EXB-2026-002",
      shipper: "Apex Textile Mills",
      vessel: "MSC MAYA",
      voyage: "MA726E",
      etd: "2026-05-12",
      pol: "Chattogram",
      pod: "Rotterdam",
      status: "Active",
    },
    {
      soNo: "SO-2026-003",
      soDate: "2026-04-29",
      bookingNo: "EXB-2026-003",
      shipper: "Prime Leather Industries",
      vessel: "CMA CGM TITUS",
      voyage: "0LRGNE1MA",
      etd: "2026-05-08",
      pol: "Chattogram",
      pod: "Hamburg",
      status: "Completed",
    },
    {
      soNo: "SO-2026-004",
      soDate: "2026-04-26",
      bookingNo: "EXB-2026-004",
      shipper: "Jute Products BD",
      vessel: "COSCO SHIPPING TAURUS",
      voyage: "088E",
      etd: "2026-05-05",
      pol: "Chattogram",
      pod: "New York",
      status: "In Transit",
    },
    {
      soNo: "SO-2026-005",
      soDate: "2026-05-01",
      bookingNo: "EXB-2026-006",
      shipper: "Frozen Food Exports",
      vessel: "HAPAG-LLOYD EXPRESS",
      voyage: "105W",
      etd: "2026-05-11",
      pol: "Chattogram",
      pod: "Dubai",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Shipping Order List"
        searchPlaceholder="Search by S/O no, booking no, shipper..."
        onAdd={() => alert("Create new Shipping Order")}
        addButtonLabel="New S/O"
      />
    </Layout>
  );
}