import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";

const columns = [
  { key: "houseBlNumber", label: "House B/L No.", width: "w-32" },
  { key: "masterBlNumber", label: "Master B/L No.", width: "w-32" },
  { key: "consignee", label: "Consignee", width: "w-48" },
  { key: "shipper", label: "Shipper", width: "w-48" },
  { key: "commodity", label: "Commodity", width: "w-40" },
  { key: "packages", label: "Packages", width: "w-24" },
  { key: "weight", label: "Weight (KG)", width: "w-32" },
  { key: "cbm", label: "CBM", width: "w-24" },
  { key: "status", label: "Status", width: "w-32" },
];

const sampleData = [
  {
    houseBlNumber: "HCTG24050001",
    masterBlNumber: "MAEU123456789",
    consignee: "Bangladesh Trading Co. Ltd.",
    shipper: "Shanghai Export Corp.",
    commodity: "Textile Machinery Parts",
    packages: "45 Cartons",
    weight: "3,250",
    cbm: "28.5",
    status: "In Transit",
  },
  {
    houseBlNumber: "HCTG24050002",
    masterBlNumber: "MAEU123456789",
    consignee: "Dhaka Garments Ltd.",
    shipper: "Guangzhou Fabrics Inc.",
    commodity: "Cotton Fabric Rolls",
    packages: "120 Rolls",
    weight: "8,500",
    cbm: "65.2",
    status: "In Transit",
  },
  {
    houseBlNumber: "HCTG24050003",
    masterBlNumber: "MSCU987654321",
    consignee: "Chittagong Electronics",
    shipper: "Singapore Tech Supplies",
    commodity: "Electronic Components",
    packages: "80 Boxes",
    weight: "1,200",
    cbm: "12.8",
    status: "Active",
  },
  {
    houseBlNumber: "HCTG24050004",
    masterBlNumber: "COSU456789123",
    consignee: "Prime Pharmaceuticals Ltd.",
    shipper: "Korea Pharma Export",
    commodity: "Pharmaceutical Raw Materials",
    packages: "25 Drums",
    weight: "2,100",
    cbm: "18.4",
    status: "Pending",
  },
  {
    houseBlNumber: "HCTG24050005",
    masterBlNumber: "HLCU741852963",
    consignee: "Bangladesh Auto Parts",
    shipper: "Hamburg Motors GmbH",
    commodity: "Automobile Spare Parts",
    packages: "150 Cartons",
    weight: "5,800",
    cbm: "42.3",
    status: "Active",
  },
  {
    houseBlNumber: "HCTG24050006",
    masterBlNumber: "OOLU369258147",
    consignee: "Dhaka Food Importers",
    shipper: "Hong Kong Foods Ltd.",
    commodity: "Food Grade Ingredients",
    packages: "60 Bags",
    weight: "3,600",
    cbm: "24.5",
    status: "In Transit",
  },
  {
    houseBlNumber: "HCTG24050007",
    masterBlNumber: "CMDU852963741",
    consignee: "Bangladesh Steel Industries",
    shipper: "Port Klang Metals Sdn Bhd",
    commodity: "Steel Coils",
    packages: "12 Coils",
    weight: "24,000",
    cbm: "98.5",
    status: "Active",
  },
  {
    houseBlNumber: "HCTG24050008",
    masterBlNumber: "EGLV123789456",
    consignee: "Chittagong Chemical Co.",
    shipper: "Rotterdam Chemicals BV",
    commodity: "Industrial Chemicals",
    packages: "40 IBC Tanks",
    weight: "9,200",
    cbm: "52.6",
    status: "Pending",
  },
  {
    houseBlNumber: "HCTG24050009",
    masterBlNumber: "YMLU456123789",
    consignee: "Modern Furniture Ltd.",
    shipper: "Taiwan Wood Products",
    commodity: "Furniture Components",
    packages: "200 Packages",
    weight: "6,400",
    cbm: "78.3",
    status: "In Transit",
  },
];

export default function HouseBLSeaPage() {
  return (
    <Layout>
      <DataTable
        title="House B/L List (Import Sea)"
        description="Manage house bills of lading for sea freight imports"
        columns={columns}
        data={sampleData}
        onAdd={() => alert("Add new House B/L")}
        addButtonLabel="Add House B/L"
      />
    </Layout>
  );
}