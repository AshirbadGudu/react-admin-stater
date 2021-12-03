import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useUsers } from "hooks";

const Users = () => {
  const { users } = useUsers();
  return (
    <section className="py-2">
      <MaterialTable
        data={users || []}
        title="Users"
        columns={[
          {
            title: "#",
            field: "index",
            render: ({ index }) => index + 1,
            width: "10%",
          },
          {
            title: "Name",
            field: "name",
            render: ({ displayName, email, picture }) => (
              <>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={picture?.thumbnail} />
                  </ListItemAvatar>
                  <ListItemText primary={displayName} secondary={`${email}`} />
                </ListItem>
              </>
            ),
          },
          { title: "Email", field: "email", hidden: true, export: true },
          { title: "Phone", field: "phone" },
          { title: "Country", field: "country" },
          { title: "Gender", field: "gender" },
          { title: "Created At", field: "created_at" },
        ]}
        options={{
          exportAllData: true,
          exportMenu: [
            {
              label: "Export Users Data In CSV",
              exportFunc: (cols, data) => ExportCsv(cols, data),
            },
            {
              label: "Export Users Data In PDF",
              exportFunc: (cols, data) => ExportPdf(cols, data),
            },
          ],
          paginationType: "stepped",
        }}
      />
    </section>
  );
};

export default Users;
