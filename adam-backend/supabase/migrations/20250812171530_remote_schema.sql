drop extension if exists "pg_net";


  create table "public"."audit_log" (
    "id" uuid not null default gen_random_uuid(),
    "event_time" timestamp with time zone default now(),
    "event_type" text,
    "details" jsonb
      );


alter table "public"."audit_log" enable row level security;


  create table "public"."available_slots" (
    "id" uuid not null default gen_random_uuid(),
    "date" date,
    "time" text,
    "is_booked" boolean default false,
    "start_time" timestamp with time zone,
    "end_time" timestamp with time zone,
    "is_active" boolean default true
      );


alter table "public"."available_slots" enable row level security;


  create table "public"."bookings" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid,
    "slot_id" uuid,
    "created_at" timestamp with time zone default now(),
    "call_type" text
      );


alter table "public"."bookings" enable row level security;


  create table "public"."clients" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "company_name" text,
    "company_number" text,
    "vat_number" text,
    "address" text,
    "contact_email" text,
    "contact_phone" text,
    "service_type" text,
    "package_selected" text,
    "status" text default 'QUESTIONNAIRE'::text,
    "unique_client_code" text,
    "notes" text,
    "name" text,
    "legal_name" text,
    "billing_email" text
      );


alter table "public"."clients" enable row level security;


  create table "public"."contracts" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid,
    "created_at" timestamp with time zone default now(),
    "content" jsonb,
    "status" text default 'DRAFT'::text,
    "service_type" text,
    "package" text,
    "notes" text,
    "signed_at" timestamp with time zone
      );


alter table "public"."contracts" enable row level security;


  create table "public"."email_log" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid,
    "sent_at" timestamp with time zone default now(),
    "subject" text,
    "body" text
      );


alter table "public"."email_log" enable row level security;


  create table "public"."invoices" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid,
    "created_at" timestamp with time zone default now(),
    "content" jsonb,
    "status" text default 'UNPAID'::text,
    "contract_id" uuid,
    "service_type" text,
    "package" text,
    "invoice_number" text,
    "issued_at" timestamp with time zone,
    "due_at" timestamp with time zone,
    "currency" text,
    "vat_mode" text,
    "subtotal_gbp" numeric(12,2),
    "vat_gbp" numeric(12,2),
    "total_gbp" numeric(12,2),
    "lines" jsonb,
    "notes" text
      );


alter table "public"."invoices" enable row level security;


  create table "public"."kickoff_availability" (
    "id" uuid not null default gen_random_uuid(),
    "admin_id" uuid,
    "start" timestamp with time zone not null,
    "end" timestamp with time zone not null,
    "capacity" integer not null default 1,
    "location_mode_default" text default 'video_call'::text,
    "location_details_default" text,
    "is_active" boolean not null default true,
    "created_at" timestamp with time zone not null default now()
      );



  create table "public"."kickoff_events" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid not null,
    "status" text not null default 'not_ready'::text,
    "gating_reason" text,
    "selected_slot_start" timestamp with time zone,
    "selected_slot_end" timestamp with time zone,
    "timezone" text,
    "location_mode" text,
    "location_details" text,
    "notes_client" text,
    "notes_admin" text,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
      );



  create table "public"."kickoffs" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid not null,
    "contract_id" uuid not null,
    "kickoff_type" text not null,
    "kickoff_date" timestamp with time zone not null default now(),
    "status" text not null default 'SCHEDULED'::text,
    "notes" text,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now(),
    "selected_slot_start" timestamp with time zone,
    "selected_slot_end" timestamp with time zone,
    "timezone" text,
    "location_mode" text default 'video_call'::text,
    "location_details" text
      );



  create table "public"."proposals" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "client_id" uuid not null,
    "package" text not null,
    "add_ons" jsonb not null default '[]'::jsonb,
    "status" text not null default 'draft'::text,
    "total_gbp" numeric(12,2),
    "service_type" text
      );



  create table "public"."questionnaires" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid,
    "created_at" timestamp with time zone default now(),
    "responses" jsonb
      );


alter table "public"."questionnaires" enable row level security;


  create table "public"."strategies" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid,
    "created_at" timestamp with time zone default now(),
    "content" jsonb,
    "status" text default 'DRAFT'::text,
    "service_type" text,
    "package" text,
    "deliverables" jsonb default '[]'::jsonb,
    "timeline" jsonb default '[]'::jsonb,
    "notes" text
      );


alter table "public"."strategies" enable row level security;


  create table "public"."strategy" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid not null,
    "proposal_id" uuid,
    "status" text not null default 'draft'::text,
    "goals" text,
    "notes" text,
    "version" integer not null default 1,
    "data" jsonb not null default '{}'::jsonb,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
      );



  create table "public"."system_configuration" (
    "id" uuid not null default gen_random_uuid(),
    "setting_key" text,
    "setting_value" text
      );


alter table "public"."system_configuration" enable row level security;


  create table "public"."system_health" (
    "id" uuid not null default gen_random_uuid(),
    "checked_at" timestamp with time zone default now(),
    "status" text,
    "details" text
      );


alter table "public"."system_health" enable row level security;

CREATE UNIQUE INDEX audit_log_pkey ON public.audit_log USING btree (id);

CREATE UNIQUE INDEX available_slots_pkey ON public.available_slots USING btree (id);

CREATE UNIQUE INDEX bookings_pkey ON public.bookings USING btree (id);

CREATE UNIQUE INDEX clients_pkey ON public.clients USING btree (id);

CREATE UNIQUE INDEX contracts_pkey ON public.contracts USING btree (id);

CREATE UNIQUE INDEX email_log_pkey ON public.email_log USING btree (id);

CREATE UNIQUE INDEX invoices_pkey ON public.invoices USING btree (id);

CREATE UNIQUE INDEX kickoff_availability_pkey ON public.kickoff_availability USING btree (id);

CREATE UNIQUE INDEX kickoff_events_pkey ON public.kickoff_events USING btree (id);

CREATE UNIQUE INDEX kickoffs_pkey ON public.kickoffs USING btree (id);

CREATE UNIQUE INDEX proposals_pkey ON public.proposals USING btree (id);

CREATE UNIQUE INDEX questionnaires_pkey ON public.questionnaires USING btree (id);

CREATE UNIQUE INDEX strategies_pkey ON public.strategies USING btree (id);

CREATE UNIQUE INDEX strategy_pkey ON public.strategy USING btree (id);

CREATE UNIQUE INDEX system_configuration_pkey ON public.system_configuration USING btree (id);

CREATE UNIQUE INDEX system_configuration_setting_key_key ON public.system_configuration USING btree (setting_key);

CREATE UNIQUE INDEX system_health_pkey ON public.system_health USING btree (id);

alter table "public"."audit_log" add constraint "audit_log_pkey" PRIMARY KEY using index "audit_log_pkey";

alter table "public"."available_slots" add constraint "available_slots_pkey" PRIMARY KEY using index "available_slots_pkey";

alter table "public"."bookings" add constraint "bookings_pkey" PRIMARY KEY using index "bookings_pkey";

alter table "public"."clients" add constraint "clients_pkey" PRIMARY KEY using index "clients_pkey";

alter table "public"."contracts" add constraint "contracts_pkey" PRIMARY KEY using index "contracts_pkey";

alter table "public"."email_log" add constraint "email_log_pkey" PRIMARY KEY using index "email_log_pkey";

alter table "public"."invoices" add constraint "invoices_pkey" PRIMARY KEY using index "invoices_pkey";

alter table "public"."kickoff_availability" add constraint "kickoff_availability_pkey" PRIMARY KEY using index "kickoff_availability_pkey";

alter table "public"."kickoff_events" add constraint "kickoff_events_pkey" PRIMARY KEY using index "kickoff_events_pkey";

alter table "public"."kickoffs" add constraint "kickoffs_pkey" PRIMARY KEY using index "kickoffs_pkey";

alter table "public"."proposals" add constraint "proposals_pkey" PRIMARY KEY using index "proposals_pkey";

alter table "public"."questionnaires" add constraint "questionnaires_pkey" PRIMARY KEY using index "questionnaires_pkey";

alter table "public"."strategies" add constraint "strategies_pkey" PRIMARY KEY using index "strategies_pkey";

alter table "public"."strategy" add constraint "strategy_pkey" PRIMARY KEY using index "strategy_pkey";

alter table "public"."system_configuration" add constraint "system_configuration_pkey" PRIMARY KEY using index "system_configuration_pkey";

alter table "public"."system_health" add constraint "system_health_pkey" PRIMARY KEY using index "system_health_pkey";

alter table "public"."bookings" add constraint "bookings_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."bookings" validate constraint "bookings_client_id_fkey";

alter table "public"."bookings" add constraint "bookings_slot_id_fkey" FOREIGN KEY (slot_id) REFERENCES available_slots(id) ON DELETE CASCADE not valid;

alter table "public"."bookings" validate constraint "bookings_slot_id_fkey";

alter table "public"."contracts" add constraint "contracts_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."contracts" validate constraint "contracts_client_id_fkey";

alter table "public"."email_log" add constraint "email_log_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."email_log" validate constraint "email_log_client_id_fkey";

alter table "public"."invoices" add constraint "invoices_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."invoices" validate constraint "invoices_client_id_fkey";

alter table "public"."invoices" add constraint "invoices_contract_id_fkey" FOREIGN KEY (contract_id) REFERENCES contracts(id) ON DELETE CASCADE not valid;

alter table "public"."invoices" validate constraint "invoices_contract_id_fkey";

alter table "public"."kickoff_availability" add constraint "kickoff_availability_location_mode_default_check" CHECK ((location_mode_default = ANY (ARRAY['video_call'::text, 'phone'::text, 'onsite'::text]))) not valid;

alter table "public"."kickoff_availability" validate constraint "kickoff_availability_location_mode_default_check";

alter table "public"."kickoff_events" add constraint "kickoff_events_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."kickoff_events" validate constraint "kickoff_events_client_id_fkey";

alter table "public"."kickoff_events" add constraint "kickoff_events_location_mode_check" CHECK ((location_mode = ANY (ARRAY['video_call'::text, 'phone'::text, 'onsite'::text]))) not valid;

alter table "public"."kickoff_events" validate constraint "kickoff_events_location_mode_check";

alter table "public"."kickoff_events" add constraint "kickoff_events_status_check" CHECK ((status = ANY (ARRAY['not_ready'::text, 'ready'::text, 'scheduled'::text, 'completed'::text, 'cancelled'::text]))) not valid;

alter table "public"."kickoff_events" validate constraint "kickoff_events_status_check";

alter table "public"."kickoffs" add constraint "kickoffs_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."kickoffs" validate constraint "kickoffs_client_id_fkey";

alter table "public"."kickoffs" add constraint "kickoffs_contract_id_fkey" FOREIGN KEY (contract_id) REFERENCES contracts(id) ON DELETE CASCADE not valid;

alter table "public"."kickoffs" validate constraint "kickoffs_contract_id_fkey";

alter table "public"."kickoffs" add constraint "kickoffs_location_mode_check" CHECK ((location_mode = ANY (ARRAY['video_call'::text, 'phone'::text, 'onsite'::text]))) not valid;

alter table "public"."kickoffs" validate constraint "kickoffs_location_mode_check";

alter table "public"."proposals" add constraint "proposals_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."proposals" validate constraint "proposals_client_id_fkey";

alter table "public"."questionnaires" add constraint "questionnaires_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."questionnaires" validate constraint "questionnaires_client_id_fkey";

alter table "public"."strategies" add constraint "strategies_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."strategies" validate constraint "strategies_client_id_fkey";

alter table "public"."strategies" add constraint "strategies_service_type_check" CHECK ((service_type = ANY (ARRAY['B2B'::text, 'B2G'::text, 'ADAM'::text]))) not valid;

alter table "public"."strategies" validate constraint "strategies_service_type_check";

alter table "public"."strategy" add constraint "strategy_client_id_fkey" FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE not valid;

alter table "public"."strategy" validate constraint "strategy_client_id_fkey";

alter table "public"."strategy" add constraint "strategy_proposal_id_fkey" FOREIGN KEY (proposal_id) REFERENCES proposals(id) ON DELETE SET NULL not valid;

alter table "public"."strategy" validate constraint "strategy_proposal_id_fkey";

alter table "public"."system_configuration" add constraint "system_configuration_setting_key_key" UNIQUE using index "system_configuration_setting_key_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.touch_kickoff_events_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  new.updated_at := now();
  return new;
end $function$
;

grant delete on table "public"."audit_log" to "anon";

grant insert on table "public"."audit_log" to "anon";

grant references on table "public"."audit_log" to "anon";

grant select on table "public"."audit_log" to "anon";

grant trigger on table "public"."audit_log" to "anon";

grant truncate on table "public"."audit_log" to "anon";

grant update on table "public"."audit_log" to "anon";

grant delete on table "public"."audit_log" to "authenticated";

grant insert on table "public"."audit_log" to "authenticated";

grant references on table "public"."audit_log" to "authenticated";

grant select on table "public"."audit_log" to "authenticated";

grant trigger on table "public"."audit_log" to "authenticated";

grant truncate on table "public"."audit_log" to "authenticated";

grant update on table "public"."audit_log" to "authenticated";

grant delete on table "public"."audit_log" to "service_role";

grant insert on table "public"."audit_log" to "service_role";

grant references on table "public"."audit_log" to "service_role";

grant select on table "public"."audit_log" to "service_role";

grant trigger on table "public"."audit_log" to "service_role";

grant truncate on table "public"."audit_log" to "service_role";

grant update on table "public"."audit_log" to "service_role";

grant delete on table "public"."available_slots" to "anon";

grant insert on table "public"."available_slots" to "anon";

grant references on table "public"."available_slots" to "anon";

grant select on table "public"."available_slots" to "anon";

grant trigger on table "public"."available_slots" to "anon";

grant truncate on table "public"."available_slots" to "anon";

grant update on table "public"."available_slots" to "anon";

grant delete on table "public"."available_slots" to "authenticated";

grant insert on table "public"."available_slots" to "authenticated";

grant references on table "public"."available_slots" to "authenticated";

grant select on table "public"."available_slots" to "authenticated";

grant trigger on table "public"."available_slots" to "authenticated";

grant truncate on table "public"."available_slots" to "authenticated";

grant update on table "public"."available_slots" to "authenticated";

grant delete on table "public"."available_slots" to "service_role";

grant insert on table "public"."available_slots" to "service_role";

grant references on table "public"."available_slots" to "service_role";

grant select on table "public"."available_slots" to "service_role";

grant trigger on table "public"."available_slots" to "service_role";

grant truncate on table "public"."available_slots" to "service_role";

grant update on table "public"."available_slots" to "service_role";

grant delete on table "public"."bookings" to "anon";

grant insert on table "public"."bookings" to "anon";

grant references on table "public"."bookings" to "anon";

grant select on table "public"."bookings" to "anon";

grant trigger on table "public"."bookings" to "anon";

grant truncate on table "public"."bookings" to "anon";

grant update on table "public"."bookings" to "anon";

grant delete on table "public"."bookings" to "authenticated";

grant insert on table "public"."bookings" to "authenticated";

grant references on table "public"."bookings" to "authenticated";

grant select on table "public"."bookings" to "authenticated";

grant trigger on table "public"."bookings" to "authenticated";

grant truncate on table "public"."bookings" to "authenticated";

grant update on table "public"."bookings" to "authenticated";

grant delete on table "public"."bookings" to "service_role";

grant insert on table "public"."bookings" to "service_role";

grant references on table "public"."bookings" to "service_role";

grant select on table "public"."bookings" to "service_role";

grant trigger on table "public"."bookings" to "service_role";

grant truncate on table "public"."bookings" to "service_role";

grant update on table "public"."bookings" to "service_role";

grant delete on table "public"."clients" to "anon";

grant insert on table "public"."clients" to "anon";

grant references on table "public"."clients" to "anon";

grant select on table "public"."clients" to "anon";

grant trigger on table "public"."clients" to "anon";

grant truncate on table "public"."clients" to "anon";

grant update on table "public"."clients" to "anon";

grant delete on table "public"."clients" to "authenticated";

grant insert on table "public"."clients" to "authenticated";

grant references on table "public"."clients" to "authenticated";

grant select on table "public"."clients" to "authenticated";

grant trigger on table "public"."clients" to "authenticated";

grant truncate on table "public"."clients" to "authenticated";

grant update on table "public"."clients" to "authenticated";

grant delete on table "public"."clients" to "service_role";

grant insert on table "public"."clients" to "service_role";

grant references on table "public"."clients" to "service_role";

grant select on table "public"."clients" to "service_role";

grant trigger on table "public"."clients" to "service_role";

grant truncate on table "public"."clients" to "service_role";

grant update on table "public"."clients" to "service_role";

grant delete on table "public"."contracts" to "anon";

grant insert on table "public"."contracts" to "anon";

grant references on table "public"."contracts" to "anon";

grant select on table "public"."contracts" to "anon";

grant trigger on table "public"."contracts" to "anon";

grant truncate on table "public"."contracts" to "anon";

grant update on table "public"."contracts" to "anon";

grant delete on table "public"."contracts" to "authenticated";

grant insert on table "public"."contracts" to "authenticated";

grant references on table "public"."contracts" to "authenticated";

grant select on table "public"."contracts" to "authenticated";

grant trigger on table "public"."contracts" to "authenticated";

grant truncate on table "public"."contracts" to "authenticated";

grant update on table "public"."contracts" to "authenticated";

grant delete on table "public"."contracts" to "service_role";

grant insert on table "public"."contracts" to "service_role";

grant references on table "public"."contracts" to "service_role";

grant select on table "public"."contracts" to "service_role";

grant trigger on table "public"."contracts" to "service_role";

grant truncate on table "public"."contracts" to "service_role";

grant update on table "public"."contracts" to "service_role";

grant delete on table "public"."email_log" to "anon";

grant insert on table "public"."email_log" to "anon";

grant references on table "public"."email_log" to "anon";

grant select on table "public"."email_log" to "anon";

grant trigger on table "public"."email_log" to "anon";

grant truncate on table "public"."email_log" to "anon";

grant update on table "public"."email_log" to "anon";

grant delete on table "public"."email_log" to "authenticated";

grant insert on table "public"."email_log" to "authenticated";

grant references on table "public"."email_log" to "authenticated";

grant select on table "public"."email_log" to "authenticated";

grant trigger on table "public"."email_log" to "authenticated";

grant truncate on table "public"."email_log" to "authenticated";

grant update on table "public"."email_log" to "authenticated";

grant delete on table "public"."email_log" to "service_role";

grant insert on table "public"."email_log" to "service_role";

grant references on table "public"."email_log" to "service_role";

grant select on table "public"."email_log" to "service_role";

grant trigger on table "public"."email_log" to "service_role";

grant truncate on table "public"."email_log" to "service_role";

grant update on table "public"."email_log" to "service_role";

grant delete on table "public"."invoices" to "anon";

grant insert on table "public"."invoices" to "anon";

grant references on table "public"."invoices" to "anon";

grant select on table "public"."invoices" to "anon";

grant trigger on table "public"."invoices" to "anon";

grant truncate on table "public"."invoices" to "anon";

grant update on table "public"."invoices" to "anon";

grant delete on table "public"."invoices" to "authenticated";

grant insert on table "public"."invoices" to "authenticated";

grant references on table "public"."invoices" to "authenticated";

grant select on table "public"."invoices" to "authenticated";

grant trigger on table "public"."invoices" to "authenticated";

grant truncate on table "public"."invoices" to "authenticated";

grant update on table "public"."invoices" to "authenticated";

grant delete on table "public"."invoices" to "service_role";

grant insert on table "public"."invoices" to "service_role";

grant references on table "public"."invoices" to "service_role";

grant select on table "public"."invoices" to "service_role";

grant trigger on table "public"."invoices" to "service_role";

grant truncate on table "public"."invoices" to "service_role";

grant update on table "public"."invoices" to "service_role";

grant delete on table "public"."kickoff_availability" to "anon";

grant insert on table "public"."kickoff_availability" to "anon";

grant references on table "public"."kickoff_availability" to "anon";

grant select on table "public"."kickoff_availability" to "anon";

grant trigger on table "public"."kickoff_availability" to "anon";

grant truncate on table "public"."kickoff_availability" to "anon";

grant update on table "public"."kickoff_availability" to "anon";

grant delete on table "public"."kickoff_availability" to "authenticated";

grant insert on table "public"."kickoff_availability" to "authenticated";

grant references on table "public"."kickoff_availability" to "authenticated";

grant select on table "public"."kickoff_availability" to "authenticated";

grant trigger on table "public"."kickoff_availability" to "authenticated";

grant truncate on table "public"."kickoff_availability" to "authenticated";

grant update on table "public"."kickoff_availability" to "authenticated";

grant delete on table "public"."kickoff_availability" to "service_role";

grant insert on table "public"."kickoff_availability" to "service_role";

grant references on table "public"."kickoff_availability" to "service_role";

grant select on table "public"."kickoff_availability" to "service_role";

grant trigger on table "public"."kickoff_availability" to "service_role";

grant truncate on table "public"."kickoff_availability" to "service_role";

grant update on table "public"."kickoff_availability" to "service_role";

grant delete on table "public"."kickoff_events" to "anon";

grant insert on table "public"."kickoff_events" to "anon";

grant references on table "public"."kickoff_events" to "anon";

grant select on table "public"."kickoff_events" to "anon";

grant trigger on table "public"."kickoff_events" to "anon";

grant truncate on table "public"."kickoff_events" to "anon";

grant update on table "public"."kickoff_events" to "anon";

grant delete on table "public"."kickoff_events" to "authenticated";

grant insert on table "public"."kickoff_events" to "authenticated";

grant references on table "public"."kickoff_events" to "authenticated";

grant select on table "public"."kickoff_events" to "authenticated";

grant trigger on table "public"."kickoff_events" to "authenticated";

grant truncate on table "public"."kickoff_events" to "authenticated";

grant update on table "public"."kickoff_events" to "authenticated";

grant delete on table "public"."kickoff_events" to "service_role";

grant insert on table "public"."kickoff_events" to "service_role";

grant references on table "public"."kickoff_events" to "service_role";

grant select on table "public"."kickoff_events" to "service_role";

grant trigger on table "public"."kickoff_events" to "service_role";

grant truncate on table "public"."kickoff_events" to "service_role";

grant update on table "public"."kickoff_events" to "service_role";

grant delete on table "public"."kickoffs" to "anon";

grant insert on table "public"."kickoffs" to "anon";

grant references on table "public"."kickoffs" to "anon";

grant select on table "public"."kickoffs" to "anon";

grant trigger on table "public"."kickoffs" to "anon";

grant truncate on table "public"."kickoffs" to "anon";

grant update on table "public"."kickoffs" to "anon";

grant delete on table "public"."kickoffs" to "authenticated";

grant insert on table "public"."kickoffs" to "authenticated";

grant references on table "public"."kickoffs" to "authenticated";

grant select on table "public"."kickoffs" to "authenticated";

grant trigger on table "public"."kickoffs" to "authenticated";

grant truncate on table "public"."kickoffs" to "authenticated";

grant update on table "public"."kickoffs" to "authenticated";

grant delete on table "public"."kickoffs" to "service_role";

grant insert on table "public"."kickoffs" to "service_role";

grant references on table "public"."kickoffs" to "service_role";

grant select on table "public"."kickoffs" to "service_role";

grant trigger on table "public"."kickoffs" to "service_role";

grant truncate on table "public"."kickoffs" to "service_role";

grant update on table "public"."kickoffs" to "service_role";

grant delete on table "public"."proposals" to "anon";

grant insert on table "public"."proposals" to "anon";

grant references on table "public"."proposals" to "anon";

grant select on table "public"."proposals" to "anon";

grant trigger on table "public"."proposals" to "anon";

grant truncate on table "public"."proposals" to "anon";

grant update on table "public"."proposals" to "anon";

grant delete on table "public"."proposals" to "authenticated";

grant insert on table "public"."proposals" to "authenticated";

grant references on table "public"."proposals" to "authenticated";

grant select on table "public"."proposals" to "authenticated";

grant trigger on table "public"."proposals" to "authenticated";

grant truncate on table "public"."proposals" to "authenticated";

grant update on table "public"."proposals" to "authenticated";

grant delete on table "public"."proposals" to "service_role";

grant insert on table "public"."proposals" to "service_role";

grant references on table "public"."proposals" to "service_role";

grant select on table "public"."proposals" to "service_role";

grant trigger on table "public"."proposals" to "service_role";

grant truncate on table "public"."proposals" to "service_role";

grant update on table "public"."proposals" to "service_role";

grant delete on table "public"."questionnaires" to "anon";

grant insert on table "public"."questionnaires" to "anon";

grant references on table "public"."questionnaires" to "anon";

grant select on table "public"."questionnaires" to "anon";

grant trigger on table "public"."questionnaires" to "anon";

grant truncate on table "public"."questionnaires" to "anon";

grant update on table "public"."questionnaires" to "anon";

grant delete on table "public"."questionnaires" to "authenticated";

grant insert on table "public"."questionnaires" to "authenticated";

grant references on table "public"."questionnaires" to "authenticated";

grant select on table "public"."questionnaires" to "authenticated";

grant trigger on table "public"."questionnaires" to "authenticated";

grant truncate on table "public"."questionnaires" to "authenticated";

grant update on table "public"."questionnaires" to "authenticated";

grant delete on table "public"."questionnaires" to "service_role";

grant insert on table "public"."questionnaires" to "service_role";

grant references on table "public"."questionnaires" to "service_role";

grant select on table "public"."questionnaires" to "service_role";

grant trigger on table "public"."questionnaires" to "service_role";

grant truncate on table "public"."questionnaires" to "service_role";

grant update on table "public"."questionnaires" to "service_role";

grant delete on table "public"."strategies" to "anon";

grant insert on table "public"."strategies" to "anon";

grant references on table "public"."strategies" to "anon";

grant select on table "public"."strategies" to "anon";

grant trigger on table "public"."strategies" to "anon";

grant truncate on table "public"."strategies" to "anon";

grant update on table "public"."strategies" to "anon";

grant delete on table "public"."strategies" to "authenticated";

grant insert on table "public"."strategies" to "authenticated";

grant references on table "public"."strategies" to "authenticated";

grant select on table "public"."strategies" to "authenticated";

grant trigger on table "public"."strategies" to "authenticated";

grant truncate on table "public"."strategies" to "authenticated";

grant update on table "public"."strategies" to "authenticated";

grant delete on table "public"."strategies" to "service_role";

grant insert on table "public"."strategies" to "service_role";

grant references on table "public"."strategies" to "service_role";

grant select on table "public"."strategies" to "service_role";

grant trigger on table "public"."strategies" to "service_role";

grant truncate on table "public"."strategies" to "service_role";

grant update on table "public"."strategies" to "service_role";

grant delete on table "public"."strategy" to "anon";

grant insert on table "public"."strategy" to "anon";

grant references on table "public"."strategy" to "anon";

grant select on table "public"."strategy" to "anon";

grant trigger on table "public"."strategy" to "anon";

grant truncate on table "public"."strategy" to "anon";

grant update on table "public"."strategy" to "anon";

grant delete on table "public"."strategy" to "authenticated";

grant insert on table "public"."strategy" to "authenticated";

grant references on table "public"."strategy" to "authenticated";

grant select on table "public"."strategy" to "authenticated";

grant trigger on table "public"."strategy" to "authenticated";

grant truncate on table "public"."strategy" to "authenticated";

grant update on table "public"."strategy" to "authenticated";

grant delete on table "public"."strategy" to "service_role";

grant insert on table "public"."strategy" to "service_role";

grant references on table "public"."strategy" to "service_role";

grant select on table "public"."strategy" to "service_role";

grant trigger on table "public"."strategy" to "service_role";

grant truncate on table "public"."strategy" to "service_role";

grant update on table "public"."strategy" to "service_role";

grant delete on table "public"."system_configuration" to "anon";

grant insert on table "public"."system_configuration" to "anon";

grant references on table "public"."system_configuration" to "anon";

grant select on table "public"."system_configuration" to "anon";

grant trigger on table "public"."system_configuration" to "anon";

grant truncate on table "public"."system_configuration" to "anon";

grant update on table "public"."system_configuration" to "anon";

grant delete on table "public"."system_configuration" to "authenticated";

grant insert on table "public"."system_configuration" to "authenticated";

grant references on table "public"."system_configuration" to "authenticated";

grant select on table "public"."system_configuration" to "authenticated";

grant trigger on table "public"."system_configuration" to "authenticated";

grant truncate on table "public"."system_configuration" to "authenticated";

grant update on table "public"."system_configuration" to "authenticated";

grant delete on table "public"."system_configuration" to "service_role";

grant insert on table "public"."system_configuration" to "service_role";

grant references on table "public"."system_configuration" to "service_role";

grant select on table "public"."system_configuration" to "service_role";

grant trigger on table "public"."system_configuration" to "service_role";

grant truncate on table "public"."system_configuration" to "service_role";

grant update on table "public"."system_configuration" to "service_role";

grant delete on table "public"."system_health" to "anon";

grant insert on table "public"."system_health" to "anon";

grant references on table "public"."system_health" to "anon";

grant select on table "public"."system_health" to "anon";

grant trigger on table "public"."system_health" to "anon";

grant truncate on table "public"."system_health" to "anon";

grant update on table "public"."system_health" to "anon";

grant delete on table "public"."system_health" to "authenticated";

grant insert on table "public"."system_health" to "authenticated";

grant references on table "public"."system_health" to "authenticated";

grant select on table "public"."system_health" to "authenticated";

grant trigger on table "public"."system_health" to "authenticated";

grant truncate on table "public"."system_health" to "authenticated";

grant update on table "public"."system_health" to "authenticated";

grant delete on table "public"."system_health" to "service_role";

grant insert on table "public"."system_health" to "service_role";

grant references on table "public"."system_health" to "service_role";

grant select on table "public"."system_health" to "service_role";

grant trigger on table "public"."system_health" to "service_role";

grant truncate on table "public"."system_health" to "service_role";

grant update on table "public"."system_health" to "service_role";


  create policy "dev_all_access"
  on "public"."audit_log"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."available_slots"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."bookings"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."clients"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."contracts"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."email_log"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."invoices"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."questionnaires"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."strategies"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."system_configuration"
  as permissive
  for all
  to public
using (true)
with check (true);



  create policy "dev_all_access"
  on "public"."system_health"
  as permissive
  for all
  to public
using (true)
with check (true);


CREATE TRIGGER trg_touch_kickoff_events BEFORE UPDATE ON public.kickoff_events FOR EACH ROW EXECUTE FUNCTION touch_kickoff_events_updated_at();


