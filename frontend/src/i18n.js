import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { applyIntakeTranslations } from "./data/intakeTranslations.js";

const resources = {
  // =====================================================
  // ENGLISH
  // =====================================================

  en: {
    translation: {
      secure: "Secure",
      aiHealthcare: "AI-POWERED HEALTHCARE",

      yourHealth: "Your Health.",
      yourRecords: "Your Records.",
      onePlace: "One Place.",
      description:
        "MedX brings your health history and medical records together in one secure, intelligent platform.",

      patients: "PATIENTS",
      accuracy: "ACCURACY",
      avgIntake: "AVG INTAKE",

      whoAreYouToday: "Who are you today?",
      selectRole: "Select your role to get started",

      patient: "PATIENT",
      imPatient: "I'm a Patient",
      patientDescription:
        "Record your health history and manage your medical records.",

      healthcareProfessional:
        "HEALTHCARE PROFESSIONAL",
      imDoctor: "I'm a Doctor",
      doctorDescription:
        "Review patient histories and manage clinical records.",

      privacyNote:
        "Your health information is handled with privacy and consent in mind.",

      back: "Back",
      profile: "Profile",
      healthIntake: "Health Intake",
      records: "Records",

      letsGetStarted: "LET'S GET STARTED",
      tellUsAboutYourself:
        "Tell us about yourself",
      basicDetailsDescription:
        "We only need a few basic details before your health intake.",

      name: "Name",
      age: "Age",
      gender: "Gender",
      phoneNumber: "Phone Number",

      placeholders: {
        fullName: "Enter your full name",
        age: "Your age",
        mobile: "10-digit mobile number",
        response:
          "Tell me in your own words...",
      },

      genderOptions: {
        select: "Select gender",
        male: "Male",
        female: "Female",
        other: "Other",
        preferNotToSay:
          "Prefer not to say",
      },

      continueToHealthIntake:
        "Continue to Health Intake",

      formSecurity:
        "Your information will only be used for your healthcare journey.",

      medxAiAssistant: "MedX AI Assistant",

      understandFeeling:
        "Let's understand how you're feeling.",

      answerQuestionsDescription:
        "Answer the questions by selecting an option or typing your response.",

      medxClinicalAssistant:
        "MedX Clinical Assistant",

      onlineAiPowered:
        "Online · AI-powered intake",

      connectionIssue: "Connection issue",
      tryAgain: "Try Again",
      continue: "Continue",

      intake: {
        selectOption:
          "Select one of the options below.",
        selectYesNo:
          "Please select Yes or No.",
        typeOrVoice:
          "Type your response or use voice input.",
      },

      intakeFlow: {
        step1Title: "What area is affected?",
        step1Subtitle: "Select the body system closest to your main concern.",
        step2Title: "What symptoms are you experiencing?",
        step2Subtitle: "Select all symptoms that apply to your condition.",
        searchSymptomsPlaceholder: "Search symptoms (e.g. pain, cough, fever)...",
        noSymptomsFound: "No matching symptoms found.",
        selectedCount: "Selected ({{count}})",
        step3Title: "Severity & Duration",
        step3Subtitle: "Indicate how intense and persistent your symptoms are.",
        severityQuestion: "How severe are your symptoms?",
        severityMinimal: "Minimal / Mild",
        severityModerate: "Moderate",
        severitySevere: "Severe",
        durationQuestion: "How long have you had these symptoms?",
        progressionQuestion: "How are your symptoms progressing?",
        step4Title: "Clinical Context & History",
        step4Subtitle: "Provide brief background details to help the clinical team.",
        conditionsQuestion: "Do you have any existing medical conditions?",
        medicationsQuestion: "Are you currently taking any medications?",
        allergiesQuestion: "Do you have any known allergies?",
        previousSimilarQuestion: "Have you experienced similar symptoms before?",
        injuryQuestion: "Have you recently had an injury or surgery related to this concern?",
        additionalQuestion: "Is there anything else you would like the medical team to know?",
        specifyPlaceholder: "Please specify details...",
        additionalPlaceholder: "Type any extra symptoms or notes, or use microphone...",
        yes: "Yes",
        no: "No",
        notSure: "Not sure",
        step5Title: "Synthesizing Clinical Intake",
        step5Subtitle: "MedX AI is structuring your responses into a clinical summary for medical review...",
        analysisFailed: "AI analysis could not be completed at this time.",
        retryAnalysis: "Retry Analysis",
        proceedWithoutAi: "Proceed to Review with Collected Data",
        step6Title: "Review & Confirm Medical History",
        step6Subtitle: "Please review your reported details and the AI summary before submitting.",
        patientProvidedSection: "Patient-Provided Information",
        aiSummarySection: "AI-Generated Clinical Summary",
        edit: "Edit",
        confirmHistory: "Confirm Medical History",
        patientDetails: "Patient Details",
        bodySystem: "Affected Body System",
        symptoms: "Reported Symptoms",
        severityAndDuration: "Severity, Duration & Progression",
        clinicalBackground: "Medical Background & Context",
        additionalNotes: "Additional Notes",
        chiefConcern: "Chief Concern",
        clinicianReviewNotes: "Clinician Review Notes",
      },

      voice: {
        stopListening: "Stop listening",
        input: "Voice input",
      },

      listening:
        "Listening... Speak now",

      intakeFooter:
        "Your responses are private and reviewed by a healthcare professional.",

      historyReady:
        "Your health history is ready.",

      historyReadyDescription:
        "MedX has organized your information for healthcare professional review.",

      healthIntakeSummary:
        "HEALTH INTAKE SUMMARY",

      patientHistoryNotice:
        "This is a patient-reported history and is not a medical diagnosis. Please consult a licensed healthcare professional.",

      continueToMedicalRecords:
        "Continue to Medical Records",

      patientPortal: "PATIENT PORTAL",
      medicalRecords: "Medical Records",

      medicalRecordsDescription:
        "Your medical history, securely organized in one place.",

      uploadDocument: "Upload Document",

      recordsProtected:
        "Your medical records are protected",

      recordsProtectedDescription:
        "Verified records become read-only and cannot be modified.",

      searchRecords:
        "Search your medical records...",

      categories: {
        all: "All documents",
        labReports: "Lab Reports",
        prescriptions: "Prescriptions",
        discharge: "Discharge Summaries",
        other: "Other Documents",
      },

      documents: "documents",
      allYourRecords: "All your records",

      readOnly: "Read-only",
      pending: "Pending",
      source: "SOURCE",
      date: "DATE",
      verified: "Verified",
      pendingVerification:
        "Pending Verification",
      view: "View",

      noRecordsFound: "No records found",

      noRecordsDescription:
        "Try changing your search or upload a new document.",

      medicalDocument: "MEDICAL DOCUMENT",

      uploadRecord: "Upload a record",

      uploadRecordDescription:
        "Add a previous medical document to your MedX health history.",

      fileSelected:
        "File selected · ready to upload",

      chooseDocument: "Choose a document",

      acceptedFormats:
        "PDF, JPG or PNG accepted",

      uploadVerificationWarning:
        "Uploaded documents will require verification before being marked as verified.",

      errors: {
        enterName: "Please enter your name",
        enterAge: "Please enter your age",
        validAge: "Please enter a valid age",
        selectGender: "Please select your gender",
        enterPhone:
          "Please enter your phone number",
        validPhone:
          "Enter a valid 10-digit number",
      },

      speechErrors: {
        convertFailed:
          "Could not convert your speech to text. Please try again.",

        permissionDenied:
          "Microphone permission denied. Please allow microphone access.",

        noMicrophone:
          "No microphone detected.",

        unable:
          "Unable to access the microphone.",
      },

      aiErrors: {
        timeout:
          "MedX is taking too long to respond. Please check your connection and try again.",

        connection:
          "MedX could not connect to the clinical intake server. Please try again.",
      },
    },
  },

  // =====================================================
  // HINDI
  // =====================================================

  hi: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI-संचालित स्वास्थ्य सेवा",

      yourHealth: "आपका स्वास्थ्य।",
      yourRecords: "आपके रिकॉर्ड।",
      onePlace: "एक ही जगह।",

      description:
        "MedX आपके स्वास्थ्य इतिहास और मेडिकल रिकॉर्ड को एक सुरक्षित और बुद्धिमान प्लेटफ़ॉर्म पर एक साथ लाता है।",

      patients: "मरीज़",
      accuracy: "सटीकता",
      avgIntake: "औसत समय",

      whoAreYouToday: "आज आप कौन हैं?",
      selectRole:
        "शुरू करने के लिए अपनी भूमिका चुनें",

      patient: "मरीज़",
      imPatient: "मैं एक मरीज़ हूँ",

      patientDescription:
        "अपना स्वास्थ्य इतिहास दर्ज करें और अपने मेडिकल रिकॉर्ड प्रबंधित करें।",

      healthcareProfessional:
        "स्वास्थ्य सेवा पेशेवर",

      imDoctor: "मैं डॉक्टर हूँ",

      doctorDescription:
        "मरीज़ों के इतिहास की समीक्षा करें और क्लिनिकल रिकॉर्ड प्रबंधित करें।",

      privacyNote:
        "आपकी स्वास्थ्य जानकारी को गोपनीयता और आपकी सहमति को ध्यान में रखते हुए संभाला जाता है।",

      back: "वापस",
      profile: "प्रोफ़ाइल",
      healthIntake: "स्वास्थ्य जानकारी",
      records: "रिकॉर्ड",

      letsGetStarted: "शुरू करते हैं",

      tellUsAboutYourself:
        "अपने बारे में बताएं",

      basicDetailsDescription:
        "स्वास्थ्य जानकारी शुरू करने से पहले हमें केवल कुछ बुनियादी जानकारी चाहिए।",

      name: "नाम",
      age: "उम्र",
      gender: "लिंग",
      phoneNumber: "फ़ोन नंबर",

      placeholders: {
        fullName: "अपना पूरा नाम दर्ज करें",
        age: "अपनी उम्र",
        mobile: "10 अंकों का मोबाइल नंबर",
        response:
          "अपने शब्दों में बताएं...",
      },

      genderOptions: {
        select: "लिंग चुनें",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        preferNotToSay:
          "बताना पसंद नहीं करेंगे",
      },

      continueToHealthIntake:
        "स्वास्थ्य जानकारी पर जाएं",

      formSecurity:
        "आपकी जानकारी का उपयोग केवल आपकी स्वास्थ्य यात्रा के लिए किया जाएगा।",

      medxAiAssistant:
        "MedX AI सहायक",

      understandFeeling:
        "आइए समझते हैं कि आप कैसा महसूस कर रहे हैं।",

      answerQuestionsDescription:
        "किसी विकल्प को चुनकर या अपना उत्तर लिखकर सवालों का जवाब दें।",

      medxClinicalAssistant:
        "MedX क्लिनिकल सहायक",

      onlineAiPowered:
        "ऑनलाइन · AI-संचालित स्वास्थ्य जानकारी",

      connectionIssue:
        "कनेक्शन की समस्या",

      tryAgain: "फिर कोशिश करें",
      continue: "जारी रखें",

      intake: {
        selectOption:
          "नीचे दिए गए विकल्पों में से एक चुनें।",

        selectYesNo:
          "कृपया हाँ या नहीं चुनें।",

        typeOrVoice:
          "अपना उत्तर लिखें या आवाज़ का उपयोग करें।",
      },

      voice: {
        stopListening: "सुनना बंद करें",
        input: "आवाज़ से इनपुट",
      },

      listening:
        "सुन रहा है... अभी बोलें",

      intakeFooter:
        "आपके उत्तर निजी हैं और स्वास्थ्य सेवा पेशेवर द्वारा समीक्षा किए जाएंगे।",

      historyReady:
        "आपका स्वास्थ्य इतिहास तैयार है।",

      historyReadyDescription:
        "MedX ने आपकी जानकारी को स्वास्थ्य सेवा पेशेवर की समीक्षा के लिए व्यवस्थित कर दिया है।",

      healthIntakeSummary:
        "स्वास्थ्य जानकारी का सारांश",

      patientHistoryNotice:
        "यह मरीज़ द्वारा दी गई स्वास्थ्य जानकारी है और मेडिकल निदान नहीं है। कृपया लाइसेंस प्राप्त स्वास्थ्य सेवा पेशेवर से सलाह लें।",

      continueToMedicalRecords:
        "मेडिकल रिकॉर्ड पर जाएं",

      patientPortal: "मरीज़ पोर्टल",
      medicalRecords: "मेडिकल रिकॉर्ड",

      medicalRecordsDescription:
        "आपका स्वास्थ्य इतिहास सुरक्षित रूप से एक ही जगह व्यवस्थित है।",

      uploadDocument:
        "दस्तावेज़ अपलोड करें",

      recordsProtected:
        "आपके मेडिकल रिकॉर्ड सुरक्षित हैं",

      recordsProtectedDescription:
        "सत्यापित रिकॉर्ड केवल पढ़ने योग्य हो जाते हैं और उनमें बदलाव नहीं किया जा सकता।",

      searchRecords:
        "अपने मेडिकल रिकॉर्ड खोजें...",

      categories: {
        all: "सभी दस्तावेज़",
        labReports: "लैब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "अन्य दस्तावेज़",
      },

      documents: "दस्तावेज़",
      allYourRecords: "आपके सभी रिकॉर्ड",

      readOnly: "केवल पढ़ने योग्य",
      pending: "लंबित",
      source: "स्रोत",
      date: "तारीख",
      verified: "सत्यापित",
      pendingVerification:
        "सत्यापन लंबित",

      view: "देखें",

      noRecordsFound:
        "कोई रिकॉर्ड नहीं मिला",

      noRecordsDescription:
        "अपनी खोज बदलें या नया दस्तावेज़ अपलोड करें।",

      medicalDocument:
        "मेडिकल दस्तावेज़",

      uploadRecord:
        "एक रिकॉर्ड अपलोड करें",

      uploadRecordDescription:
        "अपने MedX स्वास्थ्य इतिहास में पिछला मेडिकल दस्तावेज़ जोड़ें।",

      fileSelected:
        "फ़ाइल चुनी गई · अपलोड के लिए तैयार",

      chooseDocument:
        "एक दस्तावेज़ चुनें",

      acceptedFormats:
        "PDF, JPG या PNG स्वीकार किए जाते हैं",

      uploadVerificationWarning:
        "अपलोड किए गए दस्तावेज़ों को सत्यापित किए जाने से पहले समीक्षा की आवश्यकता होगी।",

      errors: {
        enterName:
          "कृपया अपना नाम दर्ज करें",

        enterAge:
          "कृपया अपनी उम्र दर्ज करें",

        validAge:
          "कृपया सही उम्र दर्ज करें",

        selectGender:
          "कृपया अपना लिंग चुनें",

        enterPhone:
          "कृपया अपना फ़ोन नंबर दर्ज करें",

        validPhone:
          "10 अंकों का सही नंबर दर्ज करें",
      },

      speechErrors: {
        convertFailed:
          "आपकी आवाज़ को टेक्स्ट में बदल नहीं सके। कृपया फिर से प्रयास करें।",

        permissionDenied:
          "माइक्रोफ़ोन की अनुमति नहीं मिली। कृपया माइक्रोफ़ोन की अनुमति दें।",

        noMicrophone:
          "कोई माइक्रोफ़ोन नहीं मिला।",

        unable:
          "माइक्रोफ़ोन तक पहुंच नहीं हो सकी।",
      },

      aiErrors: {
        timeout:
          "MedX प्रतिक्रिया देने में बहुत समय ले रहा है। कृपया अपना कनेक्शन जांचें और फिर कोशिश करें।",

        connection:
          "MedX क्लिनिकल इनटेक सर्वर से कनेक्ट नहीं हो सका। कृपया फिर से प्रयास करें।",
      },
    },
  },

  // =====================================================
  // BENGALI
  // =====================================================

  bn: {
    translation: {
      secure: "নিরাপদ",
      aiHealthcare: "AI-চালিত স্বাস্থ্যসেবা",
      yourHealth: "আপনার স্বাস্থ্য।",
      yourRecords: "আপনার রেকর্ড।",
      onePlace: "এক জায়গায়।",
      description:
        "MedX আপনার স্বাস্থ্য ইতিহাস এবং চিকিৎসা রেকর্ডকে একটি নিরাপদ ও বুদ্ধিমান প্ল্যাটফর্মে একত্রিত করে।",
      patients: "রোগী",
      accuracy: "নির্ভুলতা",
      avgIntake: "গড় সময়",
      whoAreYouToday: "আজ আপনি কে?",
      selectRole: "শুরু করতে আপনার ভূমিকা নির্বাচন করুন",
      patient: "রোগী",
      imPatient: "আমি একজন রোগী",
      patientDescription:
        "আপনার স্বাস্থ্য ইতিহাস রেকর্ড করুন এবং চিকিৎসা রেকর্ড পরিচালনা করুন।",
      healthcareProfessional:
        "স্বাস্থ্যসেবা পেশাদার",
      imDoctor: "আমি একজন ডাক্তার",
      doctorDescription:
        "রোগীর ইতিহাস পর্যালোচনা করুন এবং ক্লিনিক্যাল রেকর্ড পরিচালনা করুন।",
      privacyNote:
        "আপনার স্বাস্থ্য তথ্য গোপনীয়তা ও সম্মতির কথা মাথায় রেখে পরিচালনা করা হয়।",
      back: "পিছনে",
      profile: "প্রোফাইল",
      healthIntake: "স্বাস্থ্য তথ্য",
      records: "রেকর্ড",
      letsGetStarted: "শুরু করা যাক",
      tellUsAboutYourself:
        "আপনার সম্পর্কে বলুন",
      basicDetailsDescription:
        "স্বাস্থ্য তথ্য শুরু করার আগে আমাদের কিছু মৌলিক তথ্য প্রয়োজন।",
      name: "নাম",
      age: "বয়স",
      gender: "লিঙ্গ",
      phoneNumber: "ফোন নম্বর",
      placeholders: {
        fullName: "আপনার পুরো নাম লিখুন",
        age: "আপনার বয়স",
        mobile: "১০ সংখ্যার মোবাইল নম্বর",
        response: "নিজের ভাষায় বলুন...",
      },
      genderOptions: {
        select: "লিঙ্গ নির্বাচন করুন",
        male: "পুরুষ",
        female: "মহিলা",
        other: "অন্যান্য",
        preferNotToSay:
          "বলতে পছন্দ করি না",
      },
      continueToHealthIntake:
        "স্বাস্থ্য তথ্যে যান",
      formSecurity:
        "আপনার তথ্য শুধুমাত্র আপনার স্বাস্থ্যসেবার জন্য ব্যবহার করা হবে।",
      medxAiAssistant: "MedX AI সহকারী",
      understandFeeling:
        "আপনি কেমন অনুভব করছেন তা বুঝে নেওয়া যাক।",
      answerQuestionsDescription:
        "একটি বিকল্প নির্বাচন করে অথবা আপনার উত্তর লিখে প্রশ্নগুলির উত্তর দিন।",
      medxClinicalAssistant:
        "MedX ক্লিনিক্যাল সহকারী",
      onlineAiPowered:
        "অনলাইন · AI-চালিত স্বাস্থ্য তথ্য",
      connectionIssue: "সংযোগ সমস্যা",
      tryAgain: "আবার চেষ্টা করুন",
      continue: "চালিয়ে যান",
      intake: {
        selectOption:
          "নিচের বিকল্পগুলির মধ্যে একটি নির্বাচন করুন।",
        selectYesNo:
          "অনুগ্রহ করে হ্যাঁ অথবা না নির্বাচন করুন।",
        typeOrVoice:
          "আপনার উত্তর লিখুন অথবা ভয়েস ইনপুট ব্যবহার করুন।",
      },
      voice: {
        stopListening: "শোনা বন্ধ করুন",
        input: "ভয়েস ইনপুট",
      },
      listening:
        "শোনা হচ্ছে... এখন কথা বলুন",
      intakeFooter:
        "আপনার উত্তর ব্যক্তিগত এবং একজন স্বাস্থ্যসেবা পেশাদার তা পর্যালোচনা করবেন।",
      historyReady:
        "আপনার স্বাস্থ্য ইতিহাস প্রস্তুত।",
      historyReadyDescription:
        "MedX স্বাস্থ্যসেবা পেশাদারের পর্যালোচনার জন্য আপনার তথ্য সংগঠিত করেছে।",
      healthIntakeSummary:
        "স্বাস্থ্য তথ্যের সারাংশ",
      patientHistoryNotice:
        "এটি রোগীর দেওয়া স্বাস্থ্য ইতিহাস এবং এটি কোনো চিকিৎসা নির্ণয় নয়। একজন লাইসেন্সপ্রাপ্ত স্বাস্থ্যসেবা পেশাদারের পরামর্শ নিন।",
      continueToMedicalRecords:
        "চিকিৎসা রেকর্ডে যান",
      patientPortal: "রোগী পোর্টাল",
      medicalRecords: "চিকিৎসা রেকর্ড",
      medicalRecordsDescription:
        "আপনার স্বাস্থ্য ইতিহাস নিরাপদভাবে এক জায়গায় সংগঠিত।",
      uploadDocument: "ডকুমেন্ট আপলোড করুন",
      recordsProtected:
        "আপনার চিকিৎসা রেকর্ড সুরক্ষিত",
      recordsProtectedDescription:
        "যাচাইকৃত রেকর্ড শুধুমাত্র পড়া যায় এবং পরিবর্তন করা যায় না।",
      searchRecords:
        "আপনার চিকিৎসা রেকর্ড খুঁজুন...",
      categories: {
        all: "সব ডকুমেন্ট",
        labReports: "ল্যাব রিপোর্ট",
        prescriptions: "প্রেসক্রিপশন",
        discharge: "ডিসচার্জ সারাংশ",
        other: "অন্যান্য ডকুমেন্ট",
      },
      documents: "ডকুমেন্ট",
      allYourRecords: "আপনার সব রেকর্ড",
      readOnly: "শুধু পড়ার জন্য",
      pending: "অপেক্ষমাণ",
      source: "উৎস",
      date: "তারিখ",
      verified: "যাচাইকৃত",
      pendingVerification:
        "যাচাইকরণ অপেক্ষমাণ",
      view: "দেখুন",
      noRecordsFound:
        "কোনো রেকর্ড পাওয়া যায়নি",
      noRecordsDescription:
        "আপনার অনুসন্ধান পরিবর্তন করুন অথবা একটি নতুন ডকুমেন্ট আপলোড করুন।",
      medicalDocument: "চিকিৎসা ডকুমেন্ট",
      uploadRecord: "একটি রেকর্ড আপলোড করুন",
      uploadRecordDescription:
        "আপনার MedX স্বাস্থ্য ইতিহাসে একটি পূর্ববর্তী চিকিৎসা ডকুমেন্ট যোগ করুন।",
      fileSelected:
        "ফাইল নির্বাচিত · আপলোডের জন্য প্রস্তুত",
      chooseDocument: "একটি ডকুমেন্ট নির্বাচন করুন",
      acceptedFormats:
        "PDF, JPG বা PNG গ্রহণযোগ্য",
      uploadVerificationWarning:
        "আপলোড করা ডকুমেন্ট যাচাইকৃত হওয়ার আগে পর্যালোচনা করা হবে.",
      errors: {
        enterName: "আপনার নাম লিখুন",
        enterAge: "আপনার বয়স লিখুন",
        validAge: "সঠিক বয়স লিখুন",
        selectGender: "আপনার লিঙ্গ নির্বাচন করুন",
        enterPhone: "আপনার ফোন নম্বর লিখুন",
        validPhone: "সঠিক ১০ সংখ্যার নম্বর লিখুন",
      },
      speechErrors: {
        convertFailed:
          "আপনার কথাকে টেক্সটে রূপান্তর করা যায়নি। আবার চেষ্টা করুন।",
        permissionDenied:
          "মাইক্রোফোনের অনুমতি নেই। অনুগ্রহ করে অনুমতি দিন।",
        noMicrophone:
          "কোনো মাইক্রোফোন পাওয়া যায়নি।",
        unable:
          "মাইক্রোফোন ব্যবহার করা যাচ্ছে না।",
      },
      aiErrors: {
        timeout:
          "MedX উত্তর দিতে বেশি সময় নিচ্ছে। আপনার সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।",
        connection:
          "MedX ক্লিনিক্যাল ইনটেক সার্ভারে সংযোগ করতে পারেনি। আবার চেষ্টা করুন।",
      },
    },
  },

  // =====================================================
  // GUJARATI
  // =====================================================

  gu: {
    translation: {
      secure: "સુરક્ષિત",
      aiHealthcare: "AI આધારિત આરોગ્ય સેવા",
      yourHealth: "તમારું આરોગ્ય.",
      yourRecords: "તમારા રેકોર્ડ.",
      onePlace: "એક જ જગ્યાએ.",
      description:
        "MedX તમારા આરોગ્ય ઇતિહાસ અને તબીબી રેકોર્ડને એક સુરક્ષિત અને બુદ્ધિશાળી પ્લેટફોર્મ પર એકસાથે લાવે છે.",
      patients: "દર્દીઓ",
      accuracy: "ચોકસાઈ",
      avgIntake: "સરેરાશ સમય",
      whoAreYouToday: "આજે તમે કોણ છો?",
      selectRole:
        "શરૂ કરવા માટે તમારી ભૂમિકા પસંદ કરો",
      patient: "દર્દી",
      imPatient: "હું દર્દી છું",
      patientDescription:
        "તમારો આરોગ્ય ઇતિહાસ નોંધો અને તમારા તબીબી રેકોર્ડનું સંચાલન કરો.",
      healthcareProfessional:
        "આરોગ્ય સેવા વ્યાવસાયિક",
      imDoctor: "હું ડૉક્ટર છું",
      doctorDescription:
        "દર્દીના ઇતિહાસની સમીક્ષા કરો અને ક્લિનિકલ રેકોર્ડનું સંચાલન કરો.",
      privacyNote:
        "તમારી આરોગ્ય માહિતી ગોપનીયતા અને સંમતિને ધ્યાનમાં રાખીને સંભાળવામાં આવે છે.",
      back: "પાછા",
      profile: "પ્રોફાઇલ",
      healthIntake: "આરોગ્ય માહિતી",
      records: "રેકોર્ડ",
      letsGetStarted: "ચાલો શરૂ કરીએ",
      tellUsAboutYourself:
        "તમારા વિશે જણાવો",
      basicDetailsDescription:
        "આરોગ્ય માહિતી શરૂ કરતા પહેલા અમને કેટલીક મૂળભૂત વિગતોની જરૂર છે.",
      name: "નામ",
      age: "ઉંમર",
      gender: "લિંગ",
      phoneNumber: "ફોન નંબર",
      placeholders: {
        fullName: "તમારું પૂરું નામ દાખલ કરો",
        age: "તમારી ઉંમર",
        mobile: "10 અંકનો મોબાઇલ નંબર",
        response: "તમારા પોતાના શબ્દોમાં કહો...",
      },
      genderOptions: {
        select: "લિંગ પસંદ કરો",
        male: "પુરુષ",
        female: "સ્ત્રી",
        other: "અન્ય",
        preferNotToSay:
          "કહેવાનું પસંદ નથી",
      },
      continueToHealthIntake:
        "આરોગ્ય માહિતી પર જાઓ",
      formSecurity:
        "તમારી માહિતીનો ઉપયોગ માત્ર તમારી આરોગ્ય યાત્રા માટે કરવામાં આવશે.",
      medxAiAssistant: "MedX AI સહાયક",
      understandFeeling:
        "ચાલો સમજીએ કે તમે કેવું અનુભવી રહ્યા છો.",
      answerQuestionsDescription:
        "વિકલ્પ પસંદ કરીને અથવા તમારો જવાબ લખીને પ્રશ્નોના જવાબ આપો.",
      medxClinicalAssistant:
        "MedX ક્લિનિકલ સહાયક",
      onlineAiPowered:
        "ઓનલાઇન · AI આધારિત માહિતી",
      connectionIssue: "કનેક્શન સમસ્યા",
      tryAgain: "ફરી પ્રયાસ કરો",
      continue: "ચાલુ રાખો",
      intake: {
        selectOption:
          "નીચેના વિકલ્પોમાંથી એક પસંદ કરો.",
        selectYesNo:
          "કૃપા કરીને હા અથવા ના પસંદ કરો.",
        typeOrVoice:
          "તમારો જવાબ લખો અથવા અવાજનો ઉપયોગ કરો.",
      },
      voice: {
        stopListening: "સાંભળવાનું બંધ કરો",
        input: "વૉઇસ ઇનપુટ",
      },
      listening:
        "સાંભળી રહ્યા છીએ... હવે બોલો",
      intakeFooter:
        "તમારા જવાબો ખાનગી છે અને આરોગ્ય સેવા વ્યાવસાયિક દ્વારા સમીક્ષા કરવામાં આવશે.",
      historyReady:
        "તમારો આરોગ્ય ઇતિહાસ તૈયાર છે.",
      historyReadyDescription:
        "MedX એ આરોગ્ય સેવા વ્યાવસાયિકની સમીક્ષા માટે તમારી માહિતી ગોઠવી છે.",
      healthIntakeSummary:
        "આરોગ્ય માહિતીનો સારાંશ",
      patientHistoryNotice:
        "આ દર્દી દ્વારા આપવામાં આવેલ ઇતિહાસ છે અને તબીબી નિદાન નથી. લાઇસન્સ પ્રાપ્ત આરોગ્ય સેવા વ્યાવસાયિકની સલાહ લો.",
      continueToMedicalRecords:
        "તબીબી રેકોર્ડ પર જાઓ",
      patientPortal: "દર્દી પોર્ટલ",
      medicalRecords: "તબીબી રેકોર્ડ",
      medicalRecordsDescription:
        "તમારો આરોગ્ય ઇતિહાસ સુરક્ષિત રીતે એક જગ્યાએ ગોઠવાયેલ છે.",
      uploadDocument: "દસ્તાવેજ અપલોડ કરો",
      recordsProtected:
        "તમારા તબીબી રેકોર્ડ સુરક્ષિત છે",
      recordsProtectedDescription:
        "ચકાસાયેલ રેકોર્ડ માત્ર વાંચી શકાય છે અને તેમાં ફેરફાર કરી શકાતો નથી.",
      searchRecords:
        "તમારા તબીબી રેકોર્ડ શોધો...",
      categories: {
        all: "બધા દસ્તાવેજો",
        labReports: "લેબ રિપોર્ટ્સ",
        prescriptions: "પ્રિસ્ક્રિપ્શન",
        discharge: "ડિસ્ચાર્જ સારાંશ",
        other: "અન્ય દસ્તાવેજો",
      },
      documents: "દસ્તાવેજો",
      allYourRecords: "તમારા બધા રેકોર્ડ",
      readOnly: "ફક્ત વાંચવા માટે",
      pending: "બાકી",
      source: "સ્રોત",
      date: "તારીખ",
      verified: "ચકાસાયેલ",
      pendingVerification:
        "ચકાસણી બાકી",
      view: "જુઓ",
      noRecordsFound:
        "કોઈ રેકોર્ડ મળ્યો નથી",
      noRecordsDescription:
        "તમારી શોધ બદલો અથવા નવો દસ્તાવેજ અપલોડ કરો.",
      medicalDocument: "તબીબી દસ્તાવેજ",
      uploadRecord: "રેકોર્ડ અપલોડ કરો",
      uploadRecordDescription:
        "તમારા MedX આરોગ્ય ઇતિહાસમાં અગાઉનો તબીબી દસ્તાવેજ ઉમેરો.",
      fileSelected:
        "ફાઇલ પસંદ થઈ · અપલોડ માટે તૈયાર",
      chooseDocument: "દસ્તાવેજ પસંદ કરો",
      acceptedFormats:
        "PDF, JPG અથવા PNG સ્વીકાર્ય છે",
      uploadVerificationWarning:
        "અપલોડ કરેલા દસ્તાવેજોને ચકાસાયેલ તરીકે ચિહ્નિત કરતા પહેલાં ચકાસણી જરૂરી રહેશે.",
      errors: {
        enterName: "કૃપા કરીને તમારું નામ દાખલ કરો",
        enterAge: "કૃપા કરીને તમારી ઉંમર દાખલ કરો",
        validAge: "કૃપા કરીને માન્ય ઉંમર દાખલ કરો",
        selectGender: "કૃપા કરીને તમારું લિંગ પસંદ કરો",
        enterPhone:
          "કૃપા કરીને તમારો ફોન નંબર દાખલ કરો",
        validPhone:
          "માન્ય 10 અંકનો નંબર દાખલ કરો",
      },
      speechErrors: {
        convertFailed:
          "તમારા અવાજને ટેક્સ્ટમાં બદલી શકાયો નથી. ફરી પ્રયાસ કરો.",
        permissionDenied:
          "માઇક્રોફોનની પરવાનગી નકારી દેવામાં આવી છે.",
        noMicrophone:
          "કોઈ માઇક્રોફોન મળ્યો નથી.",
        unable:
          "માઇક્રોફોન ઍક્સેસ કરી શકાયો નથી.",
      },
      aiErrors: {
        timeout:
          "MedX પ્રતિસાદ આપવામાં વધુ સમય લઈ રહ્યું છે. તમારું કનેક્શન તપાસો અને ફરી પ્રયાસ કરો.",
        connection:
          "MedX ક્લિનિકલ ઇનટેક સર્વર સાથે કનેક્ટ થઈ શક્યું નથી. ફરી પ્રયાસ કરો.",
      },
    },
  },

  // =====================================================
  // MARATHI
  // =====================================================

  mr: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI-आधारित आरोग्य सेवा",
      yourHealth: "तुमचे आरोग्य.",
      yourRecords: "तुमचे रेकॉर्ड.",
      onePlace: "एका ठिकाणी.",
      description:
        "MedX तुमचा आरोग्य इतिहास आणि वैद्यकीय रेकॉर्ड एका सुरक्षित आणि बुद्धिमान प्लॅटफॉर्मवर एकत्र आणते.",
      patients: "रुग्ण",
      accuracy: "अचूकता",
      avgIntake: "सरासरी वेळ",
      whoAreYouToday: "आज तुम्ही कोण आहात?",
      selectRole:
        "सुरुवात करण्यासाठी तुमची भूमिका निवडा",
      patient: "रुग्ण",
      imPatient: "मी रुग्ण आहे",
      patientDescription:
        "तुमचा आरोग्य इतिहास नोंदवा आणि तुमचे वैद्यकीय रेकॉर्ड व्यवस्थापित करा.",
      healthcareProfessional:
        "आरोग्य सेवा व्यावसायिक",
      imDoctor: "मी डॉक्टर आहे",
      doctorDescription:
        "रुग्णांच्या इतिहासाचे पुनरावलोकन करा आणि क्लिनिकल रेकॉर्ड व्यवस्थापित करा.",
      privacyNote:
        "तुमची आरोग्य माहिती गोपनीयता आणि संमती लक्षात घेऊन हाताळली जाते.",
      back: "मागे",
      profile: "प्रोफाइल",
      healthIntake: "आरोग्य माहिती",
      records: "रेकॉर्ड",
      letsGetStarted: "चला सुरुवात करूया",
      tellUsAboutYourself:
        "तुमच्याबद्दल सांगा",
      basicDetailsDescription:
        "आरोग्य माहिती सुरू करण्यापूर्वी आम्हाला काही मूलभूत माहिती आवश्यक आहे.",
      name: "नाव",
      age: "वय",
      gender: "लिंग",
      phoneNumber: "फोन नंबर",
      placeholders: {
        fullName: "तुमचे पूर्ण नाव प्रविष्ट करा",
        age: "तुमचे वय",
        mobile: "10 अंकी मोबाइल नंबर",
        response: "तुमच्या शब्दांत सांगा...",
      },
      genderOptions: {
        select: "लिंग निवडा",
        male: "पुरुष",
        female: "स्त्री",
        other: "इतर",
        preferNotToSay:
          "सांगणे पसंत नाही",
      },
      continueToHealthIntake:
        "आरोग्य माहितीकडे जा",
      formSecurity:
        "तुमची माहिती फक्त तुमच्या आरोग्यसेवेसाठी वापरली जाईल.",
      medxAiAssistant: "MedX AI सहाय्यक",
      understandFeeling:
        "तुम्हाला कसे वाटत आहे ते समजून घेऊया.",
      answerQuestionsDescription:
        "पर्याय निवडून किंवा तुमचे उत्तर टाइप करून प्रश्नांची उत्तरे द्या.",
      medxClinicalAssistant:
        "MedX क्लिनिकल सहाय्यक",
      onlineAiPowered:
        "ऑनलाइन · AI-आधारित माहिती",
      connectionIssue: "कनेक्शन समस्या",
      tryAgain: "पुन्हा प्रयत्न करा",
      continue: "पुढे जा",
      intake: {
        selectOption:
          "खालील पर्यायांपैकी एक निवडा.",
        selectYesNo:
          "कृपया होय किंवा नाही निवडा.",
        typeOrVoice:
          "तुमचे उत्तर टाइप करा किंवा आवाजाचा वापर करा.",
      },
      voice: {
        stopListening: "ऐकणे थांबवा",
        input: "आवाज इनपुट",
      },
      listening:
        "ऐकत आहे... आता बोला",
      intakeFooter:
        "तुमची उत्तरे खाजगी आहेत आणि आरोग्य सेवा व्यावसायिक त्यांचे पुनरावलोकन करतील.",
      historyReady:
        "तुमचा आरोग्य इतिहास तयार आहे.",
      historyReadyDescription:
        "MedX ने आरोग्य सेवा व्यावसायिकांच्या पुनरावलोकनासाठी तुमची माहिती व्यवस्थित केली आहे.",
      healthIntakeSummary:
        "आरोग्य माहितीचा सारांश",
      patientHistoryNotice:
        "हा रुग्णाने दिलेला इतिहास आहे आणि हे वैद्यकीय निदान नाही. परवानाधारक आरोग्य सेवा व्यावसायिकांचा सल्ला घ्या.",
      continueToMedicalRecords:
        "वैद्यकीय रेकॉर्डकडे जा",
      patientPortal: "रुग्ण पोर्टल",
      medicalRecords: "वैद्यकीय रेकॉर्ड",
      medicalRecordsDescription:
        "तुमचा आरोग्य इतिहास सुरक्षितपणे एका ठिकाणी व्यवस्थित केला आहे.",
      uploadDocument: "दस्तऐवज अपलोड करा",
      recordsProtected:
        "तुमचे वैद्यकीय रेकॉर्ड सुरक्षित आहेत",
      recordsProtectedDescription:
        "सत्यापित रेकॉर्ड फक्त वाचता येतात आणि त्यात बदल करता येत नाही.",
      searchRecords:
        "तुमचे वैद्यकीय रेकॉर्ड शोधा...",
      categories: {
        all: "सर्व दस्तऐवज",
        labReports: "लॅब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "इतर दस्तऐवज",
      },
      documents: "दस्तऐवज",
      allYourRecords: "तुमचे सर्व रेकॉर्ड",
      readOnly: "फक्त वाचण्यासाठी",
      pending: "प्रलंबित",
      source: "स्रोत",
      date: "तारीख",
      verified: "सत्यापित",
      pendingVerification:
        "सत्यापन प्रलंबित",
      view: "पहा",
      noRecordsFound:
        "कोणतेही रेकॉर्ड सापडले नाहीत",
      noRecordsDescription:
        "तुमचा शोध बदला किंवा नवीन दस्तऐवज अपलोड करा.",
      medicalDocument: "वैद्यकीय दस्तऐवज",
      uploadRecord: "रेकॉर्ड अपलोड करा",
      uploadRecordDescription:
        "तुमच्या MedX आरोग्य इतिहासात मागील वैद्यकीय दस्तऐवज जोडा.",
      fileSelected:
        "फाइल निवडली · अपलोडसाठी तयार",
      chooseDocument: "दस्तऐवज निवडा",
      acceptedFormats:
        "PDF, JPG किंवा PNG स्वीकारले जातात",
      uploadVerificationWarning:
        "अपलोड केलेल्या दस्तऐवजांना सत्यापित म्हणून चिन्हांकित करण्यापूर्वी पडताळणी आवश्यक आहे.",
      errors: {
        enterName: "कृपया तुमचे नाव प्रविष्ट करा",
        enterAge: "कृपया तुमचे वय प्रविष्ट करा",
        validAge: "कृपया योग्य वय प्रविष्ट करा",
        selectGender: "कृपया तुमचे लिंग निवडा",
        enterPhone:
          "कृपया तुमचा फोन नंबर प्रविष्ट करा",
        validPhone:
          "योग्य 10 अंकी नंबर प्रविष्ट करा",
      },
      speechErrors: {
        convertFailed:
          "तुमचा आवाज मजकुरात रूपांतरित करता आला नाही. पुन्हा प्रयत्न करा.",
        permissionDenied:
          "मायक्रोफोनची परवानगी नाकारली आहे.",
        noMicrophone:
          "मायक्रोफोन आढळला नाही.",
        unable:
          "मायक्रोफोन वापरता आला नाही.",
      },
      aiErrors: {
        timeout:
          "MedX प्रतिसाद देण्यासाठी जास्त वेळ घेत आहे. तुमचे कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.",
        connection:
          "MedX क्लिनिकल इनटेक सर्व्हरशी कनेक्ट होऊ शकले नाही. पुन्हा प्रयत्न करा.",
      },
    },
  },

  // =====================================================
  // TAMIL
  // =====================================================

  ta: {
    translation: {
      secure: "பாதுகாப்பானது",
      aiHealthcare: "AI சார்ந்த சுகாதார சேவை",
      yourHealth: "உங்கள் உடல்நலம்.",
      yourRecords: "உங்கள் பதிவுகள்.",
      onePlace: "ஒரே இடத்தில்.",
      description:
        "MedX உங்கள் உடல்நல வரலாறு மற்றும் மருத்துவப் பதிவுகளை பாதுகாப்பான மற்றும் அறிவார்ந்த தளத்தில் ஒன்றிணைக்கிறது.",
      patients: "நோயாளிகள்",
      accuracy: "துல்லியம்",
      avgIntake: "சராசரி நேரம்",
      whoAreYouToday: "இன்று நீங்கள் யார்?",
      selectRole:
        "தொடங்க உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்",
      patient: "நோயாளி",
      imPatient: "நான் ஒரு நோயாளி",
      patientDescription:
        "உங்கள் உடல்நல வரலாற்றைப் பதிவு செய்து மருத்துவப் பதிவுகளை நிர்வகிக்கவும்.",
      healthcareProfessional:
        "சுகாதார நிபுணர்",
      imDoctor: "நான் ஒரு மருத்துவர்",
      doctorDescription:
        "நோயாளிகளின் வரலாற்றை மதிப்பாய்வு செய்து மருத்துவப் பதிவுகளை நிர்வகிக்கவும்.",
      privacyNote:
        "உங்கள் உடல்நலத் தகவல்கள் தனியுரிமை மற்றும் சம்மதத்தை கருத்தில் கொண்டு கையாளப்படுகின்றன.",
      back: "பின்செல்",
      profile: "சுயவிவரம்",
      healthIntake: "உடல்நல தகவல்",
      records: "பதிவுகள்",
      letsGetStarted: "தொடங்கலாம்",
      tellUsAboutYourself:
        "உங்களைப் பற்றி சொல்லுங்கள்",
      basicDetailsDescription:
        "உடல்நல தகவலைத் தொடங்குவதற்கு முன் சில அடிப்படை விவரங்கள் மட்டுமே தேவை.",
      name: "பெயர்",
      age: "வயது",
      gender: "பாலினம்",
      phoneNumber: "தொலைபேசி எண்",
      placeholders: {
        fullName: "உங்கள் முழுப் பெயரை உள்ளிடவும்",
        age: "உங்கள் வயது",
        mobile: "10 இலக்க மொபைல் எண்",
        response: "உங்கள் சொந்த வார்த்தைகளில் சொல்லுங்கள்...",
      },
      genderOptions: {
        select: "பாலினத்தைத் தேர்ந்தெடுக்கவும்",
        male: "ஆண்",
        female: "பெண்",
        other: "மற்றவை",
        preferNotToSay:
          "சொல்ல விரும்பவில்லை",
      },
      continueToHealthIntake:
        "உடல்நல தகவலுக்குச் செல்லவும்",
      formSecurity:
        "உங்கள் தகவல்கள் உங்கள் சுகாதாரப் பயணத்திற்காக மட்டுமே பயன்படுத்தப்படும்.",
      medxAiAssistant: "MedX AI உதவியாளர்",
      understandFeeling:
        "நீங்கள் எப்படி உணர்கிறீர்கள் என்பதைப் புரிந்துகொள்வோம்.",
      answerQuestionsDescription:
        "ஒரு விருப்பத்தைத் தேர்ந்தெடுத்து அல்லது உங்கள் பதிலைத் தட்டச்சு செய்து கேள்விகளுக்கு பதிலளிக்கவும்.",
      medxClinicalAssistant:
        "MedX மருத்துவ உதவியாளர்",
      onlineAiPowered:
        "ஆன்லைன் · AI சார்ந்த தகவல்",
      connectionIssue: "இணைப்பு சிக்கல்",
      tryAgain: "மீண்டும் முயற்சிக்கவும்",
      continue: "தொடரவும்",
      intake: {
        selectOption:
          "கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்ந்தெடுக்கவும்.",
        selectYesNo:
          "ஆம் அல்லது இல்லை என்பதைத் தேர்ந்தெடுக்கவும்.",
        typeOrVoice:
          "உங்கள் பதிலைத் தட்டச்சு செய்யவும் அல்லது குரல் உள்ளீட்டைப் பயன்படுத்தவும்.",
      },
      voice: {
        stopListening: "கேட்பதை நிறுத்தவும்",
        input: "குரல் உள்ளீடு",
      },
      listening:
        "கேட்கிறது... இப்போது பேசுங்கள்",
      intakeFooter:
        "உங்கள் பதில்கள் தனிப்பட்டவை மற்றும் சுகாதார நிபுணரால் மதிப்பாய்வு செய்யப்படும்.",
      historyReady:
        "உங்கள் உடல்நல வரலாறு தயாராக உள்ளது.",
      historyReadyDescription:
        "சுகாதார நிபுணரின் மதிப்பாய்விற்காக MedX உங்கள் தகவல்களை ஒழுங்குபடுத்தியுள்ளது.",
      healthIntakeSummary:
        "உடல்நல தகவல் சுருக்கம்",
      patientHistoryNotice:
        "இது நோயாளி வழங்கிய வரலாறு மட்டுமே; இது மருத்துவ நோயறிதல் அல்ல. உரிமம் பெற்ற சுகாதார நிபுணரை அணுகவும்.",
      continueToMedicalRecords:
        "மருத்துவப் பதிவுகளுக்குச் செல்லவும்",
      patientPortal: "நோயாளி போர்டல்",
      medicalRecords: "மருத்துவப் பதிவுகள்",
      medicalRecordsDescription:
        "உங்கள் உடல்நல வரலாறு பாதுகாப்பாக ஒரே இடத்தில் ஒழுங்குபடுத்தப்பட்டுள்ளது.",
      uploadDocument: "ஆவணத்தைப் பதிவேற்றவும்",
      recordsProtected:
        "உங்கள் மருத்துவப் பதிவுகள் பாதுகாக்கப்பட்டுள்ளன",
      recordsProtectedDescription:
        "சரிபார்க்கப்பட்ட பதிவுகள் வாசிக்க மட்டுமே முடியும்; அவற்றை மாற்ற முடியாது.",
      searchRecords:
        "உங்கள் மருத்துவப் பதிவுகளைத் தேடுங்கள்...",
      categories: {
        all: "அனைத்து ஆவணங்கள்",
        labReports: "ஆய்வக அறிக்கைகள்",
        prescriptions: "மருந்துச் சீட்டுகள்",
        discharge: "விடுவிப்பு சுருக்கங்கள்",
        other: "பிற ஆவணங்கள்",
      },
      documents: "ஆவணங்கள்",
      allYourRecords: "உங்கள் அனைத்து பதிவுகளும்",
      readOnly: "வாசிக்க மட்டும்",
      pending: "நிலுவையில்",
      source: "மூலம்",
      date: "தேதி",
      verified: "சரிபார்க்கப்பட்டது",
      pendingVerification:
        "சரிபார்ப்பு நிலுவையில்",
      view: "பார்க்க",
      noRecordsFound:
        "பதிவுகள் எதுவும் கிடைக்கவில்லை",
      noRecordsDescription:
        "உங்கள் தேடலை மாற்றவும் அல்லது புதிய ஆவணத்தைப் பதிவேற்றவும்.",
      medicalDocument: "மருத்துவ ஆவணம்",
      uploadRecord: "ஒரு பதிவைப் பதிவேற்றவும்",
      uploadRecordDescription:
        "உங்கள் MedX உடல்நல வரலாற்றில் முந்தைய மருத்துவ ஆவணத்தைச் சேர்க்கவும்.",
      fileSelected:
        "கோப்பு தேர்ந்தெடுக்கப்பட்டது · பதிவேற்றத் தயாராக உள்ளது",
      chooseDocument: "ஆவணத்தைத் தேர்ந்தெடுக்கவும்",
      acceptedFormats:
        "PDF, JPG அல்லது PNG ஏற்கப்படும்",
      uploadVerificationWarning:
        "பதிவேற்றப்பட்ட ஆவணங்கள் சரிபார்க்கப்பட்டதாகக் குறிக்கப்படுவதற்கு முன் சரிபார்ப்பு தேவைப்படும்.",
      errors: {
        enterName: "உங்கள் பெயரை உள்ளிடவும்",
        enterAge: "உங்கள் வயதை உள்ளிடவும்",
        validAge: "சரியான வயதை உள்ளிடவும்",
        selectGender: "உங்கள் பாலினத்தைத் தேர்ந்தெடுக்கவும்",
        enterPhone: "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்",
        validPhone:
          "சரியான 10 இலக்க எண்ணை உள்ளிடவும்",
      },
      speechErrors: {
        convertFailed:
          "உங்கள் குரலை உரையாக மாற்ற முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
        permissionDenied:
          "மைக்ரோஃபோன் அனுமதி மறுக்கப்பட்டது.",
        noMicrophone:
          "மைக்ரோஃபோன் எதுவும் கண்டறியப்படவில்லை.",
        unable:
          "மைக்ரோஃபோனை அணுக முடியவில்லை.",
      },
      aiErrors: {
        timeout:
          "MedX பதிலளிக்க அதிக நேரம் எடுத்துக்கொள்கிறது. உங்கள் இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
        connection:
          "MedX மருத்துவ தகவல் சேவையகத்துடன் இணைக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
      },
    },
  },

  // =====================================================
  // TELUGU
  // =====================================================

  te: {
    translation: {
      secure: "సురక్షితం",
      aiHealthcare: "AI ఆధారిత ఆరోగ్య సేవ",
      yourHealth: "మీ ఆరోగ్యం.",
      yourRecords: "మీ రికార్డులు.",
      onePlace: "ఒకే చోట.",
      description:
        "MedX మీ ఆరోగ్య చరిత్ర మరియు వైద్య రికార్డులను ఒక సురక్షితమైన, తెలివైన ప్లాట్‌ఫారమ్‌లో ఒకచోట చేర్చుతుంది.",
      patients: "రోగులు",
      accuracy: "ఖచ్చితత్వం",
      avgIntake: "సగటు సమయం",
      whoAreYouToday: "ఈ రోజు మీరు ఎవరు?",
      selectRole:
        "ప్రారంభించడానికి మీ పాత్రను ఎంచుకోండి",
      patient: "రోగి",
      imPatient: "నేను రోగిని",
      patientDescription:
        "మీ ఆరోగ్య చరిత్రను నమోదు చేసి, మీ వైద్య రికార్డులను నిర్వహించండి.",
      healthcareProfessional:
        "ఆరోగ్య సేవా నిపుణుడు",
      imDoctor: "నేను వైద్యుడిని",
      doctorDescription:
        "రోగుల చరిత్రలను సమీక్షించి, క్లినికల్ రికార్డులను నిర్వహించండి.",
      privacyNote:
        "మీ ఆరోగ్య సమాచారాన్ని గోప్యత మరియు సమ్మతిని దృష్టిలో ఉంచుకుని నిర్వహిస్తాము.",
      back: "వెనుకకు",
      profile: "ప్రొఫైల్",
      healthIntake: "ఆరోగ్య సమాచారం",
      records: "రికార్డులు",
      letsGetStarted: "ప్రారంభిద్దాం",
      tellUsAboutYourself:
        "మీ గురించి చెప్పండి",
      basicDetailsDescription:
        "ఆరోగ్య సమాచారాన్ని ప్రారంభించే ముందు మాకు కొన్ని ప్రాథమిక వివరాలు మాత్రమే అవసరం.",
      name: "పేరు",
      age: "వయస్సు",
      gender: "లింగం",
      phoneNumber: "ఫోన్ నంబర్",
      placeholders: {
        fullName: "మీ పూర్తి పేరు నమోదు చేయండి",
        age: "మీ వయస్సు",
        mobile: "10 అంకెల మొబైల్ నంబర్",
        response: "మీ మాటల్లో చెప్పండి...",
      },
      genderOptions: {
        select: "లింగాన్ని ఎంచుకోండి",
        male: "పురుషుడు",
        female: "స్త్రీ",
        other: "ఇతర",
        preferNotToSay:
          "చెప్పడానికి ఇష్టపడను",
      },
      continueToHealthIntake:
        "ఆరోగ్య సమాచారానికి కొనసాగండి",
      formSecurity:
        "మీ సమాచారం మీ ఆరోగ్య ప్రయాణం కోసం మాత్రమే ఉపయోగించబడుతుంది.",
      medxAiAssistant: "MedX AI సహాయకుడు",
      understandFeeling:
        "మీరు ఎలా అనుభవిస్తున్నారో తెలుసుకుందాం.",
      answerQuestionsDescription:
        "ఒక ఎంపికను ఎంచుకుని లేదా మీ సమాధానాన్ని టైప్ చేసి ప్రశ్నలకు సమాధానం ఇవ్వండి.",
      medxClinicalAssistant:
        "MedX క్లినికల్ సహాయకుడు",
      onlineAiPowered:
        "ఆన్‌లైన్ · AI ఆధారిత సమాచారం",
      connectionIssue: "కనెక్షన్ సమస్య",
      tryAgain: "మళ్లీ ప్రయత్నించండి",
      continue: "కొనసాగించండి",
      intake: {
        selectOption:
          "క్రింద ఉన్న ఎంపికలలో ఒకదాన్ని ఎంచుకోండి.",
        selectYesNo:
          "దయచేసి అవును లేదా కాదు ఎంచుకోండి.",
        typeOrVoice:
          "మీ సమాధానాన్ని టైప్ చేయండి లేదా వాయిస్ ఇన్‌పుట్ ఉపయోగించండి.",
      },
      voice: {
        stopListening: "వినడం ఆపండి",
        input: "వాయిస్ ఇన్‌పుట్",
      },
      listening:
        "వింటోంది... ఇప్పుడు మాట్లాడండి",
      intakeFooter:
        "మీ సమాధానాలు ప్రైవేట్‌గా ఉంటాయి మరియు ఆరోగ్య సేవా నిపుణుడు వాటిని సమీక్షిస్తారు.",
      historyReady:
        "మీ ఆరోగ్య చరిత్ర సిద్ధంగా ఉంది.",
      historyReadyDescription:
        "ఆరోగ్య సేవా నిపుణుడి సమీక్ష కోసం MedX మీ సమాచారాన్ని క్రమబద్ధీకరించింది.",
      healthIntakeSummary:
        "ఆరోగ్య సమాచారం సారాంశం",
      patientHistoryNotice:
        "ఇది రోగి అందించిన చరిత్ర మాత్రమే, వైద్య నిర్ధారణ కాదు. లైసెన్స్ పొందిన ఆరోగ్య సేవా నిపుణుడిని సంప్రదించండి.",
      continueToMedicalRecords:
        "వైద్య రికార్డులకు కొనసాగండి",
      patientPortal: "రోగి పోర్టల్",
      medicalRecords: "వైద్య రికార్డులు",
      medicalRecordsDescription:
        "మీ ఆరోగ్య చరిత్రను సురక్షితంగా ఒకే చోట క్రమబద్ధీకరించాము.",
      uploadDocument: "పత్రాన్ని అప్‌లోడ్ చేయండి",
      recordsProtected:
        "మీ వైద్య రికార్డులు రక్షించబడ్డాయి",
      recordsProtectedDescription:
        "ధృవీకరించిన రికార్డులు చదవడానికి మాత్రమే ఉంటాయి మరియు మార్చలేరు.",
      searchRecords:
        "మీ వైద్య రికార్డులను శోధించండి...",
      categories: {
        all: "అన్ని పత్రాలు",
        labReports: "ల్యాబ్ నివేదికలు",
        prescriptions: "ప్రిస్క్రిప్షన్లు",
        discharge: "డిశ్చార్జ్ సారాంశాలు",
        other: "ఇతర పత్రాలు",
      },
      documents: "పత్రాలు",
      allYourRecords: "మీ అన్ని రికార్డులు",
      readOnly: "చదవడానికి మాత్రమే",
      pending: "పెండింగ్",
      source: "మూలం",
      date: "తేదీ",
      verified: "ధృవీకరించబడింది",
      pendingVerification:
        "ధృవీకరణ పెండింగ్‌లో ఉంది",
      view: "చూడండి",
      noRecordsFound:
        "రికార్డులు కనుగొనబడలేదు",
      noRecordsDescription:
        "మీ శోధనను మార్చండి లేదా కొత్త పత్రాన్ని అప్‌లోడ్ చేయండి.",
      medicalDocument: "వైద్య పత్రం",
      uploadRecord: "రికార్డును అప్‌లోడ్ చేయండి",
      uploadRecordDescription:
        "మీ MedX ఆరోగ్య చరిత్రలో మునుపటి వైద్య పత్రాన్ని జోడించండి.",
      fileSelected:
        "ఫైల్ ఎంచుకోబడింది · అప్‌లోడ్‌కు సిద్ధంగా ఉంది",
      chooseDocument: "పత్రాన్ని ఎంచుకోండి",
      acceptedFormats:
        "PDF, JPG లేదా PNG ఆమోదించబడతాయి",
      uploadVerificationWarning:
        "అప్‌లోడ్ చేసిన పత్రాలను ధృవీకరించబడినవిగా గుర్తించే ముందు ధృవీకరణ అవసరం.",
      errors: {
        enterName: "దయచేసి మీ పేరు నమోదు చేయండి",
        enterAge: "దయచేసి మీ వయస్సు నమోదు చేయండి",
        validAge: "దయచేసి సరైన వయస్సు నమోదు చేయండి",
        selectGender: "దయచేసి మీ లింగాన్ని ఎంచుకోండి",
        enterPhone: "దయచేసి మీ ఫోన్ నంబర్ నమోదు చేయండి",
        validPhone:
          "సరైన 10 అంకెల నంబర్ నమోదు చేయండి",
      },
      speechErrors: {
        convertFailed:
          "మీ మాటలను టెక్స్ట్‌గా మార్చలేకపోయాం. మళ్లీ ప్రయత్నించండి.",
        permissionDenied:
          "మైక్రోఫోన్ అనుమతి నిరాకరించబడింది.",
        noMicrophone:
          "మైక్రోఫోన్ కనుగొనబడలేదు.",
        unable:
          "మైక్రోఫోన్‌ను యాక్సెస్ చేయలేకపోయాం.",
      },
      aiErrors: {
        timeout:
          "MedX స్పందించడానికి ఎక్కువ సమయం తీసుకుంటోంది. మీ కనెక్షన్‌ను తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
        connection:
          "MedX క్లినికల్ ఇన్‌టేక్ సర్వర్‌కు కనెక్ట్ కాలేకపోయింది. మళ్లీ ప్రయత్నించండి.",
      },
    },
  },

  // =====================================================
  // KANNADA
  // =====================================================

  kn: {
    translation: {
      secure: "ಸುರಕ್ಷಿತ",
      aiHealthcare: "AI ಆಧಾರಿತ ಆರೋಗ್ಯ ಸೇವೆ",
      yourHealth: "ನಿಮ್ಮ ಆರೋಗ್ಯ.",
      yourRecords: "ನಿಮ್ಮ ದಾಖಲೆಗಳು.",
      onePlace: "ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.",
      description:
        "MedX ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸ ಮತ್ತು ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ಸುರಕ್ಷಿತ ಮತ್ತು ಬುದ್ಧಿವಂತ ವೇದಿಕೆಯಲ್ಲಿ ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ.",
      patients: "ರೋಗಿಗಳು",
      accuracy: "ನಿಖರತೆ",
      avgIntake: "ಸರಾಸರಿ ಸಮಯ",
      whoAreYouToday: "ಇಂದು ನೀವು ಯಾರು?",
      selectRole:
        "ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      patient: "ರೋಗಿ",
      imPatient: "ನಾನು ರೋಗಿ",
      patientDescription:
        "ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸವನ್ನು ದಾಖಲಿಸಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
      healthcareProfessional:
        "ಆರೋಗ್ಯ ಸೇವಾ ವೃತ್ತಿಪರ",
      imDoctor: "ನಾನು ವೈದ್ಯ",
      doctorDescription:
        "ರೋಗಿಗಳ ಇತಿಹಾಸವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
      privacyNote:
        "ನಿಮ್ಮ ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ಗೌಪ್ಯತೆ ಮತ್ತು ಒಪ್ಪಿಗೆಯನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ.",
      back: "ಹಿಂದೆ",
      profile: "ಪ್ರೊಫೈಲ್",
      healthIntake: "ಆರೋಗ್ಯ ಮಾಹಿತಿ",
      records: "ದಾಖಲೆಗಳು",
      letsGetStarted: "ಪ್ರಾರಂಭಿಸೋಣ",
      tellUsAboutYourself:
        "ನಿಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಸಿ",
      basicDetailsDescription:
        "ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ನಮಗೆ ಕೆಲವು ಮೂಲಭೂತ ವಿವರಗಳು ಮಾತ್ರ ಬೇಕಾಗುತ್ತವೆ.",
      name: "ಹೆಸರು",
      age: "ವಯಸ್ಸು",
      gender: "ಲಿಂಗ",
      phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ",
      placeholders: {
        fullName: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        age: "ನಿಮ್ಮ ವಯಸ್ಸು",
        mobile: "10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        response: "ನಿಮ್ಮ ಸ್ವಂತ ಮಾತುಗಳಲ್ಲಿ ತಿಳಿಸಿ...",
      },
      genderOptions: {
        select: "ಲಿಂಗ ಆಯ್ಕೆಮಾಡಿ",
        male: "ಪುರುಷ",
        female: "ಮಹಿಳೆ",
        other: "ಇತರೆ",
        preferNotToSay:
          "ಹೇಳಲು ಇಷ್ಟವಿಲ್ಲ",
      },
      continueToHealthIntake:
        "ಆರೋಗ್ಯ ಮಾಹಿತಿಗೆ ಮುಂದುವರಿಯಿರಿ",
      formSecurity:
        "ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣಕ್ಕಾಗಿ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.",
      medxAiAssistant: "MedX AI ಸಹಾಯಕ",
      understandFeeling:
        "ನೀವು ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳೋಣ.",
      answerQuestionsDescription:
        "ಆಯ್ಕೆಯನ್ನು ಆರಿಸುವ ಮೂಲಕ ಅಥವಾ ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಟೈಪ್ ಮಾಡುವ ಮೂಲಕ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.",
      medxClinicalAssistant:
        "MedX ಕ್ಲಿನಿಕಲ್ ಸಹಾಯಕ",
      onlineAiPowered:
        "ಆನ್‌ಲೈನ್ · AI ಆಧಾರಿತ ಮಾಹಿತಿ",
      connectionIssue: "ಸಂಪರ್ಕ ಸಮಸ್ಯೆ",
      tryAgain: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
      continue: "ಮುಂದುವರಿಸಿ",
      intake: {
        selectOption:
          "ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆರಿಸಿ.",
        selectYesNo:
          "ದಯವಿಟ್ಟು ಹೌದು ಅಥವಾ ಇಲ್ಲ ಆಯ್ಕೆಮಾಡಿ.",
        typeOrVoice:
          "ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಬಳಸಿ.",
      },
      voice: {
        stopListening: "ಕೇಳುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
        input: "ಧ್ವನಿ ಇನ್‌ಪುಟ್",
      },
      listening:
        "ಕೇಳುತ್ತಿದೆ... ಈಗ ಮಾತನಾಡಿ",
      intakeFooter:
        "ನಿಮ್ಮ ಉತ್ತರಗಳು ಖಾಸಗಿಯಾಗಿದ್ದು ಆರೋಗ್ಯ ಸೇವಾ ವೃತ್ತಿಪರರಿಂದ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.",
      historyReady:
        "ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸ ಸಿದ್ಧವಾಗಿದೆ.",
      historyReadyDescription:
        "ಆರೋಗ್ಯ ಸೇವಾ ವೃತ್ತಿಪರರ ಪರಿಶೀಲನೆಗಾಗಿ MedX ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ವ್ಯವಸ್ಥೆಗೊಳಿಸಿದೆ.",
      healthIntakeSummary:
        "ಆರೋಗ್ಯ ಮಾಹಿತಿ ಸಾರಾಂಶ",
      patientHistoryNotice:
        "ಇದು ರೋಗಿಯು ನೀಡಿದ ಇತಿಹಾಸ ಮಾತ್ರ ಮತ್ತು ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವಲ್ಲ. ಪರವಾನಗಿ ಪಡೆದ ಆರೋಗ್ಯ ಸೇವಾ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      continueToMedicalRecords:
        "ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳಿಗೆ ಮುಂದುವರಿಯಿರಿ",
      patientPortal: "ರೋಗಿ ಪೋರ್ಟಲ್",
      medicalRecords: "ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳು",
      medicalRecordsDescription:
        "ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ವ್ಯವಸ್ಥೆಗೊಳಿಸಲಾಗಿದೆ.",
      uploadDocument: "ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      recordsProtected:
        "ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳು ಸುರಕ್ಷಿತವಾಗಿವೆ",
      recordsProtectedDescription:
        "ಪರಿಶೀಲಿಸಿದ ದಾಖಲೆಗಳು ಓದಲು ಮಾತ್ರ ಲಭ್ಯವಿದ್ದು ಬದಲಾಯಿಸಲಾಗುವುದಿಲ್ಲ.",
      searchRecords:
        "ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ಹುಡುಕಿ...",
      categories: {
        all: "ಎಲ್ಲಾ ದಾಖಲೆಗಳು",
        labReports: "ಲ್ಯಾಬ್ ವರದಿಗಳು",
        prescriptions: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್‌ಗಳು",
        discharge: "ಡಿಸ್ಚಾರ್ಜ್ ಸಾರಾಂಶಗಳು",
        other: "ಇತರೆ ದಾಖಲೆಗಳು",
      },
      documents: "ದಾಖಲೆಗಳು",
      allYourRecords: "ನಿಮ್ಮ ಎಲ್ಲಾ ದಾಖಲೆಗಳು",
      readOnly: "ಓದಲು ಮಾತ್ರ",
      pending: "ಬಾಕಿ",
      source: "ಮೂಲ",
      date: "ದಿನಾಂಕ",
      verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
      pendingVerification:
        "ಪರಿಶೀಲನೆ ಬಾಕಿಯಿದೆ",
      view: "ನೋಡಿ",
      noRecordsFound:
        "ಯಾವುದೇ ದಾಖಲೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      noRecordsDescription:
        "ನಿಮ್ಮ ಹುಡುಕಾಟವನ್ನು ಬದಲಾಯಿಸಿ ಅಥವಾ ಹೊಸ ದಾಖಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
      medicalDocument: "ವೈದ್ಯಕೀಯ ದಾಖಲೆ",
      uploadRecord: "ಒಂದು ದಾಖಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      uploadRecordDescription:
        "ನಿಮ್ಮ MedX ಆರೋಗ್ಯ ಇತಿಹಾಸಕ್ಕೆ ಹಿಂದಿನ ವೈದ್ಯಕೀಯ ದಾಖಲೆಯನ್ನು ಸೇರಿಸಿ.",
      fileSelected:
        "ಫೈಲ್ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ · ಅಪ್‌ಲೋಡ್‌ಗೆ ಸಿದ್ಧವಾಗಿದೆ",
      chooseDocument: "ದಾಖಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      acceptedFormats:
        "PDF, JPG ಅಥವಾ PNG ಸ್ವೀಕರಿಸಲಾಗುತ್ತದೆ",
      uploadVerificationWarning:
        "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸುವ ಮೊದಲು ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿರುತ್ತದೆ.",
      errors: {
        enterName: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        enterAge: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ",
        validAge: "ದಯವಿಟ್ಟು ಮಾನ್ಯ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ",
        selectGender: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಲಿಂಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        enterPhone:
          "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
        validPhone:
          "ಮಾನ್ಯವಾದ 10 ಅಂಕಿಯ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
      },
      speechErrors: {
        convertFailed:
          "ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ಪಠ್ಯಕ್ಕೆ ಪರಿವರ್ತಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        permissionDenied:
          "ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ.",
        noMicrophone:
          "ಯಾವುದೇ ಮೈಕ್ರೊಫೋನ್ ಕಂಡುಬಂದಿಲ್ಲ.",
        unable:
          "ಮೈಕ್ರೊಫೋನ್ ಅನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
      },
      aiErrors: {
        timeout:
          "MedX ಪ್ರತಿಕ್ರಿಯಿಸಲು ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿದೆ. ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        connection:
          "MedX ಕ್ಲಿನಿಕಲ್ ಇನ್‌ಟೇಕ್ ಸರ್ವರ್‌ಗೆ ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      },
    },
  },

  // =====================================================
  // MALAYALAM
  // =====================================================

  ml: {
    translation: {
      secure: "സുരക്ഷിതം",
      aiHealthcare: "AI അധിഷ്ഠിത ആരോഗ്യ സേവനം",
      yourHealth: "നിങ്ങളുടെ ആരോഗ്യം.",
      yourRecords: "നിങ്ങളുടെ രേഖകൾ.",
      onePlace: "ഒരിടത്ത്.",
      description:
        "MedX നിങ്ങളുടെ ആരോഗ്യ ചരിത്രവും മെഡിക്കൽ രേഖകളും സുരക്ഷിതവും ബുദ്ധിപരവുമായ ഒരു പ്ലാറ്റ്‌ഫോമിൽ ഒരുമിച്ച് കൊണ്ടുവരുന്നു.",
      patients: "രോഗികൾ",
      accuracy: "കൃത്യത",
      avgIntake: "ശരാശരി സമയം",
      whoAreYouToday: "ഇന്ന് നിങ്ങൾ ആരാണ്?",
      selectRole:
        "ആരംഭിക്കാൻ നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക",
      patient: "രോഗി",
      imPatient: "ഞാൻ ഒരു രോഗിയാണ്",
      patientDescription:
        "നിങ്ങളുടെ ആരോഗ്യ ചരിത്രം രേഖപ്പെടുത്തുകയും മെഡിക്കൽ രേഖകൾ കൈകാര്യം ചെയ്യുകയും ചെയ്യുക.",
      healthcareProfessional:
        "ആരോഗ്യ സേവന പ്രൊഫഷണൽ",
      imDoctor: "ഞാൻ ഒരു ഡോക്ടറാണ്",
      doctorDescription:
        "രോഗികളുടെ ചരിത്രങ്ങൾ പരിശോധിക്കുകയും ക്ലിനിക്കൽ രേഖകൾ കൈകാര്യം ചെയ്യുകയും ചെയ്യുക.",
      privacyNote:
        "നിങ്ങളുടെ ആരോഗ്യ വിവരങ്ങൾ സ്വകാര്യതയും സമ്മതവും പരിഗണിച്ച് കൈകാര്യം ചെയ്യുന്നു.",
      back: "തിരികെ",
      profile: "പ്രൊഫൈൽ",
      healthIntake: "ആരോഗ്യ വിവരം",
      records: "രേഖകൾ",
      letsGetStarted: "ആരംഭിക്കാം",
      tellUsAboutYourself:
        "നിങ്ങളെക്കുറിച്ച് പറയൂ",
      basicDetailsDescription:
        "ആരോഗ്യ വിവരങ്ങൾ ആരംഭിക്കുന്നതിന് മുമ്പ് കുറച്ച് അടിസ്ഥാന വിവരങ്ങൾ മാത്രം ആവശ്യമാണ്.",
      name: "പേര്",
      age: "വയസ്സ്",
      gender: "ലിംഗം",
      phoneNumber: "ഫോൺ നമ്പർ",
      placeholders: {
        fullName: "നിങ്ങളുടെ പൂർണ്ണ പേര് നൽകുക",
        age: "നിങ്ങളുടെ വയസ്സ്",
        mobile: "10 അക്ക മൊബൈൽ നമ്പർ",
        response: "നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ പറയൂ...",
      },
      genderOptions: {
        select: "ലിംഗം തിരഞ്ഞെടുക്കുക",
        male: "പുരുഷൻ",
        female: "സ്ത്രീ",
        other: "മറ്റുള്ളവ",
        preferNotToSay:
          "പറയാൻ ആഗ്രഹിക്കുന്നില്ല",
      },
      continueToHealthIntake:
        "ആരോഗ്യ വിവരത്തിലേക്ക് തുടരുക",
      formSecurity:
        "നിങ്ങളുടെ വിവരങ്ങൾ നിങ്ങളുടെ ആരോഗ്യ യാത്രയ്ക്കായി മാത്രം ഉപയോഗിക്കും.",
      medxAiAssistant: "MedX AI സഹായി",
      understandFeeling:
        "നിങ്ങൾക്ക് എങ്ങനെ അനുഭവപ്പെടുന്നു എന്ന് മനസ്സിലാക്കാം.",
      answerQuestionsDescription:
        "ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുകയോ നിങ്ങളുടെ ഉത്തരം ടൈപ്പ് ചെയ്യുകയോ ചെയ്ത് ചോദ്യങ്ങൾക്ക് മറുപടി നൽകുക.",
      medxClinicalAssistant:
        "MedX ക്ലിനിക്കൽ സഹായി",
      onlineAiPowered:
        "ഓൺലൈൻ · AI അധിഷ്ഠിത വിവരം",
      connectionIssue: "കണക്ഷൻ പ്രശ്നം",
      tryAgain: "വീണ്ടും ശ്രമിക്കുക",
      continue: "തുടരുക",
      intake: {
        selectOption:
          "താഴെയുള്ള ഓപ്ഷനുകളിൽ ഒന്ന് തിരഞ്ഞെടുക്കുക.",
        selectYesNo:
          "ദയവായി അതെ അല്ലെങ്കിൽ ഇല്ല തിരഞ്ഞെടുക്കുക.",
        typeOrVoice:
          "നിങ്ങളുടെ ഉത്തരം ടൈപ്പ് ചെയ്യുക അല്ലെങ്കിൽ വോയ്സ് ഇൻപുട്ട് ഉപയോഗിക്കുക.",
      },
      voice: {
        stopListening: "കേൾക്കുന്നത് നിർത്തുക",
        input: "വോയ്സ് ഇൻപുട്ട്",
      },
      listening:
        "കേൾക്കുന്നു... ഇപ്പോൾ സംസാരിക്കുക",
      intakeFooter:
        "നിങ്ങളുടെ ഉത്തരങ്ങൾ സ്വകാര്യമാണ്, ആരോഗ്യ സേവന പ്രൊഫഷണൽ അവ പരിശോധിക്കും.",
      historyReady:
        "നിങ്ങളുടെ ആരോഗ്യ ചരിത്രം തയ്യാറാണ്.",
      historyReadyDescription:
        "ആരോഗ്യ സേവന പ്രൊഫഷണലിന്റെ പരിശോധനയ്ക്കായി MedX നിങ്ങളുടെ വിവരങ്ങൾ ക്രമീകരിച്ചു.",
      healthIntakeSummary:
        "ആരോഗ്യ വിവര സംഗ്രഹം",
      patientHistoryNotice:
        "ഇത് രോഗി നൽകിയ ചരിത്രമാണ്, മെഡിക്കൽ രോഗനിർണയം അല്ല. ലൈസൻസുള്ള ആരോഗ്യ സേവന പ്രൊഫഷണലിനെ സമീപിക്കുക.",
      continueToMedicalRecords:
        "മെഡിക്കൽ രേഖകളിലേക്ക് തുടരുക",
      patientPortal: "രോഗി പോർട്ടൽ",
      medicalRecords: "മെഡിക്കൽ രേഖകൾ",
      medicalRecordsDescription:
        "നിങ്ങളുടെ ആരോഗ്യ ചരിത്രം സുരക്ഷിതമായി ഒരിടത്ത് ക്രമീകരിച്ചിരിക്കുന്നു.",
      uploadDocument: "രേഖ അപ്‌ലോഡ് ചെയ്യുക",
      recordsProtected:
        "നിങ്ങളുടെ മെഡിക്കൽ രേഖകൾ സംരക്ഷിക്കപ്പെട്ടിരിക്കുന്നു",
      recordsProtectedDescription:
        "പരിശോധിച്ച രേഖകൾ വായിക്കാൻ മാത്രം സാധിക്കും, അവ മാറ്റാൻ കഴിയില്ല.",
      searchRecords:
        "നിങ്ങളുടെ മെഡിക്കൽ രേഖകൾ തിരയുക...",
      categories: {
        all: "എല്ലാ രേഖകളും",
        labReports: "ലാബ് റിപ്പോർട്ടുകൾ",
        prescriptions: "പ്രിസ്ക്രിപ്ഷനുകൾ",
        discharge: "ഡിസ്ചാർജ് സംഗ്രഹങ്ങൾ",
        other: "മറ്റ് രേഖകൾ",
      },
      documents: "രേഖകൾ",
      allYourRecords: "നിങ്ങളുടെ എല്ലാ രേഖകളും",
      readOnly: "വായിക്കാൻ മാത്രം",
      pending: "തീർപ്പാക്കാത്തത്",
      source: "ഉറവിടം",
      date: "തീയതി",
      verified: "പരിശോധിച്ചു",
      pendingVerification:
        "പരിശോധന കാത്തിരിക്കുന്നു",
      view: "കാണുക",
      noRecordsFound:
        "രേഖകളൊന്നും കണ്ടെത്തിയില്ല",
      noRecordsDescription:
        "നിങ്ങളുടെ തിരയൽ മാറ്റുക അല്ലെങ്കിൽ പുതിയ രേഖ അപ്‌ലോഡ് ചെയ്യുക.",
      medicalDocument: "മെഡിക്കൽ രേഖ",
      uploadRecord: "ഒരു രേഖ അപ്‌ലോഡ് ചെയ്യുക",
      uploadRecordDescription:
        "നിങ്ങളുടെ MedX ആരോഗ്യ ചരിത്രത്തിലേക്ക് മുമ്പത്തെ മെഡിക്കൽ രേഖ ചേർക്കുക.",
      fileSelected:
        "ഫയൽ തിരഞ്ഞെടുത്തു · അപ്‌ലോഡ് ചെയ്യാൻ തയ്യാറാണ്",
      chooseDocument: "ഒരു രേഖ തിരഞ്ഞെടുക്കുക",
      acceptedFormats:
        "PDF, JPG അല്ലെങ്കിൽ PNG സ്വീകരിക്കും",
      uploadVerificationWarning:
        "അപ്‌ലോഡ് ചെയ്ത രേഖകൾ സ്ഥിരീകരിച്ചതായി അടയാളപ്പെടുത്തുന്നതിന് മുമ്പ് പരിശോധന ആവശ്യമാണ്.",
      errors: {
        enterName: "ദയവായി നിങ്ങളുടെ പേര് നൽകുക",
        enterAge: "ദയവായി നിങ്ങളുടെ വയസ്സ് നൽകുക",
        validAge: "ദയവായി സാധുവായ വയസ്സ് നൽകുക",
        selectGender: "ദയവായി നിങ്ങളുടെ ലിംഗം തിരഞ്ഞെടുക്കുക",
        enterPhone:
          "ദയവായി നിങ്ങളുടെ ഫോൺ നമ്പർ നൽകുക",
        validPhone:
          "സാധുവായ 10 അക്ക നമ്പർ നൽകുക",
      },
      speechErrors: {
        convertFailed:
          "നിങ്ങളുടെ ശബ്ദം ടെക്സ്റ്റിലേക്ക് മാറ്റാൻ കഴിഞ്ഞില്ല. വീണ്ടും ശ്രമിക്കുക.",
        permissionDenied:
          "മൈക്രോഫോൺ അനുമതി നിരസിച്ചു.",
        noMicrophone:
          "മൈക്രോഫോൺ കണ്ടെത്തിയില്ല.",
        unable:
          "മൈക്രോഫോൺ ആക്സസ് ചെയ്യാൻ കഴിഞ്ഞില്ല.",
      },
      aiErrors: {
        timeout:
          "MedX പ്രതികരിക്കാൻ കൂടുതൽ സമയം എടുക്കുന്നു. നിങ്ങളുടെ കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
        connection:
          "MedX ക്ലിനിക്കൽ ഇൻടേക്ക് സെർവറുമായി ബന്ധിപ്പിക്കാൻ കഴിഞ്ഞില്ല. വീണ്ടും ശ്രമിക്കുക.",
      },
    },
  },

  // =====================================================
  // ODIA
  // =====================================================

  or: {
    translation: {
      secure: "ସୁରକ୍ଷିତ",
      aiHealthcare: "AI ଆଧାରିତ ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
      yourHealth: "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ।",
      yourRecords: "ଆପଣଙ୍କ ରେକର୍ଡ।",
      onePlace: "ଗୋଟିଏ ସ୍ଥାନରେ।",
      description:
        "MedX ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସ ଏବଂ ଚିକିତ୍ସା ରେକର୍ଡକୁ ଏକ ସୁରକ୍ଷିତ ଏବଂ ବୁଦ୍ଧିମାନ ପ୍ଲାଟଫର୍ମରେ ଏକତ୍ର କରେ।",
      patients: "ରୋଗୀ",
      accuracy: "ସଠିକତା",
      avgIntake: "ହାରାହାରି ସମୟ",
      whoAreYouToday: "ଆଜି ଆପଣ କିଏ?",
      selectRole:
        "ଆରମ୍ଭ କରିବା ପାଇଁ ଆପଣଙ୍କ ଭୂମିକା ବାଛନ୍ତୁ",
      patient: "ରୋଗୀ",
      imPatient: "ମୁଁ ଜଣେ ରୋଗୀ",
      patientDescription:
        "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସ ରେକର୍ଡ କରନ୍ତୁ ଏବଂ ଚିକିତ୍ସା ରେକର୍ଡ ପରିଚାଳନା କରନ୍ତୁ।",
      healthcareProfessional:
        "ସ୍ୱାସ୍ଥ୍ୟ ସେବା ବୃତ୍ତିଗତ",
      imDoctor: "ମୁଁ ଜଣେ ଡାକ୍ତର",
      doctorDescription:
        "ରୋଗୀଙ୍କ ଇତିହାସ ସମୀକ୍ଷା କରନ୍ତୁ ଏବଂ କ୍ଲିନିକାଲ୍ ରେକର୍ଡ ପରିଚାଳନା କରନ୍ତୁ।",
      privacyNote:
        "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ଗୋପନୀୟତା ଏବଂ ସମ୍ମତିକୁ ଧ୍ୟାନରେ ରଖି ପରିଚାଳିତ ହୁଏ।",
      back: "ପଛକୁ",
      profile: "ପ୍ରୋଫାଇଲ୍",
      healthIntake: "ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା",
      records: "ରେକର୍ଡ",
      letsGetStarted: "ଆରମ୍ଭ କରିବା",
      tellUsAboutYourself:
        "ଆପଣଙ୍କ ବିଷୟରେ କୁହନ୍ତୁ",
      basicDetailsDescription:
        "ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ଆରମ୍ଭ କରିବା ପୂର୍ବରୁ ଆମକୁ କିଛି ମୌଳିକ ତଥ୍ୟ ଆବଶ୍ୟକ।",
      name: "ନାମ",
      age: "ବୟସ",
      gender: "ଲିଙ୍ଗ",
      phoneNumber: "ଫୋନ୍ ନମ୍ବର",
      placeholders: {
        fullName: "ଆପଣଙ୍କ ପୂର୍ଣ୍ଣ ନାମ ଦିଅନ୍ତୁ",
        age: "ଆପଣଙ୍କ ବୟସ",
        mobile: "10 ଅଙ୍କର ମୋବାଇଲ୍ ନମ୍ବର",
        response: "ନିଜ ଶବ୍ଦରେ କୁହନ୍ତୁ...",
      },
      genderOptions: {
        select: "ଲିଙ୍ଗ ବାଛନ୍ତୁ",
        male: "ପୁରୁଷ",
        female: "ମହିଳା",
        other: "ଅନ୍ୟ",
        preferNotToSay:
          "କହିବାକୁ ଇଚ୍ଛା ନାହିଁ",
      },
      continueToHealthIntake:
        "ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନାକୁ ଯାଆନ୍ତୁ",
      formSecurity:
        "ଆପଣଙ୍କ ସୂଚନା କେବଳ ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଯାତ୍ରା ପାଇଁ ବ୍ୟବହୃତ ହେବ।",
      medxAiAssistant: "MedX AI ସହାୟକ",
      understandFeeling:
        "ଆପଣ କିପରି ଅନୁଭବ କରୁଛନ୍ତି ବୁଝିବା।",
      answerQuestionsDescription:
        "ଏକ ବିକଳ୍ପ ବାଛି କିମ୍ବା ଆପଣଙ୍କ ଉତ୍ତର ଟାଇପ୍ କରି ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଅନ୍ତୁ।",
      medxClinicalAssistant:
        "MedX କ୍ଲିନିକାଲ୍ ସହାୟକ",
      onlineAiPowered:
        "ଅନଲାଇନ୍ · AI ଆଧାରିତ ସୂଚନା",
      connectionIssue: "ସଂଯୋଗ ସମସ୍ୟା",
      tryAgain: "ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ",
      continue: "ଜାରି ରଖନ୍ତୁ",
      intake: {
        selectOption:
          "ନିମ୍ନରେ ଥିବା ବିକଳ୍ପଗୁଡ଼ିକରୁ ଗୋଟିଏ ବାଛନ୍ତୁ।",
        selectYesNo:
          "ଦୟାକରି ହଁ କିମ୍ବା ନା ବାଛନ୍ତୁ।",
        typeOrVoice:
          "ଆପଣଙ୍କ ଉତ୍ତର ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା ଭଏସ୍ ଇନପୁଟ୍ ବ୍ୟବହାର କରନ୍ତୁ।",
      },
      voice: {
        stopListening: "ଶୁଣିବା ବନ୍ଦ କରନ୍ତୁ",
        input: "ଭଏସ୍ ଇନପୁଟ୍",
      },
      listening:
        "ଶୁଣୁଛି... ବର୍ତ୍ତମାନ କୁହନ୍ତୁ",
      intakeFooter:
        "ଆପଣଙ୍କ ଉତ୍ତରଗୁଡ଼ିକ ବ୍ୟକ୍ତିଗତ ଏବଂ ଜଣେ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ବୃତ୍ତିଗତଙ୍କ ଦ୍ୱାରା ସମୀକ୍ଷା କରାଯିବ।",
      historyReady:
        "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସ ପ୍ରସ୍ତୁତ।",
      historyReadyDescription:
        "ସ୍ୱାସ୍ଥ୍ୟ ସେବା ବୃତ୍ତିଗତଙ୍କ ସମୀକ୍ଷା ପାଇଁ MedX ଆପଣଙ୍କ ସୂଚନାକୁ ସଂଗଠିତ କରିଛି।",
      healthIntakeSummary:
        "ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ସାରାଂଶ",
      patientHistoryNotice:
        "ଏହା ରୋଗୀଙ୍କ ଦ୍ୱାରା ଦିଆଯାଇଥିବା ଇତିହାସ ଏବଂ ଏହା ଚିକିତ୍ସା ନିର୍ଣ୍ଣୟ ନୁହେଁ। ଜଣେ ଲାଇସେନ୍ସପ୍ରାପ୍ତ ସ୍ୱାସ୍ଥ୍ୟ ସେବା ବୃତ୍ତିଗତଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ।",
      continueToMedicalRecords:
        "ମେଡିକାଲ୍ ରେକର୍ଡକୁ ଯାଆନ୍ତୁ",
      patientPortal: "ରୋଗୀ ପୋର୍ଟାଲ୍",
      medicalRecords: "ଚିକିତ୍ସା ରେକର୍ଡ",
      medicalRecordsDescription:
        "ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସ ସୁରକ୍ଷିତ ଭାବେ ଗୋଟିଏ ସ୍ଥାନରେ ସଂଗଠିତ।",
      uploadDocument: "ଦଲିଲ ଅପଲୋଡ୍ କରନ୍ତୁ",
      recordsProtected:
        "ଆପଣଙ୍କ ଚିକିତ୍ସା ରେକର୍ଡ ସୁରକ୍ଷିତ",
      recordsProtectedDescription:
        "ଯାଞ୍ଚ ହୋଇଥିବା ରେକର୍ଡଗୁଡ଼ିକ କେବଳ ପଢ଼ାଯାଇପାରିବ ଏବଂ ପରିବର୍ତ୍ତନ କରାଯାଇପାରିବ ନାହିଁ।",
      searchRecords:
        "ଆପଣଙ୍କ ଚିକିତ୍ସା ରେକର୍ଡ ଖୋଜନ୍ତୁ...",
      categories: {
        all: "ସମସ୍ତ ଦଲିଲ",
        labReports: "ଲ୍ୟାବ୍ ରିପୋର୍ଟ",
        prescriptions: "ପ୍ରେସକ୍ରିପସନ୍",
        discharge: "ଡିସଚାର୍ଜ ସାରାଂଶ",
        other: "ଅନ୍ୟ ଦଲିଲ",
      },
      documents: "ଦଲିଲ",
      allYourRecords: "ଆପଣଙ୍କ ସମସ୍ତ ରେକର୍ଡ",
      readOnly: "କେବଳ ପଢ଼ିବା ପାଇଁ",
      pending: "ବିଚାରାଧୀନ",
      source: "ଉତ୍ସ",
      date: "ତାରିଖ",
      verified: "ଯାଞ୍ଚ ହୋଇଛି",
      pendingVerification:
        "ଯାଞ୍ଚ ବିଚାରାଧୀନ",
      view: "ଦେଖନ୍ତୁ",
      noRecordsFound:
        "କୌଣସି ରେକର୍ଡ ମିଳିଲା ନାହିଁ",
      noRecordsDescription:
        "ଆପଣଙ୍କ ସନ୍ଧାନ ବଦଳାନ୍ତୁ କିମ୍ବା ଏକ ନୂଆ ଦଲିଲ ଅପଲୋଡ୍ କରନ୍ତୁ।",
      medicalDocument: "ଚିକିତ୍ସା ଦଲିଲ",
      uploadRecord: "ଏକ ରେକର୍ଡ ଅପଲୋଡ୍ କରନ୍ତୁ",
      uploadRecordDescription:
        "ଆପଣଙ୍କ MedX ସ୍ୱାସ୍ଥ୍ୟ ଇତିହାସରେ ପୂର୍ବରୁ ଥିବା ଚିକିତ୍ସା ଦଲିଲ ଯୋଡନ୍ତୁ।",
      fileSelected:
        "ଫାଇଲ୍ ଚୟନ ହୋଇଛି · ଅପଲୋଡ୍ ପାଇଁ ପ୍ରସ୍ତୁତ",
      chooseDocument: "ଦଲିଲ ବାଛନ୍ତୁ",
      acceptedFormats:
        "PDF, JPG କିମ୍ବା PNG ଗ୍ରହଣଯୋଗ୍ୟ",
      uploadVerificationWarning:
        "ଅପଲୋଡ୍ ହୋଇଥିବା ଦଲିଲଗୁଡ଼ିକୁ ଯାଞ୍ଚ ହୋଇଛି ବୋଲି ଚିହ୍ନିତ କରିବା ପୂର୍ବରୁ ଯାଞ୍ଚ ଆବଶ୍ୟକ।",
      errors: {
        enterName: "ଦୟାକରି ଆପଣଙ୍କ ନାମ ଦିଅନ୍ତୁ",
        enterAge: "ଦୟାକରି ଆପଣଙ୍କ ବୟସ ଦିଅନ୍ତୁ",
        validAge: "ଦୟାକରି ସଠିକ ବୟସ ଦିଅନ୍ତୁ",
        selectGender: "ଦୟାକରି ଆପଣଙ୍କ ଲିଙ୍ଗ ବାଛନ୍ତୁ",
        enterPhone: "ଦୟାକରି ଫୋନ୍ ନମ୍ବର ଦିଅନ୍ତୁ",
        validPhone:
          "ଏକ ସଠିକ 10 ଅଙ୍କର ନମ୍ବର ଦିଅନ୍ତୁ",
      },
      speechErrors: {
        convertFailed:
          "ଆପଣଙ୍କ କଥାକୁ ଟେକ୍ସଟରେ ପରିବର୍ତ୍ତନ କରିପାରିଲୁ ନାହିଁ। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
        permissionDenied:
          "ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ପ୍ରତ୍ୟାଖ୍ୟାନ ହୋଇଛି।",
        noMicrophone:
          "କୌଣସି ମାଇକ୍ରୋଫୋନ୍ ମିଳିଲା ନାହିଁ।",
        unable:
          "ମାଇକ୍ରୋଫୋନ୍ ପ୍ରବେଶ କରିପାରିଲୁ ନାହିଁ।",
      },
      aiErrors: {
        timeout:
          "MedX ଉତ୍ତର ଦେବାକୁ ଅଧିକ ସମୟ ନେଉଛି। ଆପଣଙ୍କ କନେକ୍ସନ୍ ଯାଞ୍ଚ କରି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
        connection:
          "MedX କ୍ଲିନିକାଲ୍ ଇନଟେକ୍ ସର୍ଭର ସହିତ ସଂଯୋଗ କରିପାରିଲା ନାହିଁ। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
      },
    },
  },

  // =====================================================
  // PUNJABI
  // =====================================================

  pa: {
    translation: {
      secure: "ਸੁਰੱਖਿਅਤ",
      aiHealthcare: "AI-ਅਧਾਰਿਤ ਸਿਹਤ ਸੇਵਾ",
      yourHealth: "ਤੁਹਾਡੀ ਸਿਹਤ।",
      yourRecords: "ਤੁਹਾਡੇ ਰਿਕਾਰਡ।",
      onePlace: "ਇੱਕੋ ਥਾਂ।",
      description:
        "MedX ਤੁਹਾਡੇ ਸਿਹਤ ਇਤਿਹਾਸ ਅਤੇ ਮੈਡੀਕਲ ਰਿਕਾਰਡਾਂ ਨੂੰ ਇੱਕ ਸੁਰੱਖਿਅਤ ਅਤੇ ਬੁੱਧੀਮਾਨ ਪਲੇਟਫਾਰਮ ਵਿੱਚ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।",
      patients: "ਮਰੀਜ਼",
      accuracy: "ਸ਼ੁੱਧਤਾ",
      avgIntake: "ਔਸਤ ਸਮਾਂ",
      whoAreYouToday: "ਅੱਜ ਤੁਸੀਂ ਕੌਣ ਹੋ?",
      selectRole:
        "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ",
      patient: "ਮਰੀਜ਼",
      imPatient: "ਮੈਂ ਮਰੀਜ਼ ਹਾਂ",
      patientDescription:
        "ਆਪਣਾ ਸਿਹਤ ਇਤਿਹਾਸ ਦਰਜ ਕਰੋ ਅਤੇ ਆਪਣੇ ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।",
      healthcareProfessional:
        "ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ",
      imDoctor: "ਮੈਂ ਡਾਕਟਰ ਹਾਂ",
      doctorDescription:
        "ਮਰੀਜ਼ਾਂ ਦੇ ਇਤਿਹਾਸ ਦੀ ਸਮੀਖਿਆ ਕਰੋ ਅਤੇ ਕਲੀਨਿਕਲ ਰਿਕਾਰਡ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।",
      privacyNote:
        "ਤੁਹਾਡੀ ਸਿਹਤ ਜਾਣਕਾਰੀ ਨੂੰ ਨਿੱਜਤਾ ਅਤੇ ਸਹਿਮਤੀ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖ ਕੇ ਸੰਭਾਲਿਆ ਜਾਂਦਾ ਹੈ।",
      back: "ਵਾਪਸ",
      profile: "ਪ੍ਰੋਫਾਈਲ",
      healthIntake: "ਸਿਹਤ ਜਾਣਕਾਰੀ",
      records: "ਰਿਕਾਰਡ",
      letsGetStarted: "ਆਓ ਸ਼ੁਰੂ ਕਰੀਏ",
      tellUsAboutYourself:
        "ਆਪਣੇ ਬਾਰੇ ਦੱਸੋ",
      basicDetailsDescription:
        "ਸਿਹਤ ਜਾਣਕਾਰੀ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਾਨੂੰ ਕੁਝ ਬੁਨਿਆਦੀ ਵੇਰਵਿਆਂ ਦੀ ਲੋੜ ਹੈ।",
      name: "ਨਾਮ",
      age: "ਉਮਰ",
      gender: "ਲਿੰਗ",
      phoneNumber: "ਫ਼ੋਨ ਨੰਬਰ",
      placeholders: {
        fullName: "ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ",
        age: "ਤੁਹਾਡੀ ਉਮਰ",
        mobile: "10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ",
        response: "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ...",
      },
      genderOptions: {
        select: "ਲਿੰਗ ਚੁਣੋ",
        male: "ਮਰਦ",
        female: "ਔਰਤ",
        other: "ਹੋਰ",
        preferNotToSay:
          "ਦੱਸਣਾ ਪਸੰਦ ਨਹੀਂ",
      },
      continueToHealthIntake:
        "ਸਿਹਤ ਜਾਣਕਾਰੀ ਵੱਲ ਜਾਓ",
      formSecurity:
        "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਸਿਰਫ਼ ਤੁਹਾਡੀ ਸਿਹਤ ਯਾਤਰਾ ਲਈ ਵਰਤੀ ਜਾਵੇਗੀ।",
      medxAiAssistant: "MedX AI ਸਹਾਇਕ",
      understandFeeling:
        "ਆਓ ਸਮਝੀਏ ਕਿ ਤੁਸੀਂ ਕਿਵੇਂ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ।",
      answerQuestionsDescription:
        "ਇੱਕ ਵਿਕਲਪ ਚੁਣ ਕੇ ਜਾਂ ਆਪਣਾ ਜਵਾਬ ਲਿਖ ਕੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ।",
      medxClinicalAssistant:
        "MedX ਕਲੀਨਿਕਲ ਸਹਾਇਕ",
      onlineAiPowered:
        "ਔਨਲਾਈਨ · AI-ਅਧਾਰਿਤ ਜਾਣਕਾਰੀ",
      connectionIssue: "ਕਨੈਕਸ਼ਨ ਸਮੱਸਿਆ",
      tryAgain: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
      continue: "ਜਾਰੀ ਰੱਖੋ",
      intake: {
        selectOption:
          "ਹੇਠਾਂ ਦਿੱਤੇ ਵਿਕਲਪਾਂ ਵਿੱਚੋਂ ਇੱਕ ਚੁਣੋ।",
        selectYesNo:
          "ਕਿਰਪਾ ਕਰਕੇ ਹਾਂ ਜਾਂ ਨਹੀਂ ਚੁਣੋ।",
        typeOrVoice:
          "ਆਪਣਾ ਜਵਾਬ ਲਿਖੋ ਜਾਂ ਆਵਾਜ਼ ਇਨਪੁੱਟ ਵਰਤੋ।",
      },
      voice: {
        stopListening: "ਸੁਣਨਾ ਬੰਦ ਕਰੋ",
        input: "ਆਵਾਜ਼ ਇਨਪੁੱਟ",
      },
      listening:
        "ਸੁਣ ਰਿਹਾ ਹੈ... ਹੁਣ ਬੋਲੋ",
      intakeFooter:
        "ਤੁਹਾਡੇ ਜਵਾਬ ਨਿੱਜੀ ਹਨ ਅਤੇ ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ ਦੁਆਰਾ ਸਮੀਖਿਆ ਕੀਤੇ ਜਾਣਗੇ।",
      historyReady:
        "ਤੁਹਾਡਾ ਸਿਹਤ ਇਤਿਹਾਸ ਤਿਆਰ ਹੈ।",
      historyReadyDescription:
        "MedX ਨੇ ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ ਦੀ ਸਮੀਖਿਆ ਲਈ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਨੂੰ ਵਿਵਸਥਿਤ ਕੀਤਾ ਹੈ।",
      healthIntakeSummary:
        "ਸਿਹਤ ਜਾਣਕਾਰੀ ਦਾ ਸਾਰ",
      patientHistoryNotice:
        "ਇਹ ਮਰੀਜ਼ ਦੁਆਰਾ ਦਿੱਤਾ ਗਿਆ ਇਤਿਹਾਸ ਹੈ ਅਤੇ ਮੈਡੀਕਲ ਨਿਦਾਨ ਨਹੀਂ ਹੈ। ਲਾਇਸੰਸਸ਼ੁਦਾ ਸਿਹਤ ਸੇਵਾ ਪੇਸ਼ੇਵਰ ਨਾਲ ਸਲਾਹ ਕਰੋ।",
      continueToMedicalRecords:
        "ਮੈਡੀਕਲ ਰਿਕਾਰਡਾਂ ਵੱਲ ਜਾਓ",
      patientPortal: "ਮਰੀਜ਼ ਪੋਰਟਲ",
      medicalRecords: "ਮੈਡੀਕਲ ਰਿਕਾਰਡ",
      medicalRecordsDescription:
        "ਤੁਹਾਡਾ ਸਿਹਤ ਇਤਿਹਾਸ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਇੱਕੋ ਥਾਂ ਤੇ ਵਿਵਸਥਿਤ ਹੈ।",
      uploadDocument: "ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ",
      recordsProtected:
        "ਤੁਹਾਡੇ ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਸੁਰੱਖਿਅਤ ਹਨ",
      recordsProtectedDescription:
        "ਪ੍ਰਮਾਣਿਤ ਰਿਕਾਰਡ ਸਿਰਫ਼ ਪੜ੍ਹੇ ਜਾ ਸਕਦੇ ਹਨ ਅਤੇ ਬਦਲੇ ਨਹੀਂ ਜਾ ਸਕਦੇ।",
      searchRecords:
        "ਆਪਣੇ ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਖੋਜੋ...",
      categories: {
        all: "ਸਾਰੇ ਦਸਤਾਵੇਜ਼",
        labReports: "ਲੈਬ ਰਿਪੋਰਟਾਂ",
        prescriptions: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ",
        discharge: "ਡਿਸਚਾਰਜ ਸਾਰਾਂਸ਼",
        other: "ਹੋਰ ਦਸਤਾਵੇਜ਼",
      },
      documents: "ਦਸਤਾਵੇਜ਼",
      allYourRecords: "ਤੁਹਾਡੇ ਸਾਰੇ ਰਿਕਾਰਡ",
      readOnly: "ਸਿਰਫ਼ ਪੜ੍ਹਨ ਲਈ",
      pending: "ਬਕਾਇਆ",
      source: "ਸਰੋਤ",
      date: "ਤਾਰੀਖ",
      verified: "ਪ੍ਰਮਾਣਿਤ",
      pendingVerification:
        "ਤਸਦੀਕ ਬਕਾਇਆ",
      view: "ਵੇਖੋ",
      noRecordsFound:
        "ਕੋਈ ਰਿਕਾਰਡ ਨਹੀਂ ਮਿਲਿਆ",
      noRecordsDescription:
        "ਆਪਣੀ ਖੋਜ ਬਦਲੋ ਜਾਂ ਨਵਾਂ ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ।",
      medicalDocument: "ਮੈਡੀਕਲ ਦਸਤਾਵੇਜ਼",
      uploadRecord: "ਇੱਕ ਰਿਕਾਰਡ ਅਪਲੋਡ ਕਰੋ",
      uploadRecordDescription:
        "ਆਪਣੇ MedX ਸਿਹਤ ਇਤਿਹਾਸ ਵਿੱਚ ਪਿਛਲਾ ਮੈਡੀਕਲ ਦਸਤਾਵੇਜ਼ ਸ਼ਾਮਲ ਕਰੋ।",
      fileSelected:
        "ਫਾਈਲ ਚੁਣੀ ਗਈ · ਅਪਲੋਡ ਲਈ ਤਿਆਰ",
      chooseDocument: "ਇੱਕ ਦਸਤਾਵੇਜ਼ ਚੁਣੋ",
      acceptedFormats:
        "PDF, JPG ਜਾਂ PNG ਸਵੀਕਾਰਯੋਗ ਹਨ",
      uploadVerificationWarning:
        "ਅਪਲੋਡ ਕੀਤੇ ਦਸਤਾਵੇਜ਼ਾਂ ਨੂੰ ਪ੍ਰਮਾਣਿਤ ਵਜੋਂ ਦਰਜ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤਸਦੀਕ ਦੀ ਲੋੜ ਹੋਵੇਗੀ।",
      errors: {
        enterName: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ",
        enterAge: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਉਮਰ ਦਰਜ ਕਰੋ",
        validAge: "ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਉਮਰ ਦਰਜ ਕਰੋ",
        selectGender: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਲਿੰਗ ਚੁਣੋ",
        enterPhone:
          "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਫ਼ੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ",
        validPhone:
          "ਸਹੀ 10 ਅੰਕਾਂ ਦਾ ਨੰਬਰ ਦਰਜ ਕਰੋ",
      },
      speechErrors: {
        convertFailed:
          "ਤੁਹਾਡੀ ਆਵਾਜ਼ ਨੂੰ ਟੈਕਸਟ ਵਿੱਚ ਬਦਲ ਨਹੀਂ ਸਕੇ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        permissionDenied:
          "ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਮਿਲੀ।",
        noMicrophone:
          "ਕੋਈ ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਨਹੀਂ ਮਿਲਿਆ।",
        unable:
          "ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਤੱਕ ਪਹੁੰਚ ਨਹੀਂ ਹੋ ਸਕੀ।",
      },
      aiErrors: {
        timeout:
          "MedX ਜਵਾਬ ਦੇਣ ਵਿੱਚ ਜ਼ਿਆਦਾ ਸਮਾਂ ਲੈ ਰਿਹਾ ਹੈ। ਆਪਣਾ ਕਨੈਕਸ਼ਨ ਜਾਂਚੋ ਅਤੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        connection:
          "MedX ਕਲੀਨਿਕਲ ਇਨਟੇਕ ਸਰਵਰ ਨਾਲ ਕਨੈਕਟ ਨਹੀਂ ਹੋ ਸਕਿਆ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      },
    },
  },

  // =====================================================
  // ASSAMESE
  // =====================================================

  as: {
    translation: {
      secure: "সুৰক্ষিত",
      aiHealthcare: "AI-চালিত স্বাস্থ্যসেৱা",
      yourHealth: "আপোনাৰ স্বাস্থ্য।",
      yourRecords: "আপোনাৰ ৰেকৰ্ড।",
      onePlace: "এটা ঠাইত।",
      description:
        "MedX-এ আপোনাৰ স্বাস্থ্যৰ ইতিহাস আৰু চিকিৎসা ৰেকৰ্ডক এটা সুৰক্ষিত আৰু বুদ্ধিমান প্লেটফৰ্মত একত্ৰিত কৰে।",
      patients: "ৰোগী",
      accuracy: "সঠিকতা",
      avgIntake: "গড় সময়",
      whoAreYouToday: "আজি আপুনি কোন?",
      selectRole:
        "আৰম্ভ কৰিবলৈ আপোনাৰ ভূমিকা বাছনি কৰক",
      patient: "ৰোগী",
      imPatient: "মই এজন ৰোগী",
      patientDescription:
        "আপোনাৰ স্বাস্থ্যৰ ইতিহাস ৰেকৰ্ড কৰক আৰু চিকিৎসা ৰেকৰ্ড পৰিচালনা কৰক।",
      healthcareProfessional:
        "স্বাস্থ্যসেৱা পেছাদাৰী",
      imDoctor: "মই এজন চিকিৎসক",
      doctorDescription:
        "ৰোগীৰ ইতিহাস পৰ্যালোচনা কৰক আৰু ক্লিনিকেল ৰেকৰ্ড পৰিচালনা কৰক।",
      privacyNote:
        "আপোনাৰ স্বাস্থ্যৰ তথ্য গোপনীয়তা আৰু সন্মতিৰ কথা বিবেচনা কৰি পৰিচালনা কৰা হয়।",
      back: "পিছলৈ",
      profile: "প্ৰফাইল",
      healthIntake: "স্বাস্থ্য তথ্য",
      records: "ৰেকৰ্ড",
      letsGetStarted: "আৰম্ভ কৰোঁ",
      tellUsAboutYourself:
        "আপোনাৰ বিষয়ে কওক",
      basicDetailsDescription:
        "স্বাস্থ্য তথ্য আৰম্ভ কৰাৰ আগতে আমাক কিছুমান মৌলিক তথ্যৰ প্ৰয়োজন।",
      name: "নাম",
      age: "বয়স",
      gender: "লিংগ",
      phoneNumber: "ফোন নম্বৰ",
      placeholders: {
        fullName: "আপোনাৰ সম্পূৰ্ণ নাম লিখক",
        age: "আপোনাৰ বয়স",
        mobile: "১০ সংখ্যাৰ মোবাইল নম্বৰ",
        response: "নিজৰ ভাষাত কওক...",
      },
      genderOptions: {
        select: "লিংগ বাছনি কৰক",
        male: "পুৰুষ",
        female: "মহিলা",
        other: "অন্যান্য",
        preferNotToSay:
          "ক'বলৈ ইচ্ছা নকৰোঁ",
      },
      continueToHealthIntake:
        "স্বাস্থ্য তথ্যলৈ যাওক",
      formSecurity:
        "আপোনাৰ তথ্য কেৱল আপোনাৰ স্বাস্থ্য যাত্ৰাৰ বাবে ব্যৱহাৰ কৰা হ'ব।",
      medxAiAssistant: "MedX AI সহায়ক",
      understandFeeling:
        "আপুনি কেনে অনুভৱ কৰিছে সেয়া বুজি লওঁ আহক।",
      answerQuestionsDescription:
        "এটা বিকল্প বাছনি কৰি বা আপোনাৰ উত্তৰ টাইপ কৰি প্ৰশ্নসমূহৰ উত্তৰ দিয়ক।",
      medxClinicalAssistant:
        "MedX ক্লিনিকেল সহায়ক",
      onlineAiPowered:
        "অনলাইন · AI-চালিত তথ্য",
      connectionIssue: "সংযোগৰ সমস্যা",
      tryAgain: "পুনৰ চেষ্টা কৰক",
      continue: "আগবাঢ়ক",
      intake: {
        selectOption:
          "তলৰ বিকল্পসমূহৰ পৰা এটা বাছনি কৰক।",
        selectYesNo:
          "অনুগ্ৰহ কৰি হয় বা নহয় বাছনি কৰক।",
        typeOrVoice:
          "আপোনাৰ উত্তৰ টাইপ কৰক বা ভইচ ইনপুট ব্যৱহাৰ কৰক।",
      },
      voice: {
        stopListening: "শুনা বন্ধ কৰক",
        input: "ভইচ ইনপুট",
      },
      listening:
        "শুনি আছোঁ... এতিয়া কওক",
      intakeFooter:
        "আপোনাৰ উত্তৰসমূহ ব্যক্তিগত আৰু স্বাস্থ্যসেৱা পেছাদাৰীয়ে পৰ্যালোচনা কৰিব।",
      historyReady:
        "আপোনাৰ স্বাস্থ্য ইতিহাস প্ৰস্তুত।",
      historyReadyDescription:
        "স্বাস্থ্যসেৱা পেছাদাৰীৰ পৰ্যালোচনাৰ বাবে MedX-এ আপোনাৰ তথ্য সংগঠিত কৰিছে।",
      healthIntakeSummary:
        "স্বাস্থ্য তথ্যৰ সাৰাংশ",
      patientHistoryNotice:
        "এইটো ৰোগীয়ে দিয়া স্বাস্থ্য ইতিহাস আৰু ই কোনো চিকিৎসা নিৰ্ণয় নহয়। অনুজ্ঞাপ্ৰাপ্ত স্বাস্থ্যসেৱা পেছাদাৰীৰ পৰামৰ্শ লওক।",
      continueToMedicalRecords:
        "চিকিৎসা ৰেকৰ্ডলৈ যাওক",
      patientPortal: "ৰোগী প'ৰ্টেল",
      medicalRecords: "চিকিৎসা ৰেকৰ্ড",
      medicalRecordsDescription:
        "আপোনাৰ স্বাস্থ্য ইতিহাস সুৰক্ষিতভাৱে এটা ঠাইত সংগঠিত কৰা হৈছে।",
      uploadDocument: "নথি আপলোড কৰক",
      recordsProtected:
        "আপোনাৰ চিকিৎসা ৰেকৰ্ড সুৰক্ষিত",
      recordsProtectedDescription:
        "যাচাইকৃত ৰেকৰ্ড কেৱল পঢ়িব পাৰি আৰু সলনি কৰিব নোৱাৰি।",
      searchRecords:
        "আপোনাৰ চিকিৎসা ৰেকৰ্ড বিচাৰক...",
      categories: {
        all: "সকলো নথি",
        labReports: "লেব ৰিপ'ৰ্ট",
        prescriptions: "প্ৰেছক্ৰিপচন",
        discharge: "ডিছচাৰ্জ সাৰাংশ",
        other: "অন্যান্য নথি",
      },
      documents: "নথি",
      allYourRecords: "আপোনাৰ সকলো ৰেকৰ্ড",
      readOnly: "কেৱল পঢ়িবলৈ",
      pending: "অপেক্ষাৰত",
      source: "উৎস",
      date: "তাৰিখ",
      verified: "যাচাইকৃত",
      pendingVerification:
        "যাচাই অপেক্ষাৰত",
      view: "চাওক",
      noRecordsFound:
        "কোনো ৰেকৰ্ড পোৱা নগ'ল",
      noRecordsDescription:
        "আপোনাৰ সন্ধান সলনি কৰক বা নতুন নথি আপলোড কৰক।",
      medicalDocument: "চিকিৎসা নথি",
      uploadRecord: "এটা ৰেকৰ্ড আপলোড কৰক",
      uploadRecordDescription:
        "আপোনাৰ MedX স্বাস্থ্য ইতিহাসত এটা পূৰ্বৰ চিকিৎসা নথি যোগ কৰক।",
      fileSelected:
        "ফাইল নিৰ্বাচিত · আপলোডৰ বাবে প্ৰস্তুত",
      chooseDocument: "এটা নথি বাছনি কৰক",
      acceptedFormats:
        "PDF, JPG বা PNG গ্ৰহণযোগ্য",
      uploadVerificationWarning:
        "আপলোড কৰা নথিসমূহ যাচাইকৃত বুলি চিহ্নিত কৰাৰ আগতে পৰীক্ষাৰ প্ৰয়োজন হ'ব।",
      errors: {
        enterName: "অনুগ্ৰহ কৰি আপোনাৰ নাম দিয়ক",
        enterAge: "অনুগ্ৰহ কৰি আপোনাৰ বয়স দিয়ক",
        validAge: "অনুগ্ৰহ কৰি সঠিক বয়স দিয়ক",
        selectGender: "অনুগ্ৰহ কৰি আপোনাৰ লিংগ বাছনি কৰক",
        enterPhone:
          "অনুগ্ৰহ কৰি আপোনাৰ ফোন নম্বৰ দিয়ক",
        validPhone:
          "এটা সঠিক ১০ সংখ্যাৰ নম্বৰ দিয়ক",
      },
      speechErrors: {
        convertFailed:
          "আপোনাৰ কথাক টেক্সটলৈ ৰূপান্তৰ কৰিব পৰা নগ'ল। পুনৰ চেষ্টা কৰক।",
        permissionDenied:
          "মাইক্ৰ'ফোনৰ অনুমতি অস্বীকাৰ কৰা হৈছে।",
        noMicrophone:
          "কোনো মাইক্ৰ'ফোন পোৱা নগ'ল।",
        unable:
          "মাইক্ৰ'ফোনত প্ৰৱেশ কৰিব পৰা নগ'ল।",
      },
      aiErrors: {
        timeout:
          "MedX-এ উত্তৰ দিবলৈ অধিক সময় লৈছে। আপোনাৰ সংযোগ পৰীক্ষা কৰি পুনৰ চেষ্টা কৰক।",
        connection:
          "MedX ক্লিনিকেল ইনটেক ছাৰ্ভাৰৰ সৈতে সংযোগ কৰিব পৰা নগ'ল। পুনৰ চেষ্টা কৰক।",
      },
    },
  },

  // =====================================================
  // URDU
  // =====================================================

  ur: {
    translation: {
      secure: "محفوظ",
      aiHealthcare: "AI سے چلنے والی صحت کی خدمات",
      yourHealth: "آپ کی صحت۔",
      yourRecords: "آپ کے ریکارڈز۔",
      onePlace: "ایک جگہ۔",
      description:
        "MedX آپ کی صحت کی تاریخ اور طبی ریکارڈز کو ایک محفوظ اور ذہین پلیٹ فارم میں یکجا کرتا ہے۔",
      patients: "مریض",
      accuracy: "درستگی",
      avgIntake: "اوسط وقت",
      whoAreYouToday: "آج آپ کون ہیں؟",
      selectRole:
        "شروع کرنے کے لیے اپنا کردار منتخب کریں",
      patient: "مریض",
      imPatient: "میں مریض ہوں",
      patientDescription:
        "اپنی صحت کی تاریخ ریکارڈ کریں اور اپنے طبی ریکارڈز کا انتظام کریں۔",
      healthcareProfessional:
        "صحت کی خدمات کا ماہر",
      imDoctor: "میں ڈاکٹر ہوں",
      doctorDescription:
        "مریضوں کی تاریخ کا جائزہ لیں اور طبی ریکارڈز کا انتظام کریں۔",
      privacyNote:
        "آپ کی صحت کی معلومات کو رازداری اور رضامندی کو مدنظر رکھتے ہوئے سنبھالا جاتا ہے۔",
      back: "واپس",
      profile: "پروفائل",
      healthIntake: "صحت کی معلومات",
      records: "ریکارڈز",
      letsGetStarted: "آئیے شروع کریں",
      tellUsAboutYourself:
        "اپنے بارے میں بتائیں",
      basicDetailsDescription:
        "صحت کی معلومات شروع کرنے سے پہلے ہمیں صرف چند بنیادی تفصیلات درکار ہیں۔",
      name: "نام",
      age: "عمر",
      gender: "جنس",
      phoneNumber: "فون نمبر",
      placeholders: {
        fullName: "اپنا پورا نام درج کریں",
        age: "آپ کی عمر",
        mobile: "10 ہندسوں کا موبائل نمبر",
        response: "اپنے الفاظ میں بتائیں...",
      },
      genderOptions: {
        select: "جنس منتخب کریں",
        male: "مرد",
        female: "عورت",
        other: "دیگر",
        preferNotToSay:
          "بتانا پسند نہیں",
      },
      continueToHealthIntake:
        "صحت کی معلومات پر جائیں",
      formSecurity:
        "آپ کی معلومات صرف آپ کی صحت کے سفر کے لیے استعمال کی جائیں گی۔",
      medxAiAssistant: "MedX AI معاون",
      understandFeeling:
        "آئیے سمجھتے ہیں کہ آپ کیسا محسوس کر رہے ہیں۔",
      answerQuestionsDescription:
        "ایک آپشن منتخب کرکے یا اپنا جواب ٹائپ کرکے سوالات کے جواب دیں۔",
      medxClinicalAssistant:
        "MedX طبی معاون",
      onlineAiPowered:
        "آن لائن · AI سے چلنے والی معلومات",
      connectionIssue: "کنکشن کا مسئلہ",
      tryAgain: "دوبارہ کوشش کریں",
      continue: "جاری رکھیں",
      intake: {
        selectOption:
          "ذیل میں دیے گئے آپشنز میں سے ایک منتخب کریں۔",
        selectYesNo:
          "براہ کرم ہاں یا نہیں منتخب کریں۔",
        typeOrVoice:
          "اپنا جواب ٹائپ کریں یا آواز کا استعمال کریں۔",
      },
      voice: {
        stopListening: "سننا بند کریں",
        input: "آواز کا ان پٹ",
      },
      listening:
        "سن رہا ہے... اب بولیں",
      intakeFooter:
        "آپ کے جوابات نجی ہیں اور صحت کی خدمات کے ماہر ان کا جائزہ لیں گے۔",
      historyReady:
        "آپ کی صحت کی تاریخ تیار ہے۔",
      historyReadyDescription:
        "MedX نے صحت کے ماہر کے جائزے کے لیے آپ کی معلومات کو منظم کر دیا ہے۔",
      healthIntakeSummary:
        "صحت کی معلومات کا خلاصہ",
      patientHistoryNotice:
        "یہ مریض کی فراہم کردہ تاریخ ہے اور طبی تشخیص نہیں ہے۔ لائسنس یافتہ صحت کے ماہر سے مشورہ کریں۔",
      continueToMedicalRecords:
        "طبی ریکارڈز پر جائیں",
      patientPortal: "مریض پورٹل",
      medicalRecords: "طبی ریکارڈز",
      medicalRecordsDescription:
        "آپ کی صحت کی تاریخ محفوظ طریقے سے ایک جگہ منظم ہے۔",
      uploadDocument: "دستاویز اپ لوڈ کریں",
      recordsProtected:
        "آپ کے طبی ریکارڈ محفوظ ہیں",
      recordsProtectedDescription:
        "تصدیق شدہ ریکارڈ صرف پڑھنے کے لیے ہوتے ہیں اور ان میں تبدیلی نہیں کی جا سکتی۔",
      searchRecords:
        "اپنے طبی ریکارڈز تلاش کریں...",
      categories: {
        all: "تمام دستاویزات",
        labReports: "لیب رپورٹس",
        prescriptions: "نسخے",
        discharge: "ڈسچارج خلاصے",
        other: "دیگر دستاویزات",
      },
      documents: "دستاویزات",
      allYourRecords: "آپ کے تمام ریکارڈز",
      readOnly: "صرف پڑھنے کے لیے",
      pending: "زیر التوا",
      source: "ماخذ",
      date: "تاریخ",
      verified: "تصدیق شدہ",
      pendingVerification:
        "تصدیق زیر التوا",
      view: "دیکھیں",
      noRecordsFound:
        "کوئی ریکارڈ نہیں ملا",
      noRecordsDescription:
        "اپنی تلاش تبدیل کریں یا نئی دستاویز اپ لوڈ کریں۔",
      medicalDocument: "طبی دستاویز",
      uploadRecord: "ایک ریکارڈ اپ لوڈ کریں",
      uploadRecordDescription:
        "اپنی MedX صحت کی تاریخ میں پچھلی طبی دستاویز شامل کریں۔",
      fileSelected:
        "فائل منتخب · اپ لوڈ کے لیے تیار",
      chooseDocument: "ایک دستاویز منتخب کریں",
      acceptedFormats:
        "PDF، JPG یا PNG قابل قبول ہیں",
      uploadVerificationWarning:
        "اپ لوڈ کی گئی دستاویزات کو تصدیق شدہ قرار دینے سے پہلے تصدیق ضروری ہوگی۔",
      errors: {
        enterName: "براہ کرم اپنا نام درج کریں",
        enterAge: "براہ کرم اپنی عمر درج کریں",
        validAge: "براہ کرم درست عمر درج کریں",
        selectGender: "براہ کرم اپنی جنس منتخب کریں",
        enterPhone:
          "براہ کرم اپنا فون نمبر درج کریں",
        validPhone:
          "درست 10 ہندسوں کا نمبر درج کریں",
      },
      speechErrors: {
        convertFailed:
          "آپ کی آواز کو متن میں تبدیل نہیں کیا جا سکا۔ دوبارہ کوشش کریں۔",
        permissionDenied:
          "مائیکروفون کی اجازت مسترد کر دی گئی۔",
        noMicrophone:
          "کوئی مائیکروفون نہیں ملا۔",
        unable:
          "مائیکروفون تک رسائی نہیں ہو سکی۔",
      },
      aiErrors: {
        timeout:
          "MedX جواب دینے میں زیادہ وقت لے رہا ہے۔ اپنا کنکشن چیک کریں اور دوبارہ کوشش کریں۔",
        connection:
          "MedX کلینیکل انٹیک سرور سے منسلک نہیں ہو سکا۔ دوبارہ کوشش کریں۔",
      },
    },
  },

  // =====================================================
  // NEPALI
  // =====================================================

  ne: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI-संचालित स्वास्थ्य सेवा",
      yourHealth: "तपाईंको स्वास्थ्य।",
      yourRecords: "तपाईंका रेकर्डहरू।",
      onePlace: "एउटै ठाउँमा।",
      description:
        "MedX ले तपाईंको स्वास्थ्य इतिहास र चिकित्सा रेकर्डहरूलाई सुरक्षित र बुद्धिमान प्लेटफर्ममा एकसाथ ल्याउँछ।",
      patients: "बिरामीहरू",
      accuracy: "शुद्धता",
      avgIntake: "औसत समय",
      whoAreYouToday: "आज तपाईं को हुनुहुन्छ?",
      selectRole:
        "सुरु गर्न आफ्नो भूमिका चयन गर्नुहोस्",
      patient: "बिरामी",
      imPatient: "म बिरामी हुँ",
      patientDescription:
        "आफ्नो स्वास्थ्य इतिहास रेकर्ड गर्नुहोस् र चिकित्सा रेकर्डहरू व्यवस्थापन गर्नुहोस्।",
      healthcareProfessional:
        "स्वास्थ्य सेवा पेशेवर",
      imDoctor: "म डाक्टर हुँ",
      doctorDescription:
        "बिरामीको इतिहास समीक्षा गर्नुहोस् र क्लिनिकल रेकर्डहरू व्यवस्थापन गर्नुहोस्।",
      privacyNote:
        "तपाईंको स्वास्थ्य जानकारी गोपनीयता र सहमतिको ध्यानमा राखेर व्यवस्थापन गरिन्छ।",
      back: "पछाडि",
      profile: "प्रोफाइल",
      healthIntake: "स्वास्थ्य जानकारी",
      records: "रेकर्डहरू",
      letsGetStarted: "सुरु गरौं",
      tellUsAboutYourself:
        "आफ्नो बारेमा बताउनुहोस्",
      basicDetailsDescription:
        "स्वास्थ्य जानकारी सुरु गर्नु अघि हामीलाई केही आधारभूत विवरण मात्र चाहिन्छ।",
      name: "नाम",
      age: "उमेर",
      gender: "लिङ्ग",
      phoneNumber: "फोन नम्बर",
      placeholders: {
        fullName: "आफ्नो पूरा नाम लेख्नुहोस्",
        age: "तपाईंको उमेर",
        mobile: "१० अंकको मोबाइल नम्बर",
        response: "आफ्नै शब्दमा भन्नुहोस्...",
      },
      genderOptions: {
        select: "लिङ्ग चयन गर्नुहोस्",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        preferNotToSay:
          "भन्न चाहन्न",
      },
      continueToHealthIntake:
        "स्वास्थ्य जानकारीमा जानुहोस्",
      formSecurity:
        "तपाईंको जानकारी तपाईंको स्वास्थ्य यात्राका लागि मात्र प्रयोग गरिनेछ।",
      medxAiAssistant: "MedX AI सहायक",
      understandFeeling:
        "तपाईं कस्तो महसुस गरिरहनुभएको छ बुझौं।",
      answerQuestionsDescription:
        "विकल्प चयन गरेर वा आफ्नो उत्तर टाइप गरेर प्रश्नहरूको उत्तर दिनुहोस्।",
      medxClinicalAssistant:
        "MedX क्लिनिकल सहायक",
      onlineAiPowered:
        "अनलाइन · AI-संचालित जानकारी",
      connectionIssue: "जडान समस्या",
      tryAgain: "फेरि प्रयास गर्नुहोस्",
      continue: "जारी राख्नुहोस्",
      intake: {
        selectOption:
          "तलका विकल्पहरूमध्ये एउटा चयन गर्नुहोस्।",
        selectYesNo:
          "कृपया हो वा होइन चयन गर्नुहोस्।",
        typeOrVoice:
          "आफ्नो उत्तर टाइप गर्नुहोस् वा आवाज इनपुट प्रयोग गर्नुहोस्।",
      },
      voice: {
        stopListening: "सुन्न बन्द गर्नुहोस्",
        input: "आवाज इनपुट",
      },
      listening:
        "सुनिरहेको छ... अहिले बोल्नुहोस्",
      intakeFooter:
        "तपाईंका उत्तरहरू निजी छन् र स्वास्थ्य सेवा पेशेवरद्वारा समीक्षा गरिनेछ।",
      historyReady:
        "तपाईंको स्वास्थ्य इतिहास तयार छ।",
      historyReadyDescription:
        "स्वास्थ्य सेवा पेशेवरको समीक्षाका लागि MedX ले तपाईंको जानकारी व्यवस्थित गरेको छ।",
      healthIntakeSummary:
        "स्वास्थ्य जानकारी सारांश",
      patientHistoryNotice:
        "यो बिरामीले दिएको इतिहास हो र चिकित्सा निदान होइन। लाइसेन्स प्राप्त स्वास्थ्य सेवा पेशेवरसँग परामर्श गर्नुहोस्।",
      continueToMedicalRecords:
        "चिकित्सा रेकर्डमा जानुहोस्",
      patientPortal: "बिरामी पोर्टल",
      medicalRecords: "चिकित्सा रेकर्ड",
      medicalRecordsDescription:
        "तपाईंको स्वास्थ्य इतिहास सुरक्षित रूपमा एउटै ठाउँमा व्यवस्थित गरिएको छ।",
      uploadDocument: "कागजात अपलोड गर्नुहोस्",
      recordsProtected:
        "तपाईंका चिकित्सा रेकर्डहरू सुरक्षित छन्",
      recordsProtectedDescription:
        "प्रमाणित रेकर्डहरू पढ्न मात्र मिल्छ र परिवर्तन गर्न सकिँदैन।",
      searchRecords:
        "आफ्ना चिकित्सा रेकर्डहरू खोज्नुहोस्...",
      categories: {
        all: "सबै कागजातहरू",
        labReports: "ल्याब रिपोर्टहरू",
        prescriptions: "प्रिस्क्रिप्सनहरू",
        discharge: "डिस्चार्ज सारांशहरू",
        other: "अन्य कागजातहरू",
      },
      documents: "कागजातहरू",
      allYourRecords: "तपाईंका सबै रेकर्डहरू",
      readOnly: "पढ्न मात्र",
      pending: "पेन्डिङ",
      source: "स्रोत",
      date: "मिति",
      verified: "प्रमाणित",
      pendingVerification:
        "प्रमाणीकरण पेन्डिङ",
      view: "हेर्नुहोस्",
      noRecordsFound:
        "कुनै रेकर्ड भेटिएन",
      noRecordsDescription:
        "आफ्नो खोज परिवर्तन गर्नुहोस् वा नयाँ कागजात अपलोड गर्नुहोस्।",
      medicalDocument: "चिकित्सा कागजात",
      uploadRecord: "रेकर्ड अपलोड गर्नुहोस्",
      uploadRecordDescription:
        "आफ्नो MedX स्वास्थ्य इतिहासमा अघिल्लो चिकित्सा कागजात थप्नुहोस्।",
      fileSelected:
        "फाइल चयन गरियो · अपलोड गर्न तयार",
      chooseDocument: "कागजात चयन गर्नुहोस्",
      acceptedFormats:
        "PDF, JPG वा PNG स्वीकार्य छन्",
      uploadVerificationWarning:
        "अपलोड गरिएका कागजातहरू प्रमाणित भनेर चिन्ह लगाउनु अघि प्रमाणीकरण आवश्यक हुनेछ।",
      errors: {
        enterName: "कृपया आफ्नो नाम लेख्नुहोस्",
        enterAge: "कृपया आफ्नो उमेर लेख्नुहोस्",
        validAge: "कृपया मान्य उमेर लेख्नुहोस्",
        selectGender: "कृपया आफ्नो लिङ्ग चयन गर्नुहोस्",
        enterPhone:
          "कृपया आफ्नो फोन नम्बर लेख्नुहोस्",
        validPhone:
          "मान्य १० अंकको नम्बर लेख्नुहोस्",
      },
      speechErrors: {
        convertFailed:
          "तपाईंको आवाजलाई पाठमा परिवर्तन गर्न सकिएन। फेरि प्रयास गर्नुहोस्।",
        permissionDenied:
          "माइक्रोफोन अनुमति अस्वीकार गरियो।",
        noMicrophone:
          "माइक्रोफोन भेटिएन।",
        unable:
          "माइक्रोफोन पहुँच गर्न सकिएन।",
      },
      aiErrors: {
        timeout:
          "MedX ले प्रतिक्रिया दिन धेरै समय लिइरहेको छ। आफ्नो जडान जाँच गर्नुहोस् र फेरि प्रयास गर्नुहोस्।",
        connection:
          "MedX क्लिनिकल इनटेक सर्भरसँग जडान हुन सकेन। फेरि प्रयास गर्नुहोस्।",
      },
    },
  },

  // =====================================================
  // KONKANI
  // =====================================================

  kok: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI-आधारीत आरोग्य सेवा",
      yourHealth: "तुमचें आरोग्य.",
      yourRecords: "तुमचे रेकॉर्ड.",
      onePlace: "एकाच जाग्यार.",
      description:
        "MedX तुमचो आरोग्य इतिहास आनी वैजकी रेकॉर्ड एक सुरक्षित आनी हुशार प्लॅटफॉर्माचेर एकठांय हाडटा.",
      patients: "रुग्ण",
      accuracy: "अचूकता",
      avgIntake: "सरासरी वेळ",
      whoAreYouToday: "आयज तुमी कोण?",
      selectRole:
        "सुरू करपाक तुमची भूमिका निवडात",
      patient: "रुग्ण",
      imPatient: "हांव रुग्ण आसां",
      patientDescription:
        "तुमचो आरोग्य इतिहास नोंद करात आनी तुमचे वैजकी रेकॉर्ड सांबाळात.",
      healthcareProfessional:
        "आरोग्य सेवा व्यावसायिक",
      imDoctor: "हांव डॉक्टर आसां",
      doctorDescription:
        "रुग्णांचो इतिहास पळोवचो आनी क्लिनिकल रेकॉर्ड सांबाळचो.",
      privacyNote:
        "तुमची आरोग्य माहिती गुप्तताय आनी संमती लक्षांत दवरून सांबाळली जाता.",
      back: "फाटीं",
      profile: "प्रोफायल",
      healthIntake: "आरोग्य माहिती",
      records: "रेकॉर्ड",
      letsGetStarted: "सुरू करया",
      tellUsAboutYourself:
        "तुमचे विशीं सांगात",
      basicDetailsDescription:
        "आरोग्य माहिती सुरू करपाच्या पयलीं आमकां कांय मूळ माहिती जाय.",
      name: "नांव",
      age: "वय",
      gender: "लिंग",
      phoneNumber: "फोन नंबर",
      placeholders: {
        fullName: "तुमचें पुराय नांव घालात",
        age: "तुमचें वय",
        mobile: "10 अंकांचो मोबायल नंबर",
        response: "तुमच्या उतरांनी सांगात...",
      },
      genderOptions: {
        select: "लिंग निवडात",
        male: "दादलो",
        female: "बायल",
        other: "हेर",
        preferNotToSay:
          "सांगपाक नाका",
      },
      continueToHealthIntake:
        "आरोग्य माहिती कडेन वचात",
      formSecurity:
        "तुमची माहिती फकत तुमच्या आरोग्य प्रवासाखातीर वापरली वतली.",
      medxAiAssistant: "MedX AI सहाय्यक",
      understandFeeling:
        "तुमकां कितें जाणोवता तें समजून घेया.",
      answerQuestionsDescription:
        "एक पर्याय निवडून वा तुमचें जाप टायप करून प्रस्नांची जाप दियात.",
      medxClinicalAssistant:
        "MedX क्लिनिकल सहाय्यक",
      onlineAiPowered:
        "ऑनलायन · AI-आधारीत माहिती",
      connectionIssue: "कनेक्शन समस्या",
      tryAgain: "परत प्रयत्न करात",
      continue: "फुडें वचात",
      intake: {
        selectOption:
          "सकयल दिल्ल्या पर्यायांतलो एक निवडात.",
        selectYesNo:
          "कृपा करून हय वा ना निवडात.",
        typeOrVoice:
          "तुमचें जाप टायप करात वा आवाज वापरात.",
      },
      voice: {
        stopListening: "आयकप बंद करात",
        input: "आवाज इनपुट",
      },
      listening:
        "आयकता... आतां उलयात",
      intakeFooter:
        "तुमची जाप खाजगी आसा आनी आरोग्य सेवा व्यावसायिक ती पळोवतलो.",
      historyReady:
        "तुमचो आरोग्य इतिहास तयार आसा.",
      historyReadyDescription:
        "आरोग्य सेवा व्यावसायिकाच्या तपासणी खातीर MedX तुमची माहिती नीट लायली आसा.",
      healthIntakeSummary:
        "आरोग्य माहिती सारांश",
      patientHistoryNotice:
        "हो रुग्णान दिल्लो इतिहास आसा आनी वैजकी निदान न्हय. परवानाधारक आरोग्य व्यावसायिकाचो सल्लो घेवचो.",
      continueToMedicalRecords:
        "वैजकी रेकॉर्डांक वचात",
      patientPortal: "रुग्ण पोर्टल",
      medicalRecords: "वैजकी रेकॉर्ड",
      medicalRecordsDescription:
        "तुमचो आरोग्य इतिहास सुरक्षित रितीन एकाच जाग्यार लायलो आसा.",
      uploadDocument: "दस्तावेज अपलोड करात",
      recordsProtected:
        "तुमचे वैजकी रेकॉर्ड सुरक्षित आसात",
      recordsProtectedDescription:
        "तपासलेले रेकॉर्ड फकत वाचपाक मेळटात आनी बदलपाक येना.",
      searchRecords:
        "तुमचे वैजकी रेकॉर्ड सोदात...",
      categories: {
        all: "सगळे दस्तावेज",
        labReports: "लॅब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "हेर दस्तावेज",
      },
      documents: "दस्तावेज",
      allYourRecords: "तुमचे सगळे रेकॉर्ड",
      readOnly: "फकत वाचपाक",
      pending: "प्रलंबित",
      source: "स्रोत",
      date: "तारीख",
      verified: "तपासलेले",
      pendingVerification:
        "तपासणी प्रलंबित",
      view: "पळोवचें",
      noRecordsFound:
        "रेकॉर्ड मेळना",
      noRecordsDescription:
        "तुमची सोद बदलात वा नवो दस्तावेज अपलोड करात.",
      medicalDocument: "वैजकी दस्तावेज",
      uploadRecord: "रेकॉर्ड अपलोड करात",
      uploadRecordDescription:
        "तुमच्या MedX आरोग्य इतिहासांत पयलींचो वैजकी दस्तावेज जोडात.",
      fileSelected:
        "फायल निवडल्या · अपलोड करपाक तयार",
      chooseDocument: "दस्तावेज निवडात",
      acceptedFormats:
        "PDF, JPG वा PNG मान्य आसात",
      uploadVerificationWarning:
        "अपलोड केल्ल्या दस्तावेजांची तपासणी जाल्या उपरांत तांकां तपासलेले म्हणपाक मेळटा.",
      errors: {
        enterName: "तुमचें नांव घालात",
        enterAge: "तुमचें वय घालात",
        validAge: "योग्य वय घालात",
        selectGender: "तुमचें लिंग निवडात",
        enterPhone: "तुमचो फोन नंबर घालात",
        validPhone:
          "योग्य 10 अंकांचो नंबर घालात",
      },
      speechErrors: {
        convertFailed:
          "तुमचो आवाज मजकुरांत बदलपाक जमलो ना. परत प्रयत्न करात.",
        permissionDenied:
          "मायक्रोफोनाची परवानगी नाकारली.",
        noMicrophone:
          "मायक्रोफोन मेळना.",
        unable:
          "मायक्रोफोन वापरपाक जमेना.",
      },
      aiErrors: {
        timeout:
          "MedX जाप दिवपाक चड वेळ घेता. तुमचें कनेक्शन तपासून परत प्रयत्न करात.",
        connection:
          "MedX क्लिनिकल इनटेक सर्व्हराक जोडू शकलें ना. परत प्रयत्न करात.",
      },
    },
  },

  // =====================================================
  // KASHMIRI
  // =====================================================

  ks: {
    translation: {
      secure: "محفوظ",
      aiHealthcare: "AI-چلاون وال صحت خدمت",
      yourHealth: "تُہند صحت۔",
      yourRecords: "تُہند ریکارڈ۔",
      onePlace: "اکھ جاے۔",
      description:
        "MedX تُہند صحت تاریخ تہ طبی ریکارڈ اکھ محفوظ تہ ذہین پلیٹ فارمَس منز جمع کران۔",
      patients: "مریض",
      accuracy: "درستی",
      avgIntake: "اوسط وقت",
      whoAreYouToday: "اَز تُہۍ کَس چھِو؟",
      selectRole:
        "شروع کرنہ خاطر پننہ کردار منتخب کریو",
      patient: "مریض",
      imPatient: "بہ چھُس مریض",
      patientDescription:
        "پنُن صحت تاریخ ریکارڈ کریو تہ طبی ریکارڈ سنبھالِو۔",
      healthcareProfessional:
        "صحت خدمت ماہر",
      imDoctor: "بہ چھُس ڈاکٹر",
      doctorDescription:
        "مریضن ہند تاریخ جائزہ کریو تہ طبی ریکارڈ سنبھالِو۔",
      privacyNote:
        "تُہند صحت معلومات رازداری تہ رضامندی خیال منز تھاونہ آسن۔",
      back: "واپس",
      profile: "پروفائل",
      healthIntake: "صحت معلومات",
      records: "ریکارڈ",
      letsGetStarted: "شروع کریو",
      tellUsAboutYourself:
        "پنن بارے منز وُچھِو",
      basicDetailsDescription:
        "صحت معلومات شروع کرنہ پَہلۍ اسہِ کینٛہ بنیادی تفصیل ضرورت چھِ۔",
      name: "ناو",
      age: "عمر",
      gender: "جنس",
      phoneNumber: "فون نمبر",
      placeholders: {
        fullName: "پنُن پورا ناو درج کریو",
        age: "تُہند عمر",
        mobile: "10 ہندسہ موبائل نمبر",
        response: "پننہ لفظن منز وُچھِو...",
      },
      genderOptions: {
        select: "جنس منتخب کریو",
        male: "مرد",
        female: "زن",
        other: "باقی",
        preferNotToSay:
          "بتاونہ پسند نَہ",
      },
      continueToHealthIntake:
        "صحت معلومات طرف وُچھِو",
      formSecurity:
        "تُہند معلومات صرف صحت سفر خاطر استعمال کرنہ آسن۔",
      medxAiAssistant: "MedX AI مددگار",
      understandFeeling:
        "تُہۍ کِتھ پٲٹھۍ محسوس کران چھِو، وُچھِو۔",
      answerQuestionsDescription:
        "اکھ آپشن منتخب کریو یا پنُن جواب ٹائپ کریو۔",
      medxClinicalAssistant:
        "MedX طبی مددگار",
      onlineAiPowered:
        "آن لائن · AI بنیاد معلومات",
      connectionIssue: "رابطہ مسئلہ",
      tryAgain: "دوبارہ کوشش کریو",
      continue: "جاری تھاو",
      intake: {
        selectOption:
          "کَتھ آپشنن منز اکھ منتخب کریو۔",
        selectYesNo:
          "براہ کرم ہاں یا نہ منتخب کریو۔",
        typeOrVoice:
          "پنُن جواب ٹائپ کریو یا آواز استعمال کریو۔",
      },
      voice: {
        stopListening: "سنن بند کریو",
        input: "آواز ان پٹ",
      },
      listening:
        "سنن چھُ... وُچھِو",
      intakeFooter:
        "تُہند جواب نجی چھِ تہ صحت ماہر سُہ جائزہ گژھان۔",
      historyReady:
        "تُہند صحت تاریخ تیار چھِ۔",
      historyReadyDescription:
        "MedX نِ صحت ماہر جائزہ خاطر تُہند معلومات ترتیب دِی۔",
      healthIntakeSummary:
        "صحت معلومات خلاصہ",
      patientHistoryNotice:
        "یہ مریض طرفہ دِیوم تاریخ چھِ، طبی تشخیص نہٕ۔ لائسنس یافتہ صحت ماہر سان مشورہ کریو۔",
      continueToMedicalRecords:
        "طبی ریکارڈ طرف وُچھِو",
      patientPortal: "مریض پورٹل",
      medicalRecords: "طبی ریکارڈ",
      medicalRecordsDescription:
        "تُہند صحت تاریخ محفوظ طریقہ سان اکھ جاے منز ترتیب دِیوم چھِ۔",
      uploadDocument: "دستاویز اپلوڈ کریو",
      recordsProtected:
        "تُہند طبی ریکارڈ محفوظ چھِ",
      recordsProtectedDescription:
        "تصدیق شدہ ریکارڈ صرف پڑھِتھ ہیکیو تہ بدلِتھ نَہ ہیکیو۔",
      searchRecords:
        "پنن طبی ریکارڈ تلاش کریو...",
      categories: {
        all: "سارے دستاویز",
        labReports: "لیب رپورٹ",
        prescriptions: "نسخہ",
        discharge: "ڈسچارج خلاصہ",
        other: "باقی دستاویز",
      },
      documents: "دستاویز",
      allYourRecords: "تُہند سارے ریکارڈ",
      readOnly: "صرف پڑھنے خاطر",
      pending: "زیر التوا",
      source: "ذریعہ",
      date: "تاریخ",
      verified: "تصدیق شدہ",
      pendingVerification:
        "تصدیق زیر التوا",
      view: "وُچھِو",
      noRecordsFound:
        "ریکارڈ نہٕ مِل",
      noRecordsDescription:
        "تلاش بدلِو یا نیا دستاویز اپلوڈ کریو۔",
      medicalDocument: "طبی دستاویز",
      uploadRecord: "اکھ ریکارڈ اپلوڈ کریو",
      uploadRecordDescription:
        "MedX صحت تاریخ منز پچھلا طبی دستاویز شامل کریو۔",
      fileSelected:
        "فائل منتخب · اپلوڈ خاطر تیار",
      chooseDocument: "دستاویز منتخب کریو",
      acceptedFormats:
        "PDF، JPG یا PNG قبول چھِ",
      uploadVerificationWarning:
        "اپلوڈ کرنہ آمت دستاویز تصدیق کرنہ پَہلۍ جانچ ضرورت چھِ۔",
      errors: {
        enterName: "مہربانی کرتھ پنُن ناو درج کریو",
        enterAge: "پنُن عمر درج کریو",
        validAge: "درست عمر درج کریو",
        selectGender: "پنُن جنس منتخب کریو",
        enterPhone:
          "پنُن فون نمبر درج کریو",
        validPhone:
          "درست 10 ہندسہ نمبر درج کریو",
      },
      speechErrors: {
        convertFailed:
          "تُہند آواز متن منز تبدیل نہٕ گژھ۔ دوبارہ کوشش کریو۔",
        permissionDenied:
          "مائکروفون اجازت رد گژھ۔",
        noMicrophone:
          "مائکروفون نہٕ مِل۔",
        unable:
          "مائکروفون تک رسائی نہٕ گژھ۔",
      },
      aiErrors: {
        timeout:
          "MedX جواب دِنہِ خاطر زیادہ وقت چھِ گژھان۔ کنکشن چیک کریو تہ دوبارہ کوشش کریو۔",
        connection:
          "MedX کلینیکل انٹیک سرور سان رابطہ نہٕ کرِتھ۔ دوبارہ کوشش کریو۔",
      },
    },
  },

  // =====================================================
  // SINDHI
  // =====================================================

  sd: {
    translation: {
      secure: "محفوظ",
      aiHealthcare: "AI تي هلندڙ صحت خدمتون",
      yourHealth: "توهان جي صحت.",
      yourRecords: "توهان جا رڪارڊ.",
      onePlace: "هڪ جاءِ تي.",
      description:
        "MedX توهان جي صحت جي تاريخ ۽ طبي رڪارڊ کي هڪ محفوظ ۽ ذهين پليٽ فارم تي گڏ ڪري ٿو.",
      patients: "مريض",
      accuracy: "درستگي",
      avgIntake: "اوسط وقت",
      whoAreYouToday: "اڄ توهان ڪير آهيو؟",
      selectRole:
        "شروع ڪرڻ لاءِ پنهنجو ڪردار چونڊيو",
      patient: "مريض",
      imPatient: "مان مريض آهيان",
      patientDescription:
        "پنهنجي صحت جي تاريخ رڪارڊ ڪريو ۽ طبي رڪارڊ سنڀاليو.",
      healthcareProfessional:
        "صحت جي خدمت جو ماهر",
      imDoctor: "مان ڊاڪٽر آهيان",
      doctorDescription:
        "مريضن جي تاريخ جو جائزو وٺو ۽ طبي رڪارڊ سنڀاليو.",
      privacyNote:
        "توهان جي صحت جي معلومات کي رازداري ۽ رضامندي کي نظر ۾ رکندي سنڀاليو ويندو آهي.",
      back: "واپس",
      profile: "پروفائل",
      healthIntake: "صحت جي معلومات",
      records: "رڪارڊ",
      letsGetStarted: "اچو شروع ڪريون",
      tellUsAboutYourself:
        "پنهنجي باري ۾ ٻڌايو",
      basicDetailsDescription:
        "صحت جي معلومات شروع ڪرڻ کان اڳ اسان کي ڪجهه بنيادي تفصيل گهرجن.",
      name: "نالو",
      age: "عمر",
      gender: "جنس",
      phoneNumber: "فون نمبر",
      placeholders: {
        fullName: "پنهنجو پورو نالو داخل ڪريو",
        age: "توهان جي عمر",
        mobile: "10 انگن وارو موبائل نمبر",
        response: "پنهنجن لفظن ۾ ٻڌايو...",
      },
      genderOptions: {
        select: "جنس چونڊيو",
        male: "مرد",
        female: "عورت",
        other: "ٻيو",
        preferNotToSay:
          "ٻڌائڻ پسند نه آهي",
      },
      continueToHealthIntake:
        "صحت جي معلومات ڏانهن وڃو",
      formSecurity:
        "توهان جي معلومات صرف توهان جي صحت جي سفر لاءِ استعمال ڪئي ويندي.",
      medxAiAssistant: "MedX AI مددگار",
      understandFeeling:
        "اچو سمجهون ته توهان ڪيئن محسوس ڪري رهيا آهيو.",
      answerQuestionsDescription:
        "هڪ آپشن چونڊي يا پنهنجو جواب لکي سوالن جا جواب ڏيو.",
      medxClinicalAssistant:
        "MedX طبي مددگار",
      onlineAiPowered:
        "آن لائن · AI تي هلندڙ معلومات",
      connectionIssue: "رابطي جو مسئلو",
      tryAgain: "ٻيهر ڪوشش ڪريو",
      continue: "جاري رکو",
      intake: {
        selectOption:
          "هيٺ ڏنل آپشنن مان هڪ چونڊيو.",
        selectYesNo:
          "مهرباني ڪري ها يا نه چونڊيو.",
        typeOrVoice:
          "پنهنجو جواب لکو يا آواز استعمال ڪريو.",
      },
      voice: {
        stopListening: "ٻڌڻ بند ڪريو",
        input: "آواز ان پٽ",
      },
      listening:
        "ٻڌي رهيو آهي... هاڻي ڳالهايو",
      intakeFooter:
        "توهان جا جواب نجي آهن ۽ صحت جي ماهر طرفان جائزو ورتو ويندو.",
      historyReady:
        "توهان جي صحت جي تاريخ تيار آهي.",
      historyReadyDescription:
        "MedX صحت جي ماهر جي جائزي لاءِ توهان جي معلومات کي ترتيب ڏنو آهي.",
      healthIntakeSummary:
        "صحت جي معلومات جو خلاصو",
      patientHistoryNotice:
        "هي مريض طرفان ڏنل تاريخ آهي ۽ طبي تشخيص ناهي. لائسنس يافته صحت جي ماهر سان صلاح ڪريو.",
      continueToMedicalRecords:
        "طبي رڪارڊ ڏانهن وڃو",
      patientPortal: "مريض پورٽل",
      medicalRecords: "طبي رڪارڊ",
      medicalRecordsDescription:
        "توهان جي صحت جي تاريخ محفوظ طريقي سان هڪ جاءِ تي ترتيب ڏنل آهي.",
      uploadDocument: "دستاويز اپلوڊ ڪريو",
      recordsProtected:
        "توهان جا طبي رڪارڊ محفوظ آهن",
      recordsProtectedDescription:
        "تصديق ٿيل رڪارڊ صرف پڙهي سگهجن ٿا ۽ تبديل نٿا ڪري سگهجن.",
      searchRecords:
        "پنهنجا طبي رڪارڊ ڳوليو...",
      categories: {
        all: "سڀ دستاويز",
        labReports: "ليبارٽري رپورٽون",
        prescriptions: "نسخا",
        discharge: "ڊسچارج خلاصا",
        other: "ٻيا دستاويز",
      },
      documents: "دستاويز",
      allYourRecords: "توهان جا سڀ رڪارڊ",
      readOnly: "صرف پڙهڻ لاءِ",
      pending: "التوا ۾",
      source: "ذريعو",
      date: "تاريخ",
      verified: "تصديق ٿيل",
      pendingVerification:
        "تصديق التوا ۾",
      view: "ڏسو",
      noRecordsFound:
        "ڪو رڪارڊ نه مليو",
      noRecordsDescription:
        "پنهنجي ڳولا تبديل ڪريو يا نئون دستاويز اپلوڊ ڪريو.",
      medicalDocument: "طبي دستاويز",
      uploadRecord: "هڪ رڪارڊ اپلوڊ ڪريو",
      uploadRecordDescription:
        "پنهنجي MedX صحت جي تاريخ ۾ اڳوڻو طبي دستاويز شامل ڪريو.",
      fileSelected:
        "فائل چونڊيل · اپلوڊ لاءِ تيار",
      chooseDocument: "هڪ دستاويز چونڊيو",
      acceptedFormats:
        "PDF، JPG يا PNG قبول آهن",
      uploadVerificationWarning:
        "اپلوڊ ٿيل دستاويزن کي تصديق ٿيل نشان ڏيڻ کان اڳ تصديق ضروري هوندي.",
      errors: {
        enterName: "مهرباني ڪري پنهنجو نالو داخل ڪريو",
        enterAge: "مهرباني ڪري پنهنجي عمر داخل ڪريو",
        validAge: "مهرباني ڪري صحيح عمر داخل ڪريو",
        selectGender: "مهرباني ڪري پنهنجي جنس چونڊيو",
        enterPhone:
          "مهرباني ڪري پنهنجو فون نمبر داخل ڪريو",
        validPhone:
          "صحيح 10 انگن وارو نمبر داخل ڪريو",
      },
      speechErrors: {
        convertFailed:
          "توهان جي آواز کي متن ۾ تبديل نه ڪري سگهيا. ٻيهر ڪوشش ڪريو.",
        permissionDenied:
          "مائڪروفون جي اجازت رد ڪئي وئي.",
        noMicrophone:
          "ڪو مائڪروفون نه مليو.",
        unable:
          "مائڪروفون تائين رسائي نه ٿي سگهي.",
      },
      aiErrors: {
        timeout:
          "MedX جواب ڏيڻ ۾ وڌيڪ وقت وٺي رهيو آهي. پنهنجو ڪنيڪشن چيڪ ڪريو ۽ ٻيهر ڪوشش ڪريو.",
        connection:
          "MedX ڪلينڪل انٽيڪ سرور سان ڳنڍجي نه سگهيو. ٻيهر ڪوشش ڪريو.",
      },
    },
  },

  // =====================================================
  // SANSKRIT
  // =====================================================

  sa: {
    translation: {
      secure: "सुरक्षितम्",
      aiHealthcare: "AI-आधारित स्वास्थ्यसेवा",
      yourHealth: "भवतः स्वास्थ्यं।",
      yourRecords: "भवतः अभिलेखाः।",
      onePlace: "एकस्मिन् स्थाने।",
      description:
        "MedX भवतः स्वास्थ्येतिहासं चिकित्सकीय-अभिलेखांश्च सुरक्षित-बुद्धिमति-मञ्चे एकत्र आनयति।",
      patients: "रोगिणः",
      accuracy: "सटीकता",
      avgIntake: "औसतसमयः",
      whoAreYouToday: "अद्य भवान् कः?",
      selectRole:
        "आरम्भाय स्वभूमिकां चिनुत",
      patient: "रोगी",
      imPatient: "अहं रोगी अस्मि",
      patientDescription:
        "स्वास्थ्येतिहासं लिखन्तु तथा चिकित्सकीय-अभिलेखान् प्रबन्धयन्तु।",
      healthcareProfessional:
        "स्वास्थ्यसेवा-विशेषज्ञः",
      imDoctor: "अहं चिकित्सकः अस्मि",
      doctorDescription:
        "रोगिणां इतिहासं परीक्ष्य चिकित्सकीय-अभिलेखान् प्रबन्धयन्तु।",
      privacyNote:
        "भवतः स्वास्थ्यसूचना गोपनीयतां सम्मतिं च विचार्य रक्ष्यते।",
      back: "पृष्ठतः",
      profile: "प्रोफाइल्",
      healthIntake: "स्वास्थ्यसूचना",
      records: "अभिलेखाः",
      letsGetStarted: "आरभामहे",
      tellUsAboutYourself:
        "आत्मनः विषये कथयतु",
      basicDetailsDescription:
        "स्वास्थ्यसूचनां आरभ्यतुं पूर्वं केवलं कतिपयाः मूलविवरणाः आवश्यकाः।",
      name: "नाम",
      age: "वयः",
      gender: "लिङ्गम्",
      phoneNumber: "दूरभाष-सङ्ख्या",
      placeholders: {
        fullName: "पूर्णनाम लिखन्तु",
        age: "भवतः वयः",
        mobile: "दशाङ्कीयः मोबाइल्-सङ्ख्या",
        response: "स्वशब्दैः कथयतु...",
      },
      genderOptions: {
        select: "लिङ्गं चिनुत",
        male: "पुरुषः",
        female: "स्त्री",
        other: "अन्यत्",
        preferNotToSay:
          "वक्तुं नेच्छामि",
      },
      continueToHealthIntake:
        "स्वास्थ्यसूचनां प्रति गच्छतु",
      formSecurity:
        "भवतः सूचना केवलं भवतः स्वास्थ्ययात्रायै उपयुज्यते।",
      medxAiAssistant: "MedX AI सहायकः",
      understandFeeling:
        "भवान् कथं अनुभूयते इति अवगच्छामः।",
      answerQuestionsDescription:
        "विकल्पं चिनुत अथवा उत्तरं लिखित्वा प्रश्नानाम् उत्तरं ददातु।",
      medxClinicalAssistant:
        "MedX चिकित्सकीय सहायकः",
      onlineAiPowered:
        "ऑनलाइन · AI-आधारित सूचना",
      connectionIssue: "सम्पर्कदोषः",
      tryAgain: "पुनः प्रयतताम्",
      continue: "अग्रे गच्छतु",
      intake: {
        selectOption:
          "अधः दत्तेषु विकल्पेषु एकं चिनुत।",
        selectYesNo:
          "कृपया आम् अथवा न इति चिनुत।",
        typeOrVoice:
          "उत्तरं लिखन्तु अथवा स्वर-प्रवेशं प्रयुञ्जीत।",
      },
      voice: {
        stopListening: "श्रवणं स्थगयतु",
        input: "स्वर-प्रवेशः",
      },
      listening:
        "श्रूयते... अधुना वदतु",
      intakeFooter:
        "भवतः उत्तराणि गोपनीयानि सन्ति तथा स्वास्थ्यसेवा-विशेषज्ञेन परीक्ष्यन्ते।",
      historyReady:
        "भवतः स्वास्थ्येतिहासः सिद्धः अस्ति।",
      historyReadyDescription:
        "स्वास्थ्यसेवा-विशेषज्ञस्य परीक्षणाय MedX भवतः सूचनां व्यवस्थितवान्।",
      healthIntakeSummary:
        "स्वास्थ्यसूचनासारांशः",
      patientHistoryNotice:
        "एषः रोगिणा प्रदत्तः इतिहासः अस्ति, चिकित्सानिदानं न। अनुज्ञाप्राप्तं स्वास्थ्यसेवा-विशेषज्ञं परामृशन्तु।",
      continueToMedicalRecords:
        "चिकित्सकीय-अभिलेखान् प्रति गच्छतु",
      patientPortal: "रोगी-पोर्टल्",
      medicalRecords: "चिकित्सकीय-अभिलेखाः",
      medicalRecordsDescription:
        "भवतः स्वास्थ्येतिहासः सुरक्षिततया एकस्मिन् स्थाने व्यवस्थितः अस्ति।",
      uploadDocument: "दस्तावेजम् उपारोपयतु",
      recordsProtected:
        "भवतः चिकित्सकीय-अभिलेखाः सुरक्षिताः सन्ति",
      recordsProtectedDescription:
        "सत्यापिताः अभिलेखाः केवलं पठितुं शक्यन्ते, परिवर्तयितुं न शक्यन्ते।",
      searchRecords:
        "चिकित्सकीय-अभिलेखान् अन्विष्यताम्...",
      categories: {
        all: "सर्वाणि दस्तावेजानि",
        labReports: "प्रयोगशाला-प्रतिवेदनानि",
        prescriptions: "औषध-पत्राणि",
        discharge: "निर्गमन-सारांशाः",
        other: "अन्ये दस्तावेजाः",
      },
      documents: "दस्तावेजाः",
      allYourRecords: "भवतः सर्वे अभिलेखाः",
      readOnly: "केवलं पठनीयम्",
      pending: "प्रतीक्ष्यमाणम्",
      source: "स्रोतः",
      date: "दिनाङ्कः",
      verified: "सत्यापितम्",
      pendingVerification:
        "सत्यापनं प्रतीक्ष्यमाणम्",
      view: "पश्यतु",
      noRecordsFound:
        "अभिलेखाः न प्राप्ताः",
      noRecordsDescription:
        "अन्वेषणं परिवर्तयतु अथवा नवीनं दस्तावेजम् उपारोपयतु।",
      medicalDocument: "चिकित्सकीय-दस्तावेजम्",
      uploadRecord: "अभिलेखम् उपारोपयतु",
      uploadRecordDescription:
        "MedX स्वास्थ्येतिहासे पूर्वं विद्यमानं चिकित्सकीय-दस्तावेजं योजयतु।",
      fileSelected:
        "सञ्चिका चयनिता · उपारोपणाय सिद्धा",
      chooseDocument: "दस्तावेजं चिनुत",
      acceptedFormats:
        "PDF, JPG अथवा PNG ग्राह्यम्",
      uploadVerificationWarning:
        "उपारोपित-दस्तावेजानां सत्यापनं कृत्वा एव तानि सत्यापितानि इति चिह्नितानि भविष्यन्ति।",
      errors: {
        enterName: "कृपया नाम लिखन्तु",
        enterAge: "कृपया वयः लिखन्तु",
        validAge: "कृपया उचितं वयः लिखन्तु",
        selectGender: "कृपया लिङ्गं चिनुत",
        enterPhone:
          "कृपया दूरभाष-सङ्ख्यां लिखन्तु",
        validPhone:
          "दशाङ्कीयां सम्यक् सङ्ख्यां लिखन्तु",
      },
      speechErrors: {
        convertFailed:
          "स्वरं पाठे परिवर्तयितुं न शक्यम्। पुनः प्रयतताम्।",
        permissionDenied:
          "सूक्ष्मध्वनि-यन्त्रस्य अनुमतिः निषिद्धा।",
        noMicrophone:
          "सूक्ष्मध्वनि-यन्त्रं न प्राप्तम्।",
        unable:
          "सूक्ष्मध्वनि-यन्त्रं प्राप्तुं न शक्यम्।",
      },
      aiErrors: {
        timeout:
          "MedX उत्तरं दातुं अधिकं समयं गृह्णाति। सम्पर्कं परीक्ष्य पुनः प्रयतताम्।",
        connection:
          "MedX चिकित्सकीय-इन्टेक् सर्वरेण सह संयोजितुं न शक्नोति। पुनः प्रयतताम्।",
      },
    },
  },

  // =====================================================
  // SANTALI
  // =====================================================

  sat: {
    translation: {
      secure: "ᱵᱷᱟᱨᱚᱥᱟᱹ",
      aiHealthcare: "AI ᱫᱟᱨᱟᱭ ᱥᱟᱹᱢᱟᱹᱭ ᱥᱮᱵᱟ",
      yourHealth: "ᱟᱢᱟᱜ ᱥᱟᱹᱢᱟᱹᱭᱟᱹ",
      yourRecords: "ᱟᱢᱟᱜ ᱨᱮᱠᱚᱨᱰ",
      onePlace: "ᱢᱤᱫ ᱡᱟᱭᱜᱟ ᱨᱮ",
      description:
        "MedX ᱟᱢᱟᱜ ᱥᱟᱹᱢᱟᱹᱭ ᱤᱛᱤᱦᱟᱹᱥ ᱟᱨ ᱢᱮᱰᱤᱠᱟᱞ ᱨᱮᱠᱚᱨᱰ ᱠᱚ ᱢᱤᱫ ᱵᱷᱟᱨᱚᱥᱟᱹ ᱟᱨ ᱵᱩᱫᱷᱤᱢᱟᱱ ᱯᱞᱮᱴᱯᱷᱚᱨᱢ ᱨᱮ ᱢᱤᱫ ᱡᱟᱭᱜᱟ ᱨᱮ ᱟᱹᱜᱩᱭᱟᱹ।",
      patients: "ᱯᱟᱹᱭᱤᱱᱴ",
      accuracy: "ᱥᱚᱞᱵᱷ",
      avgIntake: "ᱥᱟᱨᱟᱥᱚᱨᱤ ᱚᱠᱛᱚ",
      whoAreYouToday: "ᱱᱤᱭᱟᱹ ᱫᱤᱱ ᱟᱢ ᱚᱠᱚᱭ?",
      selectRole:
        "ᱮᱦᱚᱵ ᱠᱟᱛᱮ ᱟᱢᱟᱜ ᱵᱷᱩᱢᱤᱠᱟ ᱵᱟᱪᱷᱱᱟᱹ",
      patient: "ᱯᱟᱹᱭᱤᱱᱴ",
      imPatient: "ᱤᱧ ᱢᱤᱫ ᱯᱟᱹᱭᱤᱱᱴ ᱠᱟᱱᱟ",
      patientDescription:
        "ᱟᱢᱟᱜ ᱥᱟᱹᱢᱟᱹᱭ ᱤᱛᱤᱦᱟᱹᱥ ᱨᱮᱠᱚᱨᱰ ᱢᱮ ᱟᱨ ᱢᱮᱰᱤᱠᱟᱞ ᱨᱮᱠᱚᱨᱰ ᱠᱚ ᱥᱟᱢᱵᱟᱞᱟᱹ",
      healthcareProfessional:
        "ᱥᱟᱹᱢᱟᱹᱭ ᱥᱮᱵᱟ ᱯᱷᱚᱞᱚᱞᱤ",
      imDoctor: "ᱤᱧ ᱢᱤᱫ ᱰᱟᱠᱴᱚᱨ ᱠᱟᱱᱟ",
      doctorDescription:
        "ᱯᱟᱹᱭᱤᱱᱴ ᱤᱛᱤᱦᱟᱹᱥ ᱵᱟᱹᱪᱷᱱᱟᱹ ᱟᱨ ᱠᱞᱤᱱᱤᱠᱟᱞ ᱨᱮᱠᱚᱨᱰ ᱥᱟᱢᱵᱟᱞᱟᱹ",
      privacyNote:
        "ᱟᱢᱟᱜ ᱥᱟᱹᱢᱟᱹᱭ ᱵᱟᱹᱨᱛᱟ ᱵᱷᱟᱨᱚᱥᱟᱹ ᱟᱨ ᱥᱚᱢᱢᱚᱛᱤ ᱥᱟᱦᱟᱭ ᱛᱮ ᱥᱟᱢᱵᱟᱞᱟᱹ",
      back: "ᱛᱟᱭᱚᱢ",
      profile: "ᱯᱨᱚᱯᱷᱟᱭᱤᱞ",
      healthIntake: "ᱥᱟᱹᱢᱟᱹᱭ ᱵᱟᱹᱨᱛᱟ",
      records: "ᱨᱮᱠᱚᱨᱰ",
      letsGetStarted: "ᱮᱦᱚᱵ ᱠᱟᱛᱮ",
      tellUsAboutYourself:
        "ᱟᱢ ᱵᱟᱵᱚᱛ ᱨᱮ ᱠᱟᱹᱦᱱᱤ ᱢᱮ",
      basicDetailsDescription:
        "ᱥᱟᱹᱢᱟᱹᱭ ᱵᱟᱹᱨᱛᱟ ᱮᱦᱚᱵ ᱢᱟᱲᱟᱝ ᱛᱤᱱ ᱡᱟᱹᱛᱤᱭᱟᱹ ᱵᱟᱹᱨᱛᱟ ᱫᱚ ᱥᱟᱢᱟᱱᱭᱟ ᱛᱮ ᱥᱮᱫ ᱜᱟᱱᱟ",
      name: "ᱧᱩᱛᱩᱢ",
      age: "ᱩᱢᱩᱨ",
      gender: "ᱞᱤᱝ",
      phoneNumber: "ᱯᱷᱳᱱ ᱱᱚᱢᱵᱚᱨ",
      placeholders: {
        fullName: "ᱟᱢᱟᱜ ᱯᱩᱨᱟ ᱧᱩᱛᱩᱢ ᱫᱚᱦᱚ",
        age: "ᱟᱢᱟᱜ ᱩᱢᱩᱨ",
        mobile: "10 ᱮᱞ ᱢᱳᱵᱟᱭᱞ ᱱᱚᱢᱵᱚᱨ",
        response: "ᱟᱢᱟᱜ ᱥᱟᱵᱟᱛ ᱛᱮ ᱠᱟᱹᱦᱱᱤ ᱢᱮ...",
      },
      genderOptions: {
        select: "ᱞᱤᱝ ᱵᱟᱪᱷᱱᱟᱹ",
        male: "ᱠᱚᱲᱟ",
        female: "ᱠᱩᱲᱤ",
        other: "ᱮᱴᱟᱜ",
        preferNotToSay:
          "ᱵᱟᱹᱲᱤᱡ ᱵᱟᱝ ᱠᱟᱹᱦᱱᱤ ᱢᱮ",
      },
      continueToHealthIntake:
        "ᱥᱟᱹᱢᱟᱹᱭ ᱵᱟᱹᱨᱛᱟ ᱨᱮ ᱵᱚᱞᱚᱜ",
      formSecurity:
        "ᱟᱢᱟᱜ ᱵᱟᱹᱨᱛᱟ ᱫᱚ ᱥᱟᱹᱢᱟᱹᱭ ᱥᱮᱵᱟ ᱠᱟᱹᱛᱮ ᱠᱮᱞ ᱵᱮᱣᱦᱟᱨ ᱠᱟᱛᱮ ᱦᱚᱸᱫᱚᱜᱼᱟ",
      medxAiAssistant: "MedX AI ᱥᱟᱦᱟᱭᱤ",
      understandFeeling:
        "ᱟᱢ ᱠᱟᱹᱦᱱᱤ ᱢᱮ ᱠᱟᱹᱦᱱᱤ ᱢᱮ ᱵᱩᱡᱷᱟᱹᱣ ᱢᱮ",
      answerQuestionsDescription:
        "ᱢᱤᱫ ᱵᱟᱪᱷᱱᱟᱹ ᱵᱟᱪᱷᱱᱟᱹ ᱢᱮ ᱟᱨ ᱯᱨᱥᱱ ᱠᱚ ᱡᱟᱹᱵᱟᱵ ᱢᱮ",
      medxClinicalAssistant:
        "MedX ᱠᱞᱤᱱᱤᱠᱟᱞ ᱥᱟᱦᱟᱭᱤ",
      onlineAiPowered:
        "ᱚᱱᱞᱟᱭᱤᱱ · AI ᱵᱟᱹᱨᱛᱟ",
      connectionIssue: "ᱥᱚᱢᱯᱚᱨᱠ ᱡᱚᱝᱜᱟᱹᱜ",
      tryAgain: "ᱫᱩᱵᱟᱨᱟ ᱪᱮᱥᱴᱟ ᱢᱮ",
      continue: "ᱞᱟᱦᱟᱣ ᱢᱮ",
      intake: {
        selectOption:
          "ᱱᱚᱠᱟ ᱵᱟᱪᱷᱱᱟᱹ ᱨᱮ ᱢᱤᱫ ᱵᱟᱪᱷᱱᱟᱹ ᱢᱮ",
        selectYesNo:
          "ᱦᱚᱭ ᱟᱨ ᱵᱟᱝ ᱨᱮ ᱢᱤᱫ ᱵᱟᱪᱷᱱᱟᱹ ᱢᱮ",
        typeOrVoice:
          "ᱟᱢᱟᱜ ᱡᱟᱹᱵᱟᱵ ᱴᱟᱭᱯ ᱢᱮ ᱵᱟ ᱠᱟᱹᱛᱷᱟ ᱵᱮᱣᱦᱟᱨ ᱢᱮ",
      },
      voice: {
        stopListening: "ᱟᱹᱡᱚᱢ ᱵᱚᱱᱫ ᱢᱮ",
        input: "ᱠᱟᱹᱛᱷᱟ ᱤᱱᱯᱩᱴ",
      },
      listening:
        "ᱟᱹᱡᱚᱢ... ᱱᱤᱛ ᱨᱮ ᱠᱟᱹᱛᱷᱟ ᱢᱮ",
      intakeFooter:
        "ᱟᱢᱟᱜ ᱡᱟᱹᱵᱟᱵ ᱜᱚᱯᱚᱱᱤᱭᱟ ᱠᱟᱱᱟ ᱟᱨ ᱥᱟᱹᱢᱟᱹᱭ ᱥᱮᱵᱟ ᱯᱷᱚᱞᱚᱞᱤ ᱫᱟᱨᱟᱭ ᱨᱮ ᱯᱟᱹᱨᱠᱟᱹᱭ ᱦᱚᱪᱚᱜᱼᱟ",
      historyReady:
        "ᱟᱢᱟᱜ ᱥᱟᱹᱢᱟᱹᱭ ᱤᱛᱤᱦᱟᱹᱥ ᱛᱮᱭᱟᱨ ᱠᱟᱱᱟ",
      historyReadyDescription:
        "ᱥᱟᱹᱢᱟᱹᱭ ᱥᱮᱵᱟ ᱯᱷᱚᱞᱚᱞᱤ ᱯᱟᱹᱨᱠᱟᱹᱭ ᱠᱟᱹᱛᱮ MedX ᱟᱢᱟᱜ ᱵᱟᱹᱨᱛᱟ ᱥᱟᱢᱟᱹᱞᱟᱹᱣ ᱠᱟᱫᱟ",
      healthIntakeSummary:
        "ᱥᱟᱹᱢᱟᱹᱭ ᱵᱟᱹᱨᱛᱟ ᱥᱟᱨᱟᱝᱥ",
      patientHistoryNotice:
        "ᱱᱚᱣᱟ ᱯᱟᱹᱭᱤᱱᱴ ᱫᱟᱨᱟᱭ ᱵᱟᱹᱨᱛᱟ ᱠᱟᱱᱟ ᱟᱨ ᱢᱮᱰᱤᱠᱟᱞ ᱰᱤᱭᱟᱜᱽᱱᱚᱥᱤᱥ ᱵᱟᱝ ᱠᱟᱱᱟ",
      continueToMedicalRecords:
        "ᱢᱮᱰᱤᱠᱟᱞ ᱨᱮᱠᱚᱨᱰ ᱨᱮ ᱵᱚᱞᱚᱜ",
      patientPortal: "ᱯᱟᱹᱭᱤᱱᱴ ᱯᱳᱨᱴᱟᱞ",
      medicalRecords: "ᱢᱮᱰᱤᱠᱟᱞ ᱨᱮᱠᱚᱨᱰ",
      medicalRecordsDescription:
        "ᱟᱢᱟᱜ ᱥᱟᱹᱢᱟᱹᱭ ᱤᱛᱤᱦᱟᱹᱥ ᱵᱷᱟᱨᱚᱥᱟᱹ ᱛᱮ ᱢᱤᱫ ᱡᱟᱭᱜᱟ ᱨᱮ ᱥᱟᱢᱵᱟᱞᱟᱹ",
      uploadDocument: "ᱰᱚᱠᱩᱢᱮᱱᱴ ᱟᱯᱞᱳᱰ ᱢᱮ",
      recordsProtected:
        "ᱟᱢᱟᱜ ᱢᱮᱰᱤᱠᱟᱞ ᱨᱮᱠᱚᱨᱰ ᱵᱟᱪᱟᱣ ᱠᱟᱱᱟ",
      recordsProtectedDescription:
        "ᱯᱨᱚᱢᱟᱱᱤᱛ ᱨᱮᱠᱚᱨᱰ ᱠᱚ ᱠᱮᱞ ᱯᱟᱲᱦᱟᱣ ᱢᱮ ᱟᱨ ᱵᱚᱫᱚᱞ ᱵᱟᱝ ᱠᱟᱛᱮ ᱥᱟᱢᱵᱟᱞᱟᱹ",
      searchRecords:
        "ᱟᱢᱟᱜ ᱢᱮᱰᱤᱠᱟᱞ ᱨᱮᱠᱚᱨᱰ ᱥᱚᱫᱷ ᱢᱮ...",
      categories: {
        all: "ᱡᱚᱛᱚ ᱰᱚᱠᱩᱢᱮᱱᱴ",
        labReports: "ᱞᱮᱵ ᱨᱤᱯᱚᱨᱴ",
        prescriptions: "ᱯᱨᱤᱥᱠᱨᱤᱯᱥᱚᱱ",
        discharge: "ᱰᱤᱥᱪᱟᱨᱡᱽ ᱥᱟᱨᱟᱝᱥ",
        other: "ᱮᱴᱟᱜ ᱰᱚᱠᱩᱢᱮᱱᱴ",
      },
      documents: "ᱰᱚᱠᱩᱢᱮᱱᱴ",
      allYourRecords: "ᱟᱢᱟᱜ ᱡᱚᱛᱚ ᱨᱮᱠᱚᱨᱰ",
      readOnly: "ᱯᱟᱲᱦᱟᱣ ᱢᱮ",
      pending: "ᱯᱮᱱᱰᱤᱝ",
      source: "ᱥᱚᱨᱥ",
      date: "ᱢᱟᱹᱦᱤᱛ",
      verified: "ᱯᱨᱚᱢᱟᱱᱤᱛ",
      pendingVerification:
        "ᱯᱨᱚᱢᱟᱱᱤᱠᱚᱨᱚᱱ ᱯᱮᱱᱰᱤᱝ",
      view: "ᱧᱮᱞ ᱢᱮ",
      noRecordsFound:
        "ᱡᱟᱦᱟᱸ ᱨᱮᱠᱚᱨᱰ ᱵᱟᱝ ᱧᱟᱢᱟ",
      noRecordsDescription:
        "ᱟᱢᱟᱜ ᱥᱚᱫᱷ ᱵᱚᱫᱚᱞ ᱢᱮ ᱵᱟ ᱱᱟᱣᱟ ᱰᱚᱠᱩᱢᱮᱱᱴ ᱟᱯᱞᱳᱰ ᱢᱮ",
      medicalDocument: "ᱢᱮᱰᱤᱠᱟᱞ ᱰᱚᱠᱩᱢᱮᱱᱴ",
      uploadRecord: "ᱢᱤᱫ ᱨᱮᱠᱚᱨᱰ ᱟᱯᱞᱳᱰ ᱢᱮ",
      uploadRecordDescription:
        "ᱟᱢᱟᱜ MedX ᱥᱟᱹᱢᱟᱹᱭ ᱤᱛᱤᱦᱟᱹᱥ ᱨᱮ ᱢᱟᱲᱟᱝ ᱢᱮᱰᱤᱠᱟᱞ ᱰᱚᱠᱩᱢᱮᱱᱴ ᱥᱮᱞᱮᱫ ᱢᱮ",
      fileSelected:
        "ᱯᱷᱟᱭᱤᱞ ᱵᱟᱪᱷᱱᱟᱹ · ᱟᱯᱞᱳᱰ ᱠᱟᱛᱮ ᱛᱮᱭᱟᱨ",
      chooseDocument: "ᱰᱚᱠᱩᱢᱮᱱᱴ ᱵᱟᱪᱷᱱᱟᱹ",
      acceptedFormats:
        "PDF, JPG ᱵᱟ ᱯᱷᱚᱨᱢᱮᱴ ᱜᱚᱫᱟᱹ ᱠᱟᱱᱟ",
      uploadVerificationWarning:
        "ᱟᱯᱞᱳᱰ ᱠᱟᱱᱟ ᱰᱚᱠᱩᱢᱮᱱᱴ ᱠᱚ ᱯᱨᱚᱢᱟᱱᱤᱛ ᱠᱟᱛᱮ ᱪᱤᱦᱱᱟᱹ ᱢᱟᱲᱟᱝ ᱡᱟᱹᱧᱪ ᱡᱟᱹᱛᱤ ᱠᱟᱱᱟ",
      errors: {
        enterName: "ᱢᱟᱹᱦᱤᱱᱟ ᱛᱮ ᱟᱢᱟᱜ ᱧᱩᱛᱩᱢ ᱫᱚᱦᱚ",
        enterAge: "ᱢᱟᱹᱦᱤᱱᱟ ᱛᱮ ᱟᱢᱟᱜ ᱩᱢᱩᱨ ᱫᱚᱦᱚ",
        validAge: "ᱢᱟᱹᱦᱤᱱᱟ ᱛᱮ ᱥᱚᱞᱵᱷ ᱩᱢᱩᱨ ᱫᱚᱦᱚ",
        selectGender: "ᱢᱟᱹᱦᱤᱱᱟ ᱛᱮ ᱞᱤᱝ ᱵᱟᱪᱷᱱᱟᱹ",
        enterPhone:
          "ᱢᱟᱹᱦᱤᱱᱟ ᱛᱮ ᱯᱷᱳᱱ ᱱᱚᱢᱵᱚᱨ ᱫᱚᱦᱚ",
        validPhone:
          "ᱥᱚᱞᱵᱷ 10 ᱮᱞ ᱱᱚᱢᱵᱚᱨ ᱫᱚᱦᱚ",
      },
      speechErrors: {
        convertFailed:
          "ᱟᱢᱟᱜ ᱠᱟᱹᱛᱷᱟ ᱴᱮᱠᱥᱴ ᱨᱮ ᱵᱚᱫᱚᱞ ᱵᱟᱝ ᱠᱟᱛᱮ ᱦᱚᱪᱚᱜᱼᱟ",
        permissionDenied:
          "ᱢᱟᱭᱠᱨᱚᱯᱷᱚᱱ ᱟᱹᱱᱩᱢᱚᱛᱤ ᱵᱟᱝ ᱧᱟᱢᱟ",
        noMicrophone:
          "ᱢᱟᱭᱠᱨᱚᱯᱷᱚᱱ ᱵᱟᱝ ᱧᱟᱢᱟ",
        unable:
          "ᱢᱟᱭᱠᱨᱚᱯᱷᱚᱱ ᱨᱮ ᱵᱚᱞᱚᱜ ᱵᱟᱝ ᱠᱟᱛᱮ ᱦᱚᱪᱚᱜᱼᱟ",
      },
      aiErrors: {
        timeout:
          "MedX ᱡᱟᱹᱵᱟᱵ ᱮᱢ ᱠᱟᱛᱮ ᱟᱫᱷᱤᱠ ᱚᱠᱛᱚ ᱜᱮᱱᱟ",
        connection:
          "MedX ᱠᱞᱤᱱᱤᱠᱟᱞ ᱤᱱᱴᱮᱠ ᱥᱟᱨᱵᱚᱨ ᱨᱮ ᱵᱚᱞᱚᱜ ᱵᱟᱝ ᱠᱟᱛᱮ ᱦᱚᱪᱚᱜᱼᱟ",
      },
    },
  },

  // =====================================================
  // MANIPURI
  // =====================================================

  mni: {
    translation: {
      secure: "ꯆꯤꯡꯊꯕ",
      aiHealthcare: "AI-ꯄꯨꯟꯅꯥ ꯊꯥꯒꯠꯄꯥ ꯁꯥꯏꯌꯦꯟꯁ",
      yourHealth: "ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯌꯦꯟꯁ",
      yourRecords: "ꯅꯍꯥꯛꯀꯤ ꯔꯦꯀꯣꯔ꯭ꯗ",
      onePlace: "ꯑꯃꯥꯁꯤꯗ",
      description:
        "MedX ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯌꯦꯟꯁ ꯑꯃꯁꯨꯡ ꯃꯦꯗꯤꯀꯦꯜ ꯔꯦꯀꯣꯔ꯭ꯗꯁꯤꯡ ꯑꯃꯥ ꯆꯤꯡꯊꯕ ꯑꯃꯁꯨꯡ ꯄꯨꯟꯅꯥ ꯁꯤꯡꯖꯤꯟꯕ ꯄ꯭ꯂꯦꯠꯐꯣꯔꯝꯗꯥ ꯆꯦꯠꯅꯕꯥ",
      patients: "ꯄꯦꯁꯦꯟꯠ",
      accuracy: "ꯆꯨꯝꯅꯕ",
      avgIntake: "ꯑꯃꯨꯛꯀꯤ ꯃꯇꯝ",
      whoAreYouToday: "ꯅꯨꯃꯤꯠꯇꯥ ꯅꯍꯥꯛ ꯀꯅꯥ?",
      selectRole:
        "ꯍꯧꯖꯤꯛꯀꯤ ꯃꯈꯥꯗꯥ ꯅꯍꯥꯛꯀꯤ ꯃꯁꯤꯡ ꯈꯟꯕꯤꯌꯨ",
      patient: "ꯄꯦꯁꯦꯟꯠ",
      imPatient: "ꯑꯩ ꯄꯦꯁꯦꯟꯠ ꯑꯃꯅꯤ",
      patientDescription:
        "ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯌꯦꯟꯁ ꯏꯇꯤꯍꯥꯁ ꯔꯦꯀꯣꯔ꯭ꯗ ꯇꯧꯕꯤꯌꯨ ꯑꯃꯁꯨꯡ ꯃꯦꯗꯤꯀꯦꯜ ꯔꯦꯀꯣꯔ꯭ꯗꯁꯤꯡ ꯁꯥꯝꯅꯕꯤꯌꯨ",
      healthcareProfessional:
        "ꯁꯥꯏꯌꯦꯟꯁ ꯄ꯭ꯔꯣꯐꯦꯁꯅꯦꯜ",
      imDoctor: "ꯑꯩ ꯗꯣꯛꯇꯔꯅꯤ",
      doctorDescription:
        "ꯄꯦꯁꯦꯟꯠꯀꯤ ꯏꯇꯤꯍꯥꯁ ꯈꯟꯕꯤꯌꯨ ꯑꯃꯁꯨꯡ ꯀ꯭ꯂꯤꯅꯤꯀꯦꯜ ꯔꯦꯀꯣꯔ꯭ꯗ ꯁꯥꯝꯅꯕꯤꯌꯨ",
      privacyNote:
        "ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯌꯦꯟꯁ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ ꯄ꯭ꯔꯥꯏꯕꯦꯁꯤ ꯑꯃꯁꯨꯡ ꯁꯝꯃꯇꯤ ꯈꯟꯗꯨꯅꯥ ꯁꯥꯝꯅꯕꯤꯌꯨ",
      back: "ꯍꯥꯟꯅꯥ",
      profile: "ꯄ꯭ꯔꯣꯐꯥꯏꯜ",
      healthIntake: "ꯁꯥꯏꯌꯦꯟꯁ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ",
      records: "ꯔꯦꯀꯣꯔ꯭ꯗ",
      letsGetStarted: "ꯍꯧꯖꯤꯀꯄꯥ",
      tellUsAboutYourself:
        "ꯅꯍꯥꯛꯀꯤ ꯃꯔꯝꯗꯥ ꯍꯥꯏꯕꯤꯌꯨ",
      basicDetailsDescription:
        "ꯁꯥꯏꯌꯦꯟꯁ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ ꯍꯧꯖꯤꯛꯂꯤ ꯄ꯭ꯔꯤꯇꯤ ꯀꯅꯥ ꯃꯔꯨꯑꯣꯏꯕꯥ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ ꯑꯃꯁꯨꯡ ꯃꯁꯤꯡ ꯄꯤꯕꯤꯌꯨ",
      name: "ꯃꯤꯡ",
      age: "ꯆꯍꯤ",
      gender: "ꯃꯁꯤꯡ",
      phoneNumber: "ꯐꯣꯅ ꯅꯝꯕꯔ",
      placeholders: {
        fullName: "ꯅꯍꯥꯛꯀꯤ ꯄꯨꯔꯥ ꯃꯤꯡ ꯏꯟꯄꯨꯠ ꯇꯧꯕꯤꯌꯨ",
        age: "ꯅꯍꯥꯛꯀꯤ ꯆꯍꯤ",
        mobile: "10 ꯗꯤꯖꯤꯠ ꯃꯣꯕꯥꯏꯜ ꯅꯝꯕꯔ",
        response: "ꯅꯍꯥꯛꯀꯤ ꯋꯥꯍꯪꯗꯥ ꯍꯥꯏꯕꯤꯌꯨ...",
      },
      genderOptions: {
        select: "ꯃꯁꯤꯡ ꯈꯟꯕꯤꯌꯨ",
        male: "ꯅꯨꯄꯥ",
        female: "ꯅꯨꯄꯤ",
        other: "ꯑꯇꯣꯞꯄ",
        preferNotToSay:
          "ꯍꯥꯏꯕꯥ ꯆꯥꯅꯕꯥ ꯂꯩꯇꯦ",
      },
      continueToHealthIntake:
        "ꯁꯥꯏꯌꯦꯟꯁ ꯏꯅꯐꯣꯔꯃꯦꯁꯟꯗꯥ ꯆꯠꯂꯨ",
      formSecurity:
        "ꯅꯍꯥꯛꯀꯤ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯌꯦꯟꯁ ꯄꯥꯡꯊꯣꯛꯄꯥ ꯄꯨꯟꯅꯥ ꯌꯨꯖꯤꯟꯕꯥ ꯇꯧꯕꯥ ꯂꯩꯕꯥ",
      medxAiAssistant: "MedX AI ꯁꯍꯥꯏꯕꯥ",
      understandFeeling:
        "ꯅꯍꯥꯛ ꯀꯝꯅꯥ ꯅꯣꯡꯖꯔꯤ ꯍꯥꯏꯕꯥ ꯈꯟꯅꯕꯥ ꯇꯧꯁꯤ",
      answerQuestionsDescription:
        "ꯑꯃꯁꯨꯡ ꯑꯣꯄꯁꯟ ꯈꯟꯕꯤꯌꯨ ꯅꯠꯔꯒꯥ ꯅꯍꯥꯛꯀꯤ ꯔꯦꯁꯄꯣꯟꯁ ꯇꯥꯏꯞ ꯇꯧꯕꯤꯌꯨ",
      medxClinicalAssistant:
        "MedX ꯀ꯭ꯂꯤꯅꯤꯀꯦꯜ ꯁꯍꯥꯏꯕꯥ",
      onlineAiPowered:
        "ꯑꯣꯅꯂꯥꯏꯅ · AI-ꯄꯨꯟꯅꯥ",
      connectionIssue: "ꯀꯟꯅꯦꯛꯁꯟ ꯁꯤꯔꯥꯁꯤ",
      tryAgain: "ꯑꯃꯨꯛ ꯆꯤꯡꯊꯕꯤꯌꯨ",
      continue: "ꯃꯈꯥ ꯆꯠꯂꯨ",
      intake: {
        selectOption:
          "ꯈꯥꯅꯥ ꯑꯣꯄꯁꯟꯁꯤꯡꯗꯒꯤ ꯑꯃꯥ ꯈꯟꯕꯤꯌꯨ",
        selectYesNo:
          "ꯍꯥꯏ ꯅꯠꯔꯒꯥ ꯅꯥꯍꯥꯏ ꯈꯟꯕꯤꯌꯨ",
        typeOrVoice:
          "ꯅꯍꯥꯛꯀꯤ ꯔꯦꯁꯄꯣꯟꯁ ꯇꯥꯏꯞ ꯇꯧꯕꯤꯌꯨ ꯅꯠꯔꯒꯥ ꯚꯣꯏꯁ ꯏꯟꯄꯨꯠ ꯌꯨꯖꯤꯟꯕꯤꯌꯨ",
      },
      voice: {
        stopListening: "ꯍꯥꯟꯅꯥ ꯇꯥꯕꯥ ꯂꯩꯇꯦ",
        input: "ꯚꯣꯏꯁ ꯏꯟꯄꯨꯠ",
      },
      listening:
        "ꯇꯥꯕꯥ... ꯍꯧꯖꯤꯛ ꯋꯥꯍꯪ ꯍꯥꯏꯕꯤꯌꯨ",
      intakeFooter:
        "ꯅꯍꯥꯛꯀꯤ ꯔꯦꯁꯄꯣꯟꯁꯁꯤꯡ ꯄ꯭ꯔꯥꯏꯚꯦꯠ ꯑꯃꯁꯨꯡ ꯁꯥꯏꯌꯦꯟꯁ ꯄ꯭ꯔꯣꯐꯦꯁꯅꯦꯜꯅꯥ ꯈꯟꯕꯤꯌꯦ",
      historyReady:
        "ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯌꯦꯟꯁ ꯏꯇꯤꯍꯥꯁ ꯁꯤꯖꯤꯟꯅꯕꯥ ꯇꯥꯏꯔꯤ",
      historyReadyDescription:
        "MedX ꯅꯍꯥꯛꯀꯤ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ ꯁꯥꯏꯌꯦꯟꯁ ꯄ꯭ꯔꯣꯐꯦꯁꯅꯦꯜꯀꯤ ꯈꯟꯕꯥ ꯄꯥꯡꯊꯣꯛꯄꯥ ꯇꯧꯕꯤꯌꯦ",
      healthIntakeSummary:
        "ꯁꯥꯏꯌꯦꯟꯁ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ ꯁꯥꯔꯥꯡꯁ",
      patientHistoryNotice:
        "ꯃꯁꯤ ꯄꯦꯁꯦꯟꯠꯅꯥ ꯄꯤꯔꯤꯕꯥ ꯏꯇꯤꯍꯥꯁꯅꯤ ꯑꯃꯁꯨꯡ ꯃꯦꯗꯤꯀꯦꯜ ꯗꯥꯏꯒꯅꯣꯁꯤꯁ ꯅꯠꯇꯦ",
      continueToMedicalRecords:
        "ꯃꯦꯗꯤꯀꯦꯜ ꯔꯦꯀꯣꯔ꯭ꯗꯁꯤꯡꯗꯥ ꯆꯠꯂꯨ",
      patientPortal: "ꯄꯦꯁꯦꯟꯠ ꯄꯣꯔꯇꯦꯜ",
      medicalRecords: "ꯃꯦꯗꯤꯀꯦꯜ ꯔꯦꯀꯣꯔ꯭ꯗ",
      medicalRecordsDescription:
        "ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯌꯦꯟꯁ ꯏꯇꯤꯍꯥꯁ ꯆꯤꯡꯊꯕꯥ ꯑꯃꯥꯗꯥ ꯁꯥꯝꯅꯕꯥ ꯇꯧꯕꯤꯌꯦ",
      uploadDocument: "ꯗꯣꯀꯨꯃꯦꯟꯠ ꯑꯄꯂꯣꯗ ꯇꯧꯕꯤꯌꯨ",
      recordsProtected:
        "ꯅꯍꯥꯛꯀꯤ ꯃꯦꯗꯤꯀꯦꯜ ꯔꯦꯀꯣꯔ꯭ꯗꯁꯤꯡ ꯆꯤꯡꯊꯕꯥ",
      recordsProtectedDescription:
        "ꯚꯦꯔꯤꯐꯥꯏꯗ ꯔꯦꯀꯣꯔ꯭ꯗꯁꯤꯡ ꯑꯗꯨ ꯄꯥꯔꯥꯕꯥ ꯉꯝꯃꯤ ꯑꯃꯁꯨꯡ ꯑꯃꯨꯛ ꯅꯥꯡꯕꯥ ꯌꯥꯔꯣꯏ",
      searchRecords:
        "ꯅꯍꯥꯛꯀꯤ ꯃꯦꯗꯤꯀꯦꯜ ꯔꯦꯀꯣꯔ꯭ꯗ ꯊꯤꯕꯤꯌꯨ...",
      categories: {
        all: "ꯄꯨꯟꯅꯥ ꯗꯣꯀꯨꯃꯦꯟꯠ",
        labReports: "ꯂꯦꯕ ꯔꯤꯄꯣꯔꯇ",
        prescriptions: "ꯄ꯭ꯔꯤꯁ꯭ꯀ꯭ꯔꯤꯄꯁꯟ",
        discharge: "ꯗꯤꯁꯆꯥꯔꯖ ꯁꯥꯔꯥꯡꯁ",
        other: "ꯑꯇꯣꯞꯄ ꯗꯣꯀꯨꯃꯦꯟꯠ",
      },
      documents: "ꯗꯣꯀꯨꯃꯦꯟꯠ",
      allYourRecords: "ꯅꯍꯥꯛꯀꯤ ꯄꯨꯟꯅꯥ ꯔꯦꯀꯣꯔ꯭ꯗ",
      readOnly: "ꯄꯥꯔꯥꯕꯥ ꯈꯛ",
      pending: "ꯄꯦꯟꯗꯤꯡ",
      source: "ꯁꯣꯔꯁ",
      date: "ꯆꯩꯔꯥꯛ",
      verified: "ꯚꯦꯔꯤꯐꯥꯏ",
      pendingVerification:
        "ꯚꯦꯔꯤꯐꯤꯀꯦꯁꯟ ꯄꯦꯟꯗꯤꯡ",
      view: "ꯌꯦꯡꯕꯤꯌꯨ",
      noRecordsFound:
        "ꯔꯦꯀꯣꯔ꯭ꯗ ꯐꯪꯗꯦ",
      noRecordsDescription:
        "ꯅꯍꯥꯛꯀꯤ ꯁꯔꯆ ꯑꯗꯨ ꯁꯣꯜꯂꯨ ꯅꯠꯔꯒꯥ ꯅꯧꯖꯤꯜ ꯗꯣꯀꯨꯃꯦꯟꯠ ꯑꯄꯂꯣꯗ ꯇꯧꯕꯤꯌꯨ",
      medicalDocument: "ꯃꯦꯗꯤꯀꯦꯜ ꯗꯣꯀꯨꯃꯦꯟꯠ",
      uploadRecord: "ꯔꯦꯀꯣꯔ꯭ꯗ ꯑꯃꯥ ꯑꯄꯂꯣꯗ ꯇꯧꯕꯤꯌꯨ",
      uploadRecordDescription:
        "ꯅꯍꯥꯛꯀꯤ MedX ꯁꯥꯏꯌꯦꯟꯁ ꯏꯇꯤꯍꯥꯁꯗꯥ ꯃꯃꯥꯡꯗꯥ ꯂꯩꯔꯤꯕꯥ ꯃꯦꯗꯤꯀꯦꯜ ꯗꯣꯀꯨꯃꯦꯟꯠ ꯑꯃꯥ ꯍꯥꯄꯆꯤꯜꯂꯨ",
      fileSelected:
        "ꯐꯥꯏꯜ ꯈꯟꯕꯤꯌꯦ · ꯑꯄꯂꯣꯗ ꯇꯧꯕꯥ ꯌꯥꯔꯦ",
      chooseDocument: "ꯗꯣꯀꯨꯃꯦꯟꯠ ꯈꯟꯕꯤꯌꯨ",
      acceptedFormats:
        "PDF, JPG ꯅꯠꯔꯒꯥ PNG ꯌꯥꯔꯦ",
      uploadVerificationWarning:
        "ꯑꯄꯂꯣꯗ ꯇꯧꯔꯕꯥ ꯗꯣꯀꯨꯃꯦꯟꯠ ꯚꯦꯔꯤꯐꯥꯏ ꯇꯧꯕꯥ ꯃꯃꯥꯡꯗꯥ ꯆꯦꯛꯁꯤꯟꯕꯥ ꯃꯊꯧ ꯇꯥꯏ",
      errors: {
        enterName: "ꯅꯍꯥꯛꯀꯤ ꯃꯤꯡ ꯏꯟꯄꯨꯠ ꯇꯧꯕꯤꯌꯨ",
        enterAge: "ꯅꯍꯥꯛꯀꯤ ꯆꯍꯤ ꯏꯟꯄꯨꯠ ꯇꯧꯕꯤꯌꯨ",
        validAge: "ꯃꯆꯥꯀꯥꯟꯅꯥ ꯆꯍꯤ ꯏꯟꯄꯨꯠ ꯇꯧꯕꯤꯌꯨ",
        selectGender: "ꯅꯍꯥꯛꯀꯤ ꯃꯁꯤꯡ ꯈꯟꯕꯤꯌꯨ",
        enterPhone:
          "ꯅꯍꯥꯛꯀꯤ ꯐꯣꯅ ꯅꯝꯕꯔ ꯏꯟꯄꯨꯠ ꯇꯧꯕꯤꯌꯨ",
        validPhone:
          "ꯃꯆꯥꯀꯥꯟꯅꯥ 10 ꯗꯤꯖꯤꯠ ꯅꯝꯕꯔ ꯏꯟꯄꯨꯠ ꯇꯧꯕꯤꯌꯨ",
      },
      speechErrors: {
        convertFailed:
          "ꯅꯍꯥꯛꯀꯤ ꯋꯥꯍꯪ ꯇꯥꯏꯞꯇꯥ ꯄꯥꯔꯕꯥ ꯉꯝꯗꯦ",
        permissionDenied:
          "ꯃꯥꯏꯀ꯭ꯔꯣꯐꯣꯅꯀꯤ ꯃꯇꯦꯡ ꯂꯩꯇꯦ",
        noMicrophone:
          "ꯃꯥꯏꯀ꯭ꯔꯣꯐꯣꯅ ꯐꯪꯗꯦ",
        unable:
          "ꯃꯥꯏꯀ꯭ꯔꯣꯐꯣꯅ ꯑꯦꯛꯁꯦꯁ ꯇꯧꯕꯥ ꯉꯝꯗꯦ",
      },
      aiErrors: {
        timeout:
          "MedX ꯅꯥꯍꯥꯛꯀꯤ ꯔꯦꯁꯄꯣꯟꯁ ꯄꯤꯕꯥ ꯁꯤꯗꯤ ꯃꯇꯝ ꯂꯩ",
        connection:
          "MedX ꯀ꯭ꯂꯤꯅꯤꯀꯦꯜ ꯏꯟꯇꯦꯛ ꯁꯔꯚꯔꯗꯥ ꯀꯅꯦꯛꯇ ꯇꯧꯕꯥ ꯉꯝꯗꯦ",
      },
    },
  },

  // =====================================================
  // BODO
  // =====================================================

  brx: {
    translation: {
      secure: "रैखाथि",
      aiHealthcare: "AI-आधारि स्वास्थ सेवाआ",
      yourHealth: "नोंनि स्वास्थ।",
      yourRecords: "नोंनि रेकर्ड।",
      onePlace: "मोनसे जायगाय।",
      description:
        "MedX नोंनि स्वास्थ इतिहास आरो मेडिकल रेकर्डखौ मोनसे रैखाथि आरो बुद्दिमान प्लाटफर्मआव फुंफुं होयो।",
      patients: "रोगी",
      accuracy: "गोरोब",
      avgIntake: "गोजोन समय",
      whoAreYouToday: "दिनै नों सोर?",
      selectRole:
        "जागायनायनि थाखाय नोंनि भुमिका बासिख",
      patient: "रोगी",
      imPatient: "आं रोगी",
      patientDescription:
        "नोंनि स्वास्थ इतिहास रेकर्ड खालाम आरो मेडिकल रेकर्डखौ सायाव।",
      healthcareProfessional:
        "स्वास्थ सेवा पेशादार",
      imDoctor: "आं डाक्टर",
      doctorDescription:
        "रोगीनि इतिहास नाय आरो क्लिनिकल रेकर्ड सायाव।",
      privacyNote:
        "नोंनि स्वास्थ बिबरनखौ गोपोनियता आरो अनुमोदनखौ नायगोनांनायजों सायाव।",
      back: "उनथिं",
      profile: "प्रोफाइल",
      healthIntake: "स्वास्थ बिबरन",
      records: "रेकर्ड",
      letsGetStarted: "जागाय जाबाय",
      tellUsAboutYourself:
        "नोंनि सोमोन्दोआव बुं",
      basicDetailsDescription:
        "स्वास्थ बिबरन जागायनो हागौनि गोजोन मुल बिबरनखौ नोंनाव सानसे गोनां।",
      name: "मुं",
      age: "बयसो",
      gender: "लिं",
      phoneNumber: "फन नं",
      placeholders: {
        fullName: "नोंनि आबुं मुं लिर",
        age: "नोंनि बयसो",
        mobile: "10 डिजिट मोबायल नं",
        response: "नोंनि सोलोमायाव बुं...",
      },
      genderOptions: {
        select: "लिं बासिख",
        male: "हादोर",
        female: "हादोरि",
        other: "गुबुन",
        preferNotToSay:
          "बुंनो नाजानाय",
      },
      continueToHealthIntake:
        "स्वास्थ बिबरनआव थां",
      formSecurity:
        "नोंनि बिबरनखौ नोंनि स्वास्थ यात्रानि थाखाय खालि बाहायनाय जाबाय।",
      medxAiAssistant: "MedX AI सहायक",
      understandFeeling:
        "नों मा बाइदि अनुभब खालामो बेखौ बुजि।",
      answerQuestionsDescription:
        "मोनसे विकल्प बासिख आरो नोथाय निबाब हो।",
      medxClinicalAssistant:
        "MedX क्लिनिकल सहायक",
      onlineAiPowered:
        "अनलाइन · AI-आधारि बिबरन",
      connectionIssue: "जोगाजोग समस्या",
      tryAgain: "फिन नाजा",
      continue: "सोलाय",
      intake: {
        selectOption:
          "गाहायनि विकल्पफोरनि गेजेराव मोनसे बासिख।",
        selectYesNo:
          "अननानै हो आरो नङा बासिख।",
        typeOrVoice:
          "नोंनि निबाब लिर आरो आवाज इनपुट बाहाय।",
      },
      voice: {
        stopListening: "खोनाय थां",
        input: "आवाज इनपुट",
      },
      listening:
        "खोनाय जाबाय... दानि बुं",
      intakeFooter:
        "नोंनि निबाबफोर गोपोनिय आरो स्वास्थ सेवा पेशादारनि नायखांनाय जाबाय।",
      historyReady:
        "नोंनि स्वास्थ इतिहास फोरमाय।",
      historyReadyDescription:
        "स्वास्थ सेवा पेशादारनि नायखांनायनि थाखाय MedX नोंनि बिबरनखौ साजायबाय।",
      healthIntakeSummary:
        "स्वास्थ बिबरनि सारांश",
      patientHistoryNotice:
        "बेयो रोगीनि होनाय इतिहास, मेडिकल डायग्नोसिस नङा। लाइसेन्स होनाय स्वास्थ पेशादारजों सानाय।",
      continueToMedicalRecords:
        "मेडिकल रेकर्डआव थां",
      patientPortal: "रोगी पोर्टल",
      medicalRecords: "मेडिकल रेकर्ड",
      medicalRecordsDescription:
        "नोंनि स्वास्थ इतिहासखौ रैखाथि जों मोनसे जायगाय साजायबाय।",
      uploadDocument: "डाकुमेन्ट अपलोड खालाम",
      recordsProtected:
        "नोंनि मेडिकल रेकर्ड रैखाथि",
      recordsProtectedDescription:
        "प्रमाणित रेकर्डखौ खालि फरायनो हायो आरो सोलायनो हाया।",
      searchRecords:
        "नोंनि मेडिकल रेकर्ड सान...",
      categories: {
        all: "गासै डाकुमेन्ट",
        labReports: "लैब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्सन",
        discharge: "डिसचार्ज सारांश",
        other: "गुबुन डाकुमेन्ट",
      },
      documents: "डाकुमेन्ट",
      allYourRecords: "नोंनि गासै रेकर्ड",
      readOnly: "फरायनो खालि",
      pending: "अपेक्षा",
      source: "स्रोत",
      date: "समा",
      verified: "प्रमाणित",
      pendingVerification:
        "प्रमाणीकरण अपेक्षा",
      view: "नाय",
      noRecordsFound:
        "जेबो रेकर्ड मोनाखै",
      noRecordsDescription:
        "नोंनि सर्च सोलाय आरो नावा डाकुमेन्ट अपलोड खालाम।",
      medicalDocument: "मेडिकल डाकुमेन्ट",
      uploadRecord: "रेकर्ड अपलोड खालाम",
      uploadRecordDescription:
        "नोंनि MedX स्वास्थ इतिहासआव गोजोन मेडिकल डाकुमेन्ट हो।",
      fileSelected:
        "फाइल बासिख · अपलोडनि थाखाय फोरमाय",
      chooseDocument: "डाकुमेन्ट बासिख",
      acceptedFormats:
        "PDF, JPG एबा PNG लुबै",
      uploadVerificationWarning:
        "अपलोड खालामनाय डाकुमेन्टखौ प्रमाणित खालामनो हागौनि सिगां नायखांनो नांगोन।",
      errors: {
        enterName: "अननानै नोंनि मुं लिर",
        enterAge: "अननानै नोंनि बयसो लिर",
        validAge: "अननानै गोरोब बयसो लिर",
        selectGender: "अननानै नोंनि लिं बासिख",
        enterPhone:
          "अननानै नोंनि फोन नं लिर",
        validPhone:
          "गोरोब 10 डिजिट नं लिर",
      },
      speechErrors: {
        convertFailed:
          "नोंनि आवाजखौ टेक्स्टआव सोलायनो हायाखै। फिन नाजा।",
        permissionDenied:
          "माइक्रोफोननि अनुमति नायखांजायाखै।",
        noMicrophone:
          "माइक्रोफोन मोनाखै।",
        unable:
          "माइक्रोफोनआव थांनो हायाखै।",
      },
      aiErrors: {
        timeout:
          "MedX निबाब होनो गोबां सम लायो। नोंनि जोगाजोग नाय आरो फिन नाजा।",
        connection:
          "MedX क्लिनिकल इनटेक सर्वारजों जोगाजोग खालामनो हायाखै। फिन नाजा।",
      },
    },
  },

  // =====================================================
  // MAITHILI
  // =====================================================

  mai: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI आधारित स्वास्थ्य सेवा",
      yourHealth: "अहाँक स्वास्थ्य।",
      yourRecords: "अहाँक रिकॉर्ड।",
      onePlace: "एक्के ठाम।",
      description:
        "MedX अहाँक स्वास्थ्य इतिहास आ मेडिकल रिकॉर्ड केँ एक सुरक्षित आ बुद्धिमान प्लेटफॉर्म पर एक ठाम अनैत अछि।",
      patients: "मरीज",
      accuracy: "सटीकता",
      avgIntake: "औसत समय",
      whoAreYouToday: "आइ अहाँ के छी?",
      selectRole:
        "शुरू करबाक लेल अपन भूमिका चुनू",
      patient: "मरीज",
      imPatient: "हम मरीज छी",
      patientDescription:
        "अपन स्वास्थ्य इतिहास रिकॉर्ड करू आ मेडिकल रिकॉर्ड व्यवस्थित करू।",
      healthcareProfessional:
        "स्वास्थ्य सेवा पेशेवर",
      imDoctor: "हम डॉक्टर छी",
      doctorDescription:
        "मरीजक इतिहासक समीक्षा करू आ क्लिनिकल रिकॉर्ड व्यवस्थित करू।",
      privacyNote:
        "अहाँक स्वास्थ्य जानकारी केँ गोपनीयता आ सहमतिके ध्यानमे राखि संभालल जाइत अछि।",
      back: "पाछाँ",
      profile: "प्रोफाइल",
      healthIntake: "स्वास्थ्य जानकारी",
      records: "रिकॉर्ड",
      letsGetStarted: "शुरू करी",
      tellUsAboutYourself:
        "अपन बारेमे बताउ",
      basicDetailsDescription:
        "स्वास्थ्य जानकारी शुरू करबाक पहिने हमरा सभकेँ किछु मूल जानकारी चाही।",
      name: "नाम",
      age: "उम्र",
      gender: "लिंग",
      phoneNumber: "फोन नंबर",
      placeholders: {
        fullName: "अपन पूरा नाम लिखू",
        age: "अहाँक उम्र",
        mobile: "10 अंकक मोबाइल नंबर",
        response: "अपन शब्दमे बताउ...",
      },
      genderOptions: {
        select: "लिंग चुनू",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        preferNotToSay:
          "कहय नहि चाहैत छी",
      },
      continueToHealthIntake:
        "स्वास्थ्य जानकारी पर जाउ",
      formSecurity:
        "अहाँक जानकारी केवल अहाँक स्वास्थ्य यात्रा लेल उपयोग होयत।",
      medxAiAssistant: "MedX AI सहायक",
      understandFeeling:
        "अहाँ केना महसूस करैत छी से बुझी।",
      answerQuestionsDescription:
        "एक विकल्प चुनि कए अथवा अपन उत्तर लिखि कए प्रश्नक उत्तर दिअ।",
      medxClinicalAssistant:
        "MedX क्लिनिकल सहायक",
      onlineAiPowered:
        "ऑनलाइन · AI आधारित जानकारी",
      connectionIssue: "कनेक्शन समस्या",
      tryAgain: "फेर प्रयास करू",
      continue: "आगाँ बढ़ू",
      intake: {
        selectOption:
          "नीचाँ देल विकल्पमे सँ एकटा चुनू।",
        selectYesNo:
          "कृपया हँ अथवा नहि चुनू।",
        typeOrVoice:
          "अपन उत्तर लिखू अथवा आवाजक उपयोग करू।",
      },
      voice: {
        stopListening: "सुननाइ रोकू",
        input: "आवाज इनपुट",
      },
      listening:
        "सुनि रहल छी... आब बाजू",
      intakeFooter:
        "अहाँक उत्तर निजी अछि आ स्वास्थ्य सेवा पेशेवर द्वारा समीक्षा कएल जायत।",
      historyReady:
        "अहाँक स्वास्थ्य इतिहास तैयार अछि।",
      historyReadyDescription:
        "स्वास्थ्य सेवा पेशेवरक समीक्षा लेल MedX अहाँक जानकारी व्यवस्थित कएने अछि।",
      healthIntakeSummary:
        "स्वास्थ्य जानकारी सारांश",
      patientHistoryNotice:
        "ई मरीज द्वारा देल गेल इतिहास अछि, मेडिकल निदान नहि। लाइसेंस प्राप्त स्वास्थ्य पेशेवरसँ सलाह लिअ।",
      continueToMedicalRecords:
        "मेडिकल रिकॉर्ड पर जाउ",
      patientPortal: "मरीज पोर्टल",
      medicalRecords: "मेडिकल रिकॉर्ड",
      medicalRecordsDescription:
        "अहाँक स्वास्थ्य इतिहास सुरक्षित रूपसँ एक्के ठाम व्यवस्थित अछि।",
      uploadDocument: "दस्तावेज अपलोड करू",
      recordsProtected:
        "अहाँक मेडिकल रिकॉर्ड सुरक्षित अछि",
      recordsProtectedDescription:
        "सत्यापित रिकॉर्ड केवल पढ़ल जा सकैत अछि आ बदलल नहि जा सकैत अछि।",
      searchRecords:
        "अपन मेडिकल रिकॉर्ड खोजू...",
      categories: {
        all: "सभ दस्तावेज",
        labReports: "लैब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "अन्य दस्तावेज",
      },
      documents: "दस्तावेज",
      allYourRecords: "अहाँक सभ रिकॉर्ड",
      readOnly: "केवल पढ़बाक लेल",
      pending: "लंबित",
      source: "स्रोत",
      date: "तारीख",
      verified: "सत्यापित",
      pendingVerification:
        "सत्यापन लंबित",
      view: "देखू",
      noRecordsFound:
        "कोनो रिकॉर्ड नहि भेटल",
      noRecordsDescription:
        "अपन खोज बदलू अथवा नव दस्तावेज अपलोड करू।",
      medicalDocument: "मेडिकल दस्तावेज",
      uploadRecord: "एकटा रिकॉर्ड अपलोड करू",
      uploadRecordDescription:
        "अपन MedX स्वास्थ्य इतिहासमे पुरान मेडिकल दस्तावेज जोड़ू।",
      fileSelected:
        "फाइल चुनल गेल · अपलोड लेल तैयार",
      chooseDocument: "दस्तावेज चुनू",
      acceptedFormats:
        "PDF, JPG अथवा PNG स्वीकार्य अछि",
      uploadVerificationWarning:
        "अपलोड कएल दस्तावेज केँ सत्यापित चिन्हित करबाक पहिने सत्यापन जरूरी होयत।",
      errors: {
        enterName: "कृपया अपन नाम लिखू",
        enterAge: "कृपया अपन उम्र लिखू",
        validAge: "कृपया सही उम्र लिखू",
        selectGender: "कृपया अपन लिंग चुनू",
        enterPhone:
          "कृपया अपन फोन नंबर लिखू",
        validPhone:
          "सही 10 अंकक नंबर लिखू",
      },
      speechErrors: {
        convertFailed:
          "अहाँक आवाज केँ टेक्स्टमे बदलल नहि जा सकल। फेर प्रयास करू।",
        permissionDenied:
          "माइक्रोफोनक अनुमति अस्वीकार कएल गेल।",
        noMicrophone:
          "कोनो माइक्रोफोन नहि भेटल।",
        unable:
          "माइक्रोफोन तक पहुँच नहि भ' सकल।",
      },
      aiErrors: {
        timeout:
          "MedX जवाब देबामे बेसी समय ल' रहल अछि। अपन कनेक्शन जाँचि कए फेर प्रयास करू।",
        connection:
          "MedX क्लिनिकल इनटेक सर्वर सँ कनेक्ट नहि भ' सकल। फेर प्रयास करू।",
      },
    },
  },

  // =====================================================
  // DOGRI
  // =====================================================

  doi: {
    translation: {
      secure: "सुरक्षित",
      aiHealthcare: "AI आधारत सेहत सेवा",
      yourHealth: "तुआढ़ी सेहत।",
      yourRecords: "तुआढ़े रिकार्ड।",
      onePlace: "इक थाहर।",
      description:
        "MedX तुआढ़े सेहत इतिहास ते मेडिकल रिकार्डें गी इक सुरक्षित ते समझदार प्लेटफॉर्म पर इकट्ठा करदा ऐ।",
      patients: "मरीज",
      accuracy: "सटीकता",
      avgIntake: "औसत समां",
      whoAreYouToday: "अज्ज तुस कुन ओ?",
      selectRole:
        "शुरू करने आस्तै अपनी भूमिका चुनो",
      patient: "मरीज",
      imPatient: "में मरीज आं",
      patientDescription:
        "अपना सेहत इतिहास दर्ज करो ते मेडिकल रिकार्ड संभालो।",
      healthcareProfessional:
        "सेहत सेवा पेशेवर",
      imDoctor: "में डॉक्टर आं",
      doctorDescription:
        "मरीजें दे इतिहास दी समीक्षा करो ते क्लिनिकल रिकार्ड संभालो।",
      privacyNote:
        "तुआढ़ी सेहत जानकारी गुप्तता ते सहमति गी ध्यान च रखदे होई संभाली जंदी ऐ।",
      back: "पिच्छे",
      profile: "प्रोफाइल",
      healthIntake: "सेहत जानकारी",
      records: "रिकार्ड",
      letsGetStarted: "शुरू करचै",
      tellUsAboutYourself:
        "अपने बारे च दस्सो",
      basicDetailsDescription:
        "सेहत जानकारी शुरू करने शा पैह्ले सानूं कुछ बुनियादी जानकारी चाहीदी ऐ।",
      name: "नांऽ",
      age: "उम्र",
      gender: "लिंग",
      phoneNumber: "फोन नंबर",
      placeholders: {
        fullName: "अपना पूरा नांऽ लिखो",
        age: "तुआढ़ी उम्र",
        mobile: "10 अंकें दा मोबाइल नंबर",
        response: "अपने शब्दें च दस्सो...",
      },
      genderOptions: {
        select: "लिंग चुनो",
        male: "मर्द",
        female: "जनानी",
        other: "दूआ",
        preferNotToSay:
          "दस्सना पसंद नेई",
      },
      continueToHealthIntake:
        "सेहत जानकारी पर जाओ",
      formSecurity:
        "तुआढ़ी जानकारी सिर्फ तुआढ़ी सेहत यात्रा आस्तै बरती जाग।",
      medxAiAssistant: "MedX AI सहायक",
      understandFeeling:
        "आओ समझचै कि तुस केह् महसूस करा दे ओ।",
      answerQuestionsDescription:
        "इक विकल्प चुनियै जां अपना जवाब लिखियै सवालें दे जवाब देओ।",
      medxClinicalAssistant:
        "MedX क्लिनिकल सहायक",
      onlineAiPowered:
        "ऑनलाइन · AI आधारत जानकारी",
      connectionIssue: "कनेक्शन दी समस्या",
      tryAgain: "फ्ही कोशिश करो",
      continue: "अग्गे बढ़ो",
      intake: {
        selectOption:
          "हेठ दित्ते विकल्पें चा इक चुनो।",
        selectYesNo:
          "कृपा करियै हां जां नेई चुनो।",
        typeOrVoice:
          "अपना जवाब टाइप करो जां आवाज बरतो।",
      },
      voice: {
        stopListening: "सुनना बंद करो",
        input: "आवाज इनपुट",
      },
      listening:
        "सुन रा ऐ... हुन बोलो",
      intakeFooter:
        "तुआढ़े जवाब निजी न, ते सेहत सेवा पेशेवर उंदी समीक्षा करग।",
      historyReady:
        "तुआढ़ा सेहत इतिहास तैयार ऐ।",
      historyReadyDescription:
        "सेहत सेवा पेशेवर दी समीक्षा आस्तै MedX ने तुआढ़ी जानकारी व्यवस्थित करी ऐ।",
      healthIntakeSummary:
        "सेहत जानकारी सारांश",
      patientHistoryNotice:
        "एह् मरीज आसेआ दित्ता इतिहास ऐ ते मेडिकल निदान नेई। लाइसेंस प्राप्त सेहत पेशेवर कन्नै सलाह करो।",
      continueToMedicalRecords:
        "मेडिकल रिकार्डें पर जाओ",
      patientPortal: "मरीज पोर्टल",
      medicalRecords: "मेडिकल रिकार्ड",
      medicalRecordsDescription:
        "तुआढ़ा सेहत इतिहास सुरक्षित ढंगै कन्नै इक थाहर व्यवस्थित ऐ।",
      uploadDocument: "दस्तावेज अपलोड करो",
      recordsProtected:
        "तुआढ़े मेडिकल रिकार्ड सुरक्षित न",
      recordsProtectedDescription:
        "प्रमाणित रिकार्ड सिर्फ पढ़े जाई सकदे न ते बदले नेई जाई सकदे।",
      searchRecords:
        "अपने मेडिकल रिकार्ड खोजो...",
      categories: {
        all: "सारे दस्तावेज",
        labReports: "लैब रिपोर्ट",
        prescriptions: "प्रिस्क्रिप्शन",
        discharge: "डिस्चार्ज सारांश",
        other: "दूए दस्तावेज",
      },
      documents: "दस्तावेज",
      allYourRecords: "तुआढ़े सारे रिकार्ड",
      readOnly: "सिर्फ पढ़ने आस्तै",
      pending: "बाकी",
      source: "स्रोत",
      date: "तरीक",
      verified: "प्रमाणित",
      pendingVerification:
        "सत्यापन बाकी",
      view: "दिक्खो",
      noRecordsFound:
        "कोई रिकार्ड नेई लब्भा",
      noRecordsDescription:
        "अपनी खोज बदलो जां नमा दस्तावेज अपलोड करो।",
      medicalDocument: "मेडिकल दस्तावेज",
      uploadRecord: "इक रिकार्ड अपलोड करो",
      uploadRecordDescription:
        "अपने MedX सेहत इतिहास च पुराना मेडिकल दस्तावेज जोड़ो।",
      fileSelected:
        "फाइल चुनती गेई · अपलोड आस्तै तैयार",
      chooseDocument: "दस्तावेज चुनो",
      acceptedFormats:
        "PDF, JPG जां PNG मंजूर न",
      uploadVerificationWarning:
        "अपलोड किट्ठे दस्तावेजें दी प्रमाणिकता जांच होनी लोड़दी ऐ।",
      errors: {
        enterName: "कृपा करियै अपना नांऽ लिखो",
        enterAge: "कृपा करियै अपनी उम्र लिखो",
        validAge: "कृपा करियै सही उम्र लिखो",
        selectGender: "कृपा करियै अपना लिंग चुनो",
        enterPhone:
          "कृपा करियै अपना फोन नंबर लिखो",
        validPhone:
          "सही 10 अंकें दा नंबर लिखो",
      },
      speechErrors: {
        convertFailed:
          "तुआढ़ी आवाज गी टेक्स्ट च बदली नेई सकी। फ्ही कोशिश करो।",
        permissionDenied:
          "माइक्रोफोन दी इजाजत नेई मिली।",
        noMicrophone:
          "माइक्रोफोन नेई लब्भा।",
        unable:
          "माइक्रोफोन तक पहुंच नेई होई सकी।",
      },
      aiErrors: {
        timeout:
          "MedX जवाब देने च बड़ा समां ला रा ऐ। अपना कनेक्शन चेक करियै फ्ही कोशिश करो।",
        connection:
          "MedX क्लिनिकल इनटेक सर्वर कन्नै कनेक्ट नेई होई सकेआ। फ्ही कोशिश करो।",
      },
    },
  },

  // =====================================================
  // ENGLISH FALLBACK FOR REMAINING LANGUAGES
  // =====================================================
  // The remaining languages are included so the
  // LanguageSwitcher works correctly. They can be
  // expanded with native translations later.

  sw: {
    translation: {},
  },

  // =====================================================
  // DEFAULT FALLBACK
  // =====================================================
};

applyIntakeTranslations(resources);

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: "en",

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;