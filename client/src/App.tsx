import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PortfolioSidebar from "@/components/PortfolioSidebar";
import MobileNav from "@/components/MobileNav";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Education from "@/pages/Education";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Achievements from "@/pages/Achievements";
import Gallery from "@/pages/Gallery";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <PortfolioSidebar />
          <MobileNav />
          
          <main className="lg:ml-64 pt-0 lg:pt-0">
            <div className="pt-16 lg:pt-0">
              <Router />
            </div>
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
