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
  const { users, females, males } = useUsers();
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
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DashboardCard
              title={users?.length || "00"}
              subtitle="Total Users"
              icon={<People />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DashboardCard
              title={categories?.length || "00"}
              subtitle="Categories"
              icon={<LocalOffer />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DashboardCard
              title={products?.length || "00"}
              subtitle="Total Products"
              icon={<ShoppingBasket />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <DashboardCard
              title={"00"}
              subtitle="Notifications"
              icon={<NotificationsTwoTone />}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            {categories && (
              <Card
                sx={{
                  minHeight: "52vh",
                }}
              >
                <CardContent>
                  {categories?.filter((category) => category?.numberOfProducts)
                    ?.length ? (
                    <ApexCharts
                      type="pie"
                      options={{
                        theme: {
                          monochrome: {
                            enabled: true,
                            color: "#7b1ea2",
                          },
                        },
                        title: {
                          text: "Categories Graph",
                        },
                        labels: categories?.map(
                          (category) =>
                            `${category?.name?.toUpperCase()}:${
                              category?.numberOfProducts
                            } Items`
                        ),
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
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {users && (
              <Card
                sx={{
                  minHeight: "52vh",
                }}
              >
                <CardContent>
                  {females?.length && males.length ? (
                    <ApexCharts
                      type="donut"
                      options={{
                        theme: {
                          monochrome: {
                            enabled: true,
                            color: "#7b1ea2",
                          },
                        },
                        chart: { type: "donut" },
                        title: {
                          text: "Users Gender Ratio",
                        },
                        labels: [
                          `Total Male Users:${males?.length}`,
                          `Total Female Users:${females?.length}`,
                        ],
                        plotOptions: {
                          pie: {
                            startAngle: -90,
                            endAngle: 90,
                            offsetY: 10,
                          },
                        },
                        grid: {
                          padding: {
                            bottom: -200,
                          },
                        },
                      }}
                      series={[males?.length, females?.length]}
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
