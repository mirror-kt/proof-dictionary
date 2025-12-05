import { NextResponse } from "next/server";
import { loadDictionaries } from "@/features/dictionary/utils/loadDictionaries";

export const dynamic = "force-static";

export async function GET() {
  const dictionaries = await loadDictionaries();

  return NextResponse.json(dictionaries);
}
