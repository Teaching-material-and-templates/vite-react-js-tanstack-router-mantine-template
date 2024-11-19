import React from "react";
// Mantine Providers
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { getSupabaseClient } from "./supabase/getSupabaseClient";
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
  return (
    <MantineProvider>
      <ModalsProvider>
        <RouterProvider
          router={router}
          context={{ supabase: getSupabaseClient() }}
        />
      </ModalsProvider>
    </MantineProvider>
  );
}
