import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/expenses", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "점심",
        amount: 12000,
        category: "식비",
        date: "2025-11-01",
      },
    ]);
  }),

  http.get("/expenses/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      id,
      title: "점심",
      amount: 12000,
      category: "식비",
      date: "2025-11-01",
    });
  }),
];
