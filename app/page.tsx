"use client";
import React, { useState } from "react";
import HomePage from "@/views/Homepage";
import LoginView from "@/views/Login";

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginView onLogin={() => setIsLoggedIn(true)} />;
  }

  return <HomePage onLogout={() => setIsLoggedIn(false)} />;
} 
