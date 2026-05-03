import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface ContainerType {
  code: string;
  description: string;
  size: string;
  type: string;
  teu: number;
  maxWeight: string;
  status: string;
}

export default function ContainerTypesPage() {
  const columns = [
    { key: "code", label: "Code" },
    { key: "description", label: "Description" },
    { key: "size", label: "Size" },
    { key: "type", label: "Type" },
    { key: "teu", label: "TEU" },
    { key: "maxWeight", label: "Max Weight" },
    { key: "status", label: "Status" },
  ];

  const data: ContainerType[] = [
    {
      code: "20GP",
      description: "20ft General Purpose",
      size: "20ft",
      type: "Dry",
      teu: 1,
      maxWeight: "28,000 kg",
      status: "Active",
    },
    {
      code: "40GP",
      description: "40ft General Purpose",
      size: "40ft",
      type: "Dry",
      teu: 2,
      maxWeight: "30,480 kg",
      status: "Active",
    },
    {
      code: "40HC",
      description: "40ft High Cube",
      size: "40ft",
      type: "Dry",
      teu: 2,
      maxWeight: "30,480 kg",
      status: "Active",
    },
    {
      code: "20RF",
      description: "20ft Reefer",
      size: "20ft",
      type: "Refrigerated",
      teu: 1,
      maxWeight: "27,400 kg",
      status: "Active",
    },
    {
      code: "40RF",
      description: "40ft Reefer",
      size: "40ft",
      type: "Refrigerated",
      teu: 2,
      maxWeight: "29,000 kg",
      status: "Active",
    },
    {
      code: "20OT",
      description: "20ft Open Top",
      size: "20ft",
      type: "Open Top",
      teu: 1,
      maxWeight: "28,000 kg",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Container Types"
        searchPlaceholder="Search by code, description..."
        onAdd={() => alert("Add Container Type")}
        addButtonLabel="Add Type"
      />
    </Layout>
  );
}