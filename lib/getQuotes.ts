import { QuoteType } from "@/interface/QuoteType";
import axios from "axios";

export const getQuotes = async () => {
  let quotes: QuoteType[] = [];

  const response = await axios.get("https://dummyjson.com/quotes");
  quotes = response.data.quotes.map((quote: any) => {
    return {
      id: quote.id,
      quote: quote.quote,
      author: quote.author,
    };
  });
  return quotes;
};
