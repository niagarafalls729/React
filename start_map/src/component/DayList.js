import data from "../DB/data.json";
export default function DayList() {
  console.log(data);
  return (
    <ul className="list_day">
      {data.days.map((day) => (
        <li key={day.id}>Day {day.day}</li>
      ))}
    </ul>
  );
}
