import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import AssignTeam from "../modal/AssignTeam";
import RejectTicket from "../modal/RejectTicket";
import Location from "../modal/Location";

interface IProps {
  description: string;
  imagePath: string;
  date: string;
  user_id: string;
  ticket_id: string;
  long: string;
  latt: string;
}

const TicketCard = (props: IProps) => {
  const { description, imagePath, date, ticket_id, long, latt } = props;
  const serverPath = "http://localhost:4000";

  return (
    <Card sx={{ maxWidth: 340, minWidth: 320, margin: 2 }}>
      <CardMedia
        component="img"
        alt="Sent from user"
        height="140"
        image={imagePath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {date} <Location long={long} latt={latt} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <AssignTeam ticketID={ticket_id} />
        <RejectTicket ticketID={ticket_id} />
      </CardActions>
    </Card>
  );
};

export default TicketCard;
