import { Delete, Done, NotificationsTwoTone } from "@mui/icons-material";
import { Alert, AlertTitle, IconButton } from "@mui/material";

const Notifications = () => {
  return (
    <section className="py-2">
      <Alert
        severity="success"
        iconMapping={{
          success: <NotificationsTwoTone fontSize="inherit" />,
        }}
        action={
          <>
            <IconButton color="primary">
              <Done />
            </IconButton>
            <IconButton color="error">
              <Delete />
            </IconButton>
          </>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </section>
  );
};

export default Notifications;
