"use client"

import { useState, useRef, useEffect } from "react"
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Mic,
  Plus,
  Search,
  Sparkles,
  History,
  Settings,
  Edit,
  MoreVertical,
  Share,
  Pin,
  Edit2,
  Trash2,
  Users,
  Puzzle,
  Link,
  Palette,
  MessageSquare,
  HelpCircle,
  Pill,
  LogOut,
  User,
  Smile,
  Meh,
  Thermometer,
  Moon,
  Zap,
  Shield,
  Check,
  AlertTriangle,
  Building2,
  Phone,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const gradientStyle = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .gradient-text {
    background: linear-gradient(to right, #00c3ff, #ffff1c);
    background-size: 200% 200%;
    animation: gradient 6s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-ovos {
    background: linear-gradient(to right, #0F2027, #203A43, #2C5364);
    background-size: 200% 200%;
    animation: gradient 6s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  #particle-container {
    width: 100%;
    height: 100%;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }

  /* Rot - Allergien */
  .particle:nth-child(5n+1) { 
    background-color: rgba(239, 68, 68, 0.5); /* red-500 mit Transparenz */
  }

  /* Blau - Medikamente */
  .particle:nth-child(5n+2) { 
    background-color: rgba(59, 130, 246, 0.5); /* blue-500 mit Transparenz */
  }

  /* Orange - Erkrankungen */
  .particle:nth-child(5n+3) { 
    background-color: rgba(249, 115, 22, 0.5); /* orange-500 mit Transparenz */
  }

  /* Grün - Notfallkontakte */
  .particle:nth-child(5n+4) { 
    background-color: rgba(34, 197, 94, 0.5); /* green-500 mit Transparenz */
  }

  /* Lila - Wichtige Hinweise */
  .particle:nth-child(5n) { 
    background-color: rgba(168, 85, 247, 0.5); /* purple-500 mit Transparenz */
  }

  @keyframes particle-animation-1 {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(60vw, 30vh, 0); }
  }

  @keyframes particle-animation-2 {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(30vw, 90vh, 0); }
  }

  @keyframes particle-animation-3 {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(90vw, 50vh, 0); }
  }

  @keyframes particle-animation-4 {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-60vw, 70vh, 0); }
  }

  @keyframes particle-animation-5 {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-30vw, -40vh, 0); }
  }

  @keyframes particle-animation-6 {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(50vw, -70vh, 0); }
  }

  .particle:nth-child(1) {
    top: 20%;
    left: 60%;
    animation: particle-animation-1 30s infinite alternate;
  }

  .particle:nth-child(2) {
    top: 40%;
    left: 40%;
    animation: particle-animation-2 42s infinite alternate;
  }

  .particle:nth-child(3) {
    top: 60%;
    left: 10%;
    animation: particle-animation-3 48s infinite alternate;
  }

  .particle:nth-child(4) {
    top: 80%;
    left: 70%;
    animation: particle-animation-4 36s infinite alternate;
  }

  .particle:nth-child(5) {
    top: 30%;
    left: 20%;
    animation: particle-animation-5 45s infinite alternate;
  }

  .particle:nth-child(6) {
    top: 70%;
    left: 50%;
    animation: particle-animation-6 39s infinite alternate;
  }

  .particle:nth-child(7) {
    top: 10%;
    left: 30%;
    animation: particle-animation-1 51s infinite alternate;
  }

  .particle:nth-child(8) {
    top: 50%;
    left: 80%;
    animation: particle-animation-2 33s infinite alternate;
  }

  .particle:nth-child(9) {
    top: 25%;
    left: 75%;
    animation: particle-animation-3 42s infinite alternate;
  }

  .particle:nth-child(10) {
    top: 85%;
    left: 15%;
    animation: particle-animation-4 48s infinite alternate;
  }

  .particle:nth-child(11) {
    top: 5%;
    left: 45%;
    animation: particle-animation-5 36s infinite alternate;
  }

  .particle:nth-child(12) {
    top: 55%;
    left: 25%;
    animation: particle-animation-6 54s infinite alternate;
  }

  .particle:nth-child(13) {
    top: 35%;
    left: 65%;
    animation: particle-animation-1 39s infinite alternate;
  }

  .particle:nth-child(14) {
    top: 75%;
    left: 35%;
    animation: particle-animation-2 45s infinite alternate;
  }

  .particle:nth-child(15) {
    top: 15%;
    left: 85%;
    animation: particle-animation-3 33s infinite alternate;
  }

  .particle:nth-child(16) {
    top: 65%;
    left: 5%;
    animation: particle-animation-4 51s infinite alternate;
  }

  .particle:nth-child(17) {
    top: 45%;
    left: 55%;
    animation: particle-animation-5 42s infinite alternate;
  }

  .particle:nth-child(18) {
    top: 95%;
    left: 95%;
    animation: particle-animation-6 36s infinite alternate;
  }

  .particle:nth-child(19) {
    top: 25%;
    left: 35%;
    animation: particle-animation-1 48s infinite alternate;
  }

  .particle:nth-child(20) {
    top: 75%;
    left: 65%;
    animation: particle-animation-2 39s infinite alternate;
  }

  .particle:nth-child(21) {
    top: 15%;
    left: 15%;
    animation: particle-animation-3 45s infinite alternate;
  }

  .particle:nth-child(22) {
    top: 85%;
    left: 85%;
    animation: particle-animation-4 33s infinite alternate;
  }

  .particle:nth-child(23) {
    top: 45%;
    left: 95%;
    animation: particle-animation-5 51s infinite alternate;
  }

  .particle:nth-child(24) {
    top: 95%;
    left: 45%;
    animation: particle-animation-6 42s infinite alternate;
  }

  .particle:nth-child(25) {
    top: 35%;
    left: 5%;
    animation: particle-animation-1 36s infinite alternate;
  }

  .particle:nth-child(26) {
    top: 5%;
    left: 35%;
    animation: particle-animation-2 48s infinite alternate;
  }

  .particle:nth-child(27) {
    top: 65%;
    left: 75%;
    animation: particle-animation-3 39s infinite alternate;
  }

  .particle:nth-child(28) {
    top: 75%;
    left: 25%;
    animation: particle-animation-4 45s infinite alternate;
  }

  .particle:nth-child(29) {
    top: 55%;
    left: 15%;
    animation: particle-animation-5 33s infinite alternate;
  }

  .particle:nth-child(30) {
    top: 15%;
    left: 55%;
    animation: particle-animation-6 54s infinite alternate;
  }

  /* Text Particle Formation Animation */
  .text-particle-container {
    position: relative;
    display: inline-block;
  }

  .text-particle {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 0;
  }

  .text-particle.red { background-color: rgba(239, 68, 68, 0.8); }
  .text-particle.blue { background-color: rgba(59, 130, 246, 0.8); }
  .text-particle.orange { background-color: rgba(249, 115, 22, 0.8); }
  .text-particle.green { background-color: rgba(34, 197, 94, 0.8); }
  .text-particle.purple { background-color: rgba(168, 85, 247, 0.8); }

  @keyframes particleFormation {
    0% {
      opacity: 0;
      transform: translate(var(--start-x, 0), var(--start-y, 0)) scale(0);
    }
    30% {
      opacity: 1;
      transform: translate(calc(var(--start-x, 0) * 0.7), calc(var(--start-y, 0) * 0.7)) scale(1.5);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
  }

  .text-particle.animate {
    animation: particleFormation 2.5s ease-out forwards;
  }

  .text-reveal {
    opacity: 0;
    animation: textReveal 1.5s ease-out 3s forwards;
  }

  @keyframes textReveal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .particles-fade-out {
    animation: particlesFadeOut 1s ease-out 4s forwards;
  }

  @keyframes particlesFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .pill-animate {
    opacity: 0;
    animation: slideInFromBottom 0.6s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default function GeminiClone() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showEmergencyPass, setShowEmergencyPass] = useState(false)
  const [emergencyPassAnimating, setEmergencyPassAnimating] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [currentInput, setCurrentInput] = useState("")
  const [showChat, setShowChat] = useState(false)
  const [isAiTyping, setIsAiTyping] = useState(false)

  const [editMode, setEditMode] = useState(false)
  const [newMedication, setNewMedication] = useState({ name: "", dosage: "", frequency: "" })
  const [newAllergy, setNewAllergy] = useState("")
  const [newCondition, setNewCondition] = useState("")
  const [newContact, setNewContact] = useState({ name: "", phone: "" })
  const [newInfo, setNewInfo] = useState("")

  const [selectedLanguage, setSelectedLanguage] = useState("Deutsch")
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [showLoginModal, setShowLoginModal] = useState(false)

  // Theme state
  const [selectedTheme, setSelectedTheme] = useState("System")
  const [showDesignSubmenu, setShowDesignSubmenu] = useState(false)

  const [patientData, setPatientData] = useState({
    name: "Max Mustermann",
    age: "38 Jahre alt",
    weight: "75 kg",
    bloodType: "A+",
    organDonor: true,
    allergies: ["Penicillin (schwer)", "Erdnüsse", "Haselnüsse", "Latex", "Bienenstiche"],
    medications: [
      { name: "Metformin", dosage: "500mg", frequency: "2x täglich" },
      { name: "Ramipril", dosage: "5mg", frequency: "1x morgens" },
      { name: "ASS", dosage: "100mg", frequency: "täglich" },
      { name: "Vitamin D3", dosage: "1000 IE", frequency: "täglich" },
    ],
    conditions: ["Diabetes Typ 2", "Herzinfarkt 2019", "Hypertonie", "Hypercholesterinämie"],
    emergencyContacts: [
      { name: "Anna Mustermann (Ehefrau)", phone: "+49 123 456 7890" },
      { name: "Dr. Schmidt (Hausarzt)", phone: "+49 987 654 3210" },
    ],
    additionalInfo: ["Herzschrittmacher", "Kein MRT", "AOK Bayern"],
  })

  const [showConditionSuggestions, setShowConditionSuggestions] = useState(false)
  const [conditionSuggestions] = useState([
    "Diabetes Typ 1",
    "Diabetes Typ 2",
    "Hypertonie",
    "Hypercholesterinämie",
    "Herzinfarkt",
    "Schlaganfall",
    "Asthma",
    "COPD",
    "Arthritis",
    "Osteoporose",
    "Depression",
    "Angststörung",
    "Migräne",
    "Epilepsie",
    "Schilddrüsenüberfunktion",
    "Schilddrüsenunterfunktion",
    "Niereninsuffizienz",
    "Leberzirrhose",
  ])

  const [showAllergySuggestions, setShowAllergySuggestions] = useState(false)
  const [allergySuggestions] = useState([
    "Penicillin",
    "Erdnüsse",
    "Haselnüsse",
    "Walnüsse",
    "Mandeln",
    "Latex",
    "Bienenstiche",
    "Wespenstiche",
    "Pollen",
    "Hausstaub",
    "Katzenhaare",
    "Hundehaare",
    "Milch",
    "Eier",
    "Soja",
    "Weizen",
    "Fisch",
    "Meeresfrüchte",
  ])

  const [languages] = useState([
    "Deutsch",
    "English",
    "Français",
    "Español",
    "Italiano",
    "Nederlands",
    "Polski",
    "Türkçe",
    "العربية",
    "中文",
  ])

  const [isUserAtBottom, setIsUserAtBottom] = useState(true)
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  // Animation function for medication management
  const [medicationStep, setMedicationStep] = useState("name") // 'name', 'dosage', 'frequency'
  const [selectedMedication, setSelectedMedication] = useState("")
  const [smartSuggestions, setSmartSuggestions] = useState([])

  const [medicationDatabase] = useState([
    {
      name: "Metformin",
      commonDosages: ["500mg", "850mg", "1000mg"],
      frequencies: ["1x täglich", "2x täglich", "3x täglich"],
    },
    {
      name: "Ramipril",
      commonDosages: ["2.5mg", "5mg", "10mg"],
      frequencies: ["1x morgens", "1x abends", "2x täglich"],
    },
    { name: "ASS", commonDosages: ["100mg", "300mg", "500mg"], frequencies: ["täglich", "bei Bedarf"] },
    {
      name: "Ibuprofen",
      commonDosages: ["400mg", "600mg", "800mg"],
      frequencies: ["bei Bedarf", "2x täglich", "3x täglich"],
    },
    { name: "Paracetamol", commonDosages: ["500mg", "1000mg"], frequencies: ["bei Bedarf", "bis zu 4x täglich"] },
    { name: "Omeprazol", commonDosages: ["20mg", "40mg"], frequencies: ["1x morgens", "1x täglich"] },
    { name: "Simvastatin", commonDosages: ["20mg", "40mg"], frequencies: ["1x abends", "1x täglich"] },
    { name: "Vitamin D3", commonDosages: ["1000 IE", "2000 IE", "4000 IE"], frequencies: ["täglich", "wöchentlich"] },
  ])

  const [typingComplete, setTypingComplete] = useState(false)
  const [showPills, setShowPills] = useState(false)

  const handleLogout = () => {
    setIsLoggedIn(false)
    // Reset all states
    setShowChat(false)
    setChatMessages([])
    setCurrentInput("")
    setMedicationStep("name")
    setSelectedMedication("")
    setSmartSuggestions([])
    setShowEmergencyPass(false)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const showLoginModalDialog = () => {
    setShowLoginModal(true)
  }

  const hideLoginModalDialog = () => {
    setShowLoginModal(false)
  }

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme)
    setShowDesignSubmenu(false)
    // Here you could implement actual theme switching logic
    console.log(`Theme changed to: ${theme}`)
  }

  useEffect(() => {
    // Words will fade in sequentially with their own animation
    // Start pill animations after all words have faded in
    // const wordsCount = 6 // "Hey", "Martin,", "wie", "geht's", "dir", "heute?"
    // const wordAnimationDuration = 0.3 // seconds per word
    // const totalAnimationTime = wordsCount * wordAnimationDuration * 1000

    // setTimeout(() => {
    //   setShowPills(true)
    // }, totalAnimationTime + 500) // Add a small buffer after words finish

    setTimeout(() => {
      setShowPills(true)
    }, 2000) // Show pills 2 seconds after page load
  }, [])

  useEffect(() => {
    if (medicationStep === "dosage") {
      setSmartSuggestions(getSmartSuggestions("", "dosage"))
    } else if (medicationStep === "frequency") {
      setSmartSuggestions(getSmartSuggestions("", "frequency"))
    }
  }, [medicationStep, selectedMedication])

  // Click outside handler for design submenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Schließe das Design-Submenu, wenn außerhalb geklickt wird und nicht auf den Design-Menüpunkt
      if (showDesignSubmenu && !event.target.closest(".design-menu-item") && !event.target.closest(".design-submenu")) {
        setShowDesignSubmenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showDesignSubmenu])

  // Helper functions
  const addMedication = () => {
    if (newMedication.name && newMedication.dosage && newMedication.frequency) {
      setPatientData((prev) => ({
        ...prev,
        medications: [...prev.medications, newMedication],
      }))
      setNewMedication({ name: "", dosage: "", frequency: "" })
    }
  }

  const removeMedication = (index) => {
    setPatientData((prev) => ({
      ...prev,
      medications: prev.medications.filter((_, i) => i !== index),
    }))
  }

  const addAllergy = () => {
    if (newAllergy.trim()) {
      setPatientData((prev) => ({
        ...prev,
        allergies: [...prev.allergies, newAllergy.trim()],
      }))
      setNewAllergy("")
    }
  }

  const removeAllergy = (index) => {
    setPatientData((prev) => ({
      ...prev,
      allergies: prev.allergies.filter((_, i) => i !== index),
    }))
  }

  const addCondition = () => {
    if (newCondition.trim()) {
      setPatientData((prev) => ({
        ...prev,
        conditions: [...prev.conditions, newCondition.trim()],
      }))
      setNewCondition("")
    }
  }

  const removeCondition = (index) => {
    setPatientData((prev) => ({
      ...prev,
      conditions: prev.conditions.filter((_, i) => i !== index),
    }))
  }

  const addContact = () => {
    if (newContact.name && newContact.phone) {
      setPatientData((prev) => ({
        ...prev,
        emergencyContacts: [...prev.emergencyContacts, newContact],
      }))
      setNewContact({ name: "", phone: "" })
    }
  }

  const removeContact = (index) => {
    setPatientData((prev) => ({
      ...prev,
      emergencyContacts: prev.emergencyContacts.filter((_, i) => i !== index),
    }))
  }

  const addInfo = () => {
    if (newInfo.trim()) {
      setPatientData((prev) => ({
        ...prev,
        additionalInfo: [...prev.additionalInfo, newInfo.trim()],
      }))
      setNewInfo("")
    }
  }

  const removeInfo = (index) => {
    setPatientData((prev) => ({
      ...prev,
      additionalInfo: prev.additionalInfo.filter((_, i) => i !== index),
    }))
  }

  const selectConditionSuggestion = (condition) => {
    setPatientData((prev) => ({
      ...prev,
      conditions: [...prev.conditions, condition],
    }))
    setNewCondition("")
    setShowConditionSuggestions(false)
  }

  const selectAllergySuggestion = (allergy) => {
    setPatientData((prev) => ({
      ...prev,
      allergies: [...prev.allergies, allergy],
    }))
    setNewAllergy("")
    setShowAllergySuggestions(false)
  }

  const getSmartSuggestions = (input, step) => {
    if (step === "name") {
      return medicationDatabase
        .filter((med) => med.name.toLowerCase().includes(input.toLowerCase()))
        .slice(0, 6)
        .map((med) => med.name)
    } else if (step === "dosage") {
      const med = medicationDatabase.find((m) => m.name === selectedMedication)
      return med ? med.commonDosages : []
    } else if (step === "frequency") {
      const med = medicationDatabase.find((m) => m.name === selectedMedication)
      return med ? med.frequencies : []
    }
    return []
  }

  const handleMedicationInput = (value) => {
    setCurrentInput(value)
    if (medicationStep === "name" && value.length >= 2) {
      setSmartSuggestions(getSmartSuggestions(value, "name"))
    } else if (medicationStep === "name" && value.length < 2) {
      setSmartSuggestions([])
    }
  }

  const getAutocompleteSuggestion = (input) => {
    if (medicationStep === "name" && input.length >= 2) {
      const match = medicationDatabase.find((med) => med.name.toLowerCase().startsWith(input.toLowerCase()))
      return match ? match.name : ""
    }
    return ""
  }

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px threshold
      setIsUserAtBottom(isAtBottom)
    }
  }

  const scrollToBottom = () => {
    if (messagesEndRef.current && isUserAtBottom) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const startMedicationChat = async () => {
    setShowChat(true)

    // Step 1: Wait 500ms
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Step 2: Send user message immediately
    const userMessage = {
      id: Date.now(),
      type: "user",
      content: "Medikamente verwalten",
      timestamp: new Date(),
    }

    setChatMessages([userMessage])

    // Auto-scroll after user message
    setTimeout(scrollToBottom, 100)

    // Step 3: Wait 500ms then show AI response with typing animation
    await new Promise((resolve) => setTimeout(resolve, 500))

    const aiMessage = {
      id: Date.now() + 1,
      type: "ai",
      content: "medications",
      timestamp: new Date(),
      isTyping: true,
    }

    setChatMessages([userMessage, aiMessage])

    // Auto-scroll when AI starts typing
    setTimeout(scrollToBottom, 100)

    // Simulate typing animation for AI response
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setChatMessages([userMessage, { ...aiMessage, isTyping: false }])

    // Auto-scroll when AI finishes
    setTimeout(scrollToBottom, 100)
  }

  // Function to start new chat
  const startNewChat = () => {
    // Add fade out animation
    const mainContent = document.querySelector(".main-content")
    if (mainContent) {
      mainContent.style.opacity = "0"
      mainContent.style.transform = "translateY(20px)"
    }

    setTimeout(() => {
      setShowChat(false)
      setChatMessages([])
      setCurrentInput("")
      setMedicationStep("name")
      setSelectedMedication("")
      setSmartSuggestions([])

      // Add fade in animation
      if (mainContent) {
        mainContent.style.transition = "all 0.5s ease-in-out"
        mainContent.style.opacity = "1"
        mainContent.style.transform = "translateY(0)"
      }
    }, 200)
  }

  const [medicationInput, setMedicationInput] = useState("")
  const [showMedicationSuggestions, setShowMedicationSuggestions] = useState(false)
  const [medicationSuggestions] = useState([
    "Metformin 500mg 2x täglich hinzufügen",
    "Ramipril 5mg 1x morgens hinzufügen",
    "ASS 100mg täglich hinzufügen",
    "Ibuprofen 400mg bei Bedarf hinzufügen",
    "Paracetamol 500mg bei Bedarf hinzufügen",
    "Vitamin D3 1000 IE täglich hinzufügen",
    "Omeprazol 20mg morgens hinzufügen",
    "Metformin entfernen",
    "Ramipril entfernen",
    "ASS entfernen",
    "Vitamin D3 entfernen",
    "Dosierung von Metformin auf 1000mg ändern",
    "Häufigkeit von Ramipril auf 2x täglich ändern",
  ])

  const selectMedicationSuggestion = (suggestion) => {
    if (medicationStep === "name") {
      setSelectedMedication(suggestion)
      setCurrentInput("")
      setMedicationStep("dosage")
      setSmartSuggestions(getSmartSuggestions("", "dosage"))
    } else if (medicationStep === "dosage") {
      setCurrentInput("")
      setMedicationStep("frequency")
      setSmartSuggestions(getSmartSuggestions("", "frequency"))
    } else if (medicationStep === "frequency") {
      // Medikament hinzufügen
      const newMed = {
        name: selectedMedication,
        dosage: medicationStep === "dosage" ? suggestion : newMedication.dosage,
        frequency: suggestion,
      }

      // Add with animation
      setPatientData((prev) => ({
        ...prev,
        medications: [...prev.medications, newMed],
      }))

      // Animate the new pill
      setTimeout(() => {
        const newPills = document.querySelectorAll(".animate-in")
        const lastPill = newPills[newPills.length - 1]
        if (lastPill) {
          lastPill.style.animation = "slide-in-from-bottom-2 0.5s ease-out"
        }
      }, 100)

      // Chat-Nachricht hinzufügen mit korrekter Formatierung
      const userMessage = {
        id: Date.now(),
        type: "user",
        content: `Füge zu meinen Medikamenten ${selectedMedication} ${newMed.dosage} ${suggestion} hinzu`,
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, userMessage])

      // AI Antwort hinzufügen
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          type: "ai",
          content: `Perfekt! Ich habe ${selectedMedication} ${newMed.dosage} ${suggestion} zu deinen Medikamenten hinzugefügt. Das Medikament ist jetzt in deiner Liste gespeichert.`,
          timestamp: new Date(),
        }
        setChatMessages((prev) => [...prev, aiResponse])
        setTimeout(scrollToBottom, 100)
      }, 1000)

      // Auto-scroll after adding message
      setTimeout(scrollToBottom, 100)

      // Reset
      setCurrentInput("")
      setMedicationStep("name")
      setSelectedMedication("")
      setSmartSuggestions([])
    }
  }

  const resetMedicationInput = () => {
    setCurrentInput("")
    setMedicationStep("name")
    setSelectedMedication("")
    setSmartSuggestions([])
  }

  const showEmergencyPassModal = () => {
    setShowEmergencyPass(true)
    setTimeout(() => setEmergencyPassAnimating(true), 50)
  }

  const hideEmergencyPassModal = () => {
    setEmergencyPassAnimating(false)
    setTimeout(() => setShowEmergencyPass(false), 300)
  }

  return (
    <div className="flex h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: gradientStyle }} />

      {!isLoggedIn ? (
        // Logged out state
        <div className="w-full h-screen bg-white">
          {/* Header */}
          <header className="sticky top-0 z-30 flex items-center justify-between p-6 bg-white">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-black">ovos</h1>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                onClick={handleLogin}
              >
                Anmelden
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 text-sm">
                Registrieren
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <HelpCircle className="w-5 h-5" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center main-content transition-all duration-500 ease-in-out h-full mt-[-54px]">
            {/* Greeting */}
            <h2 className="text-4xl font-normal mb-6 relative">
              <div className="flex justify-center">
                <span
                  className="opacity-0"
                  style={{
                    background: "linear-gradient(to right, #00467F, #A5CC82)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: `fadeIn 1s ease-in-out forwards`,
                    animationDelay: "0.5s",
                  }}
                >
                  Wie geht es dir heute?
                </span>
              </div>
            </h2>

            {/* Chat Input */}
            <div className="w-full max-w-2xl mt-4">
              <div className="relative">
                <div className="flex items-center bg-white border border-gray-300 rounded-full px-6 py-4 shadow-sm hover:shadow-md focus-within:border-blue-600 focus-within:border-2 transition-all">
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100 mr-2">
                    <Plus className="w-5 h-5" />
                  </Button>

                  <Input
                    placeholder="Erzähl mir, wie es dir geht..."
                    className="flex-1 border-0 focus-visible:ring-0 focus-visible:outline-none text-lg placeholder:text-gray-500"
                  />

                  <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100">
                    <Mic className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Suggestion Pills */}
            <div className="w-full max-w-4xl mt-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { icon: Smile, color: "green", text: "Mir geht's gut" },
                  { icon: Meh, color: "yellow", text: "Könnte besser sein" },
                  { icon: Thermometer, color: "orange", text: "Ich fühle mich krank" },
                  { icon: Moon, color: "purple", text: "Ich bin müde" },
                  { icon: Zap, color: "red", text: "Ich habe Schmerzen" },
                  { icon: Shield, color: "red", text: "Zeig mein Notfallpass", onClick: showLoginModalDialog },
                  { icon: Pill, color: "blue", text: "Medikamente verwalten" },
                ].map((pill, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-[#c2d4d4] hover:scale-105 hover:border-gray-300 border border-transparent transition-all duration-200 cursor-pointer ${showPills ? "pill-animate" : "opacity-0"}`}
                    style={{
                      animationDelay: showPills ? `${index * 150}ms` : "0ms",
                      backgroundColor: "#f2f9f9",
                    }}
                  >
                    <pill.icon className={`w-4 h-4 text-${pill.color}-500 mr-2`} />
                    {pill.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          {/* Login Modal */}
          {showLoginModal && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={hideLoginModalDialog}
            >
              <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="text-center space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Willkommen zurück</h2>

                  <p className="text-gray-600 leading-relaxed">
                    Melde dich an oder registriere dich, um intelligentere Reaktionen zu erhalten, Dateien und Bilder
                    hochzuladen und vieles mehr zu tun.
                  </p>

                  <div className="space-y-4">
                    <Button
                      className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full text-base font-medium"
                      onClick={() => {
                        hideLoginModalDialog()
                        handleLogin()
                      }}
                    >
                      Anmelden
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-300 hover:bg-gray-50 text-gray-900 py-3 rounded-full text-base font-medium bg-transparent"
                      onClick={hideLoginModalDialog}
                    >
                      Registrieren
                    </Button>
                  </div>

                  <button
                    className="text-gray-600 hover:text-gray-800 underline text-sm font-medium"
                    onClick={hideLoginModalDialog}
                  >
                    Abgemeldet bleiben
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Existing logged in state (keep all the existing JSX here)
        <>
          {/* Hover Sidebar */}
          <div
            className={`${
              sidebarOpen ? "w-72" : "w-16"
            } transition-all duration-300 overflow-hidden flex flex-col fixed top-0 left-0 h-screen z-50`}
            style={{ backgroundColor: "#f2f9f9" }}
            onMouseEnter={() => setSidebarOpen(true)}
            onMouseLeave={() => setSidebarOpen(false)}
          >
            {/* Top Section with Menu and Search */}
            <div className="p-4 flex items-center">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-[#d6e5e5]">
                <Menu className="w-5 h-5" />
              </Button>
              <div className="flex-1 flex justify-end">
                <div
                  className={`transition-all duration-300 ${sidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                >
                  {sidebarOpen && (
                    <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-[#d6e5e5]">
                      <Search className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Main Navigation Items */}
            <div className="px-4 space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-700 hover:bg-[#d6e5e5] px-2 py-2"
                onClick={startNewChat}
              >
                <Edit className="w-5 h-5 mr-2" />
                <span
                  className={`transition-all duration-300 delay-75 ${sidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                >
                  {sidebarOpen && "Neuer Chat"}
                </span>
              </Button>

              <div
                className={`transition-all duration-300 delay-100 ${sidebarOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                {sidebarOpen && (
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-[#d6e5e5] px-2 py-2">
                    <Sparkles className="w-5 h-5 mr-2" />
                    <span>Gems entdecken</span>
                  </Button>
                )}
              </div>
            </div>

            {/* Recent Topics Section */}
            <div
              className={`transition-all duration-400 delay-150 ${sidebarOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {sidebarOpen && (
                <div className="px-4 py-6">
                  <h3 className="text-sm font-medium text-gray-600 mb-3 px-3">Letzte Themen</h3>
                  <div className="relative group">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-700 hover:bg-[#d6e5e5] p-3 text-sm pr-10"
                    >
                      Bilderstellung in Kürze verfü...
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 text-gray-500 hover:bg-gray-300"
                          onMouseEnter={(e) => e.stopPropagation()}
                          onMouseLeave={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-48"
                        onMouseEnter={(e) => e.stopPropagation()}
                        onMouseLeave={(e) => e.stopPropagation()}
                      >
                        <DropdownMenuItem className="flex items-center">
                          <Share className="w-4 h-4 mr-2" />
                          Freigeben
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Pin className="w-4 h-4 mr-2" />
                          Anpinnen
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Edit2 className="w-4 h-4 mr-2" />
                          Umbenennen
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Löschen
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )}
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Bottom Section */}
            <div className="p-4 space-y-1">
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-[#d6e5e5] px-2 py-2">
                <History className="w-5 h-5 mr-2" />
                <span
                  className={`transition-all duration-300 delay-200 ${sidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                >
                  {sidebarOpen && "Aktivitäten"}
                </span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-[#d6e5e5] px-2 py-2">
                    <Settings className="w-5 h-5 mr-2" />
                    <span
                      className={`transition-all duration-300 delay-250 ${sidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                    >
                      {sidebarOpen && "Einstellungen und Hilfe"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-64"
                  onMouseEnter={(e) => e.stopPropagation()}
                  onMouseLeave={(e) => e.stopPropagation()}
                >
                  <DropdownMenuItem className="flex items-center py-3" onMouseEnter={() => setShowDesignSubmenu(false)}>
                    <Users className="w-5 h-5 mr-3 text-gray-600" />
                    <span>Gespeicherte Informationen</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center py-3" onMouseEnter={() => setShowDesignSubmenu(false)}>
                    <Puzzle className="w-5 h-5 mr-3 text-gray-600" />
                    <span>Apps</span>
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center py-3" onMouseEnter={() => setShowDesignSubmenu(false)}>
                    <Link className="w-5 h-5 mr-3 text-gray-600" />
                    <span>Meine öffentlichen Links</span>
                  </DropdownMenuItem>

                  {/* Design Menu Item */}
                  <DropdownMenuItem
                    className="flex items-center py-3 cursor-pointer design-menu-item relative"
                    onSelect={(e) => e.preventDefault()} // Verhindere das Schließen des Dropdowns
                    onClick={() => setShowDesignSubmenu(!showDesignSubmenu)} // Umschalten beim Klick
                    onMouseEnter={() => setShowDesignSubmenu(true)} // Öffnen bei Hover
                  >
                    <Palette className="w-5 h-5 mr-3 text-gray-600" />
                    <span>Design</span>
                    <ChevronRight
                      className={`w-4 h-4 ml-auto text-gray-400 transition-transform ${showDesignSubmenu ? "rotate-90" : ""}`}
                    />

                    {/* Design Submenu - mit besserer Positionierung */}
                    {showDesignSubmenu && (
                      <div
                        className="fixed bg-white border border-gray-200 rounded-md shadow-xl z-[200] w-48 design-submenu"
                        style={{
                          left: sidebarOpen ? "270px" : "60px", // Näher an der Einstellungsbox
                          top: "auto", // Automatische Positionierung
                          transform: "translateY(-50%)", // Vertikal zentrieren
                        }}
                        onClick={(e) => e.stopPropagation()} // Verhindert, dass Klicks auf das Submenu das Hauptmenü schließen
                      >
                        <div className="py-2">
                          {["System", "Hell", "Dunkel"].map((theme) => (
                            <button
                              key={theme}
                              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center justify-between transition-colors"
                              onClick={() => handleThemeChange(theme)}
                            >
                              <span className="text-gray-700">{theme}</span>
                              {selectedTheme === theme && <Check className="w-4 h-4 text-blue-600" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex items-center py-3" onMouseEnter={() => setShowDesignSubmenu(false)}>
                    <MessageSquare className="w-5 h-5 mr-3 text-gray-600" />
                    <span>Feedback geben</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center py-3" onMouseEnter={() => setShowDesignSubmenu(false)}>
                    <HelpCircle className="w-5 h-5 mr-3 text-gray-600" />
                    <span>Hilfe</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`flex-1 flex flex-col bg-white transition-all duration-300 ${sidebarOpen ? "ml-72" : "ml-16"}`}
          >
            {/* Header */}
            <header className="sticky top-0 z-30 flex items-center justify-between p-4 bg-gradient-to-b from-white to-gray-50/30">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold gradient-ovos">ovos</h1>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-xs text-gray-600 hover:bg-[#d6e5e5] bg-[#f2f9f9] px-2 py-1 h-6"
                      >
                        2.5 Flash
                        <ChevronDown className="w-3 h-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>2.5 Flash</DropdownMenuItem>
                      <DropdownMenuItem>2.0 Pro</DropdownMenuItem>
                      <DropdownMenuItem>1.5 Pro</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button variant="outline" className="text-sm bg-transparent">
                  <span className="text-red-500 mr-1">♦</span>
                  Upgrade
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 w-8 h-8 rounded-full">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-blue-600 text-white text-sm">O</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem className="flex items-center py-3">
                      <User className="w-5 h-5 mr-3 text-gray-600" />
                      <span>Profil</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center py-3" onClick={handleLogout}>
                      <LogOut className="w-5 h-5 mr-3 text-gray-600" />
                      <span>Abmelden</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col px-6 bg-white relative">
              {!showChat ? (
                <div className="flex-1 flex flex-col items-center justify-center main-content transition-all duration-500 ease-in-out mt-[-84px]">
                  {/* Greeting */}
                  <h2 className="text-4xl font-normal mb-6 relative">
                    <div className="flex justify-center">
                      <span
                        className="opacity-0"
                        style={{
                          background: "linear-gradient(to right, #00467F, #A5CC82)",
                          backgroundSize: "200% 200%",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          animation: `fadeIn 1s ease-in-out forwards`,
                          animationDelay: "0.5s",
                        }}
                      >
                        Wie geht es dir heute?
                      </span>
                    </div>
                  </h2>

                  {/* Chat Input */}
                  <div className="w-full max-w-2xl mt-4">
                    <div className="relative">
                      <div className="flex items-center bg-white border border-gray-300 rounded-full px-6 py-4 shadow-sm hover:shadow-md focus-within:border-blue-600 focus-within:border-2 transition-all">
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100 mr-2">
                          <Plus className="w-5 h-5" />
                        </Button>

                        <Input
                          placeholder="Erzähl mir, wie es dir geht..."
                          className="flex-1 border-0 focus-visible:ring-0 focus-visible:outline-none text-lg placeholder:text-gray-500"
                        />

                        <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100">
                          <Mic className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Suggestion Pills */}
                  <div className="w-full max-w-4xl mt-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                      {[
                        { icon: Smile, color: "green", text: "Mir geht's gut" },
                        { icon: Meh, color: "yellow", text: "Könnte besser sein" },
                        { icon: Thermometer, color: "orange", text: "Ich fühle mich krank" },
                        { icon: Moon, color: "purple", text: "Ich bin müde" },
                        { icon: Zap, color: "red", text: "Ich habe Schmerzen" },
                        { icon: Shield, color: "red", text: "Zeig mein Notfallpass", onClick: showEmergencyPassModal },
                        { icon: Pill, color: "blue", text: "Medikamente verwalten", onClick: startMedicationChat },
                      ].map((pill, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className={`rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-[#c2d4d4] hover:scale-105 hover:border-gray-300 border border-transparent transition-all duration-200 cursor-pointer bg-white ${showPills ? "pill-animate" : "opacity-0"}`}
                          style={{
                            animationDelay: showPills ? `${index * 150}ms` : "0ms",
                            backgroundColor: "#f2f9f9",
                          }}
                          onClick={pill.onClick}
                        >
                          <pill.icon className={`w-4 h-4 text-${pill.color}-500 mr-2`} />
                          {pill.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Chat Messages */}
                  <div className="w-full max-w-4xl h-full flex flex-col mx-auto pb-32">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                    <div
                      ref={chatContainerRef}
                      className="flex-1 overflow-y-auto space-y-6 py-8"
                      onScroll={handleScroll}
                    >
                      {chatMessages.map((message) => (
                        <div key={message.id} className="flex space-x-4">
                          {message.type === "user" ? (
                            <>
                              <div className="flex-1"></div>
                              <div className="max-w-2xl">
                                <div
                                  className="rounded-2xl px-4 py-3"
                                  style={{
                                    background: "linear-gradient(to right, #A1FFCE, #FAFFD1)",
                                  }}
                                >
                                  <p className="text-gray-800">{message.content}</p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 animate-gradient"
                                style={{
                                  background: "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
                                  backgroundSize: "200% 200%",
                                  animation: "gradient 6s ease infinite",
                                }}
                              >
                                <span className="text-white font-bold text-lg">OV</span>
                              </div>
                              <div className="flex-1 max-w-2xl">
                                <div>
                                  {message.isTyping ? (
                                    <div className="flex items-center space-x-2">
                                      <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div
                                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                          style={{ animationDelay: "0.1s" }}
                                        ></div>
                                        <div
                                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                          style={{ animationDelay: "0.2s" }}
                                        ></div>
                                      </div>
                                      <span className="text-gray-500 text-sm">OVOS tippt...</span>
                                    </div>
                                  ) : message.content === "medications" ? (
                                    <>
                                      <p className="text-gray-800 mb-6">Hier sind deine aktuellen Medikamente:</p>

                                      <div className="space-y-4">
                                        <h4 className="font-semibold text-gray-900 flex items-center">
                                          <Pill className="w-4 h-4 text-blue-500 mr-2" />
                                          Deine Medikamente
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                          {patientData.medications.map((medication, index) => (
                                            <div
                                              key={index}
                                              className="bg-blue-50 px-3 py-2 rounded-xl border border-blue-200 min-w-0 flex items-start group animate-in slide-in-from-bottom-2 duration-300"
                                              style={{ animationDelay: `${index * 50}ms` }}
                                            >
                                              <div className="flex-1 min-w-0">
                                                <div className="text-blue-600 font-medium text-sm leading-tight">
                                                  {medication.name} {medication.dosage}
                                                </div>
                                                <div className="text-blue-500 text-xs mt-0.5 leading-tight">
                                                  {medication.frequency}
                                                </div>
                                              </div>
                                              <button
                                                onClick={() => {
                                                  // Add fade out animation
                                                  const pillElement = document.querySelector(
                                                    `[data-medication-index="${index}"]`,
                                                  )
                                                  if (pillElement) {
                                                    pillElement.style.transition = "all 0.3s ease-out"
                                                    pillElement.style.opacity = "0"
                                                    pillElement.style.transform = "scale(0.8)"
                                                    setTimeout(() => {
                                                      setPatientData((prev) => ({
                                                        ...prev,
                                                        medications: prev.medications.filter((_, i) => i !== index),
                                                      }))
                                                    }, 300)
                                                  }
                                                }}
                                                className="ml-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                                data-medication-index={index}
                                              >
                                                ×
                                              </button>
                                            </div>
                                          ))}
                                        </div>
                                      </div>

                                      <p className="text-gray-600 text-sm mt-6">
                                        Du kannst mir sagen, was du ändern möchtest. Zum Beispiel: "Füge Ibuprofen 400mg
                                        2x täglich hinzu" oder "Entferne Metformin"
                                      </p>
                                    </>
                                  ) : (
                                    <p className="text-gray-800">{message.content}</p>
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {/* Chat Input - fixed at bottom */}
                  <div
                    className="fixed bottom-0 right-0 bg-white/80 backdrop-blur-md z-40 transition-all duration-300 ease-in-out"
                    style={{ left: sidebarOpen ? "288px" : "64px" }}
                  >
                    <div className="absolute bottom-full left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="w-full max-w-3xl mx-auto px-0 pb-[54px] pt-6">
                      <div className="relative">
                        {/* Smart Suggestions Pills */}
                        {smartSuggestions.length > 0 && (
                          <div className="absolute bottom-full left-0 right-0 mb-3 z-50">
                            <div className="relative overflow-hidden">
                              <div
                                className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
                                style={{
                                  maskImage: "linear-gradient(to right, black 0%, black 80%, transparent 100%)",
                                  WebkitMaskImage: "linear-gradient(to right, black 0%, black 80%, transparent 100%)",
                                }}
                              >
                                {smartSuggestions.map((suggestion, index) => (
                                  <Button
                                    key={index}
                                    variant="outline"
                                    className="rounded-full px-4 py-2 text-sm text-gray-700 border-gray-300 hover:bg-gray-50 transition-all whitespace-nowrap flex-shrink-0 animate-in slide-in-from-bottom-2 duration-300 z-50 bg-transparent"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    onClick={() => selectMedicationSuggestion(suggestion)}
                                  >
                                    {medicationStep === "name" && <Pill className="w-3 h-3 mr-2 text-blue-500" />}
                                    {suggestion}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Input Field */}
                        <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-3 shadow-sm hover:shadow-md focus-within:border-blue-600 focus-within:border-2 transition-all">
                          <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100 mr-2">
                            <Plus className="w-5 h-5" />
                          </Button>

                          <div className="relative flex-1">
                            <Input
                              autoFocus={medicationStep !== "name"}
                              placeholder={
                                medicationStep === "name"
                                  ? "Medikament eingeben (z.B. Metformin)..."
                                  : medicationStep === "dosage"
                                    ? "Dosierung wählen..."
                                    : "Häufigkeit wählen..."
                              }
                              className="flex-1 border-0 focus-visible:ring-0 focus-visible:outline-none text-base placeholder:text-gray-500"
                              value={currentInput}
                              onChange={(e) => handleMedicationInput(e.target.value)}
                              onFocus={() => {
                                if (medicationStep === "name" && currentInput.length >= 2) {
                                  setSmartSuggestions(getSmartSuggestions(currentInput, "name"))
                                } else if (medicationStep === "dosage") {
                                  setSmartSuggestions(getSmartSuggestions("", "dosage"))
                                } else if (medicationStep === "frequency") {
                                  setSmartSuggestions(getSmartSuggestions("", "frequency"))
                                }
                              }}
                            />
                            {medicationStep === "name" &&
                              currentInput.length >= 2 &&
                              getAutocompleteSuggestion(currentInput) && (
                                <div className="absolute inset-0 flex items-center pointer-events-none">
                                  <span className="text-base text-gray-400 ml-3">
                                    {currentInput}
                                    <span className="text-gray-300">
                                      {getAutocompleteSuggestion(currentInput).slice(currentInput.length)}
                                    </span>
                                  </span>
                                </div>
                              )}
                          </div>

                          {/* Fertig Button - nur im Medikations-Chat sichtbar */}
                          {showChat && (
                            <Button
                              variant="outline"
                              className="rounded-full px-3 py-1 text-xs text-gray-600 border-gray-300 mr-2 bg-transparent"
                              onClick={() => {
                                // Chat-Nachricht hinzufügen
                                const userMessage = {
                                  id: Date.now(),
                                  type: "user",
                                  content: "Fertig mit der Medikamentenverwaltung",
                                  timestamp: new Date(),
                                }
                                setChatMessages((prev) => [...prev, userMessage])

                                // AI Antwort hinzufügen
                                setTimeout(() => {
                                  const aiResponse = {
                                    id: Date.now() + 1,
                                    type: "ai",
                                    content:
                                      "Perfekt! Deine Medikamentenliste wurde erfolgreich aktualisiert. Alle Änderungen sind gespeichert. Gibt es noch etwas anderes, womit ich dir helfen kann?",
                                    timestamp: new Date(),
                                  }
                                  setChatMessages((prev) => [...prev, aiResponse])
                                  setTimeout(scrollToBottom, 100)
                                }, 1000)

                                // Reset medication input
                                setCurrentInput("")
                                setMedicationStep("name")
                                setSelectedMedication("")
                                setSmartSuggestions([])

                                // Auto-scroll
                                setTimeout(scrollToBottom, 100)
                              }}
                            >
                              Fertig
                            </Button>
                          )}

                          {medicationStep !== "name" && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={resetMedicationInput}
                              className="text-gray-500 hover:bg-gray-100 mr-2 relative"
                            >
                              <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                            </Button>
                          )}

                          <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100">
                            <Mic className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {showEmergencyPass && (
            <div
              className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={hideEmergencyPassModal}
            >
              {/* Particle Background for Emergency Pass */}
              <div id="particle-container" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="particle"></div>
                ))}
              </div>

              <div
                className={`bg-[#f2f9f9] rounded-[2.5rem] p-1 w-full max-w-[320px] h-full max-h-[680px] shadow-md transition-transform duration-300 ease-out ${
                  emergencyPassAnimating ? "translate-y-0" : "translate-y-full"
                } relative z-10`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  boxShadow: "0 -10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* iPhone Frame */}
                <div className="bg-white rounded-[2.25rem] h-full flex flex-col overflow-hidden">
                  {/* Status Bar */}

                  {/* Header */}

                  {/* Content */}
                  <div className="flex-1 overflow-y-auto bg-gray-50">
                    {/* Header Bar */}
                    <div className="sticky top-0 z-10 bg-white px-3 pt-8 pb-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center ml-2">
                          <span className="text-sm font-semibold text-gray-700">MM</span>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                          <h3 className="text-base font-semibold text-gray-900">Notfallpass</h3>
                        </div>
                        <button onClick={hideEmergencyPassModal} className="text-blue-600 font-medium text-sm">
                          {editMode ? "Fertig" : "Bearbeiten"}
                        </button>
                      </div>
                    </div>

                    {/* Profile Section */}
                    <div className="bg-gray-50 px-6 py-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-semibold text-gray-700">MM</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-semibold text-gray-900">{patientData.name}</h4>
                          <p className="text-gray-500 mt-1">
                            {patientData.age} • {patientData.weight}
                          </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                          <div className="bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                            <span className="text-blue-600 font-medium text-sm">
                              Blutgruppe {patientData.bloodType}
                            </span>
                          </div>
                          <div className="bg-green-50 px-3 py-1 rounded-full border border-green-200">
                            <span className="text-green-600 font-medium text-sm">
                              {patientData.organDonor ? "Organspender" : "Kein Organspender"}
                            </span>
                          </div>
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                            className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                          >
                            <span>🌐</span>
                            <span>{selectedLanguage}</span>
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          {showLanguageDropdown && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[120px] max-h-40 overflow-y-auto">
                              {languages.map((language, index) => (
                                <button
                                  key={index}
                                  className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm border-b border-gray-100 last:border-b-0"
                                  onClick={() => {
                                    setSelectedLanguage(language)
                                    setShowLanguageDropdown(false)
                                  }}
                                >
                                  {language}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Medical Information */}
                    <div className="px-6 space-y-4 pb-6 bg-gray-50">
                      {/* Allergies */}
                      <div className="bg-transparent rounded-2xl p-4">
                        <div className="flex items-center mb-3 pb-2">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900">Allergien</h5>
                        </div>
                        {editMode ? (
                          <div className="space-y-3">
                            <div className="relative">
                              <div className="relative flex-1">
                                <Input
                                  placeholder="Neue Allergie hinzufügen..."
                                  className="text-sm"
                                  value={newAllergy}
                                  onChange={(e) => setNewAllergy(e.target.value)}
                                  onFocus={() => setShowAllergySuggestions(true)}
                                  onBlur={() => setTimeout(() => setShowAllergySuggestions(false), 200)}
                                  onKeyPress={(e) => e.key === "Enter" && addAllergy()}
                                />
                                {showAllergySuggestions && (
                                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto mt-1">
                                    {allergySuggestions
                                      .filter(
                                        (suggestion) =>
                                          suggestion.toLowerCase().includes(newAllergy.toLowerCase()) &&
                                          !patientData.allergies.includes(suggestion),
                                      )
                                      .map((suggestion, index) => (
                                        <button
                                          key={index}
                                          className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm border-b border-gray-100 last:border-b-0"
                                          onMouseDown={() => selectAllergySuggestion(suggestion)}
                                        >
                                          {suggestion}
                                        </button>
                                      ))}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {patientData.allergies.map((allergy, index) => (
                                <div
                                  key={index}
                                  className="bg-red-50 px-3 py-1 rounded-full border border-red-200 flex items-center group"
                                >
                                  <span className="text-red-600 font-medium text-sm">{allergy}</span>
                                  <button
                                    onClick={() => removeAllergy(index)}
                                    className="ml-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {patientData.allergies.map((allergy, index) => (
                              <div key={index} className="bg-red-50 px-3 py-1 rounded-full border border-red-200">
                                <span className="text-red-600 font-medium text-sm">{allergy}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Medications */}
                      <div className="bg-transparent rounded-2xl p-4">
                        <div className="flex items-center mb-3 pb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <Pill className="w-4 h-4 text-blue-500" />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900">Medikamente</h5>
                        </div>
                        {editMode ? (
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <Input
                                placeholder="Medikament (z.B. Metformin)"
                                className="text-sm"
                                value={newMedication.name}
                                onChange={(e) => setNewMedication((prev) => ({ ...prev, name: e.target.value }))}
                              />
                              <Input
                                placeholder="Dosierung (z.B. 500mg)"
                                className="text-sm"
                                value={newMedication.dosage}
                                onChange={(e) => setNewMedication((prev) => ({ ...prev, dosage: e.target.value }))}
                              />
                              <Input
                                placeholder="Häufigkeit (z.B. 2x täglich)"
                                className="text-sm"
                                value={newMedication.frequency}
                                onChange={(e) => setNewMedication((prev) => ({ ...prev, frequency: e.target.value }))}
                              />
                              <Button
                                onClick={addMedication}
                                size="sm"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                              >
                                Medikament hinzufügen
                              </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {patientData.medications.map((medication, index) => (
                                <div
                                  key={index}
                                  className="bg-blue-50 px-3 py-2 rounded-xl border border-blue-200 flex items-start group min-w-0"
                                >
                                  <div className="flex-1 min-w-0">
                                    <div className="text-blue-600 font-medium text-sm leading-tight">
                                      {medication.name} {medication.dosage}
                                    </div>
                                    <div className="text-blue-500 text-xs mt-0.5 leading-tight">
                                      {medication.frequency}
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => removeMedication(index)}
                                    className="ml-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {patientData.medications.map((medication, index) => (
                              <div
                                key={index}
                                className="bg-blue-50 px-3 py-2 rounded-xl border border-blue-200 min-w-0"
                              >
                                <div className="text-blue-600 font-medium text-sm leading-tight">
                                  {medication.name} {medication.dosage}
                                </div>
                                <div className="text-blue-500 text-xs mt-0.5 leading-tight">{medication.frequency}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Medical Conditions */}
                      <div className="bg-transparent rounded-2xl p-4">
                        <div className="flex items-center mb-3 pb-2">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <Building2 className="w-4 h-4 text-orange-500" />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900">Erkrankungen</h5>
                        </div>
                        {editMode ? (
                          <div className="space-y-3">
                            <div className="relative">
                              <div className="relative flex-1">
                                <Input
                                  placeholder="Neue Erkrankung hinzufügen..."
                                  className="text-sm"
                                  value={newCondition}
                                  onChange={(e) => setNewCondition(e.target.value)}
                                  onFocus={() => setShowConditionSuggestions(true)}
                                  onBlur={() => setTimeout(() => setShowConditionSuggestions(false), 200)}
                                  onKeyPress={(e) => e.key === "Enter" && addCondition()}
                                />
                                {showConditionSuggestions && (
                                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto mt-1">
                                    {conditionSuggestions
                                      .filter(
                                        (suggestion) =>
                                          suggestion.toLowerCase().includes(newCondition.toLowerCase()) &&
                                          !patientData.conditions.includes(suggestion),
                                      )
                                      .map((suggestion, index) => (
                                        <button
                                          key={index}
                                          className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm border-b border-gray-100 last:border-b-0"
                                          onMouseDown={() => selectConditionSuggestion(suggestion)}
                                        >
                                          {suggestion}
                                        </button>
                                      ))}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {patientData.conditions.map((condition, index) => (
                                <div
                                  key={index}
                                  className="bg-orange-50 px-3 py-1 rounded-full border border-orange-200 flex items-center group"
                                >
                                  <span className="text-orange-600 font-medium text-sm">{condition}</span>
                                  <button
                                    onClick={() => removeCondition(index)}
                                    className="ml-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {patientData.conditions.map((condition, index) => (
                              <div key={index} className="bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                                <span className="text-orange-600 font-medium text-sm">{condition}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Emergency Contacts */}
                      <div className="bg-transparent rounded-2xl p-4">
                        <div className="flex items-center mb-3 pb-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <Phone className="w-4 h-4 text-green-500" />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900">Notfallkontakte</h5>
                        </div>
                        {editMode ? (
                          <div className="space-y-3">
                            <div className="grid grid-cols-1 gap-2">
                              <Input
                                placeholder="Name und Beziehung (z.B. Anna Mustermann - Ehefrau)"
                                className="text-sm"
                                value={newContact.name}
                                onChange={(e) => setNewContact((prev) => ({ ...prev, name: e.target.value }))}
                              />
                              <Input
                                placeholder="Telefonnummer (z.B. +49 123 456 7890)"
                                className="text-sm"
                                value={newContact.phone}
                                onChange={(e) => setNewContact((prev) => ({ ...prev, phone: e.target.value }))}
                              />
                              <Button
                                onClick={addContact}
                                size="sm"
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                              >
                                Kontakt hinzufügen
                              </Button>
                            </div>
                            <div className="space-y-2">
                              {patientData.emergencyContacts.map((contact, index) => (
                                <div
                                  key={index}
                                  className="bg-green-50 px-3 py-2 rounded-lg border border-green-200 flex items-center justify-between group"
                                >
                                  <div>
                                    <p className="font-medium text-green-900">{contact.name}</p>
                                    <p className="text-green-700 text-sm font-mono">{contact.phone}</p>
                                  </div>
                                  <button
                                    onClick={() => removeContact(index)}
                                    className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {patientData.emergencyContacts.map((contact, index) => (
                              <div key={index} className="bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                                <p className="font-medium text-green-900">{contact.name}</p>
                                <p className="text-green-700 text-sm font-mono">{contact.phone}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Additional Info */}
                      <div className="bg-transparent rounded-2xl p-4">
                        <div className="flex items-center mb-3 pb-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <Info className="w-4 h-4 text-purple-500" />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900">Wichtige Hinweise</h5>
                        </div>
                        {editMode ? (
                          <div className="space-y-3">
                            <div className="flex gap-2">
                              <Input
                                placeholder="Neue Information hinzufügen..."
                                className="text-sm flex-1"
                                value={newInfo}
                                onChange={(e) => setNewInfo(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && addInfo()}
                              />
                              <Button
                                onClick={addInfo}
                                size="sm"
                                className="px-3 bg-purple-600 hover:bg-purple-700 text-white"
                              >
                                +
                              </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {patientData.additionalInfo.map((info, index) => (
                                <div
                                  key={index}
                                  className="bg-purple-50 px-3 py-1 rounded-full border border-purple-200 flex items-center group"
                                >
                                  <span className="text-purple-600 font-medium text-sm">{info}</span>
                                  <button
                                    onClick={() => removeInfo(index)}
                                    className="ml-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {patientData.additionalInfo.map((info, index) => (
                              <div key={index} className="bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                                <span className="text-purple-600 font-medium text-sm">{info}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* AI Recommendation */}
                      <div className="bg-transparent rounded-2xl p-4">
                        <div className="flex items-center mb-3 pb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900">KI-Empfehlung</h5>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                            <p className="font-semibold text-red-900 mb-1">🚨 Notfall-Prioritäten</p>
                            <p className="text-red-700">
                              Bei Bewusstlosigkeit sofort Herzschrittmacher erwähnen. Penicillin-Allergie ist
                              lebensbedrohlich.
                            </p>
                          </div>
                          <div className="bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                            <p className="font-semibold text-blue-900 mb-1">💊 Medikation</p>
                            <p className="text-blue-700">
                              Bei Operationen Metformin 48h vorher absetzen. Herzmedikamente nicht unterbrechen.
                            </p>
                          </div>
                          <div className="bg-orange-50 px-3 py-2 rounded-lg border border-orange-200">
                            <p className="font-semibold text-orange-900 mb-1">⚠️ Risikofaktoren</p>
                            <p className="text-orange-700">
                              Erhöhtes Herzinfarkt-Risiko. Bei Brustschmerzen sofort Notarzt rufen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
