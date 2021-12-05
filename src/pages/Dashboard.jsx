import { LocalOffer, People, ShoppingBasket } from "@mui/icons-material";
import { Card, CardHeader, Grid } from "@mui/material";
import { Card as DashboardCard } from "components/dashboard";
import { useCategories, useProducts, useUsers } from "hooks";

const Dashboard = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const { users } = useUsers();
  return (
    <>
      <Card>
        <CardHeader
          title="Hello, Super Admin!"
          subheader="Check the latest banking stats under this beautiful dashboard!"
        />
      </Card>

      <section className="py-2">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title={users?.length}
              subtitle="Total Users"
              icon={<People />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title={categories?.length}
              subtitle="Categories"
              icon={<LocalOffer />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title={products?.length}
              subtitle="Total Products"
              icon={<ShoppingBasket />}
            />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Dashboard;
