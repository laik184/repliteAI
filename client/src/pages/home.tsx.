import { useState } from "react";
import { Paperclip, Smile, Send, Globe, BarChart3, Play, PanelLeft, Grid2X2, Pencil, ChevronRight, FileCode2, Lightbulb, BookOpen, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useSidebar } from "@/components/ui/sidebar";
import type { InsertProject, Project } from "@shared/schema";

const categories = [
  { id: "web-app", label: "Web app", icon: Globe },
  { id: "data-app", label: "Data app", icon: BarChart3 },
  { id: "3d-game", label: "3D Game", icon: Play },
];

const exploreOptions = [
  { id: "frameworks", label: "Developer Frameworks", icon: FileCode2 },
  { id: "learn", label: "Learn", icon: Lightbulb },
  { id: "documentation", label: "Documentation", icon: BookOpen },
];

export default function Home() {
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [exploreOpen, setExploreOpen] = useState(false);
  const { toast } = useToast();
  const { toggleSidebar } = useSidebar();

  const createProjectMutation = useMutation({
    mutationFn: async (data: InsertProject) => {
      const res = await apiRequest("POST", "/api/projects", data);
      return await res.json() as Project;
    },
    onSuccess: () => {
      toast({
        title: "Project created successfully!",
        description: "Your project has been saved.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
      setDescription("");
      setSelectedCategory(null);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create project. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = () => {
    if (description.trim()) {
      createProjectMutation.mutate({
        description: description.trim(),
        category: selectedCategory || "web-app",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-background">
      <header className="sticky top-0 z-50 w-full bg-background">
        <div className="flex h-14 items-center px-4 gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            data-testid="button-sidebar-toggle"
            className="text-muted-foreground hover:text-foreground"
            onClick={toggleSidebar}
          >
            <PanelLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            data-testid="button-view-toggle"
            className="text-muted-foreground hover:text-foreground"
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-3 sm:px-6 py-4 sm:py-8">
        <div className="w-full max-w-[95%] sm:max-w-5xl mx-auto -mt-12 sm:mt-0">
          <h1 className="text-xl sm:text-2xl font-normal text-foreground mb-5 sm:mb-8 tracking-tight text-center" data-testid="heading-main">
            Hi Mohd, what do you want to make?
          </h1>

          <div className="bg-card border-2 border-card-border rounded-lg p-3 sm:p-5">
            <div className="relative">
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Describe your app idea, '/' for integrations..."
                className="min-h-[70px] sm:min-h-[90px] resize-none border-0 p-0 text-sm sm:text-base bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground text-foreground"
                data-testid="input-project-description"
                disabled={createProjectMutation.isPending}
              />

              <div className="flex items-center justify-between pt-3 mt-3">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-9 sm:w-9"
                    data-testid="button-attachment"
                  >
                    <Paperclip className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-9 sm:w-9"
                    data-testid="button-emoji"
                  >
                    <Smile className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-9 sm:w-9"
                    data-testid="button-edit"
                  >
                    <Pencil className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    size="icon"
                    className="rounded-full bg-primary hover:bg-primary/90 h-8 w-8 sm:h-9 sm:w-9"
                    onClick={handleSubmit}
                    disabled={!description.trim() || createProjectMutation.isPending}
                    data-testid="button-submit"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 sm:mt-5">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <Button
                  key={category.id}
                  variant="secondary"
                  size="sm"
                  className={`flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground border-0 text-sm ${
                    isSelected ? 'ring-2 ring-ring' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  data-testid={`button-category-${category.id}`}
                  disabled={createProjectMutation.isPending}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{category.label}</span>
                </Button>
              );
            })}
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-9 sm:w-9"
              data-testid="button-more-categories"
              onClick={() => setExploreOpen(true)}
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Sheet open={exploreOpen} onOpenChange={setExploreOpen}>
              <SheetContent side="bottom" className="bg-card border-t-2 border-border h-auto rounded-t-2xl p-6">
                <SheetHeader className="mb-6">
                  <SheetTitle className="flex items-center gap-3 text-foreground text-lg">
                    <Gauge className="h-5 w-5" />
                    Usage
                  </SheetTitle>
                </SheetHeader>
                <div className="space-y-1">
                  <h3 className="text-muted-foreground text-sm font-medium mb-3 px-4">Explore more</h3>
                  {exploreOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        className="w-full flex items-center gap-4 px-4 py-4 text-foreground hover:bg-accent rounded-lg transition-colors"
                        data-testid={`button-explore-${option.id}`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-base font-normal">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </div>
  );
}
