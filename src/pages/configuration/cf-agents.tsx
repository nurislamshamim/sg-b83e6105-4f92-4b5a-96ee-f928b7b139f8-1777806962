import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface CFAgent {
  code: string;
  name: string;
  licenseNo: string;
  contactPerson: string;
  email: string;
  phone: string;
  status: string;
}

export default function CFAgentsPage() {
  const columns = [
    { key: "code", label: "Code" },
    { key: "name", label: "Name" },
    { key: "licenseNo", label: "License No" },
    { key: "contactPerson", label: "Contact Person" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "status", label: "Status" },
  ];

  const data: CFAgent[] = [
    {
      code: "CF-001",
      name: "Premier C&F Services",
      licenseNo: "CFL-2024-001",
      contactPerson: "Ahmed Hassan",
      email: "ahmed@premiercf.com",
      phone: "+880-1711-987654",
      status: "Active",
    },
    {
      code: "CF-002",
      name: "Maritime Clearing House",
      licenseNo: "CFL-2024-002",
      contactPerson: "Fatima Khan",
      email: "fatima@maritimecf.com",
      phone: "+880-1811-876543",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="C&F Agents"
        searchPlaceholder="Search by name, license no..."
        onAdd={() => alert("Add C&F Agent")}
        addButtonLabel="Add Agent"
      />
    </Layout>
  );
}