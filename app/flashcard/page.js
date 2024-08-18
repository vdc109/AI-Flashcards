"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import {
  Grid,
  Container,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});

  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return;

      console.log(search);

      const colRef = collection(
        doc(collection(db, "users"), user.id),
        "flashcardSets"
      );
      const docs = await getDocs(colRef);

      const flashcards = [];
      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() });
      });

      const flashcardItems = flashcards[0].flashcards;

      console.log(flashcards);
      console.log(flashcardItems);
      setFlashcards(flashcardItems);
    }
    getFlashcard();
  }, [search, user]);

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard) => (
          <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                <CardContent>
                  <Box
                    sx={
                      {
                        /* Styling for flip animation */
                      }
                    }
                  >
                    <div>
                      <div>
                        <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                          {flashcard.front}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h5" component="div">
                          {flashcard.back}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
