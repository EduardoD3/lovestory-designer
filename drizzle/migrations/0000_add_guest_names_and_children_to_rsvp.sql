ALTER TABLE public.rsvp_responses ADD COLUMN guest_names text;
ALTER TABLE public.rsvp_responses ADD COLUMN children text;

COMMENT ON COLUMN public.rsvp_responses.guest_names IS 'Names of companions when guests_count > 0';
COMMENT ON COLUMN public.rsvp_responses.children IS 'Children/kids info, e.g. ''Sim - 3 e 7 anos'' or ''Não''';