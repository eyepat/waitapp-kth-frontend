import React, { useState } from "react";

interface Question {
  id: string;
  question: string;
  options: string[];
}

interface LifestyleForm {
  tobak: Question[];
  alkohol: Question[];
  motion: Question[];
  mat: Question[];
}

// Define the questions
const questions: LifestyleForm = {
  tobak: [
    {
      id: "smoking",
      question: "Röker du?",
      options: [
        "Nej, jag har aldrig varit rökare",
        "Nej, jag slutade röka för mer än 6 månader sedan",
        "Nej, jag slutade röka för mindre än 6 månader sedan",
        "Ja, jag röker, men inte varje dag",
        "Ja, jag röker 1–9 cigaretter varje dag",
        "Ja, jag röker 10–19 cigaretter varje dag",
        "Ja, jag röker fler än 19 cigaretter varje dag",
      ],
    },
    {
      id: "snus",
      question: "Snusar du?",
      options: [
        "Nej, jag har aldrig varit snusare",
        "Nej, jag slutade snusa för mer än 6 månader sedan",
        "Nej, jag slutade snusa för mindre än 6 månader sedan",
        "Ja, jag snusar men inte varje dag",
        "Ja, jag snusar 1–3 dosor varje vecka",
        "Ja, jag snusar 4–6 dosor varje vecka",
        "Ja, jag snusar fler än 6 dosor varje vecka",
      ],
    },
  ],
  alkohol: [
    {
      id: "drinks_per_week",
      question: "Hur många glas alkohol dricker du varje vecka?",
      options: [
        "Inga alls (eller mindre än 1 glas varje vecka)",
        "1–4 glas varje vecka",
        "5–9 glas varje vecka",
        "10–14 glas varje vecka",
        "fler än 14 glas varje vecka",
      ],
    },
    {
      id: "binge_drinking",
      question: "Hur ofta dricker du 4 glas, eller mer, vid samma tillfälle?",
      options: [
        "Aldrig",
        "Mer sällan än 1 gång varje månad",
        "Varje månad",
        "Varje vecka",
        "Varje dag eller nästan varje dag",
      ],
    },
  ],
  motion: [
    {
      id: "exercise",
      question: "Brukar du träna så att du blir andfådd?",
      options: [
        "Nej, nästan aldrig",
        "Ja, mindre än 30 minuter varje vecka",
        "Ja, 30–60 minuter varje vecka",
        "Ja, 60–90 minuter varje vecka",
        "Ja, 90–120 minuter varje vecka",
        "Ja, mer än 120 minuter varje vecka",
      ],
    },
    {
      id: "physical_activity",
      question: "Hur mycket rör du på dig varje vecka?",
      options: [
        "Ingen tid",
        "Mindre än 30 minuter varje vecka",
        "30–60 minuter varje vecka",
        "60–90 minuter varje vecka",
        "90–150 minuter varje vecka",
        "150–300 minuter varje vecka",
        "Mer än 300 minuter (5 timmar) varje vecka",
      ],
    },
  ],
  mat: [
    {
      id: "vegetables",
      question: "Hur ofta äter du grönsaker eller rotfrukter?",
      options: [
        "Två gånger varje dag eller mer",
        "En gång varje dag",
        "Några gånger i veckan",
        "En gång i veckan eller mindre",
      ],
    },
    {
      id: "fruit",
      question: "Hur ofta äter du frukt eller bär?",
      options: [
        "Två gånger varje dag eller mer",
        "En gång varje dag",
        "Några gånger i veckan",
        "En gång i veckan eller mindre",
      ],
    },
    {
      id: "fish",
      question: "Hur ofta äter du fisk eller skaldjur?",
      options: [
        "Tre gånger i veckan eller mer",
        "Två gånger i veckan",
        "En gång i veckan",
        "Några gånger i månaden eller mindre",
      ],
    },
    {
      id: "junk_food",
      question: "Hur ofta äter du kakor, choklad, godis, chips eller läsk?",
      options: [
        "Två gånger varje dag eller oftare",
        "En gång varje dag",
        "Några gånger i veckan",
        "En gång i veckan eller mindre",
      ],
    },
    {
      id: "breakfast",
      question: "Hur ofta äter du frukost?",
      options: [
        "Varje morgon",
        "Nästan varje morgon",
        "Några gånger i veckan",
        "En gång i veckan eller mindre",
      ],
    },
  ],
};

const LifestyleFormComponent: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <div>
      <h1>Livsstilsformulär</h1>
      {Object.entries(questions).map(([category, categoryQuestions]) => (
        <div key={category}>
          <h2>{category.toUpperCase()}</h2>
          {categoryQuestions.map(({ id, question, options }: Question) => (
            <div key={id}>
              <h3>{question}</h3>
              {options.map((option: string, index: number) => (
                <label key={index} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name={id}
                    value={option}
                    checked={answers[id] === option}
                    onChange={() => handleAnswerChange(id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => console.log(answers)}>Spara Svar</button>
    </div>
  );
};

export default LifestyleFormComponent;
