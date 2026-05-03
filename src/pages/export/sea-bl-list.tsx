import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface ExportSeaBL {
  blNo: string;
  blDate: string;
  masterBl: string;
  shipper: string;
  consignee: string;
  vessel: string;
  voyage: string;
  pol: string;
  pod: string;
  containers: string;
  commodity: string;
  status: string;
}

export default function ExportSeaBLListPage() {
  const columns = [
    { key: "blNo", label: "B/L No" },
    { key: "blDate", label: "B/L Date" },
    { key: "masterBl", label: "Master B/L" },
    { key: "shipper", label: "Shipper" },
    { key: "consignee", label: "Consignee" },
    { key: "vessel", label: "Vessel" },
    { key: "voyage", label: "Voyage" },
    { key: "pol", label: "POL" },
    { key: "pod", label: "POD" },
    { key: "containers", label: "Containers" },
    { key: "commodity", label: "Commodity" },
    { key: "status", label: "Status" },
  ];

  const data: ExportSeaBL[] = [
    {
      blNo: "EXBL-2026-001",
      blDate: "2026-05-03",
      masterBl: "MAEU567890123",
      shipper: "Bangladesh Garments Ltd",
      consignee: "Fashion Hub USA",
      vessel: "MAERSK ESSEX",
      voyage: "650E",
      pol: "Chattogram",
      pod: "Los Angeles",
      containers: "2x40HC",
      commodity: "Ready Made Garments",
      status: "Issued",
    },
    {
      blNo: "EXBL-2026-002",
      blDate: "2026-05-04",
      masterBl: "MSCU789012345",
      shipper: "Apex Textile Mills",
      consignee: "European Fashion Group",
      vessel: "MSC MAYA",
      voyage: "MA726E",
      pol: "Chattogram",
      pod: "Rotterdam",
      containers: "3x40HC",
      commodity: "Cotton Fabric",
      status: "Issued",
    },
    {
      blNo: "EXBL-2026-003",
      blDate: "2026-04-30",
      masterBl: "CMDU345678901",
      shipper: "Prime Leather Industries",
      consignee: "Global Leather Co",
      vessel: "CMA CGM TITUS",
      voyage: "0LRGNE1MA",
      pol: "Chattogram",
      pod: "Hamburg",
      containers: "1x20GP",
      commodity: "Finished Leather",
      status: "Surrendered",
    },
    {
      blNo: "EXBL-2026-004",
      blDate: "2026-04-27",
      masterBl: "COSU123456789",
      shipper: "Jute Products BD",
      consignee: "Eco Materials Inc",
      vessel: "COSCO SHIPPING TAURUS",
      voyage: "088E",
      pol: "Chattogram",
      pod: "New York",
      containers: "2x40GP",
      commodity: "Jute Products",
      status: "In Transit",
    },
    {
      blNo: "EXBL-2026-005",
      blDate: "2026-05-02",
      masterBl: "HLCU901234567",
      shipper: "Frozen Food Exports",
      consignee: "Middle East Traders",
      vessel: "HAPAG-LLOYD EXPRESS",
      voyage: "105W",
      pol: "Chattogram",
      pod: "Dubai",
      containers: "1x40RF",
      commodity: "Frozen Seafood",
      status: "Issued",
    },
    {
      blNo: "EXBL-2026-006",
      blDate: "2026-05-04",
      masterBl: "EGLV567890123",
      shipper: "Ceramics Export House",
      consignee: "Asian Imports Ltd",
      vessel: "EVERGREEN EVER GIVEN",
      voyage: "0128-043E",
      pol: "Chattogram",
      pod: "Singapore",
      containers: "2x40HC",
      commodity: "Ceramic Tiles",
      status: "Draft",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Export Sea B/L List"
        searchPlaceholder="Search by B/L no, shipper, vessel..."
        onAdd={() => alert("Create new Export B/L")}
        addButtonLabel="New B/L"
      />
    </Layout>
  );
}