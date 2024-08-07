import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/customers/createCustomer";

export default async function Page () {

    return (<main>
        <Breadcrumbs breadcrumbs={[{label: 'Register Form', href: '/dashboard/register'} ]} />
        {/* <Form /> */}
    </main>)
}