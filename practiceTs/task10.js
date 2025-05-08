"use strict";
{
    // Task 10: Nullish Coalescing
    // Objective: Handle null and undefined values using nullish coalescing.
    // Instructions:
    // Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
    function getDisplayName(name) {
        const displayName = name !== null && name !== void 0 ? name : "Anonymous";
        return displayName;
    }
    const name = "D";
    console.log(getDisplayName(name));
    //
}
