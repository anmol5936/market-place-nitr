"use client";
import React, { useState } from "react";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthModal() {
    const [showSignUp, setShowSignUp] = useState(false);
    async function toggleSignup() {
        setShowSignUp(!showSignUp);
    }
    const [loginUser, setLoginUser] = useState({ email: "", password: "" });
    const [signupUser, setSignupUser] = useState({
        email: "",
        password: "",
        name: "",
        roll: "",
    });
    return (
        <div className="mx-10">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="hidden"
                        id="triggerLoginModal"
                    >
                        Show Dialog
                    </Button>
                </AlertDialogTrigger>
                {showSignUp ? (
                    <SignupForm toggleSignup={toggleSignup} />
                ) : (
                    <LoginForm toggleSignup={toggleSignup} />
                )}
            </AlertDialog>
        </div>
    );
}
