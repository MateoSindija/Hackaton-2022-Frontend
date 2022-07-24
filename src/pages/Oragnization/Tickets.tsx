import { Grid } from "@mui/material";
import React from "react";
import TicketCard from "../../components/TicketCard";
import Layout from "../Oragnization/Layout";
import Lizard from "../../assets/contemplative-reptile.jpg";
import { useTicketsQuery } from "../../redux/api";
import Trash from "../../assets/trash.jpg";
import TrashNature from "../../assets/smece-rijeka.jpg";

const Tickets = () => {
  const { data: tickets } = useTicketsQuery();

  return (
    <Layout>
      <Grid container>
        {tickets?.map((ticket: any, index: number) => {
          return (
            <TicketCard
              key={ticket.user_id}
              ticket_id={ticket.id}
              user_id={ticket.user_id}
              description={ticket.description}
              date={new Date(ticket.created_at).toLocaleDateString()}
              imagePath={index == 1 ? Trash : TrashNature}
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
