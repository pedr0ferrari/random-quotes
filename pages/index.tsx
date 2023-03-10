import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Quotecard } from "@/components/Quotecard";
import { getQuotes } from "@/lib/getQuotes";
import { QuoteType } from "@/interface/QuoteType";
import { useEffect, useState } from "react";

export default function Home() {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [currentQuote, setCurrentQuote] = useState<QuoteType | null>(null);

  const handleGetQuotes = async () => {
    const quotes = await getQuotes();
    setQuotes(quotes);
  };

  const handleCurrentQuote = (quotes: QuoteType[]) => {
    const currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return currentQuote;
  };

  useEffect(() => {
    handleGetQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      const currentQuote = handleCurrentQuote(quotes);
      setCurrentQuote(currentQuote);
    }
  }, [quotes]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center p-8">
        {currentQuote ? (
          <Quotecard
            quote={currentQuote}
            quotes={quotes}
            setCurrentQuote={setCurrentQuote}
            handleCurrentQuote={handleCurrentQuote}
          />
        ) : (
          "loading"
        )}
      </main>
    </>
  );
}
