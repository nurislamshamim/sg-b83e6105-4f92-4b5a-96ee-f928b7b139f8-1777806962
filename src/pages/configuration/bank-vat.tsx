import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface BankVAT {
  bankName: string;
  branchName: string;
  vatRegNo: string;
  registrationDate: string;
  status: string;
}

export default function BankVATPage() {
  const columns = [
    { key: "bankName", label: "Bank Name" },
    { key: "branchName", label: "Branch" },
    { key: "vatRegNo", label: "VAT Reg No" },
    { key: "registrationDate", label: "Registration Date" },
    { key: "status", label: "Status" },
  ];

  const data: BankVAT[] = [
    {
      bankName: "Standard Chartered Bank",
      branchName: "Agrabad Branch",
      vatRegNo: "VAT-001234567",
      registrationDate: "2024-01-15",
      status: "Active",
    },
    {
      bankName: "HSBC Bangladesh",
      branchName: "Gulshan Branch",
      vatRegNo: "VAT-002345678",
      registrationDate: "2024-02-20",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Bank VAT Registrations"
        searchPlaceholder="Search by bank name, VAT reg no..."
        onAdd={() => alert("Add Bank VAT Registration")}
        addButtonLabel="Add Registration"
      />
    </Layout>
  );
}