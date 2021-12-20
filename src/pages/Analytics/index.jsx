import { getArrFromObj } from "@ashirbad/js-core";
import { Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Analytics = () => {
  const [stateCodes, setStateCodes] = useState([]);
  const [covidCases, setCovidCases] = useState([]);

  const fetchCovidAnalytics = async () => {
    try {
      const results = await (
        await fetch("https://data.covid19india.org/v4/min/data.min.json")
      ).json();
      setStateCodes(Object.keys(results));
      setCovidCases(
        getArrFromObj(results)?.map((item) => item?.total?.confirmed)
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCovidAnalytics();
  }, []);
  return (
    <section className="py-2">
      <Card>
        <CardContent>
          <ReactApexChart
            height={350}
            series={[
              {
                name: "Total Number of Covid-19 Cases",
                data: covidCases,
              },
            ]}
            type="area"
            options={{
              chart: { type: "area" },
              title: { text: "Covid-19 Cases" },
              theme: { monochrome: { enabled: true, color: "#ce93d8" } },
              xaxis: { categories: stateCodes },
            }}
          />
        </CardContent>
      </Card>
    </section>
  );
};
export default Analytics;
