import {
  Avatar,
  CardHeader,
  CardActionArea,
  Card as MUICard,
} from "@mui/material";

const Card = ({ icon, title, subtitle, onClick }) => {
  return (
    <>
      <MUICard>
        <CardActionArea onClick={onClick}>
          <CardHeader
            avatar={<Avatar sx={{ backgroundColor: "#7b1ea2" }}>{icon}</Avatar>}
            title={title}
            subheader={subtitle}
            titleTypographyProps={{ variant: "h5" }}
            subheaderTypographyProps={{ variant: "h6" }}
          />
        </CardActionArea>
      </MUICard>
    </>
  );
};

export default Card;
