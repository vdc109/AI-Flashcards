import React from "react";
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Flashcard SaaS
        </Typography>
        <Button color="inherit">
          <Link href="https://equal-stag-96.accounts.dev/sign-up" passHref>
            SIGN UP
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
