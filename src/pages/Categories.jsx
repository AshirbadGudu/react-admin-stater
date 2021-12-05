import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { useCategories } from "hooks";

const Categories = () => {
  const { categories } = useCategories();
  return (
    <section className="py-2">
      {categories && (
        <MaterialTable
          title="Categories"
          data={categories}
          columns={[
            {
              title: "#",
              field: "id",
              render: ({ index }) => index + 1,
              width: "5%",
              editable: "never",
            },
            { title: "Name", field: "name" },
            { title: "Created At", field: "created_at" },
          ]}
          options={{
            exportAllData: true,
            exportMenu: [
              {
                label: "Export Categories Data In CSV",
                exportFunc: (cols, data) => ExportCsv(cols, data),
              },
              {
                label: "Export Categories Data In PDF",
                exportFunc: (cols, data) => ExportPdf(cols, data),
              },
            ],
            headerStyle: {
              backgroundColor: "#f6eef8",
            },
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
          style={{
            boxShadow: "#6a1b9a3d 0px 8px 16px 0px",
            borderRadius: "8px",
          }}
          editable={{
            onRowDelete: async (oldData) => {
              console.log(oldData);
            },
            onRowAdd: async (newData) => {
              console.log(newData);
            },
            onRowUpdate: async (newData, oldData) => {
              console.log(newData, oldData);
            },
          }}
        />
      )}
    </section>
  );
};

export default Categories;
