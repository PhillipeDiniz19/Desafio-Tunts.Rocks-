/* Rules
 1- Get the grade of each student and calculate their average.
 2- Average (m) Situation:
    m<5  - Failed by Grade
    5<=m<7  - Final Exam
    m>=7  - Approved
 3- If the number of absences exceeds 25% of the total number of classes, the student will have the "Failed by Absence" situation.
 4-   
*/

const express = require("express");
const { google } = require("googleapis");

const app = express();
app.use(express.json());

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheetId = "1hZZn1nmz-qLNPOGhkRDt7-9YCYJB2Bqbk5A16DBn_Ho";

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  };
}

app.get("/metadata", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const metadata = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  res.send(metadata.data);
});

app.get("/getRows", async (req, res) => {
  try {
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "engenharia_de_software!A4:H28", // Adjust the range to include the Situacao and Nota para Aprovacao Final columns
      valueRenderOption: "UNFORMATTED_VALUE",
      dateTimeRenderOption: "FORMATTED_STRING",
    });

    const data = getRows.data.values;
    const rowDataWithStatus = data.map(row => {
      const sum = row.slice(3, 6).reduce((acc, value) => acc + parseFloat(value), 0); // Summing the grades (P1, P2, P3)
      const average = sum / 3; // Calculating the average of the grades
      const absences = parseFloat(row[2]); // Getting the number of absences
      let status;
      let finalGrade;

      if (absences > 0.25 * 60) {
        status = "Failed by Absence";
        finalGrade = 0; // Set final grade as 0 if failed by absence
      } else if (average < 50) {
        status = "Failed by Grade";
        finalGrade = 0; // Set final grade as 0 if failed by grade
      } else if (average >= 50 && average < 70) {
        status = "Final Exam";
        finalGrade = average; // Final grade is the average if in the final exam
      } else {
        status = "Approved";
        finalGrade = average; // Final grade is the average if approved
      }

      return { Matricula: row[0], Aluno: row[1], Faltas: absences, P1: row[3], P2: row[4], P3: row[5], 
        Situacao: status, "Nota para Aprovacao Final": finalGrade.toFixed(2) };
    });

    res.send(rowDataWithStatus);
  } catch (error) {
    console.error("Error fetching rows from Google Sheets:", error);
    res.status(500).send("Error fetching rows from Google Sheets");
  }
});

app.post("/addRow", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const { values } = req.body;

  const row = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "engenharia_de_software",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
    },
  });

  res.send(row.data);
});

app.post("/updateValues", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const { values } = req.body;

  const updateValues = await googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range: "engenharia_de_software!A4:H28",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
    },
  });

  res.send(updateValues.data);
});

app.listen(3001, () => console.log("Running on port 3001"));
