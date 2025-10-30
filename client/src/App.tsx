import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Home from "@/pages/home";
import ImportPage from "@/pages/import";
import GitHubImport from "@/pages/github-import";
import FigmaImport from "@/pages/figma-import";
import LovableImport from "@/pages/lovable-import";
import BoltImport from "@/pages/bolt-import";
import VercelImport from "@/pages/vercel-import";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/import" component={ImportPage} />
      <Route path="/import/github" component={GitHubImport} />
      <Route path="/import/figma" component={FigmaImport} />
      <Route path="/import/lovable" component={LovableImport} />
      <Route path="/import/bolt" component={BoltImport} />
      <Route path="/import/vercel" component={VercelImport} />
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
