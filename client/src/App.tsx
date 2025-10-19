import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider defaultOpen={false}>
        <TooltipProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Router />
            </div>
          </div>
          <Toaster />
        </TooltipProvider>
      </SidebarProvider>
    </QueryClientProvider>
  );
}

export default App;
