import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface Consignee {
  code: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  status: string;
}

export default function ConsigneesPage() {
  const columns = [
    { key: "code", label: "Code" },
    { key: "name", label: "Name" },
    { key: "contactPerson", label: "Contact Person" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "country", label: "Country" },
    { key: "status", label: "Status" },
  ];

  const data: Consignee[] = [
    {
      code: "CNE-001",
      name: "Fashion Hub USA Inc",
      contactPerson: "John Smith",
      email: "john@fashionhub.com",
      phone: "+1-555-123-4567",
      country: "United States",
      status: "Active",
    },
    {
      code: "CNE-002",
      name: "European Fashion Group",
      contactPerson: "Maria Schmidt",
      email: "maria@europefashion.eu",
      phone: "+49-30-12345678",
      country: "Germany",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Consignee List"
        searchPlaceholder="Search by name, code, country..."
        onAdd={() => alert("Add Consignee")}
        addButtonLabel="Add Consignee"
      />
    </Layout>
  );
}