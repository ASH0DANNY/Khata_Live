import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MetaData from "../components/metadata";
import HistoryList from "../components/historyList";
import { ErrorAlert } from "../components/utils/alerts";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const HistoryPage = () => {
  const [muiAlert, setmuiAlert] = useState(false);
  const allHistory = [
    {
      vendor_name: "Ankita1",
      trans_type: "credit",
      trans_amount: 1000,
      trans_desc: "Farewell Party",
      date: "2024-07-05",
    },
    {
      vendor_name: "Ankita1",
      trans_type: "credit",
      trans_amount: 300,
      trans_desc: "Farewell Party",
      date: "2024-07-05",
    },
    {
      vendor_name: "Ankita3",
      trans_type: "credit",
      trans_amount: 320,
      trans_desc: "Farewell Party",
      date: "2024-07-05",
    },
  ];

  return (
    <>
      <MetaData title="HISTORY" />
      <Navbar />
      {allHistory ? (
        <HistoryList histories={allHistory} />
      ) : (
        <Typography>
          {muiAlert && <ErrorAlert message={"Cannot fetch vendors"} />}
        </Typography>
      )}
      <Footer />
    </>
  );
};

export default HistoryPage;
