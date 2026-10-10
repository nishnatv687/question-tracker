import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
      
    const [questions, setquestions] = useState(JSON.parse(localStorage.getItem("saved-questions")) || []);

    const addQuestions = (data) => {
     const newQuestion = {
      id: crypto.randomUUID(),
      ...data,
     };

    setquestions((prev) => [...prev, newQuestion]);
    };
    
    useEffect(() => {
    localStorage.setItem("saved-questions", JSON.stringify(questions));
    }, [questions]);
    
    console.log(questions)

    // dsa section
     const dsaQuestions = questions.filter((val)=>{
    return val.category === "DSA" && val.status === "Completed"
     })
     const totalDsaQuestions = questions.filter((val)=>{
      return val.category === "DSA"
     })

     // techinacl section
      const technicalQuestion = questions.filter((val)=>{
      return val.category === "Technical" && val.status === "Completed"
      })
      const totalTechnicalQuestion = questions.filter((val)=>{
        return val.category === "Technical"
      })
 
      // github section
      const gitHubQuestions = questions.filter((val)=>{
      return val.category == "Git & GitHub" && val.status ==="Completed"
      })
      const totalGitHubQuestions =questions.filter((val)=>{
        return val.category === "Git & GitHub"
      })

      const updateQuestionStatus = (id, newStatus) => {
      setquestions((prev) =>
       prev.map((q) =>
        q.id === id
        ? { ...q, status: newStatus }
        : q
       )
       );
       };

  return (
    <DataContext.Provider value={{questions,setquestions,addQuestions,gitHubQuestions,technicalQuestion,dsaQuestions,totalDsaQuestions,totalGitHubQuestions,totalTechnicalQuestion,updateQuestionStatus}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataContext;