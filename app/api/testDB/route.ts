import { getColection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const collection = await getColection("test");
    if (collection) {
      return NextResponse.json({ message: "Conexão estabelecida com sucesso!" });
    }
    return NextResponse.json({ error: "Não foi possível aceder à coleção" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: "Falha na conexão", details: error }, { status: 500 });
  }
}