// FormLogic.tsx
import { PopularVacanciesType } from "@/lib/type";

export const FormAction = async (formData: FormData) => {
  // Your existing FormAction logic here
  const FormAction = async (formData: FormData) => {
    const name = formData.get("name");
    const vacancies = Number(formData.get("vacancies")) || 0;

    if (isNaN(vacancies)) {
      console.error("Invalid vacancies value");
      return; // or throw an error
    }

    const datas = {
      name: name,
      vacancies: vacancies,
    };

    try {
      const res = await fetch("http://localhost:8000/popularvacancies", {
        method: "POST",
        body: JSON.stringify(datas),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await res.json();

      console.log(`${name} ${vacancies}`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
};
