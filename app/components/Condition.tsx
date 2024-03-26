let isloggedin = true;

// we can not use if-else condition inside the jsx but define before return
// only ternary operator can be define inside the return
export default function Condition() {
  let userScore: number = 70;
  let result = "";
  let grade: string = "";
  if (userScore >= 90 && userScore <= 100) {
    grade = "A";
    result = "Pass";
  } else if (userScore >= 80 && userScore <= 90) {
    grade = "B";
    result = "Pass";
  } else if (userScore >= 70 && userScore <= 80) {
    grade = "C";
    result = "Pass";
  } else if (userScore >= 60 && userScore <= 70) {
    grade = "D";
    result = "Pass";
  } else if (userScore < 60) {
    grade = "F";
    result = "Fail";
  }
  return (
    <div>
      {/* show ligIn or logout button conditionally */}
      {!isloggedin ? (
        <div>
          <button className="bg-blue-800 text-white rounded py-2 px-3 ml-5 mb-4 mt-4">
            LogIn
          </button>
        </div>
      ) : (
        <div>
          <button className="bg-blue-800 text-white rounded py-2 px-3 ml-5">
            LogOut
          </button>
        </div>
      )}

      {/* ternery operator */}
      {userScore > 59 ? (
        <p>
          user result is {result} and Grade is: {grade}
        </p>
      ) : (
        <p>
          user is result is {result} and Grade is: {grade}
        </p>
      )}
    </div>
  );
}
