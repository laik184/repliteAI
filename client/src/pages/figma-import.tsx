import { ChevronLeft, BookOpen, Palette, Image, Layout, ArrowRight } from "lucide-react";
import { SiFigma } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function FigmaImport() {
  const [, setLocation] = useLocation();

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
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-2" data-testid="heading-figma-import">
            Import Figma Design into Replit
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-8" data-testid="text-description">
            Convert your designs into live Apps using Replit Agent
          </p>

          <div className="space-y-6">
            <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-lg p-5 sm:p-6 space-y-4">
              <h2 className="text-white font-semibold text-lg">
                Importing frames from Figma
              </h2>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Getting started is easy: 1. Connect your Figma account 2. In Figma, select the frame you want to build in Replit 3. Copy the frame URL and paste it
              </p>

              <Button
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 hover:bg-[#232936] px-3 py-2 h-auto gap-2"
                data-testid="button-docs"
              >
                <BookOpen className="w-4 h-4" />
                Docs
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-gray-400 text-sm font-medium">
                What we'll import:
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-300">
                  <Palette className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">Theme & components</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Image className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">Assets & icons</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Layout className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">App scaffolding</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-lg p-6 sm:p-8 text-center space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#f24e1e] via-[#a259ff] to-[#1abcfe] rounded-lg flex items-center justify-center">
                  <SiFigma className="w-7 h-7 text-white" />
                </div>
                
                <ArrowRight className="w-6 h-6 text-gray-400" />
                
                <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-lg">
                  Connect Figma to Replit
                </h3>
                <p className="text-gray-400 text-sm">
                  Get started by logging in with your Figma account
                </p>
              </div>

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base font-medium flex items-center justify-center gap-2 w-full sm:w-auto sm:mx-auto"
                data-testid="button-login-figma"
              >
                Log in with Figma
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
