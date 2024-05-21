import React from "react";
import { Input } from "./ui/input";
import { ButtonLoading } from "./ButtonLoading";
import {
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

export default function SignupForm({
    toggleSignup,
}: {
    toggleSignup: () => void;
}) {
    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle className="flex w-full justify-between">
                    <span className="text-2xl ">
                        <span className="text-pri-100">Create&nbsp;</span>a new
                        account
                    </span>
                    <AlertDialogCancel className="p-2" id="close">
                        <X size={20} />
                    </AlertDialogCancel>
                </AlertDialogTitle>
                <div className="flex gap-2 text-gray-400">
                    <span>Already have an account?</span>
                    <button
                        onClick={toggleSignup}
                        className="hover:text-pri-100 duration-150"
                    >
                        Sign In
                    </button>
                </div>
            </AlertDialogHeader>
            <AlertDialogDescription>
                <div className="flex flex-col gap-3">
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Roll Number" type="text" />
                    <Input placeholder="Name" type="text" />
                    <Input placeholder="Create a password" type="password" />
                </div>
                <div className="mt-5">
                    <ButtonLoading isLoading={false} title="Sign Up" />
                </div>
            </AlertDialogDescription>
        </AlertDialogContent>
    );
}
