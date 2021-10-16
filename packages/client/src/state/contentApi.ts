import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const contentApi = createApi({
  reducerPath: "content",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getHelloWorld: builder.query<string, void>({
      query: () => "/hello-world",
    }),
  }),
});
