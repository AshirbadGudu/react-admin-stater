import { formatCurrency } from "@ashirbad/js-core";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { useProducts } from "hooks";
import { Container, Typography, Avatar } from "@mui/material";
const Products = () => {
  const { products } = useProducts();
  return (
    <section className="py-2">
      {products && (
        <MaterialTable
          title="Products"
          data={products}
          columns={[
            {
              title: "#",
              field: "id",
              render: ({ index }) => index + 1,
              width: "5%",
              editable: "never",
            },
            {
              title: "Image",
              field: "image",
              render: ({ image }) => (
                <Avatar
                  src={image}
                  variant="rounded"
                  sx={{ width: 60, height: 60 }}
                />
              ),
              width: "5%",
            },
            {
              title: "Title",
              field: "title",
            },
            {
              title: "Price",
              field: "price",
              render: ({ price }) => formatCurrency(price),
              width: "5%",
            },
            { title: "Category", field: "category", width: "15%" },
            { title: "Created At", field: "created_at", editable: "never" },
          ]}
          detailPanel={({ rowData }) => (
            <section className="py-2">
              <Container>
                <Typography variant="h6" gutterBottom>
                  {rowData?.title}
                </Typography>
                <Typography variant="body1">{rowData?.description}</Typography>
              </Container>
            </section>
          )}
          options={{
            exportAllData: true,
            exportMenu: [
              {
                label: "Export Products Data In CSV",
                exportFunc: (cols, data) => ExportCsv(cols, data),
              },
              {
                label: "Export Products Data In PDF",
                exportFunc: (cols, data) => ExportPdf(cols, data),
              },
            ],
            headerStyle: {
              backgroundColor: "#f6eef8",
            },
            actionsColumnIndex: -1,
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

export default Products;
