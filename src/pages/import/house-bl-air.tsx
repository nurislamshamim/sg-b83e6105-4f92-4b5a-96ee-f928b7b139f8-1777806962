import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

const columns = [
  { key: "hawbNumber", label: "HAWB Number", width: "w-32" },
  { key: "mawbNumber", label: "MAWB Number", width: "w-32" },
  { key: "consignee", label: "Consignee", width: "w-48" },
  { key: "shipper", label: "Shipper", width: "w-48" },
  { key: "commodity", label: "Commodity", width: "w-40" },
  { key: "pieces", label: "Pieces", width: "w-24" },
  { key: "weight", label: "Weight (KG)", width: "w-28" },
  { key: "value", label: "Value (USD)", width: "w-28" },
  { key: "status", label: "Status", width: "w-32" },
];

const sampleData = [
  {
    hawbNumber: "HDAC24050001",
    mawbNumber: "176-12345678",
    consignee: "Dhaka Pharmaceuticals Ltd.",
    shipper: "Dubai Medical Supplies",
    commodity: "Medical Equipment",
    pieces: "45",
    weight: "850",
    value: "45,000",
    status: "In Transit",
  },
  {
    hawbNumber: "HDAC24050002",
    mawbNumber: "618-87654321",
    consignee: "Bangladesh Electronics",
    shipper: "Singapore Tech Exports",
    commodity: "Computer Components",
    pieces: "30",
    weight: "420",
    value: "28,500",
    status: "Completed",
  },
  {
    hawbNumber: "HDAC24050003",
    mawbNumber: "157-45678912",
    consignee: "Fashion House BD",
    shipper: "Qatar Garments Trading",
    commodity: "Fashion Accessories",
    pieces: "80",
    weight: "960",
    value: "18,000",
    status: "Active",
  },
  {
    hawbNumber: "HDAC24050004",
    mawbNumber: "074-78965412",
    consignee: "Dhaka Auto Imports",
    shipper: "Turkish Auto Parts Co.",
    commodity: "Automobile Parts",
    pieces: "65",
    weight: "1,150",
    value: "32,000",
    status: "Pending",
  },
  {
    hawbNumber: "HDAC24050005",
    mawbNumber: "180-32165498",
    consignee: "Tech Solutions BD",
    shipper: "Seoul Electronics Ltd.",
    commodity: "Mobile Phone Parts",
    pieces: "40",
    weight: "580",
    value: "52,000",
    status: "In Transit",
  },
];

export default function HouseBLAirPage() {
  return (
    <Layout>
      <DataTable
        title="House B/L List (Import Air)"
        description="Manage house air waybills for air freight imports"
        columns={columns}
        data={sampleData}
        onAdd={() => alert("Add new House AWB")}
        addButtonLabel="Add House AWB"
      />
    </Layout>
  );
}