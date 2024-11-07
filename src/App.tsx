import React from "react";
// Mantine Providers
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
// Router imports
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Generated Routetree
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  context: {
    supabase: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  // TODO: Create Supabase client

  return (
    <MantineProvider>
      <ModalsProvider>
        <RouterProvider router={router} context={{ supabase: "hello" }} />
      </ModalsProvider>
    </MantineProvider>
  );
}