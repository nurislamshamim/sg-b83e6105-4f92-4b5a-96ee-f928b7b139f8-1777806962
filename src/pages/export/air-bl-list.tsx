import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface ExportAirBL {
  awbNo: string;
  awbDate: string;
  masterAwb: string;
  shipper: string;
  consignee: string;
  airline: string;
  flightNo: string;
  departure: string;
  destination: string;
  pieces: number;
  weight: string;
  commodity: string;
  status: string;
}

export default function ExportAirBLListPage() {
  const columns = [
    { key: "awbNo", label: "AWB No" },
    { key: "awbDate", label: "AWB Date" },
    { key: "masterAwb", label: "Master AWB" },
    { key: "shipper", label: "Shipper" },
    { key: "consignee", label: "Consignee" },
    { key: "airline", label: "Airline" },
    { key: "flightNo", label: "Flight No" },
    { key: "departure", label: "Departure" },
    { key: "destination", label: "Destination" },
    { key: "pieces", label: "Pieces" },
    { key: "weight", label: "Weight" },
    { key: "commodity", label: "Commodity" },
    { key: "status", label: "Status" },
  ];

  const data: ExportAirBL[] = [
    {
      awbNo: "EXAW-2026-001",
      awbDate: "2026-05-03",
      masterAwb: "176-12345678",
      shipper: "Pharma Export BD",
      consignee: "Global Health Corp",
      airline: "Emirates",
      flightNo: "EK-582",
      departure: "Dhaka",
      destination: "Dubai",
      pieces: 45,
      weight: "320 kg",
      commodity: "Pharmaceutical Products",
      status: "Departed",
    },
    {
      awbNo: "EXAW-2026-002",
      awbDate: "2026-05-04",
      masterAwb: "618-87654321",
      shipper: "Electronics Exports Ltd",
      consignee: "Tech Hub Singapore",
      airline: "Singapore Airlines",
      flightNo: "SQ-446",
      departure: "Dhaka",
      destination: "Singapore",
      pieces: 28,
      weight: "185 kg",
      commodity: "Electronic Components",
      status: "Ready",
    },
    {
      awbNo: "EXAW-2026-003",
      awbDate: "2026-05-02",
      masterAwb: "157-23456789",
      shipper: "Garment Samples Ltd",
      consignee: "Fashion Buyers USA",
      airline: "Qatar Airways",
      flightNo: "QR-641",
      departure: "Dhaka",
      destination: "New York",
      pieces: 12,
      weight: "95 kg",
      commodity: "Garment Samples",
      status: "In Transit",
    },
    {
      awbNo: "EXAW-2026-004",
      awbDate: "2026-05-01",
      masterAwb: "074-34567890",
      shipper: "Handicrafts Export House",
      consignee: "Asian Art Gallery",
      airline: "Thai Airways",
      flightNo: "TG-331",
      departure: "Dhaka",
      destination: "Bangkok",
      pieces: 35,
      weight: "240 kg",
      commodity: "Handicrafts",
      status: "Delivered",
    },
    {
      awbNo: "EXAW-2026-005",
      awbDate: "2026-05-03",
      masterAwb: "235-45678901",
      shipper: "Frozen Seafood Exports",
      consignee: "Europe Fresh Foods",
      airline: "Turkish Airlines",
      flightNo: "TK-713",
      departure: "Dhaka",
      destination: "London",
      pieces: 18,
      weight: "425 kg",
      commodity: "Frozen Shrimp",
      status: "Ready",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Export Air B/L List"
        searchPlaceholder="Search by AWB no, shipper, airline..."
        onAdd={() => alert("Create new Air B/L")}
        addButtonLabel="New AWB"
      />
    </Layout>
  );
}