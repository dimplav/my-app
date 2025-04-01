export const DATA = {
  metadata: [
    {
      show_project: "Yes",
      skip_phase: "Yes",
    },
  ],
  project: [
    {
      title: "Dummy Project title",
      description: "Dummy Project description",
      goal: "Dummy Project goal",
    },
  ],
  employees: [
    {
      employee_first_name: "Petar",
      employee_last_name: "Petrovic",
      order: 1,
    },
    {
      employee_first_name: "Zika",
      employee_last_name: "Zivkovic",
      order: 2,
    },
    {
      employee_first_name: "Kosta",
      employee_last_name: "Kojic",
      order: 3,
    },
    {
      employee_first_name: "Marko",
      employee_last_name: "Markovic",
      order: 4,
    },
  ],
  stages: [
    {
      name: "Project stage 1",
      iterations: 1,
      max_length: 700,
      obligation: {
        Petar: "Zaduzen za pisanje dokumentacije ----> 1",
        Zika: "Zaduzen za odabir tehnologije ----> 1",
        Kosta: "Zaduzen za pravljenje diagrama ----> 1",
        Marko: "Zaduzen za prijavu projekta ----> 1",
      },
    },
    {
      name: "Project stage 2",
      iterations: 1,
      max_length: 700,
      obligation: {
        Petar: "Zaduzen za pisanje dokumentacije ----> 2",
        Zika: "Zaduzen za odabir tehnologije ----> 2",
        Kosta: "Zaduzen za pravljenje diagrama ----> 2",
        Marko: "Zaduzen za prijavu projekta ----> 2",
      },
    },
    {
      name: "Project stage 3",
      iterations: 1,
      max_length: 700,
      obligation: {
        Petar: "Zaduzen za pisanje dokumentacije ----> 3",
        Zika: "Zaduzen za odabir tehnologije ----> 3",
        Kosta: "Zaduzen za pravljenje diagrama ----> 3",
        Marko: "Zaduzen za prijavu projekta ----> 3",
      },
    },
  ],
};
