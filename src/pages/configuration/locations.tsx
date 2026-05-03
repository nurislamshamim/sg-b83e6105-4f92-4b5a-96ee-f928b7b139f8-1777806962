import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Location {
  code: string;
  name: string;
  type: string;
  country: string;
  portCode: string;
  status: string;
}

export default function LocationsPage() {
  const columns = [
    { key: "code", label: "Code" },
    { key: "name", label: "Location Name" },
    { key: "type", label: "Type" },
    { key: "country", label: "Country" },
    { key: "portCode", label: "Port Code" },
    { key: "status", label: "Status" },
  ];

  const data: Location[] = [
    {
      code: "LOC-001",
      name: "Chattogram",
      type: "Seaport",
      country: "Bangladesh",
      portCode: "BDCGP",
      status: "Active",
    },
    {
      code: "LOC-002",
      name: "Singapore",
      type: "Seaport",
      country: "Singapore",
      portCode: "SGSIN",
      status: "Active",
    },
    {
      code: "LOC-003",
      name: "Dhaka Hazrat Shahjalal",
      type: "Airport",
      country: "Bangladesh",
      portCode: "BDDAC",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Locations"
        searchPlaceholder="Search by name, port code, country..."
        onAdd={() => alert("Add Location")}
        addButtonLabel="Add Location"
      />
    </Layout>
  );
}