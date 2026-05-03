import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

const columns = [
  { key: "blNumber", label: "B/L Number", width: "w-32" },
  { key: "masterAgent", label: "Master Agent", width: "w-40" },
  { key: "vessel", label: "Vessel Name", width: "w-40" },
  { key: "voyage", label: "Voyage", width: "w-28" },
  { key: "pol", label: "Port of Loading", width: "w-36" },
  { key: "pod", label: "Port of Discharge", width: "w-36" },
  { key: "eta", label: "ETA", width: "w-32" },
  { key: "containers", label: "Containers", width: "w-28" },
  { key: "status", label: "Status", width: "w-32" },
];

const sampleData = [
  {
    blNumber: "MAEU123456789",
    masterAgent: "Maersk Line",
    vessel: "MAERSK ESSEX",
    voyage: "326E",
    pol: "Shanghai, China",
    pod: "Chittagong, Bangladesh",
    eta: "2026-05-15",
    containers: "3x40HC",
    status: "In Transit",
  },
  {
    blNumber: "MSCU987654321",
    masterAgent: "MSC Mediterranean",
    vessel: "MSC TERESA",
    voyage: "FL245A",
    pol: "Singapore",
    pod: "Chittagong, Bangladesh",
    eta: "2026-05-10",
    containers: "2x20GP",
    status: "Active",
  },
  {
    blNumber: "COSU456789123",
    masterAgent: "COSCO Shipping",
    vessel: "COSCO GLORY",
    voyage: "104N",
    pol: "Busan, South Korea",
    pod: "Chittagong, Bangladesh",
    eta: "2026-05-08",
    containers: "5x40HC",
    status: "Pending",
  },
  {
    blNumber: "HLCU741852963",
    masterAgent: "Hapag-Lloyd",
    vessel: "BERLIN EXPRESS",
    voyage: "028W",
    pol: "Hamburg, Germany",
    pod: "Chittagong, Bangladesh",
    eta: "2026-06-01",
    containers: "4x40HC",
    status: "Active",
  },
  {
    blNumber: "OOLU369258147",
    masterAgent: "OOCL",
    vessel: "OOCL ATLANTA",
    voyage: "065E",
    pol: "Hong Kong",
    pod: "Chittagong, Bangladesh",
    eta: "2026-05-20",
    containers: "1x20GP",
    status: "In Transit",
  },
  {
    blNumber: "CMDU852963741",
    masterAgent: "CMA CGM",
    vessel: "CMA CGM BOUGAINVILLE",
    voyage: "PN312",
    pol: "Port Klang, Malaysia",
    pod: "Chittagong, Bangladesh",
    eta: "2026-05-12",
    containers: "6x40HC",
    status: "Active",
  },
  {
    blNumber: "EGLV123789456",
    masterAgent: "Evergreen Line",
    vessel: "EVER GIVEN",
    voyage: "278W",
    pol: "Rotterdam, Netherlands",
    pod: "Chittagong, Bangladesh",
    eta: "2026-05-25",
    containers: "3x20GP",
    status: "Pending",
  },
  {
    blNumber: "YMLU456123789",
    masterAgent: "Yang Ming Line",
    vessel: "YM WELLHEAD",
    voyage: "024E",
    pol: "Kaohsiung, Taiwan",
    pod: "Chittagong, Bangladesh",
    eta: "2026-05-18",
    containers: "2x40HC",
    status: "In Transit",
  },
];

export default function MasterBLSeaPage() {
  return (
    <Layout>
      <DataTable
        title="Master B/L List (Import Sea)"
        description="Manage master bills of lading for sea freight imports"
        columns={columns}
        data={sampleData}
        onAdd={() => alert("Add new Master B/L")}
        addButtonLabel="Add Master B/L"
      />
    </Layout>
  );
}