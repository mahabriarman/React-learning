import StudentCard from "./components/StudentCard";

function App() {

    const students = [
        {
            id: 1,
            name: "Arman",
            course: "BSC CS",
            city: "Virar",
            age: 20,
            email: "arman@gmail.com"

        },
        {
            id: 2,
            name: "Akash",
            course: "BSC",
            city: "Bhayandar",
             age: 21,
            email: "Akash@gmail.com"

        },
        {
            id: 3,
            name: "Ayush",
            course: "BA",
            city: "vasai",
             age: 22,
            email: "Ayush@gmail.com"
        }
    ]
    return (
        <>
            <h1>Student Directory</h1>
            {students.map((student) => {
                return (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        course={student.course}
                        city={student.city}
                        age={student.age}
                        email={student.email}

                    />
                )
            })}

        </>


    )
}

export default App;