function StudentCard ({ name, course, city, age, email }){
    return (
    
        <div className="student-card">
              <p>name :{name}</p>
              <p>course :{course}</p>
              <p>city :{city}</p>
              <p>Age :{age}</p>
              <p>email :{email}</p>

                <button>view profile</button>

        </div>
    )
} 

export default StudentCard;