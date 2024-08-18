"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { AppBar, Toolbar, Typography, Box, Grid, Button } from "@mui/material";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Flashcards from "./flashcards/page";

export default function Home() {
  // const handleSubmit = async () => {
  //   const checkoutSession = await fetch("/api/checkout_sessions", {
  //     method: "POST",
  //     headers: { origin: "http://localhost:3000" },
  //   });
  //   const checkoutSessionJson = await checkoutSession.json();

  //   const stripe = await getStripe();
  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId: checkoutSessionJson.id,
  //   });

  //   if (error) {
  //     console.warn(error.message);
  //   }
  // };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>

          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button
              color="inherit"
              href="https://equal-stag-96.accounts.dev/sign-up"
            >
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>

        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            The easiest way to create flashcards from your text.
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2, mr: 2 }}
              href="/generate"
            >
              Get Started
            </Button>
          </Box>

          <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </Box>
      </AppBar>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Saved Flashcards
        </Typography>
        <Grid container spacing={4}>
          <Flashcards></Flashcards>
        </Grid>
      </Box>
    </Box>

    // <div>body</div>
  );
}
