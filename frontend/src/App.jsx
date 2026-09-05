import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "./components/Navbar";
import IntakeProgress from "./components/IntakeProgress";
import {
  BODY_SYSTEMS,
  DURATION_OPTIONS,
  PROGRESSION_OPTIONS,
} from "./data/symptomDictionary";

import {
  Activity,
  Wind,
  Brain,
  UtensilsCrossed,
  Bone,
  Sparkles,
  Droplets,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  HeartPulse,
  Lock,
  Mic,
  Search,
  ShieldCheck,
  Upload,
  X,
  AlertCircle,
  RotateCcw,
  Edit3,
  LayoutDashboard,
  LogOut,
  ClipboardList,
  UserRound,
} from "lucide-react";

import "./App.css";

// Body system accent color palette
const SYSTEM_COLORS = {
  heart:     { bg: "#fef2f2", iconBg: "#ef4444", border: "#ef4444", text: "#991b1b", light: "#fee2e2" },
  lungs:     { bg: "#eff6ff", iconBg: "#3b82f6", border: "#3b82f6", text: "#1e40af", light: "#dbeafe" },
  brain:     { bg: "#f5f3ff", iconBg: "#8b5cf6", border: "#8b5cf6", text: "#5b21b6", light: "#ede9fe" },
  digestive: { bg: "#fff7ed", iconBg: "#f97316", border: "#f97316", text: "#9a3412", light: "#fed7aa" },
  muscles:   { bg: "#fffbeb", iconBg: "#f59e0b", border: "#f59e0b", text: "#92400e", light: "#fde68a" },
  skin:      { bg: "#fdf2f8", iconBg: "#ec4899", border: "#ec4899", text: "#831843", light: "#fce7f3" },
  urinary:   { bg: "#ecfeff", iconBg: "#06b6d4", border: "#06b6d4", text: "#0e7490", light: "#cffafe" },
  general:   { bg: "#f0fdf4", iconBg: "#10b981", border: "#10b981", text: "#065f46", light: "#d1fae5" },
};

function App() {
  const { t } = useTranslation();

  const [page, setPage] = useState("login");
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [authForm, setAuthForm] = useState({ identityType: "abha", identity: "", password: "", mobile: "", otp: "", profileName: "", abhaId: "", dateOfBirth: "", gender: "" });
  const [authError, setAuthError] = useState("");
  const [otpSessionId, setOtpSessionId] = useState("");
  const [mobileVerified, setMobileVerified] = useState(false);

  // =====================================================
  // PATIENT PROFILE
  // =====================================================

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    language: "English",
  });

  const [errors, setErrors] = useState({});

  // =====================================================
  // STRUCTURED 7-STEP INTAKE STATE
  // =====================================================

  const [intakeStep, setIntakeStep] = useState(1);
  const [intakeData, setIntakeData] = useState({
    bodySystem: "",
    symptoms: [],           // stores stable symptom IDs
    severity: 5,
    duration: "",           // stores stable duration ID
    progression: "",        // stores stable progression ID
    medicalConditionsHas: "no",
    medicalConditionsText: "",
    medicationsHas: "no",
    medicationsText: "",
    allergiesHas: "no",
    allergiesText: "",
    previousSimilar: "no",
    recentInjuryHas: "no",
    recentInjuryText: "",
    additionalInformation: "",
  });

  const [symptomSearch, setSymptomSearch] = useState("");
  const [clinicalSummary, setClinicalSummary] = useState(null);
  const [analyzingIntake, setAnalyzingIntake] = useState(false);
  const [analysisError, setAnalysisError] = useState("");
  // These documents are scoped to the current intake. Their extracted content,
  // not the raw files, is sent to the server-side clinical-summary endpoint.
  const [intakeDocuments, setIntakeDocuments] = useState([]);

  const API_URL = "http://localhost:5000";

  function updateAuthField(field, value) {
    setAuthForm((previous) => ({ ...previous, [field]: value }));
    setAuthError("");
  }

  function maskAbha(abhaId) {
    if (!abhaId) return t("auth.notProvided");
    const visible = abhaId.slice(-4);
    return `****-****-${visible}`;
  }

  async function requestAuth(route, body) {
    let response;
    try {
      response = await fetch(`${API_URL}${route}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    } catch {
      throw new Error("MedX backend is unavailable. Start the backend and try again.");
    }
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("MedX backend is unavailable or needs to be restarted. Please try again.");
    }
    const data = await response.json();
    if (!response.ok || !data.success) throw new Error(data.error || t("auth.genericError"));
    return data;
  }

  async function signIn(useDemo = false) {
    try {
      setAuthError("");
      const payload = useDemo
        ? { identityType: "abha", identity: "DEMO-ABHA-001", password: "MedX@123" }
        : { identityType: authForm.identityType, identity: authForm.identity, password: authForm.password };
      const data = await requestAuth("/api/auth/login", payload);
      setAuthenticatedUser(data.user);
      setForm((previous) => ({ ...previous, name: data.user.name, language: previous.language }));
      if (data.user.demo) loadDemoHealthData();
      setPage("dashboard");
    } catch (error) {
      setAuthError(error.message);
    }
  }

  async function sendOtp() {
    try {
      const data = await requestAuth("/api/auth/send-otp", { mobile: authForm.mobile });
      setOtpSessionId(data.sessionId);
      setPage("otp");
    } catch (error) { setAuthError(error.message); }
  }

  async function verifyOtp() {
    try {
      await requestAuth("/api/auth/verify-otp", { sessionId: otpSessionId, otp: authForm.otp });
      setMobileVerified(true);
      setPage("profile-setup");
    } catch (error) { setAuthError(error.message); }
  }

  async function createProfile() {
    try {
      const data = await requestAuth("/api/auth/register", { name: authForm.profileName, abhaId: authForm.abhaId, mobileVerified });
      setAuthenticatedUser(data.user);
      setForm((previous) => ({ ...previous, name: data.user.name, gender: authForm.gender, phone: authForm.mobile, language: previous.language }));
      setPage("dashboard");
    } catch (error) { setAuthError(error.message); }
  }

  function loadDemoHealthData() {
    setIntakeData((previous) => ({ ...previous, bodySystem: "heart", symptoms: ["chest_discomfort", "breath_on_exertion", "fatigue"], severity: 7, duration: "1_3d", progression: "getting_worse", medicalConditionsHas: "yes", medicalConditionsText: "Hypertension (patient reported)", medicationsHas: "yes", medicationsText: "Medication details not provided", allergiesHas: "no", previousSimilar: "no", recentInjuryHas: "no", additionalInformation: "Reports discomfort with routine activity." }));
    setIntakeDocuments([{ id: "demo-doc-1", name: "Blood_Report.pdf", type: "application/pdf", size: 248000, status: "processed", extractedText: "Previous laboratory report available.", extractedData: {} }, { id: "demo-doc-2", name: "Prescription.pdf", type: "application/pdf", size: 126000, status: "processed", extractedText: "Previous medication information available.", extractedData: {} }]);
    setClinicalSummary({ chief_concern: "Patient reports chest discomfort with exertional shortness of breath for 1–3 days.", clinical_presentation: "Patient-reported cardiac symptoms include chest discomfort, exertional dyspnea, and fatigue, rated 7/10 and worsening.", history_of_present_illness: "Symptoms have been present for 1–3 days with a worsening course. The patient reports discomfort during routine activity.", relevant_medical_history: "Hypertension reported by the patient.", current_medications: "Medication details not provided.", allergies: "No known allergies reported.", document_derived_information: "A previous laboratory report and prescription were uploaded; extracted details should be reviewed with the original documents.", clinician_review_notes: "Reported worsening symptoms and severity are documented for clinician review; this is not a diagnosis." });
  }

  // =====================================================
  // SPEECH RECOGNITION (SARVAM STT)
  // =====================================================

  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState("");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // =====================================================
  // MEDICAL RECORDS
  // =====================================================

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Blood Test Report",
      type: "Lab Report",
      hospital: "ABC Diagnostics",
      date: "28 Aug 2026",
      status: "Verified",
      locked: true,
    },
    {
      id: 2,
      name: "Prescription",
      type: "Prescription",
      hospital: "City Hospital",
      date: "15 Aug 2026",
      status: "Verified",
      locked: true,
    },
    {
      id: 3,
      name: "Discharge Summary",
      type: "Discharge",
      hospital: "Apollo Medical Centre",
      date: "02 Aug 2026",
      status: "Verified",
      locked: true,
    },
  ]);

  const [showUpload, setShowUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const [extracting, setExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [extractionError, setExtractionError] = useState("");

  // =====================================================
  // FORM FUNCTIONS
  // =====================================================

  function updateField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });

    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = t("errors.enterName");
    }

    if (!form.age) {
      newErrors.age = t("errors.enterAge");
    } else if (Number(form.age) < 1 || Number(form.age) > 120) {
      newErrors.age = t("errors.validAge");
    }

    if (!form.gender) {
      newErrors.gender = t("errors.selectGender");
    }

    if (!form.phone) {
      newErrors.phone = t("errors.enterPhone");
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = t("errors.validPhone");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function continueToIntake() {
    if (!validateForm()) return;
    setIntakeStep(1);
    setAnalysisError("");
    setSpeechError("");
    setIsListening(false);
    setPage("intake");
  }

  // =====================================================
  // STRUCTURED INTAKE HANDLERS
  // =====================================================

  function handleSelectSystem(systemId) {
    setIntakeData((prev) => {
      const isSame = prev.bodySystem === systemId;
      return {
        ...prev,
        bodySystem: systemId,
        symptoms: isSame ? prev.symptoms : [],
      };
    });
  }

  function toggleSymptom(symptomId) {
    setIntakeData((prev) => {
      const exists = prev.symptoms.includes(symptomId);
      const updated = exists
        ? prev.symptoms.filter((s) => s !== symptomId)
        : [...prev.symptoms, symptomId];
      return {
        ...prev,
        symptoms: updated,
      };
    });
  }

  function updateIntakeField(field, value) {
    setIntakeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // Helper: get display label for a symptom ID
  function getSymptomLabel(symptomId) {
    for (const system of BODY_SYSTEMS) {
      const found = system.symptoms.find((s) => s.id === symptomId);
      if (found) return t(found.key);
    }
    return symptomId;
  }

  // Helper: get display label for a duration ID
  function getDurationLabel(durationId) {
    const found = DURATION_OPTIONS.find((d) => d.id === durationId);
    return found ? t(found.key) : durationId;
  }

  // Helper: get display label for a progression ID
  function getProgressionLabel(progressionId) {
    const found = PROGRESSION_OPTIONS.find((p) => p.id === progressionId);
    return found ? t(found.key) : progressionId;
  }

  // Helper: get English label for API payload (stable)
  function getSymptomEnLabel(symptomId) {
    // Map IDs to English display labels for backend payload
    const ENGLISH_LABELS = {
      chest_discomfort: "Chest discomfort",
      palpitations: "Palpitations",
      fast_heartbeat: "Fast heartbeat",
      irregular_pulse: "Irregular pulse",
      dizziness: "Dizziness",
      fainting: "Fainting / lightheadedness",
      ankle_swelling: "Swelling in ankles/legs",
      breath_on_exertion: "Shortness of breath on exertion",
      cold_sweats: "Cold sweats",
      fatigue: "Fatigue",
      cough: "Cough",
      dry_cough: "Dry cough",
      productive_cough: "Productive cough with phlegm",
      shortness_of_breath: "Shortness of breath",
      wheezing: "Wheezing",
      chest_congestion: "Chest congestion",
      sore_throat: "Sore throat",
      runny_nose: "Runny nose",
      fever: "Fever",
      chest_tightness: "Chest tightness during breathing",
      headache: "Headache",
      migraine: "Migraine-like pain",
      dizziness_brain: "Dizziness",
      limb_weakness: "Weakness in arms or legs",
      numbness: "Numbness",
      tingling: "Tingling sensation",
      concentration: "Difficulty concentrating",
      vision_changes: "Vision changes or blurriness",
      tremors: "Tremors or shakiness",
      sleep_disturbance: "Sleep disturbance",
      abdominal_pain: "Abdominal pain",
      stomach_cramps: "Stomach cramps",
      nausea: "Nausea",
      vomiting: "Vomiting",
      diarrhea: "Diarrhea",
      constipation: "Constipation",
      acid_reflux: "Acid reflux / heartburn",
      loss_of_appetite: "Loss of appetite",
      bloating: "Bloating and gas",
      indigestion: "Indigestion",
      joint_pain: "Joint pain",
      muscle_pain: "Muscle pain",
      lower_back_pain: "Lower back pain",
      neck_stiffness: "Neck stiffness",
      joint_swelling: "Swelling around joints",
      morning_stiffness: "Morning stiffness",
      sprain_injury: "Recent sprain or injury",
      muscle_cramps: "Muscle cramps",
      limited_movement: "Limited movement or mobility",
      muscle_weakness: "General muscle weakness",
      skin_rash: "Skin rash",
      severe_itching: "Severe itching",
      redness_irritation: "Redness and irritation",
      swelling_puffiness: "Swelling or puffiness",
      hives: "Hives (urticaria)",
      dry_peeling_skin: "Dry, peeling skin",
      skin_discoloration: "Skin discoloration or lesions",
      blisters: "Blisters or bumps",
      allergic_reaction: "Allergic reaction to food/substance",
      eczema: "Eczema flare-up",
      painful_urination: "Pain or burning while urinating",
      frequent_urge: "Frequent urge to urinate",
      blood_in_urine: "Blood in urine",
      abdominal_heaviness: "Lower abdominal heaviness",
      flank_pain: "Flank or side back pain",
      difficulty_urinating: "Difficulty starting urination",
      dark_urine: "Dark or cloudy urine",
      nighttime_urination: "Nighttime urination frequency",
      reduced_urine_output: "Reduced urine output",
      fever_chills: "Fever or chills",
      unexplained_fatigue: "Unexplained fatigue",
      body_weakness: "General body weakness",
      weight_change: "Significant weight change",
      loss_of_appetite_gen: "Loss of appetite",
      general_discomfort: "General discomfort / malaise",
      night_sweats: "Night sweats",
      body_aches: "Body aches",
      swollen_lymph_nodes: "Swollen lymph nodes",
    };
    return ENGLISH_LABELS[symptomId] || symptomId;
  }

  function getDurationEnLabel(durationId) {
    const labels = {
      less_1h: "Less than 1 hour",
      "1_6h": "1–6 hours",
      "6_24h": "6–24 hours",
      "1_3d": "1–3 days",
      "4_7d": "4–7 days",
      "1_4w": "1–4 weeks",
      over_1m: "More than 1 month",
    };
    return labels[durationId] || durationId;
  }

  function getProgressionEnLabel(progressionId) {
    const labels = {
      getting_better: "Getting better",
      staying_same: "Staying the same",
      getting_worse: "Getting worse",
      fluctuating: "Not sure / fluctuating",
    };
    return labels[progressionId] || progressionId;
  }

  async function runAiAnalysis() {
    setIntakeStep(6);
    setAnalyzingIntake(true);
    setAnalysisError("");

    const selectedSystemObj = BODY_SYSTEMS.find(
      (s) => s.id === intakeData.bodySystem
    );

    // Payload uses stable English labels for backend compatibility
    const payload = {
      patient: form,
      bodySystem: selectedSystemObj
        ? t(selectedSystemObj.titleKey)
        : intakeData.bodySystem,
      symptoms: intakeData.symptoms.map(getSymptomEnLabel),
      severity: intakeData.severity,
      duration: getDurationEnLabel(intakeData.duration),
      progression: getProgressionEnLabel(intakeData.progression),
      medicalConditions:
        intakeData.medicalConditionsHas === "yes"
          ? intakeData.medicalConditionsText || "Yes (details unspecified)"
          : intakeData.medicalConditionsHas,
      medications:
        intakeData.medicationsHas === "yes"
          ? intakeData.medicationsText || "Yes (details unspecified)"
          : intakeData.medicationsHas,
      allergies:
        intakeData.allergiesHas === "yes"
          ? intakeData.allergiesText || "Yes (details unspecified)"
          : intakeData.allergiesHas,
      previousSimilarSymptoms: intakeData.previousSimilar,
      recentInjuryOrSurgery:
        intakeData.recentInjuryHas === "yes"
          ? intakeData.recentInjuryText || "Yes (details unspecified)"
          : intakeData.recentInjuryHas,
      additionalInformation: intakeData.additionalInformation,
      documents: intakeDocuments
        .filter((document) => document.status === "processed")
        .map(({ name, extractedText, extractedData }) => ({
          name,
          extractedText,
          extractedData,
        })),
    };

    try {
      const response = await fetch(`${API_URL}/api/history/analyze-intake`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to complete AI clinical analysis.");
      }

      setClinicalSummary(data.summary);
      setIntakeStep(7);
    } catch (err) {
      console.error("AI Analysis Error:", err);
      setAnalysisError(
        err.message || "Unable to complete AI clinical analysis. Please try again."
      );
    } finally {
      setAnalyzingIntake(false);
    }
  }

  function formatFileSize(bytes) {
    if (!bytes) return "0 KB";
    const units = ["B", "KB", "MB"];
    const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
  }

  async function processIntakeDocument(document) {
    setIntakeDocuments((previous) => previous.map((item) => (
      item.id === document.id ? { ...item, status: "processing", error: "" } : item
    )));

    try {
      const formData = new FormData();
      const isPdf = document.file.type === "application/pdf" || document.name.toLowerCase().endsWith(".pdf");
      formData.append(isPdf ? "pdf" : "image", document.file);
      const endpoint = isPdf ? "/api/documents/analyze-pdf" : "/api/documents/ocr-analyze";
      const response = await fetch(`${API_URL}${endpoint}`, { method: "POST", body: formData });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "Unable to process document.");

      setIntakeDocuments((previous) => previous.map((item) => (
        item.id === document.id
          ? { ...item, status: "processed", extractedText: data.extractedText || "", extractedData: data.data || {} }
          : item
      )));
    } catch (error) {
      setIntakeDocuments((previous) => previous.map((item) => (
        item.id === document.id
          ? { ...item, status: "failed", error: error.message || t("intakeFlow.documentProcessingFailed") }
          : item
      )));
    }
  }

  function addIntakeDocuments(fileList) {
    const supportedFiles = Array.from(fileList).filter((file) => (
      ["application/pdf", "image/jpeg", "image/png"].includes(file.type)
    ));
    const newDocuments = supportedFiles.map((file) => ({
      id: `${Date.now()}-${file.name}-${Math.random()}`,
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      file,
      status: "processing",
      extractedText: "",
      extractedData: {},
      error: "",
    }));
    setIntakeDocuments((previous) => [...previous, ...newDocuments]);
    newDocuments.forEach(processIntakeDocument);
  }

  function removeIntakeDocument(id) {
    setIntakeDocuments((previous) => previous.filter((document) => document.id !== id));
  }

  function confirmMedicalHistory() {
    const intakeDoc = {
      id: Date.now(),
      name: "Structured Clinical Intake Report",
      type: "Clinical Intake",
      hospital: "MedX Triage Service",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Verified",
      locked: true,
    };

    setDocuments((prev) => [intakeDoc, ...prev]);
    setPage("dashboard");
  }

  // =====================================================
  // SPEECH RECOGNITION (SARVAM)
  // =====================================================

  async function startSpeechRecognition() {
    if (isListening) {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      return;
    }

    try {
      setSpeechError("");

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      audioChunksRef.current = [];

      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstart = () => {
        setIsListening(true);
      };

      recorder.onstop = async () => {
        setIsListening(false);

        stream.getTracks().forEach((track) => track.stop());

        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.webm");
        formData.append("language", form.language);

        try {
          setSpeechError("");

          const response = await fetch(`${API_URL}/api/sarvam/stt`, {
            method: "POST",
            body: formData,
          });

          const data = await response.json();

          if (!response.ok || !data.success) {
            throw new Error(data.error || "Speech recognition failed");
          }

          if (data.transcript) {
            setIntakeData((prev) => ({
              ...prev,
              additionalInformation: prev.additionalInformation.trim()
                ? `${prev.additionalInformation.trim()} ${data.transcript}`
                : data.transcript,
            }));
          }
        } catch (error) {
          console.error("Sarvam STT error:", error);
          setSpeechError(t("speechErrors.convertFailed"));
        }
      };

      mediaRecorderRef.current = recorder;
      recorder.start();

      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
        }
      }, 10000);
    } catch (error) {
      console.error("Microphone error:", error);
      setIsListening(false);

      if (error.name === "NotAllowedError") {
        setSpeechError(t("speechErrors.permissionDenied"));
      } else if (error.name === "NotFoundError") {
        setSpeechError(t("speechErrors.noMicrophone"));
      } else {
        setSpeechError(t("speechErrors.unable"));
      }
    }
  }

  // Stop recording when leaving intake
  useEffect(() => {
    if (page !== "intake" && mediaRecorderRef.current) {
      if (mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      mediaRecorderRef.current = null;
      setIsListening(false);
    }
  }, [page]);

  // =====================================================
  // FILE UPLOAD (PDF & GROQ EXTRACTION)
  // =====================================================

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  }

  async function uploadDocument() {
    if (!selectedFile) return;

    try {
      setExtracting(true);
      setExtractionError("");
      setExtractedData(null);

      const formData = new FormData();
      formData.append("pdf", selectedFile);

      const response = await fetch(`${API_URL}/api/documents/analyze-pdf`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to process document.");
      }

      setExtractedData(data);

      const newDoc = {
        id: Date.now(),
        name: selectedFile.name,
        type: "Medical Document",
        hospital: "Patient Upload",
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        status: "Verified",
        locked: false,
      };

      setDocuments((prev) => [newDoc, ...prev]);
      setSelectedFile(null);
      setShowUpload(false);
    } catch (error) {
      console.error("Document Extraction Error:", error);
      setExtractionError(error.message || "Unable to process document.");
    } finally {
      setExtracting(false);
    }
  }

  // Filter Medical Records
  const filteredDocuments = documents.filter((doc) => {
    const matchSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.hospital.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCat = category === "All" || doc.type === category;

    return matchSearch && matchCat;
  });

  // Body System Icon Helper
  function renderSystemIcon(iconName, size = 22) {
    switch (iconName) {
      case "Activity":
        return <Activity size={size} />;
      case "Wind":
        return <Wind size={size} />;
      case "Brain":
        return <Brain size={size} />;
      case "UtensilsCrossed":
        return <UtensilsCrossed size={size} />;
      case "Bone":
        return <Bone size={size} />;
      case "Sparkles":
        return <Sparkles size={size} />;
      case "Droplets":
        return <Droplets size={size} />;
      case "ShieldAlert":
      default:
        return <ShieldAlert size={size} />;
    }
  }

  function getSeverityClass(score) {
    if (score <= 3) return "severity-badge-mild";
    if (score <= 6) return "severity-badge-moderate";
    return "severity-badge-severe";
  }

  function getSeverityLabel(score) {
    if (score <= 3) return t("intakeFlow.severityMinimal");
    if (score <= 6) return t("intakeFlow.severityModerate");
    return t("intakeFlow.severitySevere");
  }

  // Tri-state Yes/No/Not sure helper
  const YES_NO_OPTIONS = [
    { id: "no",       labelKey: "intakeFlow.no" },
    { id: "yes",      labelKey: "intakeFlow.yes" },
    { id: "not_sure", labelKey: "intakeFlow.notSure" },
  ];

  useEffect(() => {
    const paths = { login: "/login", register: "/register", otp: "/otp", "profile-setup": "/profile-setup", dashboard: "/dashboard" };
    if (paths[page]) window.history.replaceState(null, "", paths[page]);
  }, [page]);

  if (["login", "register", "otp", "profile-setup"].includes(page)) {
    const isLogin = page === "login";
    return (
      <div className="auth-page">
        <nav className="navbar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>X</span></span></div><LanguageSwitcher setForm={setForm} /></nav>
        <main className="auth-card">
          <span className="auth-prototype">{t("auth.prototype")}</span>
          {isLogin && <>
            <h1>{t("auth.welcome")}</h1>
            <div className="auth-field"><label>{t("auth.identityType")}</label><div className="auth-type-toggle">
              {["abha", "aadhaar"].map((type) => <button type="button" key={type} className={authForm.identityType === type ? "active" : ""} onClick={() => updateAuthField("identityType", type)}>{t(`auth.${type}`)}</button>)}
            </div></div>
            <div className="auth-field"><label>{t(`auth.${authForm.identityType}`)}</label><input value={authForm.identity} onChange={(e) => updateAuthField("identity", e.target.value)} placeholder={t(authForm.identityType === "abha" ? "auth.enterAbha" : "auth.enterAadhaar")} /></div>
            <div className="auth-field"><label>{t("auth.password")}</label><input type="password" value={authForm.password} onChange={(e) => updateAuthField("password", e.target.value)} placeholder={t("auth.enterPassword")} /></div>
            {authError && <p className="auth-error">{authError}</p>}
            <button className="btn-primary auth-submit" onClick={() => signIn()}>{t("auth.login")}<ArrowRight size={16} /></button>
            <div className="demo-auth"><strong>{t("auth.demoAccount")}</strong><span>{t("auth.demoAbha")}</span><span>{t("auth.demoPassword")}</span><button type="button" className="btn-secondary" onClick={() => signIn(true)}>{t("auth.useDemo")}</button></div>
            <p className="auth-switch">{t("auth.newToMedx")} <button type="button" onClick={() => { setAuthError(""); setPage("register"); }}>{t("auth.createAccount")}</button></p>
          </>}
          {page === "register" && <>
            <h1>{t("auth.createTitle")}</h1><p>{t("auth.createSubtitle")}</p>
            <div className="auth-field"><label>{t("auth.mobile")}</label><input type="tel" value={authForm.mobile} onChange={(e) => updateAuthField("mobile", e.target.value)} placeholder="+91 0000000000" /></div>
            {authError && <p className="auth-error">{authError}</p>}<button className="btn-primary auth-submit" onClick={sendOtp}>{t("auth.sendOtp")}<ArrowRight size={16} /></button>
          </>}
          {page === "otp" && <>
            <h1>{t("auth.verifyTitle")}</h1><p>{t("auth.verifySubtitle")}</p><p className="demo-otp">{t("auth.demoOtp")}</p>
            <div className="auth-field"><label>{t("auth.enterOtp")}</label><input inputMode="numeric" maxLength="6" value={authForm.otp} onChange={(e) => updateAuthField("otp", e.target.value)} /></div>
            {authError && <p className="auth-error">{authError}</p>}<button className="btn-primary auth-submit" onClick={verifyOtp}>{t("auth.verifyOtp")}</button><button type="button" className="auth-link" onClick={sendOtp}>{t("auth.resendOtp")}</button>
          </>}
          {page === "profile-setup" && <>
            <h1>{t("auth.profileTitle")}</h1><p className="verified-line"><Check size={16} /> {t("auth.mobileVerified")}</p>
            <div className="auth-field"><label>{t("auth.fullName")}</label><input value={authForm.profileName} onChange={(e) => updateAuthField("profileName", e.target.value)} /></div>
            <div className="auth-field"><label>{t("auth.demoAbhaField")}</label><input value={authForm.abhaId} onChange={(e) => updateAuthField("abhaId", e.target.value)} /></div>
            <div className="field-row"><div className="auth-field"><label>{t("auth.dateOfBirth")}</label><input type="date" value={authForm.dateOfBirth} onChange={(e) => updateAuthField("dateOfBirth", e.target.value)} /></div><div className="auth-field"><label>{t("gender")}</label><select value={authForm.gender} onChange={(e) => updateAuthField("gender", e.target.value)}><option value="">{t("genderOptions.select")}</option><option value="Female">{t("genderOptions.female")}</option><option value="Male">{t("genderOptions.male")}</option></select></div></div>
            {authError && <p className="auth-error">{authError}</p>}<button className="btn-primary auth-submit" onClick={createProfile}>{t("auth.createProfile")}</button>
          </>}
          <div className="auth-privacy"><ShieldCheck size={15} />{t("auth.privacy")}</div>
        </main>
      </div>
    );
  }

  if (page === "dashboard") {
    const selectedSystem = BODY_SYSTEMS.find((system) => system.id === intakeData.bodySystem);
    const systemColor = SYSTEM_COLORS[intakeData.bodySystem] || SYSTEM_COLORS.general;
    const hasIntake = Boolean(intakeData.bodySystem || intakeData.symptoms.length);
    const dashboardDocuments = intakeDocuments.length ? intakeDocuments : documents.map((document) => ({ ...document, status: "processed" }));
    return (
      <div className="dashboard-page">
        <aside className="dashboard-sidebar"><div className="logo"><div className="logo-icon"><HeartPulse size={20} /></div><span>Med<span>X</span></span></div><nav>
          <button className="active"><LayoutDashboard size={18} />{t("auth.dashboard")}</button><button onClick={() => document.getElementById("dashboard-documents")?.scrollIntoView({ behavior: "smooth" })}><FileText size={18} />{t("auth.medicalDocuments")}</button><button onClick={() => setPage("records")}><ClipboardList size={18} />{t("medicalRecords")}</button><button onClick={() => setPage("profile-setup")}><UserRound size={18} />{t("auth.profile")}</button><button onClick={() => { setAuthenticatedUser(null); setPage("login"); }}><LogOut size={18} />{t("auth.logout")}</button>
        </nav></aside>
        <main className="dashboard-main"><header className="dashboard-header"><div><span className="section-label">{authenticatedUser?.demo && t("auth.demoData")}</span><h1>{t("auth.greeting")}, {authenticatedUser?.name}</h1><p>{t("auth.abha")}: {maskAbha(authenticatedUser?.abhaId)}</p></div><LanguageSwitcher setForm={setForm} /></header>
          <section className="assessment-cta"><div><h2>{t("auth.startAssessment")}</h2><p>{t("auth.startAssessmentSubtitle")}</p></div><button className="btn-primary" onClick={() => { setIntakeStep(1); setPage("intake"); }}><span>+</span>{t("auth.startAssessmentButton")}</button></section>
          <section><h2>{t("auth.healthOverview")}</h2><div className="overview-grid"><div><span>{t("auth.currentSymptoms")}</span><strong>{intakeData.symptoms.length} {t("auth.recorded")}</strong></div><div><span>{t("auth.documentsUploaded")}</span><strong>{dashboardDocuments.length} {t("auth.recorded")}</strong></div><div><span>{t("auth.historyAvailable")}</span><strong>{hasIntake ? t("auth.available") : t("auth.noHealthInformation")}</strong></div><div><span>{t("auth.latestSummary")}</span><strong>{clinicalSummary ? t("auth.updatedToday") : t("auth.notProvided")}</strong></div></div></section>
          <section className="dashboard-section recent-assessment"><h2>{t("auth.recentAssessment")}</h2>{hasIntake ? <div className="recent-assessment-grid"><div><span>{t("intakeFlow.bodySystem")}</span><strong>{selectedSystem ? t(selectedSystem.titleKey) : intakeData.bodySystem}</strong></div><div><span>{t("auth.mainSymptoms")}</span><strong>{intakeData.symptoms.map(getSymptomLabel).join(", ") || t("intakeFlow.notReported")}</strong></div><div><span>{t("intakeFlow.reviewSeverity")}</span><strong>{intakeData.severity}/10</strong></div><div><span>{t("auth.assessmentDate")}</span><strong>{new Date().toLocaleDateString()}</strong></div><div><span>{t("auth.status")}</span><strong className="assessment-status">{t("auth.completed")}</strong></div></div> : <p>{t("auth.noRecentAssessment")}</p>}</section>
          <section className="dashboard-section ai-dashboard"><h2>{t("auth.aiSummary")}</h2><span className="source-badge ai">{t("auth.aiGenerated")}</span><p>{t("auth.aiDisclaimer")}</p>{clinicalSummary ? <div className="clinical-summary-grid"><div><span>{t("intakeFlow.chiefConcern")}</span><strong>{clinicalSummary.chief_concern}</strong></div><div><span>{t("intakeFlow.historyOfPresentIllness")}</span><strong>{clinicalSummary.history_of_present_illness}</strong></div><div><span>{t("intakeFlow.reviewSymptoms")}</span><strong>{clinicalSummary.reported_symptoms?.join(", ") || intakeData.symptoms.map(getSymptomLabel).join(", ")}</strong></div><div><span>{t("intakeFlow.reviewSeverityProgression")}</span><strong>{clinicalSummary.severity} · {clinicalSummary.duration} · {clinicalSummary.symptom_progression}</strong></div><div><span>{t("intakeFlow.reviewMedConditions")}</span><strong>{clinicalSummary.relevant_medical_history}</strong></div><div><span>{t("intakeFlow.reviewMedications")}</span><strong>{clinicalSummary.current_medications}</strong></div><div><span>{t("intakeFlow.reviewAllergies")}</span><strong>{clinicalSummary.allergies}</strong></div><div><span>{t("intakeFlow.documentDerivedInformation")}</span><strong>{clinicalSummary.document_derived_information || t("auth.noDocuments")}</strong></div><div><span>{t("intakeFlow.additionalNotes")}</span><strong>{clinicalSummary.additional_information || t("intakeFlow.notReported")}</strong></div></div> : <p>{t("auth.noHealthInformation")}</p>}</section>
          <section className="dashboard-section"><div className="section-heading"><h2>{t("auth.healthInformation")}</h2><button className="btn-secondary" onClick={() => { setIntakeStep(1); setPage("intake"); }}>{t("auth.editHealthInformation")}</button></div>{hasIntake ? <div className="dashboard-info-grid"><article style={{ borderColor: systemColor.border }}><h3>{t("intakeFlow.bodySystem")}</h3><strong>{selectedSystem ? t(selectedSystem.titleKey) : intakeData.bodySystem}</strong><span className="source-badge patient">{t("auth.patientReported")}</span></article><article><h3>{t("auth.symptoms")}</h3><div className="review-symptoms-list">{intakeData.symptoms.map((id) => <span key={id} className="review-symptom-tag">{getSymptomLabel(id)}</span>)}</div><span className="source-badge patient">{t("auth.patientReported")}</span></article><article><h3>{t("auth.severityDuration")}</h3><p>{intakeData.severity}/10 · {getDurationLabel(intakeData.duration)} · {getProgressionLabel(intakeData.progression)}</p><span className="source-badge patient">{t("auth.patientReported")}</span></article><article><h3>{t("auth.medicalHistory")}</h3><p>{intakeData.medicalConditionsText || t("intakeFlow.notReported")}</p><p>{intakeData.medicationsText || t("intakeFlow.notReported")}</p><p>{intakeData.allergiesText || t("intakeFlow.notReported")}</p><span className="source-badge patient">{t("auth.patientReported")}</span></article><article><h3>{t("auth.additionalRemarks")}</h3><p>{intakeData.additionalInformation || t("intakeFlow.notReported")}</p><span className="source-badge patient">{t("auth.patientReported")}</span></article></div> : <p>{t("auth.noHealthInformation")}</p>}</section>
          <section className="dashboard-section" id="dashboard-documents"><h2>{t("auth.medicalDocuments")}</h2>{dashboardDocuments.length ? <div className="dashboard-documents">{dashboardDocuments.map((doc) => <article key={doc.id}><FileText size={20} /><div><strong>{doc.name}</strong><span>{doc.type}</span></div><span className="source-badge document">{doc.status === "processed" || doc.status === "Verified" ? t("auth.processed") : doc.status === "failed" ? t("auth.failed") : t("auth.processing")}</span></article>)}</div> : <p>{t("auth.noDocuments")}</p>}</section>
          <section className="dashboard-section"><h2>{t("auth.informationFromDocuments")}</h2><span className="source-badge document">{t("auth.fromDocument")}</span><p>{clinicalSummary?.document_derived_information || (dashboardDocuments.length ? t("auth.documentsUploaded") : t("auth.noDocuments"))}</p></section>
          <section className="dashboard-section"><h2>{t("auth.recentActivity")}</h2><p>{t("auth.assessmentSaved")}</p></section>
        </main>
      </div>
    );
  }

  // =====================================================
  // 1. WELCOME PAGE
  // =====================================================

  if (page === "welcome") {
    return (
      <div className="welcome-page">
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <HeartPulse size={20} />
            </div>
            <span>
              Med<span>X</span>
            </span>
          </div>

          <div className="nav-right">
            <LanguageSwitcher setForm={setForm} />
            <div className="secure-badge">
              <ShieldCheck size={15} />
              {t("secure")}
            </div>
          </div>
        </nav>

        <div className="welcome-hero">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="hero-chip">
                <span className="hero-chip-dot" />
                <div className="badge">
                  <span>●</span>
                  {t("aiHealthcare")}
                </div>
              </div>

              <h1>
                {t("yourHealth")}
                <br />
                {t("yourRecords")}
                <br />
                <span>{t("onePlace")}</span>
              </h1>

              <p>{t("description")}</p>

              <div className="hero-stats">
                <div className="stat-chip">
                  <strong>2.4k+</strong>
                  <span>{t("patients")}</span>
                </div>
                <div className="stat-chip">
                  <strong>98%</strong>
                  <span>{t("accuracy")}</span>
                </div>
                <div className="stat-chip">
                  <strong>3 min</strong>
                  <span>{t("avgIntake")}</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-circle">
                <div className="hero-icon-inner">
                  <HeartPulse size={52} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-roles">
          <div className="roles-title">
            <h2>{t("whoAreYouToday")}</h2>
            <p>{t("selectRole")}</p>
          </div>

          <div className="role-container">
            <button
              className="role-card"
              onClick={() => setPage("registration")}
            >
              <div className="role-icon">
                <HeartPulse size={28} />
              </div>
              <div className="role-text">
                <span className="role-label">{t("patient")}</span>
                <h2>{t("imPatient")}</h2>
                <p>{t("patientDescription")}</p>
              </div>
              <div className="arrow">
                <ArrowRight size={18} />
              </div>
            </button>

            <button className="role-card doctor-card">
              <div className="role-icon">
                <ShieldCheck size={28} />
              </div>
              <div className="role-text">
                <span className="role-label">
                  {t("healthcareProfessional")}
                </span>
                <h2>{t("imDoctor")}</h2>
                <p>{t("doctorDescription")}</p>
              </div>
              <div className="arrow">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>

          <div className="privacy-note">
            <ShieldCheck size={15} />
            {t("privacyNote")}
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // 2. REGISTRATION PAGE
  // =====================================================

  if (page === "registration") {
    return (
      <div className="registration-page">
        <Navbar
          setForm={setForm}
          showBack={true}
          onBack={() => setPage("welcome")}
        />

        <main className="registration-container">
          <button className="back-button" onClick={() => setPage("welcome")}>
            <ArrowLeft size={15} />
            {t("back")}
          </button>

          <div className="progress-area">
            <div className="progress-steps">
              <div className="step-item">
                <div className="step-circle active">1</div>
                <span className="step-label active">{t("profile")}</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <div className="step-circle">2</div>
                <span className="step-label">{t("healthIntake")}</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <div className="step-circle">3</div>
                <span className="step-label">{t("records")}</span>
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-header">
              <div className="badge">
                <span>●</span>
                {t("letsGetStarted")}
              </div>
              <h2>{t("tellUsAboutYourself")}</h2>
              <p>{t("basicDetailsDescription")}</p>
            </div>

            <div className="form-body">
              {/* NAME */}
              <div className="field-group">
                <label htmlFor="reg-name">{t("name")}</label>
                <input
                  id="reg-name"
                  type="text"
                  placeholder={t("placeholders.fullName")}
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
              </div>

              {/* AGE & GENDER */}
              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="reg-age">{t("age")}</label>
                  <input
                    id="reg-age"
                    type="number"
                    placeholder={t("placeholders.age")}
                    value={form.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    className={errors.age ? "input-error" : ""}
                  />
                  {errors.age && (
                    <span className="error-text">{errors.age}</span>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor="reg-gender">{t("gender")}</label>
                  <select
                    id="reg-gender"
                    value={form.gender}
                    onChange={(e) => updateField("gender", e.target.value)}
                    className={errors.gender ? "input-error" : ""}
                  >
                    <option value="">{t("genderOptions.select")}</option>
                    <option value="Male">{t("genderOptions.male")}</option>
                    <option value="Female">{t("genderOptions.female")}</option>
                    <option value="Other">{t("genderOptions.other")}</option>
                    <option value="Prefer not to say">
                      {t("genderOptions.preferNotToSay")}
                    </option>
                  </select>
                  {errors.gender && (
                    <span className="error-text">{errors.gender}</span>
                  )}
                </div>
              </div>

              {/* PHONE */}
              <div className="field-group">
                <label htmlFor="reg-phone">{t("phoneNumber")}</label>
                <input
                  id="reg-phone"
                  type="tel"
                  placeholder={t("placeholders.mobile")}
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>

              <button className="continue-button" onClick={continueToIntake}>
                {t("continueToHealthIntake")}
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="form-security">
              <ShieldCheck size={14} />
              {t("formSecurity")}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // =====================================================
  // 3. STRUCTURED 6-STEP CLINICAL INTAKE
  // =====================================================

  if (page === "intake") {
    const selectedSystemObj = BODY_SYSTEMS.find(
      (s) => s.id === intakeData.bodySystem
    );
    const availableSymptoms = selectedSystemObj
      ? selectedSystemObj.symptoms
      : [];
    const filteredSymptoms = availableSymptoms.filter((s) =>
      t(s.key).toLowerCase().includes(symptomSearch.toLowerCase().trim())
    );

    return (
      <div className="intake-page">
        <Navbar
          setForm={setForm}
          showBack={true}
          onBack={() => {
            if (intakeStep > 1 && intakeStep !== 6) {
              setIntakeStep((prev) => prev - 1);
            } else {
              setPage(authenticatedUser ? "dashboard" : "login");
            }
          }}
        />

        <main className="structured-intake-wrapper">
          {/* 6-Step Visible Progress Indicator */}
          <IntakeProgress
            currentStep={intakeStep}
            onStepClick={(targetStep) => {
              if (targetStep < intakeStep && intakeStep !== 6) {
                setIntakeStep(targetStep);
              }
            }}
          />

          <div className="intake-step-card">
            {/* ===================================================
                STEP 1: BODY SYSTEM
                =================================================== */}
            {intakeStep === 1 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge1")}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step1Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step1Subtitle")}
                  </p>
                </div>

                <div className="body-systems-grid">
                  {BODY_SYSTEMS.map((system) => {
                    const isSelected = intakeData.bodySystem === system.id;
                    const colors = SYSTEM_COLORS[system.color] || SYSTEM_COLORS.general;
                    return (
                      <div
                        key={system.id}
                        className={`system-card system-card--${system.color} ${isSelected ? "selected" : ""}`}
                        onClick={() => handleSelectSystem(system.id)}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            handleSelectSystem(system.id);
                          }
                        }}
                        style={{
                          "--sys-bg": colors.bg,
                          "--sys-icon-bg": colors.iconBg,
                          "--sys-border": colors.border,
                          "--sys-text": colors.text,
                          "--sys-light": colors.light,
                        }}
                      >
                        <div className="system-icon-wrap">
                          {renderSystemIcon(system.icon)}
                        </div>
                        <h3 className="system-card-title">{t(system.titleKey)}</h3>
                        <p className="system-card-desc">{t(system.descKey)}</p>
                        {isSelected && (
                          <div className="system-card-check">
                            <Check size={14} strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setPage("registration")}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    disabled={!intakeData.bodySystem}
                    onClick={() => setIntakeStep(2)}
                  >
                    {t("continue")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 2: SYMPTOMS SELECTION
                =================================================== */}
            {intakeStep === 2 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge2")}{" "}
                    {selectedSystemObj ? `· ${t(selectedSystemObj.titleKey)}` : ""}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step2Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step2Subtitle")}
                  </p>
                </div>

                {/* Search */}
                <div className="symptom-search-box">
                  <Search size={18} className="symptom-search-icon" />
                  <input
                    type="text"
                    className="symptom-search-input"
                    placeholder={t("intakeFlow.searchSymptomsPlaceholder")}
                    value={symptomSearch}
                    onChange={(e) => setSymptomSearch(e.target.value)}
                    aria-label={t("intakeFlow.searchSymptomsPlaceholder")}
                  />
                </div>

                {/* Selected Chips */}
                {intakeData.symptoms.length > 0 && (
                  <div className="selected-symptoms-chips">
                    <span className="selected-chips-label">
                      {t("intakeFlow.selectedCount", {
                        count: intakeData.symptoms.length,
                      })}
                      :
                    </span>
                    {intakeData.symptoms.map((symId) => (
                      <button
                        type="button"
                        key={symId}
                        className="symptom-tag-pill"
                        onClick={() => toggleSymptom(symId)}
                        aria-label={`${t("intakeFlow.remove")} ${getSymptomLabel(symId)}`}
                      >
                        {getSymptomLabel(symId)} <X size={12} />
                      </button>
                    ))}
                  </div>
                )}

                {/* Available Symptoms Grid */}
                <div className="symptoms-selector-grid">
                  {filteredSymptoms.map((sym) => {
                    const isSelected = intakeData.symptoms.includes(sym.id);
                    return (
                      <button
                        type="button"
                        key={sym.id}
                        className={`symptom-chip-btn ${isSelected ? "selected" : ""}`}
                        onClick={() => toggleSymptom(sym.id)}
                        aria-pressed={isSelected}
                      >
                        <span>{t(sym.key)}</span>
                        {isSelected && <Check size={14} />}
                      </button>
                    );
                  })}

                  {filteredSymptoms.length === 0 && (
                    <div className="symptoms-empty-msg">
                      {t("intakeFlow.noSymptomsFound")}
                    </div>
                  )}
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIntakeStep(1)}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    disabled={intakeData.symptoms.length === 0}
                    onClick={() => setIntakeStep(3)}
                  >
                    {t("continue")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 3: SEVERITY & DURATION
                =================================================== */}
            {intakeStep === 3 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge3")}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step3Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step3Subtitle")}
                  </p>
                </div>

                {/* Section 1: Severity Slider */}
                <div className="severity-box">
                  <div className="severity-header-row">
                    <span className="severity-title">
                      {t("intakeFlow.severityQuestion")}
                    </span>
                    <span
                      className={`severity-score-badge ${getSeverityClass(
                        intakeData.severity
                      )}`}
                    >
                      {intakeData.severity} / 10 · {getSeverityLabel(intakeData.severity)}
                    </span>
                  </div>

                  <input
                    type="range"
                    id="severity-slider"
                    min="1"
                    max="10"
                    step="1"
                    value={intakeData.severity}
                    onChange={(e) =>
                      updateIntakeField("severity", Number(e.target.value))
                    }
                    className="severity-slider"
                    aria-label={t("intakeFlow.severityQuestion")}
                    aria-valuenow={intakeData.severity}
                    aria-valuemin={1}
                    aria-valuemax={10}
                  />

                  <div className="severity-scale-ticks">
                    <span>1 ({t("intakeFlow.severityMinimal")})</span>
                    <span>5 ({t("intakeFlow.severityModerate")})</span>
                    <span>10 ({t("intakeFlow.severitySevere")})</span>
                  </div>
                </div>

                {/* Section 2: Duration */}
                <div className="duration-section">
                  <h3 className="section-subheading">
                    {t("intakeFlow.durationQuestion")}
                  </h3>
                  <div className="options-pill-grid">
                    {DURATION_OPTIONS.map((dur) => (
                      <button
                        type="button"
                        key={dur.id}
                        className={`option-pill-btn ${
                          intakeData.duration === dur.id ? "selected" : ""
                        }`}
                        onClick={() => updateIntakeField("duration", dur.id)}
                        aria-pressed={intakeData.duration === dur.id}
                      >
                        {t(dur.key)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 3: Progression */}
                <div className="progression-section">
                  <h3 className="section-subheading">
                    {t("intakeFlow.progressionQuestion")}
                  </h3>
                  <div className="options-pill-grid">
                    {PROGRESSION_OPTIONS.map((prog) => (
                      <button
                        type="button"
                        key={prog.id}
                        className={`option-pill-btn ${
                          intakeData.progression === prog.id ? "selected" : ""
                        }`}
                        onClick={() => updateIntakeField("progression", prog.id)}
                        aria-pressed={intakeData.progression === prog.id}
                      >
                        {t(prog.key)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIntakeStep(2)}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    disabled={!intakeData.duration || !intakeData.progression}
                    onClick={() => setIntakeStep(4)}
                  >
                    {t("continue")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 4: CLINICAL CONTEXT & HISTORY
                =================================================== */}
            {intakeStep === 4 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge4")}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step4Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step4Subtitle")}
                  </p>
                </div>

                {/* Question A: Medical Conditions */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.conditionsQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.conditionsQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.medicalConditionsHas === opt.id ? "active" : ""
                        }`}
                        onClick={() =>
                          updateIntakeField("medicalConditionsHas", opt.id)
                        }
                        aria-pressed={intakeData.medicalConditionsHas === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                  {intakeData.medicalConditionsHas === "yes" && (
                    <input
                      type="text"
                      className="conditional-text-input"
                      placeholder={t("intakeFlow.specifyPlaceholder")}
                      value={intakeData.medicalConditionsText}
                      onChange={(e) =>
                        updateIntakeField("medicalConditionsText", e.target.value)
                      }
                      aria-label={t("intakeFlow.specifyPlaceholder")}
                    />
                  )}
                </div>

                {/* Question B: Medications */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.medicationsQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.medicationsQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.medicationsHas === opt.id ? "active" : ""
                        }`}
                        onClick={() =>
                          updateIntakeField("medicationsHas", opt.id)
                        }
                        aria-pressed={intakeData.medicationsHas === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                  {intakeData.medicationsHas === "yes" && (
                    <input
                      type="text"
                      className="conditional-text-input"
                      placeholder={t("intakeFlow.specifyPlaceholder")}
                      value={intakeData.medicationsText}
                      onChange={(e) =>
                        updateIntakeField("medicationsText", e.target.value)
                      }
                      aria-label={t("intakeFlow.specifyPlaceholder")}
                    />
                  )}
                </div>

                {/* Question C: Allergies */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.allergiesQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.allergiesQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.allergiesHas === opt.id ? "active" : ""
                        }`}
                        onClick={() => updateIntakeField("allergiesHas", opt.id)}
                        aria-pressed={intakeData.allergiesHas === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                  {intakeData.allergiesHas === "yes" && (
                    <input
                      type="text"
                      className="conditional-text-input"
                      placeholder={t("intakeFlow.specifyPlaceholder")}
                      value={intakeData.allergiesText}
                      onChange={(e) =>
                        updateIntakeField("allergiesText", e.target.value)
                      }
                      aria-label={t("intakeFlow.specifyPlaceholder")}
                    />
                  )}
                </div>

                {/* Question D: Previous Similar Symptoms */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.previousSimilarQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.previousSimilarQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.previousSimilar === opt.id ? "active" : ""
                        }`}
                        onClick={() =>
                          updateIntakeField("previousSimilar", opt.id)
                        }
                        aria-pressed={intakeData.previousSimilar === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question E: Recent Injury / Surgery */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.injuryQuestion")}
                  </p>
                  <div className="tri-state-group" role="group" aria-label={t("intakeFlow.injuryQuestion")}>
                    {YES_NO_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`tri-state-btn ${
                          intakeData.recentInjuryHas === opt.id ? "active" : ""
                        }`}
                        onClick={() =>
                          updateIntakeField("recentInjuryHas", opt.id)
                        }
                        aria-pressed={intakeData.recentInjuryHas === opt.id}
                      >
                        {t(opt.labelKey)}
                      </button>
                    ))}
                  </div>
                  {intakeData.recentInjuryHas === "yes" && (
                    <input
                      type="text"
                      className="conditional-text-input"
                      placeholder={t("intakeFlow.specifyPlaceholder")}
                      value={intakeData.recentInjuryText}
                      onChange={(e) =>
                        updateIntakeField("recentInjuryText", e.target.value)
                      }
                      aria-label={t("intakeFlow.specifyPlaceholder")}
                    />
                  )}
                </div>

                {/* Question F: Additional Notes with Microphone */}
                <div className="context-question-card">
                  <p className="context-question-title">
                    {t("intakeFlow.additionalQuestion")}
                  </p>
                  <div className="notes-input-wrapper">
                    <label htmlFor="additional-notes" className="sr-only">
                      {t("intakeFlow.additionalQuestion")}
                    </label>
                    <textarea
                      id="additional-notes"
                      className="notes-textarea"
                      placeholder={t("intakeFlow.additionalPlaceholder")}
                      value={intakeData.additionalInformation}
                      onChange={(e) =>
                        updateIntakeField("additionalInformation", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className={`notes-mic-button ${isListening ? "listening" : ""}`}
                      title={
                        isListening
                          ? t("voice.stopListening")
                          : t("voice.input")
                      }
                      aria-label={
                        isListening
                          ? t("voice.stopListening")
                          : t("voice.input")
                      }
                      onClick={startSpeechRecognition}
                    >
                      <Mic size={18} />
                    </button>
                  </div>
                  {isListening && (
                    <div className="listening-indicator">
                      <span className="speech-dot" /> {t("listening")}
                    </div>
                  )}
                  {speechError && (
                    <div className="speech-error" style={{ marginTop: 8 }}>
                      {speechError}
                    </div>
                  )}
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIntakeStep(3)}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setIntakeStep(5)}
                  >
                    {t("continue")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 5: MEDICAL DOCUMENTS
                =================================================== */}
            {intakeStep === 5 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">{t("intakeFlow.stepBadge5")}</span>
                  <h1 className="intake-step-title">{t("intakeFlow.documentsTitle")}</h1>
                  <p className="intake-step-subtitle">{t("intakeFlow.documentsSubtitle")}</p>
                </div>

                <label className="intake-document-dropzone">
                  <Upload size={26} />
                  <strong>{t("intakeFlow.selectFiles")}</strong>
                  <span>{t("intakeFlow.documentsFormats")}</span>
                  <input
                    type="file"
                    accept=".pdf,image/jpeg,image/png"
                    multiple
                    onChange={(event) => {
                      addIntakeDocuments(event.target.files);
                      event.target.value = "";
                    }}
                  />
                </label>

                {intakeDocuments.length > 0 && (
                  <div className="intake-document-list">
                    {intakeDocuments.map((document) => (
                      <div className={`intake-document-card ${document.status}`} key={document.id}>
                        <FileText size={20} />
                        <div className="intake-document-meta">
                          <strong>{document.name}</strong>
                          <span>{document.type.replace("image/", "").toUpperCase()} · {formatFileSize(document.size)}</span>
                          <span className="intake-document-status">
                            {document.status === "processing" && t("intakeFlow.processing")}
                            {document.status === "processed" && t("intakeFlow.processed")}
                            {document.status === "failed" && (document.error || t("intakeFlow.unableToProcess"))}
                          </span>
                        </div>
                        {document.status === "failed" && (
                          <button type="button" className="document-action" onClick={() => processIntakeDocument(document)}>
                            <RotateCcw size={15} /> {t("intakeFlow.retry")}
                          </button>
                        )}
                        <button type="button" className="document-action" onClick={() => removeIntakeDocument(document.id)} aria-label={t("intakeFlow.remove")}>
                          <X size={17} /> <span>{t("intakeFlow.remove")}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="intake-actions-row">
                  <button type="button" className="btn-secondary" onClick={() => setIntakeStep(4)}>
                    <ArrowLeft size={16} />{t("back")}
                  </button>
                  <div className="intake-document-continue-actions">
                    <button type="button" className="btn-secondary" onClick={runAiAnalysis} disabled={intakeDocuments.some((document) => document.status === "processing")}>
                      {t("intakeFlow.skipForNow")}<ArrowRight size={16} />
                    </button>
                    <button type="button" className="btn-primary" onClick={runAiAnalysis} disabled={intakeDocuments.some((document) => document.status === "processing")}>
                      {t("intakeFlow.continueToAnalysis")}<ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* ===================================================
                STEP 6: AI ANALYSIS
                =================================================== */}
            {intakeStep === 6 && (
              <div className="ai-analyzing-card">
                <div className="ai-documents-included">
                  <strong>{t("intakeFlow.medicalDocumentsIncluded")}</strong>
                  {intakeDocuments.filter((document) => document.status === "processed").length ? (
                    <span>{intakeDocuments.filter((document) => document.status === "processed").map((document) => document.name).join(", ")}</span>
                  ) : (
                    <span>{t("intakeFlow.noMedicalDocuments")}</span>
                  )}
                </div>
                {analyzingIntake ? (
                  <>
                    <div className="ai-pulse-orb">
                      <Sparkles size={36} />
                    </div>
                    <h2 className="ai-analyzing-title">
                      {t("intakeFlow.step6Title")}
                    </h2>
                    <p className="ai-analyzing-desc">
                      {t("intakeFlow.step6Subtitle")}
                    </p>
                    <div className="summary-loading-bar" style={{ marginTop: 30 }}>
                      <div />
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle
                      size={44}
                      color="#f59e0b"
                      style={{ margin: "0 auto 16px" }}
                    />
                    <h2 className="ai-analyzing-title">
                      {t("intakeFlow.analysisFailed")}
                    </h2>
                    <p className="ai-analyzing-desc" style={{ marginBottom: 28 }}>
                      {analysisError ||
                        t("intakeFlow.analysisFailedDesc")}
                    </p>

                    <div className="ai-error-actions">
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={runAiAnalysis}
                      >
                        <RotateCcw size={16} />
                        {t("intakeFlow.retryAnalysis")}
                      </button>

                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => setIntakeStep(6)}
                      >
                        {t("intakeFlow.proceedWithoutAi")}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ===================================================
                STEP 7: REVIEW & CONFIRM
                =================================================== */}
            {intakeStep === 7 && (
              <>
                <div className="intake-step-header">
                  <span className="intake-step-badge">
                    {t("intakeFlow.stepBadge7")}
                  </span>
                  <h1 className="intake-step-title">
                    {t("intakeFlow.step7Title")}
                  </h1>
                  <p className="intake-step-subtitle">
                    {t("intakeFlow.step7Subtitle")}
                  </p>
                </div>

                <div className="review-sections-wrap">
                  {/* PATIENT-PROVIDED INFORMATION */}
                  <div className="review-section-box">
                    <div className="review-box-header">
                      <h3 className="review-box-title">
                        <FileText size={18} color="var(--teal)" />
                        {t("intakeFlow.patientProvidedSection")}
                      </h3>
                      <button
                        type="button"
                        className="edit-step-link"
                        onClick={() => setIntakeStep(1)}
                        aria-label={t("intakeFlow.edit")}
                      >
                        <Edit3 size={13} style={{ marginRight: 4 }} />
                        {t("intakeFlow.edit")}
                      </button>
                    </div>

                    <div className="review-data-grid">
                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewPatient")}</span>
                        <span className="review-val">
                          {form.name} ({form.age}{t("intakeFlow.reviewYears")}, {form.gender})
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewLanguage")}</span>
                        <span className="review-val">{form.language}</span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewBodyArea")}</span>
                        <span className="review-val">
                          {selectedSystemObj ? t(selectedSystemObj.titleKey) : intakeData.bodySystem}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewSeverity")}</span>
                        <span className="review-val">
                          {intakeData.severity} / 10 ({getSeverityLabel(intakeData.severity)})
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewDuration")}</span>
                        <span className="review-val">{getDurationLabel(intakeData.duration)}</span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewProgression")}</span>
                        <span className="review-val">{getProgressionLabel(intakeData.progression)}</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 16 }}>
                      <span className="review-label">{t("intakeFlow.reviewSymptoms")}</span>
                      <div className="review-symptoms-list">
                        {intakeData.symptoms.map((symId) => (
                          <span key={symId} className="review-symptom-tag">
                            {getSymptomLabel(symId)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="review-data-grid" style={{ marginTop: 16 }}>
                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewMedConditions")}</span>
                        <span className="review-val">
                          {intakeData.medicalConditionsHas === "yes"
                            ? intakeData.medicalConditionsText || t("intakeFlow.yes")
                            : t(`intakeFlow.${intakeData.medicalConditionsHas === "no" ? "no" : "notSure"}`)}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewMedications")}</span>
                        <span className="review-val">
                          {intakeData.medicationsHas === "yes"
                            ? intakeData.medicationsText || t("intakeFlow.yes")
                            : t(`intakeFlow.${intakeData.medicationsHas === "no" ? "no" : "notSure"}`)}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewAllergies")}</span>
                        <span className="review-val">
                          {intakeData.allergiesHas === "yes"
                            ? intakeData.allergiesText || t("intakeFlow.yes")
                            : t(`intakeFlow.${intakeData.allergiesHas === "no" ? "no" : "notSure"}`)}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewPrevious")}</span>
                        <span className="review-val">
                          {t(`intakeFlow.${intakeData.previousSimilar === "no" ? "no" : intakeData.previousSimilar === "yes" ? "yes" : "notSure"}`)}
                        </span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">{t("intakeFlow.reviewInjury")}</span>
                        <span className="review-val">
                          {intakeData.recentInjuryHas === "yes"
                            ? intakeData.recentInjuryText || t("intakeFlow.yes")
                            : t(`intakeFlow.${intakeData.recentInjuryHas === "no" ? "no" : "notSure"}`)}
                        </span>
                      </div>

                      {intakeData.additionalInformation && (
                        <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                          <span className="review-label">{t("intakeFlow.reviewAdditional")}</span>
                          <span className="review-val">
                            {intakeData.additionalInformation}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* UPLOADED MEDICAL DOCUMENTS */}
                  <div className="review-section-box">
                    <div className="review-box-header">
                      <h3 className="review-box-title">
                        <Upload size={18} color="var(--teal)" />
                        {t("intakeFlow.uploadedDocumentsSection")}
                      </h3>
                      <button type="button" className="edit-step-link" onClick={() => setIntakeStep(5)}>
                        <Edit3 size={13} style={{ marginRight: 4 }} />{t("intakeFlow.edit")}
                      </button>
                    </div>
                    {intakeDocuments.length ? (
                      <div className="review-document-list">
                        {intakeDocuments.map((document) => (
                          <div className="review-document-item" key={document.id}>
                            <FileText size={16} />
                            <span>{document.name}</span>
                            <span className={`document-status-${document.status}`}>{t(`intakeFlow.${document.status === "processed" ? "processed" : document.status === "failed" ? "failed" : "processing"}`)}</span>
                          </div>
                        ))}
                      </div>
                    ) : <p className="review-val">{t("intakeFlow.noMedicalDocuments")}</p>}
                  </div>

                  {/* AI-GENERATED CLINICAL SUMMARY */}
                  <div className="review-section-box ai-section">
                    <div className="review-box-header ai-header">
                      <h3 className="review-box-title">
                        <Sparkles size={18} color="var(--teal)" />
                        {t("intakeFlow.aiSummarySection")}
                      </h3>
                      <span className="ai-synthesized-badge">
                        {t("intakeFlow.aiSynthesizedBadge")}
                      </span>
                    </div>

                    {clinicalSummary ? (
                      <div>
                        <div className="review-data-grid">
                          <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                            <span className="review-label">{t("intakeFlow.chiefConcern")}</span>
                            <span className="review-val" style={{ fontSize: 16 }}>
                              {clinicalSummary.chief_concern || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                            <span className="review-label">{t("intakeFlow.clinicalPresentation")}</span>
                            <span className="review-val">
                              {clinicalSummary.clinical_presentation || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                            <span className="review-label">{t("intakeFlow.historyOfPresentIllness")}</span>
                            <span className="review-val">
                              {clinicalSummary.history_of_present_illness || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item">
                            <span className="review-label">{t("intakeFlow.reviewMedConditions")}</span>
                            <span className="review-val">
                              {clinicalSummary.relevant_medical_history || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item">
                            <span className="review-label">{t("intakeFlow.reviewMedications")}</span>
                            <span className="review-val">
                              {clinicalSummary.current_medications || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item">
                            <span className="review-label">{t("intakeFlow.reviewAllergies")}</span>
                            <span className="review-val">
                              {clinicalSummary.allergies || t("intakeFlow.notReported")}
                            </span>
                          </div>

                          <div className="review-item" style={{ gridColumn: "1 / -1" }}>
                            <span className="review-label">{t("intakeFlow.documentDerivedInformation")}</span>
                            <span className="review-val">
                              {clinicalSummary.document_derived_information || t("intakeFlow.noMedicalDocuments")}
                            </span>
                          </div>
                        </div>

                        {clinicalSummary.clinician_review_notes && (
                          <div className="clinician-notes-banner">
                            <strong>{t("intakeFlow.clinicianNote")}</strong>{" "}
                            {clinicalSummary.clinician_review_notes}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="ai-summary-skipped">
                        {t("intakeFlow.aiSummarySkipped")}
                      </div>
                    )}
                  </div>
                </div>

                {/* Safety Disclaimer */}
                <div className="summary-notice" style={{ marginBottom: 24 }}>
                  <AlertCircle size={16} />
                  {t("patientHistoryNotice")}
                </div>

                <div className="intake-actions-row">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIntakeStep(5)}
                  >
                    <ArrowLeft size={16} />
                    {t("back")}
                  </button>

                  <button
                    type="button"
                    className="btn-primary"
                    onClick={confirmMedicalHistory}
                  >
                    <Check size={16} />
                    {t("intakeFlow.confirmHistory")}
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    );
  }

  // =====================================================
  // 4. MEDICAL RECORDS PAGE
  // =====================================================

  if (page === "records") {
    return (
      <div className="records-page">
        <Navbar
          setForm={setForm}
          showBack={true}
          onBack={() => {
            if (authenticatedUser) {
              setPage("dashboard");
            } else {
              setPage("intake");
              setIntakeStep(7);
            }
          }}
        />

        <main className="records-container">
          {/* HEADER */}
          <div className="records-header">
            <div>
              <span className="section-label">{t("patientPortal")}</span>
              <h1>{t("medicalRecords")}</h1>
              <p>{t("medicalRecordsDescription")}</p>
            </div>

            <button
              className="upload-main-button"
              onClick={() => setShowUpload(true)}
            >
              <Upload size={16} />
              {t("uploadDocument")}
            </button>
          </div>

          {/* SECURITY */}
          <div className="records-security">
            <div className="security-icon">
              <ShieldCheck size={20} />
            </div>
            <div>
              <strong>{t("recordsProtected")}</strong>
              <p>{t("recordsProtectedDescription")}</p>
            </div>
            <Lock size={18} />
          </div>

          {/* CONTROLS */}
          <div className="records-controls">
            <div className="records-search">
              <Search size={16} />
              <input
                type="text"
                placeholder={t("searchRecords")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label={t("searchRecords")}
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="category-select"
              aria-label={t("categories.all")}
            >
              <option value="All">{t("categories.all")}</option>
              <option value="Clinical Intake">{t("intakeFlow.clinicalIntakeLabel")}</option>
              <option value="Lab Report">{t("categories.labReports")}</option>
              <option value="Prescription">{t("categories.prescriptions")}</option>
              <option value="Discharge">{t("categories.discharge")}</option>
              <option value="Medical Document">{t("categories.other")}</option>
            </select>
          </div>

          {/* COUNT */}
          <div className="records-count">
            <span>
              {filteredDocuments.length} {t("documents")}
            </span>
          </div>

          {/* DOCUMENT LIST */}
          <div className="records-list">
            {filteredDocuments.map((doc) => (
              <div className="record-item" key={doc.id}>
                <div className="record-left">
                  <div className="record-icon">
                    <FileText size={20} />
                  </div>
                  <div className="record-meta">
                    <strong>{doc.name}</strong>
                    <div className="record-sub">
                      <span>{doc.hospital}</span>
                      <span>•</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>

                <div className="record-right">
                  <span className="record-badge">{doc.type}</span>
                  {doc.locked ? (
                    <div className="status-badge status-badge--verified">
                      <Lock size={13} />
                      {t("verified")}
                    </div>
                  ) : (
                    <div className="status-badge status-badge--active">
                      <ShieldCheck size={13} />
                      {t("active")}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {filteredDocuments.length === 0 && (
              <div className="records-empty">
                <FileText size={36} />
                <p>{t("noRecordsFound")}</p>
                <span>{t("noRecordsDescription")}</span>
              </div>
            )}
          </div>

          {/* EXTRACTED DOCUMENT DATA DISPLAY */}
          {extractedData && (
            <div className="extracted-data-card">
              <div className="extracted-header">
                <FileText size={20} />
                <strong>{t("intakeFlow.extractedInfo")}: {extractedData.filename}</strong>
              </div>

              {extractedData.data && (
                <div className="extracted-grid">
                  {extractedData.data.patient && (
                    <div className="extracted-section">
                      <span className="extracted-label">{t("intakeFlow.reviewPatient")}</span>
                      <p>
                        {extractedData.data.patient.name || "N/A"} ·{" "}
                        {extractedData.data.patient.age || "N/A"} ·{" "}
                        {extractedData.data.patient.gender || "N/A"}
                      </p>
                    </div>
                  )}

                  {extractedData.data.symptoms?.length > 0 && (
                    <div className="extracted-section">
                      <span className="extracted-label">{t("intakeFlow.symptoms")}</span>
                      <p>{extractedData.data.symptoms.join(", ")}</p>
                    </div>
                  )}

                  {extractedData.data.vitals &&
                    Object.keys(extractedData.data.vitals).length > 0 && (
                      <div className="extracted-section">
                        <span className="extracted-label">{t("intakeFlow.vitals")}</span>
                        <p>
                          {Object.entries(extractedData.data.vitals)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(", ")}
                        </p>
                      </div>
                    )}
                </div>
              )}
            </div>
          )}
        </main>

        {/* UPLOAD MODAL */}
        {showUpload && (
          <div className="upload-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="upload-modal-title">
            <div className="upload-modal">
              <div className="upload-modal-header">
                <h2 id="upload-modal-title">{t("uploadMedicalDocument")}</h2>
                <button
                  className="close-button"
                  onClick={() => setShowUpload(false)}
                  aria-label={t("intakeFlow.closeModal")}
                >
                  <X size={18} />
                </button>
              </div>

              <p className="upload-description">
                {t("uploadModalDescription")}
              </p>

              <div className="upload-dropzone">
                <Upload size={32} />
                <p>
                  <strong>{t("chooseFile")}</strong>
                </p>
                <span>{t("supportedFormats")}</span>
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  aria-label={t("chooseFile")}
                />
              </div>

              {selectedFile && (
                <div className="selected-file">
                  <FileText size={16} />
                  <span>{selectedFile.name}</span>
                </div>
              )}

              {extracting && (
                <div className="extraction-status">
                  <span className="extraction-spinner" />
                  <span>{t("intakeFlow.processingDoc")}</span>
                </div>
              )}

              {extractionError && (
                <div className="extraction-error">{extractionError}</div>
              )}

              <div className="upload-warning">
                <AlertCircle size={15} />
                {t("uploadVerificationWarning")}
              </div>

              <button
                className="confirm-upload-button"
                onClick={uploadDocument}
                disabled={!selectedFile || extracting}
              >
                <Upload size={16} />
                {t("uploadDocument")}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default App;
