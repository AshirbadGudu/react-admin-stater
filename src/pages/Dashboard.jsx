import {
  AccountCircle,
  LocalOffer,
  People,
  WifiOff,
} from "@mui/icons-material";
import { Card, CardHeader, Grid } from "@mui/material";
import { Card as DashboardCard } from "components/dashboard";

const Dashboard = () => {
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
              title="123"
              subtitle="Total Users"
              icon={<People />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title="23"
              subtitle="Online Users"
              icon={<AccountCircle />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title="100"
              subtitle="Offline Users"
              icon={<WifiOff />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DashboardCard
              title="54"
              subtitle="Total Products"
              icon={<LocalOffer />}
            />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Dashboard;
