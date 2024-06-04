import axios from "axios";

const getDataFromSheet = async () => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1K8v6l7_GQ7VVWweFDKhcQ5CCP_Vx1Y2CYQgsVR9jnSA/values/Sheet1!A1:Z100?key=AIzaSyCXNNS4EpkLzW2bPrY1M38G4lyL5jPeZJE`
    );

    const rows = response.data.values.slice(1).map((row) => ({
      itemName: row[0],
      price: row[1],
      desc: row[2],
      userEmail: row[3],
      orderId: row[4],
    }));

    return rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
};

export default getDataFromSheet;
