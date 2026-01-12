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
          
          <main className="lg:ml-64 pt-0 lg:pt-0 flex flex-col min-h-screen">
            <div className="pt-16 lg:pt-0 flex-1">
              <Router />
            </div>
            <footer className="py-8 px-8 md:px-16 lg:px-24 border-t bg-muted/20">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground font-light text-sm">
                <p>© {new Date().getFullYear()} Siddhi Sunil Agarkar. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="https://beacons.ai/siddhiagarkar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Beacons</a>
                  <a href="https://www.linkedin.com/in/siddhi-sunil-agarkar-56b7a8231/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                </div>
              </div>
            </footer>
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
