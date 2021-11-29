import { Avatar, CardHeader, Card as MUICard } from "@mui/material";

const Card = ({ icon, title, subtitle }) => {
  return (
    <>
      <MUICard>
        <CardHeader
          avatar={<Avatar sx={{ backgroundColor: "red" }}>{icon}</Avatar>}
          title={title}
          subheader={subtitle}
          titleTypographyProps={{ variant: "h5" }}
          subheaderTypographyProps={{ variant: "h6" }}
        />
      </MUICard>
    </>
  );
};

export default Card;
