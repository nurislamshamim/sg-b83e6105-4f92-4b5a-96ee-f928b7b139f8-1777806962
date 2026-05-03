import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface CargoManifest {
  manifestNo: string;
  manifestDate: string;
  vessel: string;
  voyage: string;
  pol: string;
  pod: string;
  totalBls: number;
  totalContainers: number;
  grossWeight: string;
  status: string;
}

export default function CargoManifestPage() {
  const columns = [
    { key: "manifestNo", label: "Manifest No" },
    { key: "manifestDate", label: "Date" },
    { key: "vessel", label: "Vessel" },
    { key: "voyage", label: "Voyage" },
    { key: "pol", label: "POL" },
    { key: "pod", label: "POD" },
    { key: "totalBls", label: "Total B/Ls" },
    { key: "totalContainers", label: "Containers" },
    { key: "grossWeight", label: "Gross Weight" },
    { key: "status", label: "Status" },
  ];

  const data: CargoManifest[] = [
    {
      manifestNo: "MF-2026-001",
      manifestDate: "2026-05-03",
      vessel: "MAERSK ESSEX",
      voyage: "650E",
      pol: "Chattogram",
      pod: "Los Angeles",
      totalBls: 8,
      totalContainers: 12,
      grossWeight: "245.8 MT",
      status: "Submitted",
    },
    {
      manifestNo: "MF-2026-002",
      manifestDate: "2026-05-04",
      vessel: "MSC MAYA",
      voyage: "MA726E",
      pol: "Chattogram",
      pod: "Rotterdam",
      totalBls: 12,
      totalContainers: 18,
      grossWeight: "312.4 MT",
      status: "Draft",
    },
    {
      manifestNo: "MF-2026-003",
      manifestDate: "2026-04-30",
      vessel: "CMA CGM TITUS",
      voyage: "0LRGNE1MA",
      pol: "Chattogram",
      pod: "Hamburg",
      totalBls: 6,
      totalContainers: 8,
      grossWeight: "168.5 MT",
      status: "Approved",
    },
    {
      manifestNo: "MF-2026-004",
      manifestDate: "2026-04-27",
      vessel: "COSCO SHIPPING TAURUS",
      voyage: "088E",
      pol: "Chattogram",
      pod: "New York",
      totalBls: 10,
      totalContainers: 15,
      grossWeight: "287.3 MT",
      status: "Submitted",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Cargo Manifest List"
        searchPlaceholder="Search by manifest no, vessel, voyage..."
        onAdd={() => alert("Create new Cargo Manifest")}
        addButtonLabel="New Manifest"
      />
    </Layout>
  );
}