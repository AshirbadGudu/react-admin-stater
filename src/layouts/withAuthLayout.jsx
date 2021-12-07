import { Card, Container } from "@mui/material";
import { Box } from "@mui/system";

const withAuthLayout = (Page) => {
  const AuthLayout = () => (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Container
        maxWidth="sm"
        className="d-flex h-75vh place-content-center place-items-center"
      >
        <Card>
          <Page />
        </Card>
      </Container>
    </Box>
  );
  return AuthLayout;
};

export default withAuthLayout;
