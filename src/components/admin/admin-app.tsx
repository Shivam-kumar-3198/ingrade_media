"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { LogIn, LogOut, Loader2, ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { auth, googleProvider, ADMIN_EMAIL } from "@/lib/firebase";
import { AdminDashboard } from "@/components/admin/admin-dashboard";

type AuthState =
  | { status: "loading" }
  | { status: "signed-out" }
  | { status: "unauthorized"; email: string }
  | { status: "authorized"; user: User };

export function AdminApp() {
  const [state, setState] = useState<AuthState>({ status: "loading" });
  const [signInError, setSignInError] = useState<string | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (!user) {
        setState({ status: "signed-out" });
      } else if (user.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
        setState({ status: "unauthorized", email: user.email ?? "unknown" });
      } else {
        setState({ status: "authorized", user });
      }
    });
  }, []);

  const handleSignIn = async () => {
    setSignInError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      const code = error && typeof error === "object" && "code" in error ? String(error.code) : "unknown";
      // eslint-disable-next-line no-console
      console.error("Admin sign-in failed:", error);
      setSignInError(`Sign-in failed (${code}). Please try again.`);
    }
  };

  const handleSignOut = () => signOut(auth);

  if (state.status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (state.status === "signed-out") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center">
          <p className="font-display text-lg font-semibold">
            Ingrade<span className="text-primary">Media</span>
          </p>
          <h1 className="mt-4 font-display text-xl font-semibold">Admin sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">Restricted to the Ingrade Media admin account.</p>
          <Button className="mt-6 w-full" onClick={handleSignIn}>
            <LogIn className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
          {signInError ? <p className="mt-3 text-xs text-destructive">{signInError}</p> : null}
        </div>
      </div>
    );
  }

  if (state.status === "unauthorized") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center">
          <ShieldAlert className="mx-auto h-8 w-8 text-destructive" />
          <h1 className="mt-4 font-display text-xl font-semibold">Not authorized</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {state.email} doesn&apos;t have access to this admin panel.
          </p>
          <Button variant="outline" className="mt-6 w-full" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>
    );
  }

  return <AdminDashboard user={state.user} onSignOut={handleSignOut} />;
}
