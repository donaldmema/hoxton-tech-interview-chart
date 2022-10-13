import { useState } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import "./App.css";
const studentData = [
  {
    name: "Stephen",
    submissions: {
      beavers: 3,
      stars: 2,
    },
  },
  {
    name: "Eduardo",
    submissions: {
      beavers: 7,
      stars: 1,
    },
  },
  {
    name: "Pepe",
    submissions: {
      beavers: 6,
      stars: 9,
    },
  },
  {
    name: "Gigachad",
    submissions: {
      beavers: 0,
      stars: 10,
    },
  },
];

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  const [data, setData] = useState(studentData);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      studentName: { value: string };
      beavers: { value: string };
      stars: { value: string };
    };
    const name = target.studentName.value;
    const beavers = Number(target.beavers.value);
    const stars = Number(target.stars.value);

    const newStudent = {
      name,
      submissions: {
        beavers,
        stars,
      },
    };
    const updatedStudents = [...data, newStudent];
    setData(updatedStudents);
    console.log(updatedStudents);
  }

  return (
    <>
      <div className="App">
        <div className="chart">
          <BarChart
            data={data}
            width={700}
            height={400}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="submissions.beavers"
              name="Beavers"
              fill="#da9249"
              label
            />
            <Bar
              dataKey="submissions.stars"
              name="Stars"
              fill="#ffd700"
              label
            />
          </BarChart>
        </div>

        <div className="user-input">
          Add a student:
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="studentName" />
            <label htmlFor="beavers">Beavers</label>
            <input type="number" id="beavers" name="beavers" />
            <label htmlFor="stars">Stars</label>
            <input type="number" id="stars" name="stars" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
