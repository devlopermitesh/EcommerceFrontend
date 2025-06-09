import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export function SearchBar({
  className,
  placeholder = "Search products...",
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
        <Input
          type="search"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 w-full h-auto sm:w-64 bg-white border-gray-200 focus:border-gray-300 focus:ring-gray-200 text-slate-700 placeholder:text-slate-500"
          aria-label="Search products"
        />
      </div>
    </form>
  );
}