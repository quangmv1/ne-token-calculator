import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({
        tokenCount: 0,
        charCount: 0,
        tokens: []
      });
    }

    // Fake tokenization logic: split by common patterns
    // In reality, this would use a library like tiktoken
    const words = text.split(/(\s+)/).filter(Boolean);
    
    const tokens = words.map((word: string, index: number) => ({
      text: word,
      id: 1000 + index
    }));

    return NextResponse.json({
      tokenCount: tokens.length,
      charCount: text.length,
      tokens: tokens
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to tokenize" }, { status: 500 });
  }
}
