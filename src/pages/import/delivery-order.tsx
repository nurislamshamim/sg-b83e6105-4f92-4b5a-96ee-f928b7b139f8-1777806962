import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

const columns = [
  { key: "doNumber", label: "D/O Number", width: "w-32" },
  { key: "blNumber", label: "B/L Number", width: "w-32" },
  { key: "consignee", label: "Consignee", width: "w-48" },
  { key: "agent", label: "C&F Agent", width: "w-40" },
  { key: "containers", label: "Container No.", width: "w-36" },
  { key: "issueDate", label: "Issue Date", width: "w-32" },
  { key: "validUntil", label: "Valid Until", width: "w-32" },
  { key: "deliveryStatus", label: "Delivery Status", width: "w-32" },
  { key: "status", label: "Status", width: "w-28" },
];

const sampleData = [
  {
    doNumber: "DO/2026/0501",
    blNumber: "HCTG24050001",
    consignee: "Bangladesh Trading Co. Ltd.",
    agent: "Chittagong C&F Agents",
    containers: "MAEU4567890",
    issueDate: "2026-05-01",
    validUntil: "2026-05-15",
    deliveryStatus: "Ready for Pickup",
    status: "Active",
  },
  {
    doNumber: "DO/2026/0502",
    blNumber: "HCTG24050002",
    consignee: "Dhaka Garments Ltd.",
    agent: "Prime Clearing House",
    containers: "MSCU7654321",
    issueDate: "2026-05-01",
    validUntil: "2026-05-15",
    deliveryStatus: "Delivered",
    status: "Completed",
  },
  {
    doNumber: "DO/2026/0503",
    blNumber: "HCTG24050003",
    consignee: "Chittagong Electronics",
    agent: "Express C&F Services",
    containers: "COSU1234567",
    issueDate: "2026-05-02",
    validUntil: "2026-05-16",
    deliveryStatus: "In Process",
    status: "Active",
  },
  {
    doNumber: "DO/2026/0504",
    blNumber: "HCTG24050004",
    consignee: "Prime Pharmaceuticals Ltd.",
    agent: "Global Logistics BD",
    containers: "HLCU9876543",
    issueDate: "2026-05-02",
    validUntil: "2026-05-16",
    deliveryStatus: "Pending Customs",
    status: "Pending",
  },
  {
    doNumber: "DO/2026/0505",
    blNumber: "HCTG24050005",
    consignee: "Bangladesh Auto Parts",
    agent: "Chittagong C&F Agents",
    containers: "OOLU5432109",
    issueDate: "2026-05-03",
    validUntil: "2026-05-17",
    deliveryStatus: "Ready for Pickup",
    status: "Active",
  },
];

export default function DeliveryOrderPage() {
  return (
    <Layout>
      <DataTable
        title="Delivery Order List (Import Sea)"
        description="Manage delivery orders for imported shipments"
        columns={columns}
        data={sampleData}
        onAdd={() => alert("Create new Delivery Order")}
        addButtonLabel="Create D/O"
      />
    </Layout>
  );
}