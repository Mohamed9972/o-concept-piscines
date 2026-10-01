"use client";

import { useState, type FormEvent } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, whatsappUrl } from "@/lib/site";
import { ArrowIcon } from "./Icons";

const PROJECT_TYPES = [
  "Construction neuve",
  "Rénovation",
  "Conception / étude",
  "Aménagement extérieur",
  "Autre",
];

/**
 * Lead form — no backend. Builds a pre-filled WhatsApp message
 * from the submitted fields, with a mailto fallback.
 */
export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [mailHref, setMailHref] = useState(`mailto:${EMAIL}`);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) ?? "").toString().trim();
    const lines = [
      "Bonjour Ô Concept Piscines,",
      "",
      `Nom : ${get("nom")}`,
      `Téléphone : ${get("telephone")}`,
      `Email : ${get("email") || "—"}`,
      `Ville : ${get("ville")}`,
      `Type de projet : ${get("type")}`,
    ];
    const message = get("message");
    if (message) lines.push("", message);
    const text = lines.join("\n");
    setMailHref(
      `mailto:${EMAIL}?subject=${encodeURIComponent(`Demande de devis — ${get("nom")}`)}&body=${encodeURIComponent(text)}`
    );
    setSent(true);
    window.open(whatsappUrl(text), "_blank", "noopener");
  }

  return (
    <div className="form-card">
      <form onSubmit={onSubmit} noValidate={false}>
        <div className="two">
          <div className="field">
            <label htmlFor={compact ? "q-nom" : "nom"}>Nom *</label>
            <input id={compact ? "q-nom" : "nom"} name="nom" required autoComplete="name" placeholder="Votre nom" />
          </div>
          <div className="field">
            <label htmlFor={compact ? "q-tel" : "tel"}>Téléphone *</label>
            <input id={compact ? "q-tel" : "tel"} name="telephone" required inputMode="tel" autoComplete="tel" placeholder="98 000 000" />
          </div>
        </div>
        <div className="two">
          <div className="field">
            <label htmlFor={compact ? "q-email" : "email"}>Email</label>
            <input id={compact ? "q-email" : "email"} name="email" type="email" autoComplete="email" placeholder="vous@exemple.com" />
          </div>
          <div className="field">
            <label htmlFor={compact ? "q-ville" : "ville"}>Ville *</label>
            <input id={compact ? "q-ville" : "ville"} name="ville" required autoComplete="address-level2" placeholder="Ariana, Tunis, Hammamet…" />
          </div>
        </div>
        <div className="field">
          <label htmlFor={compact ? "q-type" : "type"}>Type de projet *</label>
          <select id={compact ? "q-type" : "type"} name="type" required defaultValue="">
            <option value="" disabled>
              Choisir…
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor={compact ? "q-msg" : "message"}>Message</label>
          <textarea
            id={compact ? "q-msg" : "message"}
            name="message"
            placeholder="Dimensions approximatives, photos du terrain, vos envies…"
          />
        </div>
        <button className="btn btn-teal" type="submit" style={{ width: "100%" }}>
          Demander mon devis
        </button>
        <p className="hint">
          En envoyant, votre demande s&apos;ouvre dans WhatsApp — le plus rapide en Tunisie.
          Sinon, utilisez l&apos;email ci-dessous.
        </p>
      </form>
      {sent && (
        <p className="form-success" role="status">
          Merci ! Votre demande est prête dans WhatsApp.{" "}
          <a href={mailHref}>Ou envoyez-la par email <ArrowIcon size={16} className="link-arrow" /></a>
        </p>
      )}
      <p className="muted" style={{ marginBottom: 0 }}>
        Préférez appeler ? <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
      </p>
    </div>
  );
}
