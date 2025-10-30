import { useState } from "react";
import { ChevronLeft, Globe, Lock, Download } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

export default function VercelImport() {
  const [, setLocation] = useLocation();
  const [repoUrl, setRepoUrl] = useState("");
  const [isConnected, setIsConnected] = useState(true);
  const [owner, setOwner] = useState("xzygeu058");
  const [privacy, setPrivacy] = useState("public");

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-[#0f1419] text-white min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-[#0f1419] border-b border-[#1f2937]">
        <div className="flex h-14 items-center px-4 gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            data-testid="button-back"
            className="text-gray-400 hover:text-white hover:bg-[#1f2937]"
            onClick={() => setLocation("/import")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span className="text-sm text-gray-400">All import sources</span>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center px-4 sm:px-6 py-6 sm:py-12">
        <div className="w-full max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-2" data-testid="heading-vercel-import">
            Migrate from Vercel to Replit
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8" data-testid="text-description">
            Export your project from Vercel and import it to Replit
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="repo-url" className="text-white text-sm font-medium">
                GitHub Repo URL
              </Label>
              <Input
                id="repo-url"
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/username/repo"
                className="bg-[#1a1f2e] border-[#2d3748] text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                data-testid="input-repo-url"
              />
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Or select a repo from your account</p>
              
              {!isConnected ? (
                <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-lg p-6 sm:p-8 text-center space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 22h20L12 2z"/>
                      </svg>
                    </div>
                    <div className="text-gray-400">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <SiGithub className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-lg">Connect to GitHub</h3>
                    <p className="text-gray-400 text-sm">
                      Get started by logging in with your GitHub account
                    </p>
                  </div>

                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                    data-testid="button-connect-github"
                    onClick={() => setIsConnected(true)}
                  >
                    Connect your GitHub account
                  </Button>
                </div>
              ) : null}

              <div className="space-y-2">
                <Label htmlFor="owner" className="text-white text-sm font-medium">
                  Owner
                </Label>
                <Select value={owner} onValueChange={setOwner}>
                  <SelectTrigger 
                    id="owner"
                    className="bg-[#1a1f2e] border-[#2d3748] text-white"
                    data-testid="select-owner"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1f2e] border-[#2d3748] text-white">
                    <SelectItem value="xzygeu058">xzygeu058</SelectItem>
                    <SelectItem value="other-user">other-user</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-white text-sm font-medium">Privacy</Label>
                <RadioGroup value={privacy} onValueChange={setPrivacy} className="space-y-3">
                  <div 
                    className={`flex items-start gap-3 p-4 rounded-lg border ${
                      privacy === 'public' 
                        ? 'bg-[#1a1f2e] border-blue-500' 
                        : 'bg-[#1a1f2e] border-[#2d3748]'
                    } cursor-pointer transition-colors`}
                    onClick={() => setPrivacy('public')}
                    data-testid="radio-public"
                  >
                    <RadioGroupItem value="public" id="public" className="mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <Label htmlFor="public" className="text-white font-medium cursor-pointer">
                          Public
                        </Label>
                      </div>
                      <p className="text-sm text-gray-400">
                        Anyone can view and fork this App.
                      </p>
                    </div>
                  </div>

                  <div 
                    className={`flex items-start gap-3 p-4 rounded-lg border ${
                      privacy === 'private' 
                        ? 'bg-[#1a1f2e] border-blue-500' 
                        : 'bg-[#1a1f2e] border-[#2d3748]'
                    } cursor-pointer transition-colors`}
                    onClick={() => setPrivacy('private')}
                    data-testid="radio-private"
                  >
                    <RadioGroupItem value="private" id="private" className="mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Lock className="w-4 h-4 text-gray-400" />
                        <Label htmlFor="private" className="text-white font-medium cursor-pointer">
                          Private
                        </Label>
                        <Badge className="bg-orange-600 text-white text-xs px-2 py-0.5">
                          Core
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">
                        Only you can see and edit this App.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-medium flex items-center justify-center gap-2"
                data-testid="button-import-github"
              >
                <Download className="w-5 h-5" />
                Import from GitHub
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
