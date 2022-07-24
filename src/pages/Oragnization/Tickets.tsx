import { Grid } from "@mui/material";
import React from "react";
import TicketCard from "../../components/TicketCard";
import Layout from "../Oragnization/Layout";
import Lizard from "../../assets/contemplative-reptile.jpg";

const tickets = [
  {
    imagePath: "../../assets/contemplative-reptile.jpg",
    created_by: "user",
    description: "loremispus",
    created_at: "23/07/2022",
    ticketID: "qwerts",
    user_id: "sdsdsd2323",
    long: "45.3450049",
    latt: "14.3921287",
  },
  {
    imagePath: "dsd",
    ticketID: "qwerts23",
    created_by: "ide",
    description: "slika",
    created_at: "24/07/2022",
    user_id: "s2ewq2",
    long: "45.3450049",
    latt: "14.3921287",
  },
  {
    imagePath: "sdsds",
    ticketID: "qwertsds1",
    created_by: "korisnik",
    description: "loremispus",
    created_at: "23/07/2022",
    user_id: "sdsdsd",
    long: "45.3450049",
    latt: "14.3921287",
  },
];

const Tickets = () => {
  return (
    <Layout>
      <Grid container>
        {tickets.map((ticket) => {
          return (
            <TicketCard
              key={ticket.user_id}
              ticket_id={ticket.ticketID}
              user_id={ticket.user_id}
              description={ticket.description}
              date={ticket.created_at}
              imagePath={ticket.imagePath}
              long={ticket.long}
              latt={ticket.latt}
            />
          );
        })}
      </Grid>
    </Layout>
  );
};

export default Tickets;
