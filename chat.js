// @ts-nocheck
import { isWebSocketCloseEvent } from "https://deno.land/std@0.65.0/ws/mod.ts";
import { v4 } from "https://deno.land/std@0.65.0/uuid/mod.ts";

// This is called when user is connected
export default async function chat(ws) {
  // Generate unique userId
  const userId = v4.generate();

  // Listening of WebSocket events
  for await (let data of ws) {
    const event = typeof data === "string" ? JSON.parse(data) : data;
  }
}


