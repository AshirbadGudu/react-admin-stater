import {
  LocalOffer,
  NotificationsTwoTone,
  People,
  ShoppingBasket,
} from "@mui/icons-material";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Card as DashboardCard } from "components/dashboard";
import { useCategories, useProducts, useUsers } from "hooks";
import ApexCharts from "react-apexcharts";
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
              title={users?.length || "00"}
              subtitle="Total Users"
              icon={<People />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title={categories?.length || "00"}
              subtitle="Categories"
              icon={<LocalOffer />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title={products?.length || "00"}
              subtitle="Total Products"
              icon={<ShoppingBasket />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title={"00"}
              subtitle="Notifications"
              icon={<NotificationsTwoTone />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            {categories && (
              <Card>
                <CardContent>
                  {categories?.filter((category) => category?.numberOfProducts)
                    ?.length ? (
                    <ApexCharts
                      type="donut"
                      options={{
                        colors: categories?.map(
                          (_, i) => `#${9 - i}b${i}aa${1 + i}`
                        ),
                        chart: {
                          type: "donut",
                        },
                        title: {
                          text: "Categories Graph",
                        },
                        fill: {
                          colors: categories?.map(
                            (_, i) => `#${9 - i}b${i}aa${1 + i}`
                          ),
                          type: "gradient",
                        },
                        labels: categories?.map(
                          (category) =>
                            `${category?.name?.toUpperCase()}:${
                              category?.numberOfProducts
                            } Items`
                        ),
                        plotOptions: {
                          pie: {
                            startAngle: -90,
                            endAngle: 90,
                            offsetY: 10,
                          },
                        },
                        grid: {
                          padding: {
                            bottom: -180,
                          },
                        },
                      }}
                      series={categories?.map(
                        (category) => category?.numberOfProducts
                      )}
                    />
                  ) : null}
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Dashboard;
