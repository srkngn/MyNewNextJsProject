import { fetchCustomers } from "@/app/lib/data";
import { CustomerField, FormattedCustomersTable } from "@/app/lib/definitions";
import CustomersTable from "@/app/ui/customers/table";

export default async function Page () {
    const customers: CustomerField[] = await fetchCustomers();

  // Müşteri verilerini uygun formata dönüştür
  const formattedCustomers: FormattedCustomersTable[] = customers.map((customer: CustomerField) => ({
    id: customer.id,
    name:customer.name,
    email: customer.email,
    image_url: '/customers/evil-rabbit.png',
    phone_number: customer.phone_number,
    total_pending: "0",
    total_paid: false
  }));
    return <main>
        <CustomersTable customers={formattedCustomers}/>
    </main>
}