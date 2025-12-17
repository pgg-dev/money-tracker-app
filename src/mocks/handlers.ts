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

  http.get("/expenses/:id", ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    return HttpResponse.json({
      id,
      title: "점심",
      amount: 12000,
      category: "식비",
      date: "2025-11-01",
    });
  }),
];
