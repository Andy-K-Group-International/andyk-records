// ~/adam-backend/supabase/functions/generateIcs/index.ts
// Minimal ICS generator for Supabase Edge Functions (Deno)

type IcsInput = {
  title?: string;
  description?: string;
  location?: string;
  startsAt?: string; // ISO 8601, e.g. "2025-08-12T19:00:00Z"
  endsAt?: string;   // ISO 8601
  organizer?: { name: string; email: string };
  attendee?: { name: string; email: string };
};

function formatDate(dt: Date) {
  // ICS wants UTC in YYYYMMDDTHHMMSSZ
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    dt.getUTCFullYear().toString() +
    pad(dt.getUTCMonth() + 1) +
    pad(dt.getUTCDate()) +
    "T" +
    pad(dt.getUTCHours()) +
    pad(dt.getUTCMinutes()) +
    pad(dt.getUTCSeconds()) +
    "Z"
  );
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method !== "POST") {
      return new Response("Use POST", { status: 405 });
    }
    const body = (await req.json().catch(() => ({}))) as IcsInput;

    const title = body.title || "Kick‑Off — ANDY’K Group";
    const description = body.description || "Project kick‑off";
    const location = body.location || "Online";
    const starts = body.startsAt ? new Date(body.startsAt) : new Date();
    const ends = body.endsAt
      ? new Date(body.endsAt)
      : new Date(starts.getTime() + 60 * 60 * 1000); // +1h default

    const uid = crypto.randomUUID();
    const dtstamp = formatDate(new Date());

    const organizer = body.organizer
      ? `ORGANIZER;CN=${body.organizer.name}:mailto:${body.organizer.email}`
      : "ORGANIZER:mailto:info@andykgroupinternational.com";

    const attendee = body.attendee
      ? `ATTENDEE;CN=${body.attendee.name}:mailto:${body.attendee.email}`
      : "";

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//ANDYK//ADAM//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${dtstamp}`,
      `DTSTART:${formatDate(starts)}`,
      `DTEND:${formatDate(ends)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      organizer,
      attendee,
      "END:VEVENT",
      "END:VCALENDAR",
      "",
    ].join("\r\n");

    return new Response(ics, {
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": 'attachment; filename="event.ics"',
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "ICS generation failed", detail: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
