import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LineData = () => {

    const studentMarksData = [
        { "id": 1, "name": "Student 1", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 92 },
        { "id": 2, "name": "Student 2", "mathMarks": 78, "physicsMarks": 82, "chemistryMarks": 90 },
        { "id": 3, "name": "Student 3", "mathMarks": 92, "physicsMarks": 88, "chemistryMarks": 94 },
        { "id": 4, "name": "Student 4", "mathMarks": 88, "physicsMarks": 76, "chemistryMarks": 85 },
        { "id": 5, "name": "Student 5", "mathMarks": 95, "physicsMarks": 92, "chemistryMarks": 98 },
        { "id": 6, "name": "Student 6", "mathMarks": 70, "physicsMarks": 65, "chemistryMarks": 72 },
        { "id": 7, "name": "Student 7", "mathMarks": 60, "physicsMarks": 55, "chemistryMarks": 63 },
        { "id": 8, "name": "Student 8", "mathMarks": 75, "physicsMarks": 70, "chemistryMarks": 80 },
        { "id": 9, "name": "Student 9", "mathMarks": 87, "physicsMarks": 82, "chemistryMarks": 88 },
        { "id": 10, "name": "Student 10", "mathMarks": 91, "physicsMarks": 85, "chemistryMarks": 92 }
      ];
      

    return (
        <div>
            <LineChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'mathMarks'} stroke='red'>Math Results</Line>
                <Line dataKey={'physicsMarks'}stroke='green'>Physics Marks</Line>
            </LineChart>
        </div>
    );
};

export default LineData;