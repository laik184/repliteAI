import { useState } from "react";
import { 
  Home, 
  FolderOpen, 
  Globe, 
  Layers, 
  BarChart3, 
  ChevronDown,
  Plus,
  Download,
  Search,
  Zap,
  Monitor,
  Smartphone,
  FileCode,
  Lightbulb,
  BookOpen
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const menuItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Apps", icon: FolderOpen, url: "#" },
  { title: "Published apps", icon: Globe, url: "#" },
  { title: "Integrations", icon: Layers, url: "#" },
  { title: "Usage", icon: BarChart3, url: "#" },
];

const exploreItems = [
  { title: "Developer Frameworks", icon: FileCode, url: "#" },
  { title: "Learn", icon: Lightbulb, url: "#" },
  { title: "Documentation", icon: BookOpen, url: "#" },
];

export function AppSidebar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const handleCreateApp = () => {
    window.location.href = "/";
  };

  const handleImport = () => {
    window.location.href = "/import";
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Button 
          variant="ghost" 
          size="icon"
          className="ml-auto"
          data-testid="button-search"
        >
          <Search className="h-5 w-5" />
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-3">
        <div className="space-y-2 mb-4">
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2"
            data-testid="button-create-app"
            onClick={handleCreateApp}
          >
            <Plus className="h-4 w-4" />
            Create App
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2"
            data-testid="button-import"
            onClick={handleImport}
          >
            <Download className="h-4 w-4" />
            Import code or design
          </Button>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Collapsible open={isExploreOpen} onOpenChange={setIsExploreOpen}>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="w-full justify-between" data-testid="button-explore-more">
                <span>Explore more</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isExploreOpen ? 'rotate-180' : ''}`} />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent className="mt-2">
                <SidebarMenu>
                  {exploreItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Separator className="my-4" />

        <SidebarGroup>
          <SidebarGroupLabel>Your Starter Plan</SidebarGroupLabel>
          <SidebarGroupContent className="space-y-3 mt-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">{'</>'}</div>
              <div className="flex-1">
                <div className="text-sm font-medium">Free Apps</div>
                <div className="text-xs text-muted-foreground">1/10 created</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="grid grid-cols-2 gap-0.5 text-xs">
                <div className="w-1.5 h-1.5 bg-foreground rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-foreground rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-foreground rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-foreground rounded-sm"></div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Agent Usage</div>
                <div className="text-xs text-muted-foreground">58% used</div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Button 
          variant="default" 
          className="w-full gap-2 mt-4"
          data-testid="button-upgrade"
        >
          <Zap className="h-4 w-4" />
          Upgrade to Replit Core
        </Button>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Install Replit on</span>
          <Monitor className="h-4 w-4" />
          <Smartphone className="h-4 w-4" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
