import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

interface FreightCertificate {
  certNo: string;
  certDate: string;
  blNo: string;
  shipper: string;
  freightAmount: string;
  currency: string;
  status: string;
}

export default function FreightCertCustomsPage() {
  const columns = [
    { key: "certNo", label: "Certificate No" },
    { key: "certDate", label: "Date" },
    { key: "blNo", label: "B/L No" },
    { key: "shipper", label: "Shipper" },
    { key: "freightAmount", label: "Freight Amount" },
    { key: "currency", label: "Currency" },
    { key: "status", label: "Status" },
  ];

  const data: FreightCertificate[] = [
    {
      certNo: "FC-CUS-2026-001",
      certDate: "2026-05-03",
      blNo: "EXBL-2026-001",
      shipper: "Bangladesh Garments Ltd",
      freightAmount: "2,800.00",
      currency: "USD",
      status: "Submitted",
    },
  ];

  return (
    <Layout>
      <DataTable
        data={data}
        columns={columns}
        title="Freight Certificate (Customs)"
        searchPlaceholder="Search by certificate no, B/L, shipper..."
        onAdd={() => alert("Generate Certificate")}
        addButtonLabel="Generate Certificate"
      />
    </Layout>
  );
}