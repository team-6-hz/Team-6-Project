import { describe, it, expect } from "vitest";

describe("The connection between the database -> microservice -> server -> project works.", () => {
    it("gets all the posts", async () => {
        const response = await fetch("http://localhost:3001/posts");
            expect(response.status).toBe(200);
    });
});