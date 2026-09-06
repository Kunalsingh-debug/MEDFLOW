// Conservative deterministic triage prompts for this prototype. These rules
// are not diagnoses and do not call any AI service.
export function getRedFlags({ symptoms = [], severity = 0 }) {
  const severe = Number(severity) >= 8;
  const flags = [];
  if (severe && symptoms.includes("chest_discomfort")) {
    flags.push({ id: "severe_chest_discomfort", category: "cardiac", severity: "urgent", triggeredBy: ["severe chest discomfort"] });
  }
  if (severe && (symptoms.includes("shortness_of_breath") || symptoms.includes("breath_on_exertion") || symptoms.includes("chest_tightness"))) {
    flags.push({ id: "severe_breathing_difficulty", category: "respiratory", severity: "urgent", triggeredBy: ["severe breathing difficulty"] });
  }
  if (symptoms.includes("fainting")) {
    flags.push({ id: "loss_of_consciousness", category: "neurological", severity: "urgent", triggeredBy: ["fainting or near-fainting"] });
  }
  if (severe && (symptoms.includes("limb_weakness") || symptoms.includes("vision_changes"))) {
    flags.push({ id: "sudden_neurological_symptoms", category: "neurological", severity: "urgent", triggeredBy: ["severe new neurological symptoms"] });
  }
  return { redFlagDetected: flags.length > 0, flags };
}
