import { Lock, Notifications, Person } from "@mui/icons-material";
import { Card, CardContent, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import ChangePassword from "./ChangePassword";
import Notification from "./Notification";
import Profile from "./Profile";

const Settings = () => {
  const [value, setValue] = useState(0);

  return (
    <section className="py-2">
      <Card>
        <Tabs
          value={value}
          onChange={(e, i) => setValue(i)}
          aria-label="icon position tabs example"
        >
          <Tab icon={<Person />} iconPosition="start" label="Profile" />
          <Tab
            icon={<Notifications />}
            iconPosition="start"
            label="Notification"
          />
          <Tab icon={<Lock />} iconPosition="start" label="Change Password" />
        </Tabs>
        <CardContent>
          {value === 0 && <Profile />}
          {value === 1 && <Notification />}
          {value === 2 && <ChangePassword />}
        </CardContent>
      </Card>
    </section>
  );
};

export default Settings;
