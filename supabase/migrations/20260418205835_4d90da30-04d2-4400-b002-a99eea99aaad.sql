-- RSVPs table for graduation invitation page
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  guest_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous guests) can submit an RSVP
CREATE POLICY "Anyone can submit an RSVP"
ON public.rsvps
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Anyone can view RSVPs (host dashboard is public via /graduation/admin)
CREATE POLICY "Anyone can view RSVPs"
ON public.rsvps
FOR SELECT
TO anon, authenticated
USING (true);

-- Enable realtime updates for the host dashboard feed
ALTER PUBLICATION supabase_realtime ADD TABLE public.rsvps;
ALTER TABLE public.rsvps REPLICA IDENTITY FULL;