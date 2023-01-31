import { QuoteType } from "@/interface/QuoteType";
import { Dispatch, SetStateAction } from "react";

export const Quotecard: React.FC<{
  quote: QuoteType;
  quotes: QuoteType[];
  setCurrentQuote: Dispatch<SetStateAction<QuoteType | null>>;
  handleCurrentQuote: (quotes: QuoteType[]) => QuoteType;
}> = ({ quote, quotes, setCurrentQuote, handleCurrentQuote }) => {
  if (!quote) return null;
  return (
    <div className="min-h-[248px] card w-136 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="justify-center card-title">Quote {quote.id}</h2>
        <p>{quote.quote}</p>
        <p className="font-semibold">{quote.author}</p>
        <div className="justify-center card-actions">
          <button
            className=" btn"
            onClick={() => {
              const currentQuote = handleCurrentQuote(quotes);
              setCurrentQuote(currentQuote);
            }}
          >
            random quote
          </button>
        </div>
      </div>
    </div>
  );
};
