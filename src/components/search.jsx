"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();

        const trimmed = query.trim();
        if (!trimmed) return;

        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    };
    return (
        <>
            <form onSubmit={handleSearch} className="flex gap-2">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-3 py-2 border rounded-md"
                />
                
            </form>
        </>
    )
}