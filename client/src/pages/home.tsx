import { useState } from "react";
import { Paperclip, Smile, Send, Globe, BarChart3, Box, PanelLeft, Grid2X2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertProject, Project } from "@shared/schema";

const categories = [
  { id: "web-app", label: "Web app", icon: Globe },
  { id: "data-app", label: "Data app", icon: BarChart3 },
  { id: "3d-game", label: "3D Game", icon: Box },
];

export default function Home() {
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();

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
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
        <div className="flex h-14 items-center px-4 gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            data-testid="button-sidebar-toggle"
            className="text-muted-foreground"
          >
            <PanelLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            data-testid="button-view-toggle"
            className="text-muted-foreground"
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center px-4 pt-16 pb-8">
        <div className="w-full max-w-3xl">
          <h1 className="text-xl font-normal text-foreground mb-8 tracking-tight" data-testid="heading-main">
            , what do you want to make?
          </h1>

          <div className="bg-card border border-card-border rounded-lg p-6 shadow-sm">
            <div className="relative">
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Describe the idea you want to build..."
                className="min-h-[120px] resize-none border-0 p-0 text-base focus-visible:ring-0 placeholder:text-muted-foreground"
                data-testid="input-project-description"
                disabled={createProjectMutation.isPending}
              />

              <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-muted-foreground"
                    data-testid="button-attachment"
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-muted-foreground"
                    data-testid="button-emoji"
                  >
                    <Smile className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-muted-foreground"
                    data-testid="button-edit"
                  >
                    <Pencil className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    className="rounded-full"
                    onClick={handleSubmit}
                    disabled={!description.trim() || createProjectMutation.isPending}
                    data-testid="button-submit"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                
                return (
                  <Button
                    key={category.id}
                    variant="secondary"
                    size="sm"
                    className={`flex items-center gap-1.5 rounded-lg ${
                      isSelected ? 'ring-2 ring-ring' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                    data-testid={`button-category-${category.id}`}
                    disabled={createProjectMutation.isPending}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
