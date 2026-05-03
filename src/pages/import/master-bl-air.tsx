import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

const columns = [
  { key: "mawbNumber", label: "MAWB Number", width: "w-32" },
  { key: "airline", label: "Airline", width: "w-40" },
  { key: "flightNumber", label: "Flight No.", width: "w-28" },
  { key: "origin", label: "Origin", width: "w-36" },
  { key: "destination", label: "Destination", width: "w-36" },
  { key: "departure", label: "Departure", width: "w-32" },
  { key: "arrival", label: "Arrival", width: "w-32" },
  { key: "pieces", label: "Pieces", width: "w-24" },
  { key: "weight", label: "Weight (KG)", width: "w-28" },
  { key: "status", label: "Status", width: "w-32" },
];

const sampleData = [
  {
    mawbNumber: "176-12345678",
    airline: "Emirates SkyCargo",
    flightNumber: "EK-582",
    origin: "Dubai, UAE",
    destination: "Dhaka, Bangladesh",
    departure: "2026-05-05",
    arrival: "2026-05-05",
    pieces: "125",
    weight: "2,450",
    status: "In Transit",
  },
  {
    mawbNumber: "618-87654321",
    airline: "Singapore Airlines Cargo",
    flightNumber: "SQ-446",
    origin: "Singapore",
    destination: "Dhaka, Bangladesh",
    departure: "2026-05-04",
    arrival: "2026-05-04",
    pieces: "85",
    weight: "1,680",
    status: "Completed",
  },
  {
    mawbNumber: "157-45678912",
    airline: "Qatar Airways Cargo",
    flightNumber: "QR-639",
    origin: "Doha, Qatar",
    destination: "Dhaka, Bangladesh",
    departure: "2026-05-06",
    arrival: "2026-05-06",
    pieces: "200",
    weight: "3,200",
    status: "Active",
  },
  {
    mawbNumber: "074-78965412",
    airline: "Turkish Cargo",
    flightNumber: "TK-713",
    origin: "Istanbul, Turkey",
    destination: "Dhaka, Bangladesh",
    departure: "2026-05-07",
    arrival: "2026-05-07",
    pieces: "150",
    weight: "2,850",
    status: "Pending",
  },
  {
    mawbNumber: "180-32165498",
    airline: "Korean Air Cargo",
    flightNumber: "KE-673",
    origin: "Seoul, South Korea",
    destination: "Dhaka, Bangladesh",
    departure: "2026-05-08",
    arrival: "2026-05-08",
    pieces: "95",
    weight: "1,920",
    status: "In Transit",
  },
];

export default function MasterBLAirPage() {
  return (
    <Layout>
      <DataTable
        title="Master B/L List (Import Air)"
        description="Manage master air waybills for air freight imports"
        columns={columns}
        data={sampleData}
        onAdd={() => alert("Add new Master AWB")}
        addButtonLabel="Add Master AWB"
      />
    </Layout>
  );
}